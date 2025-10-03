// Activity 1 : Object Creation and Access
// Task1> Create an object representing a book with properties like title, author, and year, then log the object.
const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
};
console.log(book);

// Task2> Access and log the title and author properties of the book object.
console.log("Title:", book.title);
console.log("Author:", book.author);


// Activity 2 : Object Methods
// Task3> Add a method to the book object that returns a string with the book’s title and author.
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());

// Task4> Add a method to the book object that takes a parameter (current year) and returns the book’s age.
book.getBookAge = function(currentYear) {
    return `${this.title} is ${currentYear - this.year} years old.`;
};
console.log(book.getBookAge(2025));


// Activity 3 : Nested Objects
// Task5> Create a library object that contains a name and an array of book objects.
const library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
    ]
};

// Task6> Log the name of the library and the titles of all the books in the library.
console.log("Library Name:", library.name);
library.books.forEach(book => console.log("Book Title:", book.title));


// Activity 4 : The this Keyword
// Task7> Add a method to the book object that uses this to return a string with the book’s title and year.
book.getTitleYear = function() {
    return `${this.title} was published in ${this.year}`;
};
console.log(book.getTitleYear());


// Activity 5 : Object Iteration
// Task8> Use a for...in loop to log all the properties of the book object.
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Task9> Use Object.keys and Object.values to log all the keys and values of the book object.
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));
