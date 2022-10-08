// SPREAD & REST OPERATOR

const { text } = require("stream/consumers");

// const hobbies = ["Sports", "Cooking"];

// let copiedArray = hobbies.slice(); // Creates a copy of an array

// copiedArray = [hobbies]; // Creates a copy of the array nested within an array

// copiedArray = [...hobbies]; // Used the spread operator to put the array within the new array without being nested
// // *Spread Operator works with objects as well!*

// // The Rest operator allows as many arguments as you want to be put in a function
// const toArray = (...args) => {
//   return [...args];
// };

// console.log(toArray(1, 2, 3, 4, 5));

// console.log(copiedArray);

// // The Spread operator is used more for spreading and the Rest Operator is used for merging

// _____________________________________

// DESTRUCTURING

// const person = {
//   name: "Hector",
//   age: 19,
// };

// const printName = ({ name, age }) => {
//   // We are destructuring so we can use name and age as a variable instead of doing person.name or person.age
//   console.log(name);
// };

// printName(person); // Hector

// const { name, age } = person; // We are destructuring and grabbing the name and age variable from the person object and putting it into individual variables

// console.log(name, age); // Hector 19

// const hobbies = ["Sports", "Cooking"];

// const [hobby1, hobby2] = hobbies; // Similar to line 39, we destructure and put the array elements into variables

// console.log(hobby1, hobby2);

// _____________________________________

// ASYNC & PROMISES

// // Asynchronous code is when code is not ran immediately and Synchronous code is code that is ran immediately

// const fetchData = () => {
//   // The promise variable creates a new promise and waits for the result of the promise, in this case its the setTimemout function. After it is resolved, it will be returned since its async
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, 1500);
//   });
//   return promise;
// };

// setTimeout(() => {
//   console.log("Timer is done!");

//   // We call the fetchData function which will wait for the setTimeout and return "Done!" and afterwards grab that text and console.log(text).
//   fetchData()
//     .then((text) => {
//       console.log(text);
//       return fetchData(); // We call the fetchData function again and just return it so it can be used in the next .then
//     })
//     .then((text2) => {
//       console.log(text2);
//     });
// }, 2000);

// console.log("Hello");
// console.log("Hi!");
