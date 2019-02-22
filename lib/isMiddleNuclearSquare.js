const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xx = multiply2(x, x);
    const xx_z = multiply2(xx, z);
    const y_xx_z = multiply2(y, xx_z);
    return y_xx_z;
  }, (x, y, z) => {
    const xx = multiply2(x, x);
    const y_xx = multiply2(y, xx);
    const y_xx_z = multiply2(y_xx, z);
    return y_xx_z;
  });
};
