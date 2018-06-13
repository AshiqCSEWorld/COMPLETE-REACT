// Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name: 'Ashik',
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

// Rest operator
const filtering = (...nums) => nums.filter(num => num > 2);

console.log(filtering(1, 2, 0, 4, 3, 9));
