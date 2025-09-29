// Day - 16 : Promises & Async JavaScript

// Activity 1 : Creating Promises
// Task1> Write a function that returns a promise which resolves after 2 seconds with the message "Promise resolved!".
function promiseExample() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved!");
        }, 2000);
    });
}
promiseExample().then(msg => console.log(msg));

// Task2> Create a promise that randomly resolves or rejects after 1 second. Log "Success" if it resolves and "Error" if it rejects.
function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve("Success") : reject("Error");
        }, 1000);
    });
}
randomPromise().then(res => console.log(res)).catch(err => console.log(err));


// Activity 2 : Consuming Promises
// Task3> Use .then() and .catch() to handle the promise from Task 2.
randomPromise()
    .then(res => console.log("Handled with then:", res))
    .catch(err => console.log("Handled with catch:", err));

// Task4> Use .finally() with a promise to log "Execution completed" regardless of success or failure.
randomPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("Execution completed"));


// Activity 3 : Chaining Promises
// Task5> Create a chain of promises where the first resolves with a number, the second doubles it, and the third squares it. Log the final result.
function chainPromise(num) {
    return new Promise((resolve) => resolve(num))
        .then(n => n * 2)
        .then(n => n * n);
}
chainPromise(3).then(result => console.log("Final Result:", result));


// Activity 4 : Async/Await
// Task6> Rewrite Task 1 using async/await.
async function asyncExample() {
    const msg = await promiseExample();
    console.log("Async/Await:", msg);
}
asyncExample();

// Task7> Write an async function that calls the promise from Task 2 and handles both success and error using try...catch.
async function handleRandomPromise() {
    try {
        const res = await randomPromise();
        console.log("Async Success:", res);
    } catch (err) {
        console.log("Async Error:", err);
    }
}
handleRandomPromise();


// Activity 5 : Practical Example
// Task8> Create a fake fetchData() function that returns a promise resolving with ["apple", "banana", "cherry"] after 1 second.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["apple", "banana", "cherry"]);
        }, 1000);
    });
}

// Task9> Write an async function that uses await fetchData() and logs each fruit.
async function showFruits() {
    const fruits = await fetchData();
    fruits.forEach(fruit => console.log(fruit));
}
showFruits();

// Task10> Create two promises (e.g., getUser and getPosts). Use Promise.all to wait for both and log the combined result.
function getUser() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "John" }), 1000));
}
function getPosts() {
    return new Promise(resolve => setTimeout(() => resolve(["Post1", "Post2"]), 1500));
}

Promise.all([getUser(), getPosts()])
    .then(([user, posts]) => {
        console.log("User:", user);
        console.log("Posts:", posts);
    });
