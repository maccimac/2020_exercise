const _content = new WeakMap();
class Stack{
  constructor(content=[]){
    // this.content = content;
    // private array
    _content.set(this, content)

  }
  get(){
    return this.content;
  }
  push(x){
    // this.content.push(x);
    _content.get(this).push(x);
    return this.content;
  }
  count(){
    // return this.content.length
    return _content.get(this).length;

  }
  pop(){
    if(_content.get(this).length === 0){
      throw new Error("Empty");
    }
    _content.get(this).pop();
  }
  show(){
    return _content.get(this);
  }
  peek(){
    let index = this.count() - 1;
    console.log(index)
    if (index > 0){
      return _content.get(this)[index]
    }else{
      throw new Error("Empty stack")
    }

  }
}

const stack = new Stack(["a", "b", "c"]);


// console.log(stack.count());
console.log(stack.count());
stack.pop();
stack.push("x");
stack.push("babe");
console.log(stack.show());


// stack.push("b");
// stack.push("c");
// console.log(stack.count());
// console.log("pop:", stack.pop());
console.log(stack.peek())
// console.log(stack.pop());
