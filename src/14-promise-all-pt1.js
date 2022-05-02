console.log("LOADED")

"use strict";

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("BBVA"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1337), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve( { name: "Bob" } ), 500);
});


Promise.all( [p1, p2, p3]).then((values) => {
    console.log(`Hello my name is ${values[2].name} and my bank account is ${values[1]}`, values)
  }); 