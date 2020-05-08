"use strict";


let firstName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Steven");
        }, 4000);
    });
};

let lastName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Hancock");
        }, 3000);
    });
};

let middleName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("W.");
        }, 7000);
    });
};


// firstName()
//   .then(function(res){
//     console.log(res)
//     return middleName()
//   })
//   .then(function(res){
//     console.log(res)
//     return lastName()
//   })
//   .then(function(res){
//     console.log(res)
//   })

// Promise.all([firstName(), middleName(), lastName()])
//   .then(function(msg){
//     console.log(`${msg[0]} ${msg[1]} ${msg[2]}`)
//   })

Promise.race([firstName(), middleName(), lastName()])
  .then(function(msg){
    console.log(msg)
  })
