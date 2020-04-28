
class Shape{
  constructor(color){
    this.color = color;
  }
  move(){
    console.log("move shape");
  }
}

class Circle extends Shape {
  constructor(color, radius){
    // Make sure to initialize parent object
    super(color);
    this.radius = radius;
  }
  draw(){
    console.log("draw")
  }
  // JS engine looks for method in child object first before looking in parent object
  // move(){
  //   console.log("circle move")
  // }
  moveShape(){
    super.move();
  }

  moveShapeAgain(){
    this.move();
  }

}


const c = new Circle("red");
