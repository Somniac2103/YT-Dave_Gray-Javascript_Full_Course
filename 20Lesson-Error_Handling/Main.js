//Lesson 20 Error Handling in Javascript
/* //Javascript is very forgiving
variable = "Barry";
console.log(variable); */

"use strict";
/* //reference error
variable = "Barry";
console.log(variable); */

/* //syntax error
Object..create(); */

/* //Type Error
const name= "Barry";
name = "Joe"; */

//console error or warn

const makeError = () => {
  let i =1;
  while (i<= 5){
    try {
      /* throw new customError("This is a custom Error!"); */
      /* const name="Barry";
      name="joe"; */
    }catch(err){
      console.error(err);
      console.error(err.name);
      console.error(err.message);
      console.error(err.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
 
}
makeError();

function customError(message){
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}