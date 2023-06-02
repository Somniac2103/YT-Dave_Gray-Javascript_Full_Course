// LESSON 14 : Arrays

let myArray = [];

myArray[0] = "Barry";
myArray[1] = 1001;
myArray[2] = false;

/* 

//refer in array
console.log(myArray);

console.log(myArray.length);

console.log(myArray[myArray.length - 1]);

console.log(myArray[1]); 

//add to the end of array
myArray.push("school");
console.log(myArray);

//remove from the end of array
myArray.pop();

console.log(myArray);

//save last entry of arrange before removing

const lastItem = myArray.pop();

console.log(lastItem);

//add to the start of array
myArray.unshift(42);

console.log(myArray);

//remove from the start of array
myArray.shift();

console.log(myArray);

//remove from the middle of array
//dont use this one, simply remove data but keeps the location empty
//delete myArray[1];
//console.log(myArray);

myArray.splice(1,1);
console.log(myArray); 

//replace values in the middle of array
myArray.splice(1,1,423);

//add values in the middle of array
myArray.splice(1, 0, 500);
console.log(myArray);

*/

//slice makes copy and returns copy leaving original intach

myArray = ["A","B","C","D","E","F","G"];
const myArrayA = ["A","B","C"];
const myArrayB = ["D","E","F","G"];

/* //const newArray = myArray.slice(2);
console.log(myArray.slice(2, 5));

//console.log (newArray);
console.log (myArray); */

/* //reverse method
myArray.reverse();

console.log(myArray); */

/* //join method and Split method

// puts all values in one value seperated by commas
const newString = myArray.join();
console.log(newString);

//splits all values in to seperate values using the symbol in brackets
const newArray = newString.split(",");
console.log(newArray); */

//joins two arrays into 1 array
/* 
//const newArray2 = myArrayA.concat(myArrayB);
const newArray2 = [...myArrayA, ...myArrayB];
console.log(newArray2); */

const equipShelfA = ["baseball","baseball","baseball"];
const equipShelfB = ["basketball","gold balls"," tennisball"];

const clothesShelfA = ["tank tops","t-shirts","jerseys"];
const clothesShelfB = ["sweat tops","sweat pants","hoodies"];

//single dimension
console.log(equipShelfA[1]);

//2 dimension
const equiDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equiDept[0][1]);
console.log(clothesDept[1][0]);

//3 dimension

const sportStore = [equiDept, clothesDept];

console.log(sportStore);
console.log(sportStore[0]);
console.log(sportStore[0][1]);
console.log(sportStore[0][1][2]);
