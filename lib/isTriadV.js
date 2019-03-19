const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const yz = multiply2(y, z);
    const x_yz = multiply2(x, yz);
    const x_x_yz = multiply2(x, x_yz);
    return x_x_yz;
  }, (x, y, z) => {
    const xx = multiply2(x, x);
    const z_xx = multiply2(z, xx);
    const y_z_xx = multiply2(y, z_xx);
    return y_z_xx;
  });
};
