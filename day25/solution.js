// Day - 25 : Classes and Objects

// -------------------------
// Activity 1 : Creating a Class
// -------------------------

// Task 1> Create a class called Person with properties like name, age, and country. 
// Create an object of this class and log the properties.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
}

const person1 = new Person("Hanzala", 19, "India");
console.log(person1);


// -------------------------
// Activity 2 : Class Methods
// -------------------------

// Task 2> Add a method to the Person class that returns a string introducing the person.

class Person2 {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  introduce() {
    return `Hi, I'm ${this.name} from ${this.country} and I'm ${this.age} years old.`;
  }
}

const person2 = new Person2("Hanzala", 19, "India");
console.log(person2.introduce());


// -------------------------
// Activity 3 : Class Constructor
// -------------------------

// Task 3> Add a constructor to the Person class that initializes the object properties (already done above).

// ✅ Done in Person2 class.


// -------------------------
// Activity 4 : Inheritance
// -------------------------

// Task 4> Create a subclass called Student that extends Person and adds a new property studentId. 
// Add a method getStudentInfo() that returns the student’s full details.

class Student extends Person2 {
  constructor(name, age, country, studentId) {
    super(name, age, country);
    this.studentId = studentId;
  }

  getStudentInfo() {
    return `${this.introduce()} My student ID is ${this.studentId}.`;
  }
}

const student1 = new Student("Hanzala", 19, "India", "S101");
console.log(student1.getStudentInfo());


// -------------------------
// Activity 5 : Method Overriding
// -------------------------

// Task 5> Override the introduce() method in the Student class to include the student’s ID.

class Student2 extends Person2 {
  constructor(name, age, country, studentId) {
    super(name, age, country);
    this.studentId = studentId;
  }

  introduce() {
    return `Hi, I'm ${this.name} from ${this.country}, I'm ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const student2 = new Student2("Hanzala", 19, "India", "S101");
console.log(student2.introduce());
