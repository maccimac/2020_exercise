"use strict";


let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};


let setTimoutP = function(time){
  return new Promise(function(res, rej){
    if (isNaN(time)){
      rej("Num required");
    }
    setTimeout(res,time)
  })
}

setTimoutP("hi")
  .then(function(){
    console.log("Test")
  })
  .catch(function(errData){
    console.log(errData)
  })

setTimeout("jen")
