//Lesson 25 Higher Order Function

//Higher order functions is a function that does at least one of the following:
//  Takes one or more functions as a argument(parameter)
// returns a fucntion as its result

import {posts} from "./posts.js";

posts.forEach((post) => {
  console.log(post);
});

console.clear();

const filterPosts = posts.filter((post) => {
  return post.userId === 1;
});
console.log(filterPosts);

const mappedPosts = filterPosts.map((post) => {
  return post.id*10;
});
console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPosts);