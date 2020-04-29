// Cohesion: Things that are highly related should go together
const Circle = require("./53-circle");

// const _radius = new WeakMap();
//
// class Circle{
//   constructor(radius){
//     _radius.set(this, radius);
//     // let sample =set(this, radius + 2)
//   }
//   showSample(){
//     // return sample.get();
//   }
//   draw(){
//     console.log( "Circle woth radius " + _radius.get(this) )
//   }
// }

let c0 = new Circle(4);
console.log(c0.showSample())
c0.draw();

// testFunc();
