//strings
const myVariable = "Mathematics";

//the length property
console.log(myVariable.length);
console.log("This is a string".length);

console.log(myVariable.charAt(0));
//display characcter at
console.log(myVariable.indexOf("m"));
console.log(myVariable.indexOf("M"));
//Capital matters
console.log(myVariable.indexOf("a"));
//finds first occurrence
console.log(myVariable.lastIndexOf('m'));
//same as indexOF but get first occurnace from the back

console.log(myVariable.slice(5,8));
//Start position, final position, dosen't return the last digit
console.log(myVariable.split('e'));
//returns the strings in array
//the Argument letter is not included in return
console.log(myVariable.split(""));
//returns each char in array
console.log("John,Joe,Dave".split(","));
//return each name as a entry in array
console.log("Every good boy does fine".split(" "));
//returns each word as a entry in array


console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

console.log(myVariable.includes("div"));
//boolean true or false return















