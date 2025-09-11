console.log("Hello World!");

// Day-1 : Variables and DataTypes 

// Activity 1: Variable Declaration

// Task 1: declare a variable using var, assign it a number, and log the value to the console
var num = 10; // In JavaScript, we can use var, let, or const to declare variables
console.log(num); // console.log() prints data to the console (similar to printf in C or cout in C++)

// Task 2: declare a variable using let, assign it a string, and log the value to the console
let str = "heythere";
console.log(str); 
// JavaScript is dynamically typed — no need to specify data type. 
// Types are inferred and can change during runtime.

// Activity 2: Constant Declaration

// Task 3: declare a variable using const, assign it a boolean value, and log the value to the console
const isTrue = true;
console.log(isTrue); 
// Difference between let/var and const is that const cannot be reassigned after initialization.

// Activity 3: Data Types

// Task 4: create variables of different data types (number, string, boolean, object, array)
// and log each variable’s value and type using typeof operator
let num1 = 10;
console.log(num1, typeof num1);

let str1 = "abc";
console.log(str1, typeof str1);

let bool = true;
console.log(bool, typeof bool);

let obj = {
  name: "Jatin",
  class: "MCA"
};
console.log(obj, typeof obj);

let arr = ["MCA", "BCA", "BTECH"];
console.log(arr, typeof arr); 
// typeof(arr) returns "object" because in JavaScript, arrays are specialized objects.
// Q1) Why is an array an object in JavaScript?
// Ans: In JavaScript, all non-primitive (derived) data types are of type "object", including arrays and functions.


// Activity 4 : Reassigning Variables

// Task 5: declare a variable using let, assign it an initial value, 
// reassign a new value and log both values to the console
let a = 10;
console.log(a);  // 10
a = 30;
console.log(a);  // 30
// Variables declared with let can be reassigned.


// Activity 5 : Understanding const

// Task 6: try reassigning a variable declared using const and observe the error
const x = 30;
x = 20;  // ❌ Error: TypeError: Assignment to constant variable
