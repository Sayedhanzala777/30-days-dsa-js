// Function to calculate area of a rectangle
function areaRectangle(length, width) {
  return length * width;
}

console.log("Area of rectangle:", areaRectangle(5, 10));


// Function to calculate area of a circle
function areaCircle(radius) {
  return Math.PI * radius * radius;
}

console.log("Area of circle:", areaCircle(7));


// Function to calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("Factorial of 5:", factorial(5));


// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("Is 7 prime?", isPrime(7));
console.log("Is 10 prime?", isPrime(10));
