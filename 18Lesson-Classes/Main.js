//Lesson 18 Classes

/* class Pizza {
  constructor(pizzaType, pizzaSize){
  this.type = pizzaType;
  this.size = pizzaSize;
  this.crust = "original";
  this.toppings = [];
  }
  /* get pizzaCrust(){
    return this.crust;
  }
  set pizzaCrust(pizzaCrust){
    this.crust =pizzaCrust;
  } 
  getCrust(){
    return this.crust;
  }
  setCrust(pizzaCrust){
    this.crust =pizzaCrust;
  }

  getToppings(){
    return this.toppings;
  }

  setToppings(topping){
    this.toppings.push(topping);
  }
  bake(){
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
  }
}

const myPizza = new Pizza("pepperoni", "small");
//myPizza.pizzaCrust = "thin";
myPizza.setCrust('thin');
myPizza.bake();
myPizza.type = "supreme";
console.log(myPizza.type);
console.log(myPizza.pizzaCrust);
console.log(myPizza.getCrust());

myPizza.setToppings("sausage");
myPizza.setToppings("olives");

console.log(myPizza.getToppings());
 */
//use underscore before name to indicate not to alter outside 
//super class

class Pizza {
  crust = "original"; //public field
  #sauce = "traditional"; //private field
  #size; //private must be declare above the constructor
  constructor(pizzaSize){
  this.#size = pizzaSize;
  }

  getCrust(){
    return this.crust;
  }
  setCrust(pizzaCrust){
    this.crust =pizzaCrust;
  }
  hereYouGo(){
    console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
  }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();

console.log(myPizza.crust); //available as public field
/* console.log(myPizza.#sauce); */ //not allow to use outside of scope of private.
 
/* 
//Child extnesion of super class
class SpecialtyPizza extends Pizza{
  constructor(pizzaSize){
    super(pizzaSize);
    this.type = "The Works";

  }
  slice(){
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
  }
}

const mySpeciality = new SpecialtyPizza("medium");
mySpeciality.slice();
 */

/* //Factory Function
function pizzaFactory(pizzaSize){
  const crust = "original";
  const size = pizzaSize;
  return{
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */
