// Day - 27 : Asynchronous JavaScript - Callbacks

// -------------------------
// Activity 1 : Understanding Callbacks
// -------------------------

// Task 1> Write a function that takes a callback and calls it after a delay of 2 seconds using `setTimeout`.
function executeAfterDelay(callback) {
  console.log("Waiting 2 seconds...");
  setTimeout(() => {
    callback();
  }, 2000);
}

executeAfterDelay(() => {
  console.log("Callback executed after 2 seconds!");
});


// Task 2> Create a function that takes two numbers and a callback. 
// The callback should be used to return the result of adding the two numbers after 1 second.

function addNumbers(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 1000);
}

addNumbers(5, 10, (sum) => {
  console.log("Sum:", sum);
});


// -------------------------
// Activity 2 : Callback Hell
// -------------------------

// Task 3> Create a sequence of nested callbacks (callback hell) that logs messages like:
// “Task 1 complete”, “Task 2 complete”, “Task 3 complete”, each after 1 second delay.

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 1000);
}

// Callback hell example
task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks completed (callback hell) 😅");
    });
  });
});


// -------------------------
// Activity 3 : Handling Async Tasks with Callbacks
// -------------------------

// Task 4> Simulate fetching user data from a server using a callback. 
// Use `setTimeout` to delay the response by 2 seconds and log the fetched data.

function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    const user = { id: 1, name: "Hanzala", email: "hanzala@example.com" };
    callback(null, user);
  }, 2000);
}

fetchUserData((error, data) => {
  if (error) {
    console.log("Error fetching user:", error);
  } else {
    console.log("User Data:", data);
  }
});


// -------------------------
// Activity 4 : Error Handling in Callbacks
// -------------------------

// Task 5> Modify Task 4 to include error handling in the callback (e.g., if data not found, log an error).

function fetchUserDataWithErrorHandling(userId, callback) {
  console.log("Fetching user...");
  setTimeout(() => {
    const users = [
      { id: 1, name: "Hanzala" },
      { id: 2, name: "Ayaan" }
    ];

    const user = users.find((u) => u.id === userId);
    if (user) callback(null, user);
    else callback("User not found!", null);
  }, 2000);
}

fetchUserDataWithErrorHandling(3, (error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("User Found:", data);
  }
});


// -------------------------
// Activity 5 : Practical Example
// -------------------------

// Task 6> Create a function that simulates an async login system using callbacks. 
// If username and password are correct (hardcode values), log “Login successful!”; 
// otherwise, log “Invalid credentials!” after 2 seconds.

function login(username, password, callback) {
  console.log("Logging in...");
  setTimeout(() => {
    const validUser = { username: "admin", password: "1234" };

    if (username === validUser.username && password === validUser.password) {
      callback(null, "Login successful!");
    } else {
      callback("Invalid credentials!", null);
    }
  }, 2000);
}

login("admin", "1234", (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
});
