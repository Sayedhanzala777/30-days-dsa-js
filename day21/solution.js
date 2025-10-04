// Day - 21 : Classes

// Activity 1 : Class Definition
// Task1> Define a class representing a person with properties name and age, and a method to return a greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Task2> Create an instance of the Person class and log the greeting message.
const person1 = new Person("Jatin", 20);
console.log(person1.greet());


// Activity 2 : Class Inheritance
// Task3> Define a class representing a student that extends the Person class, add a property studentId, and a method to return the student’s details.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentId}`;
    }
}

// Task4> Create an instance of the Student class and log the student’s details.
const student1 = new Student("Ayesha", 19, "ST12345");
console.log(student1.getDetails());


// Activity 3 : Static Methods
// Task5> Add a static method to the Person class that returns a generic greeting message.
class PersonWithStatic {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi, I am ${this.name}, ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello! This is a generic greeting.";
    }
}

// Task6> Call the static method without creating an instance of the class and log the message.
console.log(PersonWithStatic.genericGreeting());


// Activity 4 : Getters and Setters
// Task7> Add a getter method to the Person class to return the full details of the person.
// Task8> Add a setter method to the Person class to update the name property.
class PersonWithGetterSetter {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get details() {
        return `Name: ${this._name}, Age: ${this._age}`;
    }

    set name(newName) {
        this._name = newName;
    }
}

const person2 = new PersonWithGetterSetter("Ali", 25);
console.log(person2.details);   // Before update
person2.name = "Ahmed";         // Update name using setter
console.log(person2.details);   // After update


// Activity 5 : Class Expressions and Anonymous Classes
// Task9> Create a class expression for a Car class with properties make and model, and a method to return the car’s details.
const Car = class {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getCarDetails() {
        return `Car: ${this.make} ${this.model}`;
    }
};

// Task10> Create an instance of the Car class and log the car’s details.
const car1 = new Car("Toyota", "Supra");
console.log(car1.getCarDetails());
