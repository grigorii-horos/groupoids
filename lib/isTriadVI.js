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
    const xx = multiply2(x, x);
    const yz = multiply2(y, z);
    const yz_xx = multiply2(yz, xx);
    return yz_xx;
  });
};
