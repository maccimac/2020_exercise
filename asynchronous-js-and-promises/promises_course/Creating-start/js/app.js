"use strict";

let promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve("Done"); // This where we pass a resove value
    reject("Rej")
  },3000)
})
//FIRST PROMISE EVER
console.log(promise)

promise.then(function(val){
  console.log(val) // Invokes resolve value
}, function(val){
  console.log("rej: ", val)
})



console.log("see this is asynch code");
