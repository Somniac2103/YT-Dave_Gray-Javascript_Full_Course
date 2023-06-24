//Lesson 26 Fetch Async Await
//CallBacks, Promises, Thenables, and Async/Await

//CallBacks

/* 
function firstFunction(para,erer, callback){
  //do stuff
  callback();
} 
*/

//Promises (3 states : Pending, Fulfilled, Rejected) *Async

/* const myPromise = new Promise((resolve, reject) => {
  const error = false; // test 
  if (!error) {
    resolve("Yes! Resolved the promise");
  } else {
    reject("No! rejected the promise");
  }
});
 */

/* console.log(myPromise);
myPromise.then(value => {
  return value + 1;
})
.then(newValue => {
  console.log(newValue);
})
.catch(err =>{
  console.error(err);
}) */

/* const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("myNextPromise resolved");
  }, 3000);
});

myNextPromise.then(value => {
  console.log(value);
});

myPromise.then(value => {
  console.log(value);
}); */

/* const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
   return response.json();
})
.then(data => {
  data.forEach(user => {
    console.log(user);
  })
}); */

//Async / Await


/* const myUser={
  userList:[]
}

const myCoolFunction = async () => {
  const response = await  fetch("https://jsonplaceholder.typicode.com/users")
  const jsonUserData = await response.json();
  console.log(jsonUserData)
  return jsonUserData;
}

myCoolFunction();

const anotherFunc = async () => {
  const data = await myCoolFunction();
  console.log(data);
}

anotherFunc(); */

//2nd parameter of Fetch is a object

/* const getDadJoke = async () => {

  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData);  
}

getDadJoke(); */

//Using post 
/* const jokeObject ={
  id: 'pWLRK6pWDtc', 
  joke: "What do you call a boomerang that won't come back? A stick."
}

const postData= async (jokeObj) => {

  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jokeObj)
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse);  
};

postData(jokeObject);
 */

// 
const requestJoke= async (firstName, lastName) => {

  const response = await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
  const jsonResponse = await response.json();

  console.log(jsonResponse.value);  
};

requestJoke("Clint", "Eastwood");
