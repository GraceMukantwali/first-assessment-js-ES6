// Let and const
let message = 'Hello';
const PI = 3.14159;

message = 'Hello ES6+!';
// PI = 3.14; // This would cause an error

// Arrow functions
const add = (a, b) => a + b;
console.log(add(5, 3));

// Template literals
const name = 'World';
const greeting = `Hello, ${name}!`;
console.log(greeting);

// Destructuring
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(firstName, lastName);

const numbers = [1, 2, 3];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// Spread syntax
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
console.log(obj2);

// Classes
class Animal {
  constructor(sound) {
    this.sound = sound;
  }
  speak() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor() {
    super('Woof!');
  }
}

const myDog = new Dog();
myDog.speak();

// Promises and async/await (for simulating asynchronous operations)
const myPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Data fetched!');
  }, 1000);
});

async function fetchData() {
  const result = await myPromise;
  console.log(result);
}

fetchData();