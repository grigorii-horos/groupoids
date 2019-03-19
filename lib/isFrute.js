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
    const zx = multiply2(z, x);
    const y_zx = multiply2(y, zx);
    const y_zx_x = multiply2(y_zx, x);
    return y_zx_x;
  });
};
