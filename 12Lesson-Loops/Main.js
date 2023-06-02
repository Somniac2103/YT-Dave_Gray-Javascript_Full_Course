// LESSON 12: Loops

//while loop

/* 
let myNumber = 0;
while (myNumber < 50) {
  console.log(myNumber);
  //myNumber = myNumber +1;
  //myNumber += 2;
  myNumber++;
}
*/

//Do While Loop

/* 
let myNumber = 0;
do{
  myNumber += 2;
  console.log(myNumber);
} while (myNumber < 50); 
*/

// For Loop

/* 
for(let i= 0; i <= 10; i++){
  console.log(i);
} 
*/

/* 
let name ='Barry'
for(let i= 0; i <= name.length; i++){
  console.log(name.charAt(i));
} 
*/

/* 
let name = "Barry"
let counter = 0;
let myLetter;
while (true){
  myLetter = name[counter];
  console.log(myLetter);
  if (myLetter === "a") break;
  counter++;
}
*/

let name = "Barry"
let counter = 0;
let myLetter;
while (counter <= 3){
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1){
    counter += 2;
    continue;
  }
  if (myLetter === "a") break;
  counter++;
}




