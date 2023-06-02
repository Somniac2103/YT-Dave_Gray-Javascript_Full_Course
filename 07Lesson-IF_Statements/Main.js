//Conditional: If Statements
/*
let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned){
  reply ="No soup for you!";
} else if(soup && crackers){
  reply = `Here's your order of ${soup} & crackers.`;
} else {
  reply = "Sorry, we're out of soup.";
}
console.log(reply);
*/

/*
let testScore = 53;
let grade;
let collegeStudent = false;

if (testScore >= 90) {
  grade = "A";
} else if ( testScore >= 80){
  grade ="B";

} else if ( testScore >= 70){
  grade ="C";

} else if ( testScore >= 60){
  grade ="D";
} else {
  if (collegeStudent){
    grade = "U";
  } else {
    grade = "F"
  }
}

console.log(grade);

*/
let playerOne = "paper";
let computer = "scissors";

if (playerOne === computer){
  console.log('It is a Tie!')
}else if (playerOne === "rock"){
  if (computer === "paper"){
    // computer wins
    console.log('You Lose!')
  } else {
    //playerOne Wins
    console.log('You Win!')
  }
}else if (playerOne === "paper"){
  if (computer === "scissors"){
    // computer wins
    console.log('You Lose!')
  } else {
    //playerOne Wins
    console.log('You Win!')
  }
} else { if (computer === "rock"){
    //computer wins
    console.log('You Lose!')
} else {
    //playerOne wins
    console.log('You Win!')
}
}