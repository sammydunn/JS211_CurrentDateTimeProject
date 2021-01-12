// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = (time) => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

var number = 13;
var n = num.toString(); 

// Write a JavaScript program to convert a string to the number.

let num1 = 13;
let num2 = 13;
if (num1 = num2) {
  console.log (true);
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.

const num1 = 2;
const num2 = 2;
const sum = num1 + num2;

console.log('the sum is' sum);

// Write a JavaScript program that runs only when 2 things are true.

let tall = false;
let handsome = true;

if(tall && handsome) { 
  console.log("sure thing");
 } else if (tall || handsome) {
   console.log("yes please")
 } else {
   console.log("i am not sure")
 }

// Write a JavaScript program that runs when 1 of 2 things are true.

let grade = 90
 
 if(grade >=90){
   console.log("you made an A")
 } else if (grade >= 80){
   console.log("you made a B");
 } else if (grade >=100){
   console.log("super A+")
 }
 
  else {
   console.log("You did not make an A");

// Write a JavaScript program that runs when both things are not true.  

const one  = 9;
const two = 4;

console.log(a > 0 || b > 7); 

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
