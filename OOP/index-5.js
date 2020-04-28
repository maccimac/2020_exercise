// const _radius = Symbol();
const _radius = new WeakMap();
const _move = new WeakMap();
const _isSymbol =  Symbol();
const _draw = Symbol();

class Circle{
  constructor(radius){
  //  this.radius = radius;
    // this['radius'] = radius;
    // this[_radius] = radius;
    _radius.set(this, radius)
    this[_isSymbol] = "is Symbol";
    // _move.set(this, function(){
    //   console.log("move", this);
    // })
    _move.set(this, ()=>{
      console.log("move", this);
    })

  }

  [_draw](){


  }
  draw(){
    console.log(_radius.get(this));
    _move.get(this)();
    console.log("draw")
  }
}

const c = new Circle(1);
console.log(c.radius);
console.log(_radius)
const arrayOfKeysC = Object.getOwnPropertySymbols(c);

c.draw();
