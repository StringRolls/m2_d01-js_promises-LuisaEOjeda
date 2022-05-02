"use strict";

const directions = [
  'Starting point: Ironhack Miami',
  '↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue',
  '➔ Turn right onto S Miami Ave',
  '* Chipotle Mexican Grill 891 S Miami Ave, Miami'
];


function getDirections(step, callback, errorCallback) {
  setTimeout(() => {
    console.log( directions[step]);// this simulate giving the instructions to th euser
    
    if (!directions[step]) errorCallback('Instructions not found.');
    else {
      console.log(directions[step]); // This simulates giving isntruction to the user walking
      callback();
    }
  }, 1500 + Math.random() * 1000);
}
/*
// Single callback ... Callback hell
getDirections(0, ()=> {
//   getDirections(1, () => {});
return;
 });

 getDirections(1, ()=> {
//   getDirections(1, () => {});
return;
 });

 getDirections(2, ()=> {
//   getDirections(1, () => {});
return;
 });
*/



// Callbacks in sequence
// Callbacks in sequence
getDirections(
  0,
  () => {
    getDirections(
      1,
      () => {
        getDirections(
          2,
          () => {
            getDirections(
              3,
              () => {
                console.log("You arrived at your destination!");
                getDirections(
                  4,
                  () => {},
                  (err) => console.log(err)
                );
              },
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);

