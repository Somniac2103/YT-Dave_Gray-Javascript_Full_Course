//Lesson 23 Web storage API

//Not part of the DOM
//available via window

/* window.alert('ok!');
alert("ok!"); */

/* window.alert(window.location);
alert(location); */

const myArray = ['eat', 'sleep', 'code'];

const myObject ={
  name: "Barry",
  hobbies: ['eat', 'sleep', 'code'],
  logName: function(){
    console.log(this.name);
  }
}

//session storage only when browser is open and the session is open

/* sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData); */

/* sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData); */

//local storage permanent

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
/* localStorage.removeItem("myLocalStore"); */
/* localStorage.clear(); */
const key = localStorage.key(0);
const storeLength = localStorage.length;

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));


console.log(myLocalData);

console.log(key);

console.log(storeLength);

