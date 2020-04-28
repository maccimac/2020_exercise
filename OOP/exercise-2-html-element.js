const HtmlElement = function(){
  this.click = function(){
    console.log("click")
  }
}
HtmlElement.prototype.focus = function(){
  console.log("focused");
}


const HtmlSelectElement = function(array=[]){
  let _array = array;
  this.array = array;
  // this.addElement =
  Object.defineProperty(this, "duration",{
    value: array,
  })
  this.removeElement = function(element){
    this.array.forEach( function(arrElement, index){
      console.log(arrElement)
      if(element == arrElement){
        _array.splice(index,1);
        this.array = _array;
        return this.array;
      }else{
        return new Error(`${element} not found`)
      }
    })
  }
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
HtmlSelectElement.prototype.addElement = function(element){
  this.array.push(element);
};
HtmlSelectElement.prototype.render = function(){
  let htmlString = "<select>"
  for (sisterNum in this.array){
    htmlString += `
      <option id="${sisterNum}">${this.array[sisterNum]}</option>
    `
  }
  htmlString += "</select>";
  return htmlString;
}

const HtmlImageElement = function(srcUrl){
  this.src = srcUrl;
}
HtmlImageElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlImageElement;
HtmlImageElement.prototype.render = function(){
  return (`<img src="${this.src}"></img>`)
}

let sis = new HtmlSelectElement(["jen", "jul", "jas"]);

sis.removeElement("jas");
sis.addElement("bettina");

sis.click();

let profilePic = new HtmlImageElement("https://source.unsplash.com/400x400/?coffee");

document.querySelector(".image-holder").innerHTML = profilePic.render();

document.querySelector(".select-holder").innerHTML = sis.render();
