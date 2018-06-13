class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  // It is a default method that you can add any class, which will be executed whenever you call a class
  constructor() {
    super();
    this.name = 'Max';
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
console.log(person);
// console.log(person.name);
person.printMyName();

// Now person can access everything of Humans
person.printGender();
