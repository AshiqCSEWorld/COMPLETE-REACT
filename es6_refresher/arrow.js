// regular function

function printMyName(name) {
  console.log(name);
}

printMyName('Ashik');

// arrow function
const printName = name => console.log(name);

printName('Arrow Ashik');

// more arrow function example

const multiplyBySomething = (number, multiplyBy) => number * multiplyBy;
console.log(multiplyBySomething(4, 3));
