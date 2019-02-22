const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const yz = multiply2(y, z);
    const xYz = multiply2(x, yz);
    return xYz;
  }, (x, y, z) => {
    const xy = multiply2(x, y);
    const xyZ = multiply2(xy, z);
    return xyZ;
  });
};
