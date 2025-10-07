// Day - 24 : Promises and Async/Await

// Activity 1 : Understanding Promises
// Task1> Create a promise that resolves with a message after 2 seconds and log the message.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 1: Promise resolved after 2 seconds!");
    }, 2000);
});

promise1.then(message => console.log(message));


// Task2> Create a promise that rejects with an error message after 2 seconds and handle the error using .catch().
const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Task 2: Promise rejected after 2 seconds!");
    }, 2000);
});

promise2.catch(error => console.log(error));


// Activity 2 : Chaining Promises
// Task3> Create a sequence of promises that simulate fetching data from three sources (use setTimeout). Chain them together and log results in order.
function fetchData(source, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${source}`);
        }, time);
    });
}

fetchData("Source 1", 1000)
    .then(result => {
        console.log(result);
        return fetchData("Source 2", 1500);
    })
    .then(result => {
        console.log(result);
        return fetchData("Source 3", 1000);
    })
    .then(result => console.log(result))
    .catch(err => console.log("Error fetching data:", err));


// Activity 3 : Using Async/Await
// Task4> Write an async function that waits for a promise to resolve and logs the resolved value.
function resolveAfter2Sec() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 4: Promise resolved after 2 seconds!"), 2000);
    });
}

async function asyncExample() {
    const result = await resolveAfter2Sec();
    console.log(result);
}
asyncExample();


// Task5> Write an async function that handles a rejected promise using try-catch.
function rejectAfter2Sec() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Task 5: Promise rejected after 2 seconds!"), 2000);
    });
}

async function asyncWithError() {
    try {
        const result = await rejectAfter2Sec();
        console.log(result);
    } catch (error) {
        console.log("Caught error:", error);
    }
}
asyncWithError();


// Activity 4 : Fetching Data from API (Simulated or Real)
// Task6> Use fetch() to get data from a public API (like JSONPlaceholder) and log the result using async/await.
async function fetchDataFromAPI() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log("Task 6: Fetched data:", data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
fetchDataFromAPI();


// Task7> Handle errors that occur during the fetch call using try-catch.
async function fetchInvalidURL() {
    try {
        const response = await fetch("https://invalid-url.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Task 7: Fetch failed -", error.message);
    }
}
fetchInvalidURL();


// Activity 5 : Promise Combinators
// Task8> Use Promise.all() to wait for multiple promises to resolve and log all results.
const promiseA = new Promise(resolve => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise(resolve => setTimeout(() => resolve("Promise B resolved"), 2000));
const promiseC = new Promise(resolve => setTimeout(() => resolve("Promise C resolved"), 1500));

Promise.all([promiseA, promiseB, promiseC])
    .then(results => console.log("Task 8: Promise.all results:", results));


// Task9> Use Promise.race() to log the result of the fastest promise among multiple promises.
Promise.race([promiseA, promiseB, promiseC])
    .then(result => console.log("Task 9: Promise.race result:", result));
