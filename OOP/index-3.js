// Classes are constructor functions
class Circle{
  constructor(radius){
    this.radius = radius
    this.move = function(){
      console.log("move")
    }
  }

  //Instance Method
  draw(){
    console.log("draw")
  }

  //Static Method
  static parse(str){
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}


const c = new Circle(2);
const circleObjFromStatic = Circle.parse(`{"radius":123}`)
c.draw();
