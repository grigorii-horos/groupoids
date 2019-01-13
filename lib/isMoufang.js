const debug = require('debug')('moufang');


const { multiply } = require('./utils');

module.exports = (matrix, n) => {
  let isSemi = true;

  const multiply_ = multiply(matrix);
  // console.table(matrix);
  for (let x = 0; x < n; x += 1) {
    for (let y = 0; y < n; y += 1) {
      for (let z = 0; z < n; z += 1) {
        // (xy)(zx) = (x(yz))x
        const xy = multiply_(x, y);
        const zx = multiply_(z, x);
        const xyZx = multiply_(xy, zx);

        const yz = multiply_(y, z);
        const xYz = multiply_(x, yz);
        const xYzX = multiply_(xYz, x);

        const eq = xyZx === xYzX;
        isSemi = isSemi && eq;
        debug(`(${x}*${y}[${xy}])*(${z}*${x}[${zx}])[${xyZx}] ${eq ? '==' : '<>'} (${x}*(${y}*${z}[${yz}])[${xYz}])*${x}[${xYzX}]`);
      }
    }
  }
  return isSemi;
};
