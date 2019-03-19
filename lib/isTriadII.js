const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xx = multiply2(x, x);
    const xx_y = multiply2(xx, y);
    const xx_y_z = multiply2(xx_y, z);
    return xx_y_z;
  }, (x, y, z) => {
    const xx = multiply2(x, x);
    const z_xx = multiply2(z, xx);
    const y_z_xx = multiply2(y, z_xx);
    return y_z_xx;
  });
};
