const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xy = multiply2(x, y);
    const zx = multiply2(z, x);
    const xyZx = multiply2(xy, zx);
    return xyZx;
  }, (x, y, z) => {
    const yz = multiply2(y, z);
    const xYz = multiply2(x, yz);
    const xYzX = multiply2(xYz, x);
    return xYzX;
  });
};
