const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xz = multiply2(x, z);
    const yXz = multiply2(y, xz);
    const xYXz = multiply2(x, yXz);
    return xYXz;
  }, (x, y, z) => {
    const yx = multiply2(y, x);
    const xYx = multiply2(x, yx);
    const xYxZ = multiply2(xYx, z);
    return xYxZ;
  });
};
