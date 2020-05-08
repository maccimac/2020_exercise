"use strict";

//First, add the setTimeout code as shown in the intro to this exercise. Then modify the code by creating a promise so that the code can run asynchronously.


// const massiveProcess = function(num) {
//     let result = 0;
//     for (let i = num ** 7; i >= 0; i--) {
//         result += Math.atan(i) * Math.tan(i);
//     };
//     return result;
// };

let asyncMProcess = function(num){
  return new Promise( function(resolve, reject){
    if(isNaN(num)){
      reject("Enter num")
    }else{
      let result = 0;

      setTimeout(function(){
        for (let i = num ** 7; i >= 0; i--) {
            result += Math.atan(i) * Math.tan(i);
        };
        resolve(result)
      }, 0)
    }
  })
}

// let amt = massiveProcess(10);

asyncMProcess(20)
  .then(function(res){
    console.log(res)
  })
  .catch(function(err){
    console.log(err)
  })

// console.log("The number is: " + amt);

//More processing later on
console.log(5 * 5 + 100);
