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
    const xy = multiply2(x, y);
    const yx_x = multiply2(xy, x);
    const yx_x_z = multiply2(yx_x, z);
    return yx_x_z;
  });
};
