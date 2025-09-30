// Day - 17 : Fetch API and Error Handling

// Activity 1 : Basic Fetch
// Task1> Use fetch() to get data from a public API (like JSONPlaceholder) and log the response.
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => console.log("Raw Response:", response));

// Task2> Extract JSON data from the response and log it to the console.
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log("JSON Data:", data));


// Activity 2 : Handling Errors
// Task3> Use fetch() with a wrong URL and handle the error using .catch().
fetch("https://jsonplaceholder.typicode.com/wrong-endpoint")
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    })
    .catch(error => console.log("Error caught:", error.message));

// Task4> Implement error handling in an async/await function using try...catch.
async function fetchWithError() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.log("Caught with try/catch:", error.message);
    }
}
fetchWithError();


// Activity 3 : Using Fetch with Async/Await
// Task5> Write an async function that fetches data from an API and logs the data.
async function fetchPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const data = await response.json();
    console.log("Post:", data);
}
fetchPost();

// Task6> Handle errors in the async function using try...catch and log a custom error message.
async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error("Unable to fetch user");
        const user = await response.json();
        console.log("User:", user);
    } catch (error) {
        console.log("Custom Error:", error.message);
    }
}
fetchUser();


// Activity 4 : Sending Data using Fetch
// Task7> Use fetch() to send a POST request with a JSON body to an API endpoint (like JSONPlaceholder). Log the response.
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 })
})
.then(response => response.json())
.then(data => console.log("POST Response:", data));


// Activity 5 : Practical Application
// Task8> Create a function that fetches a list of posts from JSONPlaceholder API and logs only the first 5 titles.
async function fetchFirstFivePosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    posts.slice(0, 5).forEach(post => console.log("Title:", post.title));
}
fetchFirstFivePosts();

// Task9> Create a function that fetches user data and posts in parallel using Promise.all and logs the results.
async function fetchUserAndPosts() {
    try {
        const [user, posts] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json())
        ]);
        console.log("User:", user);
        console.log("Posts:", posts);
    } catch (error) {
        console.log("Parallel Fetch Error:", error.message);
    }
}
fetchUserAndPosts();

// Task10> Create a function that retries a fetch request up to 3 times if it fails, then logs success or final error.
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Bad response");
            const data = await response.json();
            console.log("Fetched Data:", data);
            return; // success → exit function
        } catch (error) {
            console.log(`Attempt ${i + 1} failed: ${error.message}`);
            if (i === retries - 1) {
                console.log("Final Error: Could not fetch data");
            }
        }
    }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1");
