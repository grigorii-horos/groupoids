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
    const yz = multiply2(y, z);
    const yz_x = multiply2(yz, x);
    const yz_x_x = multiply2(yz_x, x);
    return yz_x_x;
  });
};
