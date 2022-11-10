const person = {
  name: "Gloire",
  age: 43,
  address: "Beni, Blv Nyamwisi",
  phone: "+243 999 999 999",
};

const skills = {
  be: ["Django", ".NET"],
  fe: ["Js", "React"],
};

// spread operator
const postulant = {
  ...person,
  ...skills,
};

const person_1 = { ...person };

// destructuring operator
const { phone } = person;

/**
 * Array
 */
const languages = [
  "English",
  "French",
  "Swahili",
  "Lingala",
  43,
  true,
  { name: "Julien", car: [4, "Hundai"] },
];

const ext = ["iPhone", "Nokia", ...languages];
console.log(ext);

const [en, fr, sw] = languages;
console.log(sw);
