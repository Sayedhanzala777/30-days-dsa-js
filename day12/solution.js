// =======================
// Day - 12 : Error Handling & Modules
// =======================

// -----------------------
// Activity 1: Error Handling
// -----------------------

// Task 1: Divide function with zero check
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    console.log("Result:", a / b);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

divideNumbers(10, 2); // ✅ Result: 5
divideNumbers(10, 0); // ❌ Error: Cannot divide by zero!

// Task 2: Empty string check
function checkString(str) {
  try {
    if (str.length === 0) {
      throw new Error("String cannot be empty!");
    }
    console.log("Valid string:", str);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

checkString("Hello World"); // ✅ Valid string: Hello World
checkString("");            // ❌ Error: String cannot be empty!


// -----------------------
// Activity 2: Custom Error
// -----------------------

// Task 3: Custom ValidationError
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  try {
    if (age < 0) {
      throw new ValidationError("Age cannot be negative!");
    }
    console.log("Valid age:", age);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log("Validation Error:", error.message);
    } else {
      console.log("Other Error:", error.message);
    }
  }
}

validateAge(22);  // ✅ Valid age: 22
validateAge(-5);  // ❌ Validation Error: Age cannot be negative!


// -----------------------
// Activity 3: Modules
// -----------------------
// ⚡ For this part you need 2 files:
//    - mathUtils.js
//    - main.js
//
// 👉 Example below:

// File: mathUtils.js
/*
export function add(a, b) {
  return a + b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero (from module)!");
  }
  return a / b;
}
*/

// File: main.js
/*
import { add, divide } from "./mathUtils.js";

try {
  console.log("Add:", add(5, 3));         // 8
  console.log("Divide:", divide(10, 2));  // 5
  console.log("Divide:", divide(10, 0));  // Error handled below
} catch (error) {
  console.log("Caught in main.js ->", error.message);
}
*/

// -----------------------
// End of Day 12
// -----------------------
