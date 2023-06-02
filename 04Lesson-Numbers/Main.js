//Numbers

const myNumber = 42;
//integers are whole numbers
const myFloat = 42;
//float is decimal
const myString ="42";
//strings are white in console and number purple

console.log(myNumber);
console.log(myFloat);
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber === myString);

console.log(myString +3);
//change number to string and combine

console.log(Number(myString)+ 3);
//changes sting to number

console.log(myNumber === Number(myString));
// now the equation is true

console.log(Number("Dave"));
//if not a number the function returns Nan(Not a Number)
console.log(Number(true));
//will return value of 1 for true and 0 for false

//NUMBER METHODS

console.log(Number.isInteger(myNumber));
//boolean return

console.log(Number.parseFloat(myString));
//parse removes all non number values and convert all number values into float

console.log(Number.parseInt(myString));
//removes all non numeric values and return a number value in integer

console.log(myFloat.toString());
//converts data into string

console.log(typeof Number.parseFloat());
//return the data type

console.log(Number.isNaN("Dave"));



















