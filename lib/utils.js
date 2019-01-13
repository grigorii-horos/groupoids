module.exports.numToMatrix = n => (num) => {
  let bufNum = num;
  const buf = [];
  for (let i = 0; i < n; i += 1) {
    const buf2 = [];

    for (let j = 0; j < n; j += 1) {
      buf2.unshift(bufNum % n);
      bufNum = parseInt(bufNum / n, 10);
    }
    buf.unshift(buf2);
  }
  return (buf);
};


module.exports.multiply = matrix => (x, y) => matrix[x][y];
