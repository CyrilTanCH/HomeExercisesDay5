/**
 * Task 1: Calculate Square with Arrow Function
 * Using arrow functions, create a function that calclates the square of a given number and logs the result to the console
 */

let square = (num) => num * num;

console.log(square(4));

/**
 * Task 2: Create a Welcome Message with Template Literals
 * Craft a welcome messwage using template literals, including the name and age of a person
 */

let name = "John Doe";
let age = 30;
// arrow function
let greet = () => console.log(`Welcome ${name} of age ${age}`);

// function expression
// let greet = function () {
//   console.log(`Welcome ${name} of age ${age}`);
// };

greet();

/**
 * Task 3: Extract First and Last Name with Destructuring
 * Utilize destructuring to extract the first and last name from a person object and log them to the console
 */

let person = { firstName: "Mary", age: 4, lastName: "Jane" };

const { firstName, lastName } = person;
console.log(firstName, lastName);

/**
 * Task 4: Merge Arrays with Spread Operator
 * Employ the spread operator to merge two arrays into a single array
 */

const tropicalFruits = ["pineapple", "banana"];
const temperateFruits = ["blueberry", "cherry"];

const allFruits = [...tropicalFruits, ...temperateFruits];
console.log(allFruits);

/**
 * Task 5: Rectangle Area with Default Parameters
 * Create a function that calculates the area of a rectangle using default parameters
 */

const rectangleArea = (length, breadth = 1) => length * breadth;

console.log(rectangleArea(5));

/**
 * Task 6: Class "Person" with Introduction Method
 * Define a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method
 */

const person2 = {
  name: "John Doe",
  age: 30,
  introduce() {
    console.log(`Hi! I am ${this.name} of age ${age}`);
  },
};

person2.introduce();
