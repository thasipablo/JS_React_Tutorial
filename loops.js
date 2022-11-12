const people = [
  { name: "Bienfait", age: 24, gender: "m" },
  { name: "Gloire", age: 34, gender: "m" },
  { name: "Josue", age: 4, gender: "m" },
  { name: "Yasmine", age: 25, gender: "f" },
  { name: "Glody", age: 50, gender: "f" },
  { name: "Divine", age: 15, gender: "f" },
];

const fil = (e) => e.age < 17 || e.gender === 'f'
// filter
const res = people.filter(fil);
console.log(res);

console.log("\n++++++++++++++++++++++++");

const numbers = [90, 80, 454, 53];

console.log("filter");
const n_filtered = numbers.filter((e) => e % 2 === 0);
console.log(n_filtered);

// map
console.log("map");
const numbers_2 = numbers.map((e, i) => e);
console.log(numbers_2);

// foreach
console.log("foreach");

numbers.forEach((e, i) => {
  console.log(`${e}:${i}`);
  if (i === 2) {
    numbers[i] = "Good";
  }
});

console.log(numbers)

console.log("\n+++++++++++++++++");
// parcours avec for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("\n+++++++++++++++++");

let count = 0;

// while
while (count < 9) {
  console.log(count);
  count = count + 1;
}

// do while
do {
  console.log(count);
  count++;
} while (count < 9);

// for loop
console.log(`for loop`);
for (let i = 0; i < 9; i++) {
  console.log(i);
}
