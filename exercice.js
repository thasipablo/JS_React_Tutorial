// eq 2nd degree
// 4(x^2) + 19x - 5 = 0

const a = 4;
const b = 19;
const c = -5;

let getDelta = (a, b, c) => {
  return b * b - 4 * a * c;
};

let getRacineDouble = (a, b) => -b / (2 * a);

let getX1X2 = (a, b, delta) => {
  const x1 = (-b - Math.sqrt(delta)) / (2 * a);
  const x2 = (-b + Math.sqrt(delta)) / (2 * a);
  return [x1, x2];
};

// a != 0
const calcEq2dDeg = (a, b, c) => {
  if (a != 0) {
    const delta = getDelta(a, b, c);
    console.log(`Delta = ${delta}`);

    if (delta === 0) {
      const racineDouble = getRacineDouble(a, b);
    } else if (delta > 0) {
      const [x1, x2] = getX1X2(a, b, delta);
      console.log(x1, x2);
    } else {
      console.log("pas de solution");
    }
  } else {
    console.log("Eq diff de 2nd degree");
  }
};

calcEq2dDeg(a, b, c);
