class Human {

  gender = 'male';

  printGender = () => console.log(this.gender);
}


class Person extends Human {
  name = 'Ashik';
  printName = () => console.log(this.name);
}


const person = new Person();
console.log(person);
person.printGender();
person.printName();