// Day - 18 : Async Iterators and Generators

// Activity 1 : Generators
// Task1> Write a generator function that yields numbers from 1 to 5 and log each value.
function* numberGenerator() {
    for (let i = 1; i <= 5; i++) {
        yield i;
    }
}
const gen1 = numberGenerator();
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);

// Task2> Create a generator function that takes an array as input and yields each element one by one.
function* arrayGenerator(arr) {
    for (let item of arr) {
        yield item;
    }
}
const gen2 = arrayGenerator(["apple", "banana", "cherry"]);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);


// Activity 2 : Iterating Generators
// Task3> Use a for...of loop to iterate over the generator from Task 1 and log each value.
for (let value of numberGenerator()) {
    console.log("For-of loop:", value);
}

// Task4> Create a generator that yields an infinite sequence of even numbers and use it to log the first 5 values.
function* evenNumbers() {
    let n = 0;
    while (true) {
        yield n;
        n += 2;
    }
}
const gen3 = evenNumbers();
for (let i = 0; i < 5; i++) {
    console.log("Even:", gen3.next().value);
}


// Activity 3 : Async Generators
// Task5> Write an async generator function that yields promises resolving after 1 second (simulate async data stream).
async function* asyncGenerator() {
    for (let i = 1; i <= 3; i++) {
        await new Promise(res => setTimeout(res, 1000));
        yield `Async Value ${i}`;
    }
}

// Task6> Use a for-await-of loop to consume the async generator from Task 5 and log each resolved value.
(async function consumeAsyncGen() {
    for await (let value of asyncGenerator()) {
        console.log("From async generator:", value);
    }
})();


// Activity 4 : Practical Generator Usage
// Task7> Create a generator that yields values from an API call one page at a time (simulate paginated data).
function* paginate(data, pageSize) {
    let i = 0;
    while (i < data.length) {
        yield data.slice(i, i + pageSize);
        i += pageSize;
    }
}

// Task8> Use the generator from Task 7 to fetch and log data for 3 pages.
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pages = paginate(data, 3);
console.log("Page 1:", pages.next().value);
console.log("Page 2:", pages.next().value);
console.log("Page 3:", pages.next().value);


// Activity 5 : Combining Generators and Async
// Task9> Write an async generator that yields chunks of data (simulate reading a large file in parts).
async function* readFileChunks(file, chunkSize) {
    for (let i = 0; i < file.length; i += chunkSize) {
        await new Promise(res => setTimeout(res, 500)); // simulate delay
        yield file.slice(i, i + chunkSize);
    }
}

// Task10> Consume the async generator from Task 9 and log each chunk until the entire "file" is read.
(async function consumeChunks() {
    const fakeFile = "This is a very large text file simulation...";
    for await (let chunk of readFileChunks(fakeFile, 10)) {
        console.log("Chunk:", chunk);
    }
})();
