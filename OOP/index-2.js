function mixin(target, ...sources){
  // Rest and spread operator
  Object.assign(target, ...sources)
}

const canEat = {
  eat: function(){
    this.hunger--;
    console.log("eating")
  },
  cook: function(){

  }
}

const canWalk = {
  walk: function(){
    console.log("walking");
  }
}

const canSwim={
  swim: function(){
    console.log("swim")
  },
  surf: function(){
    console.log("swim")
  }

}

function Person(){

}

Object.assign(Person.prototype, canEat, canWalk, canSwim);

const josh = new Person()
console.log(josh)

function Goldfish(){

}
mixin(Goldfish.prototype, canEat, canSwim);

const goldie = new Goldfish

console.log(goldie)
