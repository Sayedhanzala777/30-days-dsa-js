// -------------------------
// Activity 1 : Selecting and Manipulating Elements
// -------------------------

// Task 1 > Select an HTML element by its ID and change its text content.
const heading = document.getElementById("main-heading");
heading.textContent = "DOM Manipulation in Action!";

// Task 2 > Select an HTML element by its class and change its background color.
const para = document.querySelector(".text");
para.style.backgroundColor = "lightblue";


// -------------------------
// Activity 2 : Creating and Appending Elements
// -------------------------

// Task 3 > Create a new div element with some text content and append it to the body.
const newDiv = document.createElement("div");
newDiv.textContent = "This is a newly created div!";
document.body.appendChild(newDiv);

// Task 4 > Create a new list item and add it to an existing unordered list.
const newItem = document.createElement("li");
newItem.textContent = "Item 3";
document.getElementById("item-list").appendChild(newItem);


// -------------------------
// Activity 3 : Removing Elements
// -------------------------

// Task 5 > Select an HTML element and remove it from the DOM.
const toRemove = document.querySelector(".text");
toRemove.remove();


// -------------------------
// Activity 4 : Event Handling
// -------------------------

// Task 6 > Add a click event listener to a button that changes the text of a paragraph.
const btn = document.getElementById("changeTextBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  msg.textContent = "Text changed successfully!";
});

// Task 7 > Add a mouseover event listener to an element that changes its border color.
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.borderColor = "red";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.borderColor = "black";
});


// -------------------------
// Activity 5 : Mini Project
// -------------------------

// Task 8 > Toggle light/dark mode
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
