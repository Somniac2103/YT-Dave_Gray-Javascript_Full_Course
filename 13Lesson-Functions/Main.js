// LESSON 13: Functions


//methods = built-in Functions!

/* 
"Barry".toLowerCase();
Math.random(); 
*/

//Function Declaration Syntax

/* 
function sum(num1, num2){
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

console.log(sum(2,6)); 

*/

/* 
function getUserNameFromEmail(email){
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com")); 
*/

//variable function

/* 
const getUserNameFromEmail= function (email){
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));  
*/

//arrow function

/* 
const getUserNameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com")) 
*/

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("bArRY"));