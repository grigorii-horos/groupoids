var debug = require('debug')('semigroup');


const { multiply } = require('./utils');

module.exports = (matrix, n) => {
  let isSemi = true;

  const multiply_ = multiply(matrix);
  console.table(matrix);

  for (let x = 0; x < n; x += 1) {
    for (let y = 0; y < n; y += 1) {
      for (let z = 0; z < n; z += 1) {
        const yz = multiply_(y, z);
        const xYz = multiply_(x, yz);

        const xy = multiply_(x, y);
        const xyZ = multiply_(xy, z);

        const eq = xYz === xyZ;
        isSemi = isSemi && eq;
        debug(`${x} * (${y} * ${z} [${yz}])[${xYz}] ${eq ? '==' : '<>'} (${x} * ${y})[${xy}] * ${z} [${xyZ}]`);
      }
    }
  }
  return isSemi;
};
