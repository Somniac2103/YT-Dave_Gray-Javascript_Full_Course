// LESSON 14 : Scope

//var, let, and const
//best practice to use const unless variable will change then use let. var is legacy

//Global scope and Local Scope

//VAR is always global

// let and const is global when in main program but local when in brackets

//global variables can be used in local scope but not the other way

//VAR is Function scope
//Let & Const is block scope

var x = 1;
let y =2;
const z =3;

function myFunc(){
  var x = 10;
  const z = 5;  

  {
    var x = 11;
    const z = 6;
    console.log(`Block: ${x}`);
    console.log(`Block: ${y}`);
    console.log(`Block: ${z}`);
  }

  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}

myFunc();

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);