const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xz = multiply2(x, z);
    const xz_x = multiply2(xz, x);
    const y_xz_x = multiply2(y, xz_x);
    return y_xz_x;
  }, (x, y, z) => {
    const yx = multiply2(y, x);
    const yx_z = multiply2(yx, z);
    const yx_z_x = multiply2(yx_z, x);
    return yx_z_x;
  });
};
