
const { numToMatrix } = require('./lib');

// const isSemigroup = require('./lib/isSemigroup');
// const isMoufang = require('./lib/isMoufang');
// const isLeftBol = require('./lib/isLeftBol');
// const isRightBol = require('./lib/isRightBol');
// const isAbelianGroup = require('./lib/isAbelianGroup');
// const isCLoop = require('./lib/isCLoop');
// const isMiddleNuclearSquare = require('./lib/isMiddleNuclearSquare');
// const isRightNuclearSquare = require('./lib/isRightNuclearSquare');
const isLeftNuclearSquare = require('./lib/isLeftNuclearSquare');

const n = 4;


for (let i = 0; i < n ** (n * n); i += 1) {
  const matrix = (numToMatrix(n)(i));


  if (isLeftNuclearSquare(matrix, n)) {
    console.log(i);
  }
}
