// Primitive Type
let number = 1;
const num2 = number;
number = 4;

console.log(num2);

// Reference Type
const person = {
  name: 'Ashik',
};

const secondPerson = person;
console.log(secondPerson);
person.name = 'Manu';

console.log(secondPerson);
console.log(person);
// creating real copy of person. not reference [copy only the property, not entire object]
const thirdPerson = {
  ...person,
};

console.log(thirdPerson);
console.log(person);
