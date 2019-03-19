const { multiply } = require('.');
const loop = require('./loop3var');

module.exports = (matrix, n) => {
  const multiply2 = multiply(matrix);

  return loop(n, (x, y, z) => {
    const xx = multiply2(x, x);
    const yz = multiply2(y, z);
    const xx_yz = multiply2(xx, yz);
    return xx_yz;
  }, (x, y, z) => {
    const zx = multiply2(z, x);
    const zx_x = multiply2(zx, x);
    const y_zx_x = multiply2(y, zx_x);
    return y_zx_x;
  });
};
