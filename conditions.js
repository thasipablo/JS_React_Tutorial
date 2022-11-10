/*
 * conditions
 ****************/

// if/else
let m = 100; // 10
let p = 10;

if (true) {
  console.log("passed the condition");
} else {
  console.log("failed the condition");
}

// comparison
//  ==   : equality of values
//  ===  : equality of values and types
//  !=   : difference of values
//  !==  : difference of values and types
//  >    : greater than
//  <    : less than
//  >=   : greater or equal to
//  <=   : less than or equal to

if (m === p) {
  console.log("m in equal to p");
} else if (m > p) {
  console.log("m is greater than p");
} else {
  console.log("p is greater than m");
}

// logic operators

// OR
if (true || false) {
  // this code can be executed only if one of the values is true
  console.log("passed");
} else {
  console.log("failed the condition");
}

// AND
if (true && false) {
  // this code can be executed only if all the values are true
  console.log("passed");
} else {
  console.log("failed the condition");
}

// they can be mixed
if ((true || false) && (false || true)) {
  console.log("success");
}

// switch cases
let a = 7;

switch (a) {
  case 3:
    console.log(3);
    break;
  case 7:
    console.log(7);
    break;
  default:
    console.log("the end");
}

// Special behavior of OR and AND operators
let n = true;

const b = n || "Julien"; //b = 'Julien' if n is a falthy value  else = n
console.log("OR =>", `${b}`);

const hello = n && "Julien"; //  hello = 'Julien if n is a truethy value else hello = n
console.log("AND =>", `${hello}`);
