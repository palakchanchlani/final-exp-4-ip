// Using ES6 class syntax
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display person details
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  
    // Arrow function as a non-member function 
    static greet = () => {
      console.log("Hello! Welcome to the Person class.");
    };
  
    // Arrow function as a member function
    getAge = () => {
      return `The age of ${this.name} is ${this.age}`;
    };
  }
  
  // Create an instance of the Person class
  const person1 = new Person("Alice", 30);
  person1.displayDetails(); // Name: Alice, Age: 30
  console.log(person1.getAge()); // The age of Alice is 30
  
  // Static method call
  Person.greet();
//----------------------------------------------------------------------------------------------
// Student class that extends Person
class Student extends Person {
    constructor(name, age, rollNo) {
      super(name, age);
      this.rollNo = rollNo;
    }
  
    displayDetails() {
      // Call the parent class method using super
      super.displayDetails();
      console.log(`Roll No: ${this.rollNo}`);
    }
  
    // Method to set roll number
    setRollNo(rollNo) {
      if (rollNo <= 0) {
        throw new Error("Invalid roll number: Roll number must be greater than zero.");
      }
      this.rollNo = rollNo;
    }
  }
  
  // Create an instance of the Student class
  try {
    const student1 = new Student("Bob", 20, 1);
    student1.displayDetails(); // Name: Bob, Age: 20, Roll No: 1
    
    student1.setRollNo(0); 
  } catch (error) {
    console.error(error.message); // Invalid roll number: Roll number must be greater than zero.
  }
  