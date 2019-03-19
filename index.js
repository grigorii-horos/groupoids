const { numToMatrix } = require('./lib');


const fn = require('./lib/isChebanIDual');

const n = 4;


for (let i = 0; i < n ** (n * n); i += 1) {
  const matrix = (numToMatrix(n)(i));

  if (fn(matrix, n)) {
    console.log(i);
  }
}
