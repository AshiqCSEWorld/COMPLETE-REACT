// Destructuring: Easily extract array elements or object properties and store them in variables

// Destructuring Array
const [num1, num2] = [5, 6];
console.log(num1);
console.log(num2);
const [x, , z] = [1, 2, 3];
console.log(z);
console.log(x);

// Destructuring Objects
const { name } = { name: 'Ashik', age: 23 };
console.log(name);

// Destrucuring function argument
const info = {
  weight: 82,
  height: 5.5,
};

const showInfo = ({ weight }) => console.log(weight);

showInfo(info);
