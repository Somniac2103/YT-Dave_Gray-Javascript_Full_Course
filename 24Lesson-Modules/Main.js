//Lesson 24 Modules

//add modules to script link in HTML
//link auto defer attribute and makes JS strict
/* 
import playGuitar from "./guitars.js";
import { shredding as shred, plucking} from "./guitars.js";

import * as Guitars from "./guitars.js";

/* console.log(playGuitar()); 
console.log(shred());
console.log(plucking());*/

/* console.log(Guitars.playGuitar());
console.log(Guitars.default());
console.log(Guitars.plucking());
console.log(Guitars.shredding()); */

import User from "./user.js";

const me = new User("email@email.com", "Barry");

console.log(me);
console.log(me.greeting());