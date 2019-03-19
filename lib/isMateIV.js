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
    const xx_z = multiply2( xx,z);
    const y_xx_z = multiply2(y, xx_z);
    return y_xx_z;
  });
};
