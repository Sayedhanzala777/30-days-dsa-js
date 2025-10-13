// Day - 28 : Promises

// -------------------------
// Activity 1 : Creating and Using Promises
// -------------------------

// Task 1> Create a promise that resolves after 2 seconds with a success message. Log the message when the promise resolves.

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("✅ Task 1 complete: Promise resolved successfully!");
  }, 2000);
});

promise1.then((message) => console.log(message));


// Task 2> Create a promise that rejects after 2 seconds with an error message. Handle the error using `.catch()`.

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("❌ Task 2 failed: Something went wrong!");
  }, 2000);
});

promise2.catch((error) => console.log(error));


// -------------------------
// Activity 2 : Chaining Promises
// -------------------------

// Task 3> Create a series of promises that simulate sequential async operations 
// (e.g., fetching user → fetching posts → fetching comments). Use `.then()` chaining to handle each step.

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched User");
      resolve({ id: 1, name: "Hanzala" });
    }, 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched posts for user ${user.name}`);
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

function fetchComments(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched comments for posts: ${posts.join(", ")}`);
      resolve(["Comment 1", "Comment 2"]);
    }, 1000);
  });
}

fetchUser()
  .then((user) => fetchPosts(user))
  .then((posts) => fetchComments(posts))
  .then((comments) => console.log("All data fetched successfully:", comments))
  .catch((error) => console.log("Error:", error));


// -------------------------
// Activity 3 : Using Promise.all()
// -------------------------

// Task 4> Create three promises that resolve after different times (1s, 2s, 3s). 
// Use `Promise.all()` to log a message when all have resolved.

const p1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 done"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 done"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 done"), 3000));

Promise.all([p1, p2, p3]).then((results) => {
  console.log("✅ All promises resolved:", results);
});


// -------------------------
// Activity 4 : Using Promise.race()
// -------------------------

// Task 5> Create three promises that resolve after different times. 
// Use `Promise.race()` to log the result of the first resolved promise.

const race1 = new Promise((resolve) => setTimeout(() => resolve("Race 1 finished!"), 1000));
const race2 = new Promise((resolve) => setTimeout(() => resolve("Race 2 finished!"), 2000));
const race3 = new Promise((resolve) => setTimeout(() => resolve("Race 3 finished!"), 3000));

Promise.race([race1, race2, race3]).then((winner) => {
  console.log("🏁 First resolved promise:", winner);
});


// -------------------------
// Activity 5 : Practical Example
// -------------------------

// Task 6> Create a fake "API request" function that returns a promise. 
// If a random number is even, resolve with "Data fetched successfully", 
// otherwise reject with "Error fetching data". 
// Handle both cases with `.then()` and `.catch()`.

function fakeApiRequest() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10);
      if (randomNum % 2 === 0) resolve("✅ Data fetched successfully!");
      else reject("❌ Error fetching data!");
    }, 2000);
  });
}

fakeApiRequest()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
