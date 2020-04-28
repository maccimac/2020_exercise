const _radius = new WeakMap();

class Circle{
  constructor(radius){
    _radius.set(this, radius);

    // Object.defineProperty(this, 'radius', {
    //   get: function(){
    //     //
    //   }
    // })

  }
  // Can be accessed like a property
  get radius(){
    return _radius.get(this);
  }

  // Can be set like property
  // ex: c.radius = 20
  set radius(value){
    // Validation
    if(value <= 0) throw new Error("Invalid");
    _radius.set(this, value)
  }

  getRadius(){
    return _radius.get(this);
  }
}


const c = new Circle(4);
