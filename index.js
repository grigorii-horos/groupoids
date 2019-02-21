/* eslint-disable no-underscore-dangle */


const { numToMatrix } = require('./lib/utils');

// const isSemigroup = require('./lib/isSemigroup');
const isMoufang = require('./lib/isMoufang');

const n = 3;


for (let i = 0; i < n ** (n * n); i += 1) {
  const matrix = (numToMatrix(n)(i));


  // console.log(isSemigroup(matrix, n));
  // console.log(i,isMoufang(matrix, n));
  if(isMoufang(matrix, n)){
  	console.log(i)
  }
}
