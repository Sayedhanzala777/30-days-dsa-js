// Day - 23 : Modules

// -------------------------
// Activity 1 : Creating and Exporting Modules
// -------------------------

// Task1> Create a module that exports a function to add two numbers. Import and use this module in another file.
// add.js
export function add(a, b) {
    return a + b;
}
// main.js
import { add } from "./add.js";
console.log("Sum:", add(5, 3));


// Task2> Create a module that exports an object representing a person with properties and a method. Import and use this module in another file.
// person.js
export const person = {
    name: "Jatin",
    age: 20,
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    }
};
// main.js
import { person } from "./person.js";
console.log(person.greet());


// -------------------------
// Activity 2 : Named and Default Exports
// -------------------------

// Task3> Create a module that exports multiple functions using named exports. Import and use them in another file.
// mathOps.js
export function multiply(a, b) {
    return a * b;
}
export function divide(a, b) {
    if (b === 0) throw new Error("Division by zero!");
    return a / b;
}
// main.js
import { multiply, divide } from "./mathOps.js";
console.log("Multiply:", multiply(4, 5));
console.log("Divide:", divide(20, 4));


// Task4> Create a module that exports a single function using default export. Import and use it in another file.
// greet.js
export default function greet(name) {
    return `Hello, ${name}!`;
}
// main.js
import greet from "./greet.js";
console.log(greet("Ayesha"));


// -------------------------
// Activity 3 : Importing Entire Modules
// -------------------------

// Task5> Create a module with multiple functions and export them. Import the entire module as an object and use its functions.
// utils.js
export function square(n) {
    return n * n;
}
export function cube(n) {
    return n * n * n;
}
// main.js
import * as utils from "./utils.js";
console.log("Square:", utils.square(6));
console.log("Cube:", utils.cube(3));


// -------------------------
// Activity 4 : Combining Import and Export
// -------------------------

// Task6> Create two modules, one exporting a function and another importing and re-exporting it. Use the re-exported function in a main file.
// helper.js
export function sayHello() {
    return "Hello from helper!";
}
// reExport.js
export { sayHello } from "./helper.js";
// main.js
import { sayHello } from "./reExport.js";
console.log(sayHello());


// -------------------------
// Activity 5 : Practical Use of Modules
// -------------------------

// Task7> Create a math utility module that includes functions for addition, subtraction, multiplication, and division. Import and use these functions in a script.
// mathUtils.js
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
export function multiply(a, b) {
    return a * b;
}
export function divide(a, b) {
    if (b === 0) throw new Error("Division by zero!");
    return a / b;
}
// main.js
import { add, subtract, multiply, divide } from "./mathUtils.js";
console.log("Add:", add(10, 5));
console.log("Subtract:", subtract(10, 5));
console.log("Multiply:", multiply(10, 5));
console.log("Divide:", divide(10, 5));
