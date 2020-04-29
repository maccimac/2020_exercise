// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle{
  constructor(radius){
    _radius.set(this, radius);
    // let sample =set(this, radius + 2)
  }
  showSample(){
    // return sample.get();
  }
  draw(){
    console.log( "Circle with radius: " + _radius.get(this) )
  }
}

// function testFunc(){
//   console.log("test");
// }


// module.exports.Circle = Circle;
// module.exports.Square = Square;

// Simplify:
module.exports = Circle;
// module.exports.tesFunc = testFunc;
