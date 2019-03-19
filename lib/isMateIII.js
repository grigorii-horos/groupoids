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
    const zx = multiply2(z, x);
    const zx_x = multiply2( zx,x);
    const y_zx_x = multiply2(y, zx_x);
    return y_zx_x;
  });
};
