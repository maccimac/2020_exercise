function extend(Child, Parent){
  Child.prototype = Object.create(Shape.prototype);
  Child.prototype.constructor = Child;
}

function Shape(size, color){
  Shape.call(this, color);
  this.size = size;
}
Shape.prototype.duplicate = function(){
  console.log("duplicate");
}

function Circle(radius){
  this.radius = radius;
}

// This is how you change the prototype from object base to Shape base
// Similar ISH to function Circle = new Shape
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
extend(Circle, Shape)

Circle.prototype.duplicate = function(){
  Shape.prototype.duplicate.call(this);
  console.log("duplicate circle")
}

// This is how you define a prototype method. This defines it OUTIDE of the object, making the method NOT saved in the memory of per new instance
Circle.prototype.draw = function(){
  console.log("draw");
}

function Square(size){
  this.size = size;
}
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
extend(Square, Shape);
Square.prototype.duplicate = function(){
  console.log("duplicate squarea")
}

const c = new Circle;

const shapes = [
  new Circle(1),
  new Square(2)
]

for (let shape of shapes)
  shape.duplicate();
