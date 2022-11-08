// function
function double(number) {
  console.log(number * 2);
}

// arrow functions
const power = (a, b, n = 2) => a * b * n;

double(4);
const a = power(2, 3, 4);
console.log("power", a);

const sayHello = (name) => console.log(`hello ${name}`);
sayHello("Charles");
