const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xx = multiply2(x, x);
    const y_xx = multiply2(y, xx);
    const y_xx_z = multiply2(y_xx, z);
    return y_xx_z;
  }, (x, y, z) => {
    const yz = multiply2(y, z);
    const yz_x = multiply2(yz, x);
    const yz_x_x = multiply2(yz_x, x);
    return yz_x_x;
  });
};
