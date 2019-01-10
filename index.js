const getNumByIndex = n => num => (index) => {
  // console.log(index )
  let buf = num / (n ** (n * n - index - 1));
  buf = parseInt(buf, 10) % 2;

  return (buf);
};

const multiply = n => num => (x, y) => getNumByIndex(n)(num)(x * n + y);

const numToMatrix = n => (num) => {
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
  console.table(buf);
};


const getSemi = n => (num) => {
  let isSemi = true;
	  numToMatrix(n)(num);
  const _multiply = multiply(n)(num);
  for (let x = 0; x < n; x += 1) {
    for (let y = 0; y < n; y += 1) {
      for (let z = 0; z < n; z += 1) {
        const yz = _multiply(y, z);
        const xYz = _multiply(x, yz);

        const xy = _multiply(x, y);
        const xyZ = _multiply(xy, z);

        const eq = xYz === xyZ;
        isSemi = isSemi && eq;
        console.log(`${x} * (${y} * ${z} [${yz}])[${xYz}] ${eq ? '==' : '<>'} (${x} * ${y})[${xy}] * ${z} [${xyZ}]`);
      }
    }
  }
  return isSemi;
};

const n = 3;

for (let i = 0; i < n ** (n * n); i += 1) {
  console.log(getSemi(n)(i));


  // console.log(bufff)
}

// numToMatrix(2)(15);

// console.log(getNumByIndex(12, 3, 2))


// console.log(multiply(2)(15)(1,1));
