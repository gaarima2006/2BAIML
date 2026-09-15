// let fn="kanak";
// let ln="chhabra";
// console.log(`My name is ${fn} ${ln}`);//modern string template
// console.log("My name is " + fn + " " + ln);//older way of concatenation
// function fullname(fn, ln) {
//     return `My name is ${fn} ${ln}`;//used to return two words as a string 
// }
// let name='hello ${fullname("kanak", "chhabra")}';//it will not return the string returned by the function because it is in single quotes
// console.log(name);//it will print the string as it is because it is in single quotes
// let name1=fullname("gARIMA", "gUPTA");
// console.log(name1);//it will print the string returned by the functionlet fn="kanak";
// let ln="chhabra";
// console.log(`My name is ${fn} ${ln}`);//modern string template
// console.log("My name is " + fn + " " + ln);//older way of concatenation
// function fullname(fn, ln) {
//     return `My name is ${fn} ${ln}`;//used to return two words as a string 
// }
// let name='hello ${fullname("kanak", "chhabra")}';//it will not return the string returned by the function because it is in single quotes
// console.log(name);//it will print the string as it is because it is in single quotes
// let name1=fullname("kanak", "chhabra");
// console.log(name1);//it will print the string returned by the function

//normal declaration of function

//function hello() {
   // console.log("hello");
//}
//let hello=function() {
  //  console.log("hello");
//}
//Arrow function
//Hello=()=> console.log("hello");
///FUNTIONALITY: Arrow functions are a more concise way to write functions in JavaScript. They are especially useful for short functions and callbacks. In this case, we define an arrow function called `fullnameArrow` that takes two parameters, `fn` and `ln`, and returns a string that combines them.
// let fullnameArrow = (fn, ln) => `My name is ${fn} ${ln}`;//used to return two words as a string
// let name2=fullnameArrow("kanak", "chhabra");
// console.log(name2);//it will print the string returned by the function  

// //example
// function phy(marks){
//     return `My physics marks are ${marks}`;
// }
// phy=(marks)=>`My physics marks are ${marks}`;//arrow function
// console.log(phy(85));

//pattern print
//const printPattern = (n) => {
 // for (let i = 1; i <= n; i++) {
   // console.log('*'.repeat(i));
  //}
//};

//vs code shows error in the below line because prompt is not defined in node.js environment. It is defined in browser environment.
//const n = parseInt(prompt("Enter the number of lines:"), 10);
//printPattern(n);
// Import and initialize the module
//const prompt = require('prompt-sync')();

//const printPattern = (n) => {
  //for (let i = 1; i <= n; i++) {
    //console.log('*'.repeat(i));
  //}
//};

// Now you can use prompt() just like in a browser
//const n = parseInt(prompt("Enter the number of lines: "), 10);
//printPattern(n);
// In this code, we import the `prompt-sync` module and use it to get user input in a Node.js environment. The rest of the code remains the same, allowing you to print a pattern based on the user's input.

//REST OPERATORS: The rest operator allows us to represent an indefinite number of arguments as an array. It is denoted by three dots (...). In the example below, we define a function called `sum` that takes any number of arguments and calculates their sum using the rest operator.
// function sum(...numbers) {
//     console.log(numbers); // This will log the array of numbers passed to the function  
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// function sum(...value){
//     let total=0;
//     for(let n of value)
//     {
//         total+=n;
//     }
//     return total;
// }
// function sum(...values){
//   let sum=0;
//   for(let i of values){
//     sum+=i;
//   }
//   console.log("sum",sum);
// };
// let ar=[1,2,3,4,5];
// sum(...ar);
// let a1=[10,20,30];
// let a2=[40,50];
// var a3=[...a1,...a2];
// console.log(a3)
// var a4=[60,...a1,70,...a2];
// console.log(a4)
// let name="vikas";
// let rollNumber=101;
// let data={
//   name,rollNumber
// }
// console.log(data.name)
// console.log(data.rollNumber)
// let F="FirstName"
// let L="LastName"
// let data9=
// {
//   [F] :"Garima",
//   [L] : "Gupta"  
// }
// console.log(data9.FirstName)
// console.log(data9.LastName)
// let F="First"
// let L="Last"
// let data9=
// {
//   [F] :"Garima",
//   [L] : "Gupta"  
// }
let data2=["Garima","Gupta",101,1209,];
let namefirst=data2[0];
let namelast=data2[1];
let rollno1=data2[2];
let pinno=data2[3];
let[namefirst1,namelast1,rollno2,pinno1]=data2;
console.log(namefirst1);
console.log(namelast1);
console.log(rollno2);
console.log(pinno1);