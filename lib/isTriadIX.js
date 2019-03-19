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
    const xx = multiply2(x, x);
    const z_xx = multiply2(z, xx);
    const y_z_xx = multiply2(y, z_xx);
    return y_z_xx;
  });
};
