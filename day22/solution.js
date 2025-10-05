// Day - 22 : Error Handling

// Activity 1 : Basic Error Handling with Try-Catch
// Task1> Write a function that intentionally throws an error and use try-catch to handle it.
function throwError() {
    throw new Error("This is an intentional error!");
}
try {
    throwError();
} catch (error) {
    console.log("Caught an error:", error.message);
}

// Task2> Create a function that divides two numbers and throws an error if the denominator is zero. Handle the error using try-catch.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Denominator cannot be zero!");
    }
    return a / b;
}
try {
    console.log(divide(10, 2));
    console.log(divide(5, 0));
} catch (error) {
    console.log("Error in division:", error.message);
}


// Activity 2 : Finally Block
// Task3> Write a script that includes a try-catch-finally block. Log messages in each block to observe the execution flow.
try {
    console.log("Try block executed");
    throw new Error("Something went wrong in try!");
} catch (error) {
    console.log("Catch block executed:", error.message);
} finally {
    console.log("Finally block always executed");
}


// Activity 3 : Custom Error Objects
// Task4> Create a custom error class that extends the built-in Error class. Throw and catch a custom error in a function.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
function testCustomError(flag) {
    if (flag) {
        throw new CustomError("This is a custom error!");
    }
    return "No error thrown.";
}
try {
    console.log(testCustomError(true));
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}


// Activity 4 : Error Handling in Promises
// Task5> Write a function that returns a promise that rejects with an error. Handle the error using .catch().
function promiseWithError() {
    return new Promise((_, reject) => {
        reject(new Error("Promise was rejected!"));
    });
}
promiseWithError()
    .catch(error => console.log("Caught promise error:", error.message));

// Task6> Use try-catch within an async function to handle errors from a promise that may reject.
async function asyncErrorHandler() {
    try {
        await promiseWithError();
    } catch (error) {
        console.log("Async/await caught error:", error.message);
    }
}
asyncErrorHandler();


// Activity 5 : Graceful Error Handling
// Task7> Write a program that attempts to parse an invalid JSON string and handles the error gracefully.
const invalidJson = "{name: 'Jatin'}"; // Invalid because keys must be in double quotes
try {
    const data = JSON.parse(invalidJson);
    console.log("Parsed JSON:", data);
} catch (error) {
    console.log("Failed to parse JSON:", error.message);
}

// Task8> Create a function that fetches data from an invalid URL using fetch and handles the error gracefully.
async function fetchData() {
    try {
        const response = await fetch("https://invalid-url-xyz.com/data");
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.log("Fetch failed:", error.message);
    }
}
fetchData();
