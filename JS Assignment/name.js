// Number 1

// function scopeTest() {
//     if (true) {
//         var varVariable = "I am var";
//         let letVariable = "I am let";
//         const constVariable = "I am const";
//     }
//     console.log(varVariable); // This will log "I am var"
//     console.log(letVariable); // This will throw a ReferenceError
//     console.log(constVariable); // This line will not be executed
// }

// scopeTest();

// Number 2

function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"

// Number 3

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5

// Number 4

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Number 5


const name = "John";
const age = 30;

const person = {
    name,
    age,
    greet() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."

//number 6

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Number 7

const name = "Alice";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // "My name is Alice and I am 25 years old."

// Number 8;

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (const student of students) {
      console.log(`Name: ${student.name}, Grade: ${student.grade}`);
  }

// Number 9
  

const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (const innerArray of nestedArrays) {
      let sum = 0;
      for (const number of innerArray) {
          sum += number;
      }
      console.log(`Sum of ${innerArray} is ${sum}`);
  }
  

//Number 10

const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."
