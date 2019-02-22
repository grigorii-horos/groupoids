const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xx = multiply2(x, x);
    const z_xx = multiply2(z, xx);
    const y_z_xx = multiply2(y, z_xx);
    return y_z_xx;
  }, (x, y, z) => {
    const yz = multiply2(y, z);
    const xx = multiply2(x, x);
    const yz_xx = multiply2(yz, xx);
    return yz_xx;
  });
};
