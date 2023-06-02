//Conditionals: Ternary Operator

//syntax
// condition ? ifTrue : ifFalse;

/*
let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response); 
*/

/*
let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" :
  soup ? "Yes, we have $(soup) today."
  : "Sorry, no soup today.";
console.log(soupAccess); 
*/

/*
let testScore = 59;
let myGrade = testScore > 89 ? "A"
  : testScore > 79 ? "B"
  : testScore > 69 ? "C"
  : testScore > 59 ? "D"
  : "F";
console.log(`My test grade is a ${myGrade}.`);
*/

let playerOne ="Paper";
let computer = "Scissors";
 
let result = playerOne === computer ? "Tie Game!" 
  : playerOne === "Rock" && computer === "Paper" ? "Computer Wins!"
  : playerOne === "Paper" && computer === "Scissors" ? "Computer Wins!"
  : playerOne === "Scissors" && computer === "Rock" ? "Computer Wins!"
  : "Player One Wins!";

console.log(result);