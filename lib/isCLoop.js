const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xz = multiply2(x, z);
    const x_xz = multiply2(x, xz);
    const y_x_xz = multiply2(y, x_xz);
    return y_x_xz;
  }, (x, y, z) => {
    const yx = multiply2(y, x);
    const yx_x = multiply2(yx, x);
    const yx_x_z = multiply2(yx_x, z);
    return yx_x_z;
  });
};
