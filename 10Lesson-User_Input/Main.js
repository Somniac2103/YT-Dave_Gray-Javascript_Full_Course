// LESSON 10 User Input

//POP UPS

//alert("Hello World!");

/*
let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);
*/

let name = prompt("Please enter your name.");
if (name){
  console.log(name ?? "You didn't enter your name.");
} else {
  console.log("You didn't enter your name.");
}
