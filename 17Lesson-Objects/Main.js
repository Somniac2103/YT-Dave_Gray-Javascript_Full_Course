//Lesson 17 Objects

//key-valu pairs in curly braces

/* 
const myObj = {name: "Barry"};

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  action: function(){
    return "Hello World!";},
  action2: function(){
    //this. refers to the object
    return `Time for ${this.beverage.morning}`;
  }
}
console.log(myObj.name);
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());
console.log(anotherObj.action2());

console.log(anotherObj["alive"]); 
*/

/* const vehicle = {
  wheels: 4,
  engine: function(){
    return "Vrrooom!";
  }
}
/* //create object from another
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //inheritnace
console.log(truck.engine()); 

const car =Object.create(vehicle);
car.doors = 4;
car.engine = function() {return "Whoooosh!"};
console.log(car.engine());


const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function (){
  return"Shhhhh...."}
console.log(tesla.engine());
 */

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass:"John Paul Jones",
  drums: "John  Bonham"
}


console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
  console.log(band[job]);
}

for(let job in band){
  console.log (`On $(job), it's ${band[job]}!`);
}

//get rid of values

delete band.drums

console.log(band.hasOwnProperty("drums"));

//destructurin objects
const{guitar:myVariable, bass:myBass}= band;
const{ vocals, guitar, bass, drums} =band;
console.log(myVariable);
console.log(myBass);

function sings({ vocals }){
  return `${vocals} sings!`;}

console.log(sings(band));