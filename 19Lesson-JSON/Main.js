//Lesson 19 JSON = Javascript Object Notation
//JSON is used to send and receive data
// JSON is a text format that is completely langauage independent

const myObj = {
  name: "Barry",
  hobbies: ["hike", "Martial Arts", "Programming"],
  hello: function (){
    console.log("hello!");
  }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
