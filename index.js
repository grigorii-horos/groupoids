/* eslint-disable no-underscore-dangle */


const { numToMatrix } = require('./lib/utils');

// const isSemigroup = require('./lib/isSemigroup');
const isMoufang = require('./lib/isMoufang');

const n = 4;


for (let i = 0; i < n ** (n * n); i += 1) {
  const matrix = (numToMatrix(n)(i));


  // console.log(isSemigroup(matrix, n));
  console.log(isMoufang(matrix, n));
}
