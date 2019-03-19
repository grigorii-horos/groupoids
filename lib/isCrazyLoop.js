const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xy = multiply2(x, y);
    const x_xy = multiply2(x, xy);
    const x_xy_z = multiply2(x_xy, z);
    return x_xy_z;
  }, (x, y, z) => {
    const yx = multiply2(y, x);
    const xz = multiply2(x, z);
    const yx_xz = multiply2(yx, xz);
    return yx_xz;
  });
};
