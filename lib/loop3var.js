module.exports = (n, left, right) => {
  for (let x = 0; x < n; x += 1) {
    for (let y = 0; y < n; y += 1) {
      for (let z = 0; z < n; z += 1) {
        if (left(x, y, z) !== right(x, y, z)) {
          return false;
        }
      }
    }
  }
  return true;
};
