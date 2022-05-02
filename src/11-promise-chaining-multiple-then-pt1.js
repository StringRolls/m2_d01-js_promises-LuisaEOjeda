"use strict";

const pr5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Cappuccino"), 2000);
});


pr5
  .then((value1) => {
    console.log("value1:", value1);
    return value1 + " is good!";
  })
  .then((value2) => {
    console.log("value2:", value2);
    return ".. but pizza is algo good";
  })
  .then((value3) => {
    console.log("value3:", value3);
    return "Though pizza and cappuccino don't go together";
  })
  .then((value4) => {
    console.log("value4:", value4);
  });