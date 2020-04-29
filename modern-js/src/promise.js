export const tryFetch = () =>{
  console.log("A");
  fetch('https://jsonplaceholder.typicode.com/todos/4')
  .then(response => response.json())
  .then(data =>{
    console.log("B");
  })
  .catch(err=>{
    console.error(err)
  })
  console.log("C")
}

export const mediaDev = () =>{
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then(stream =>{
    console.log("Video enables")
  }).catch(err =>{
    console.log(err)
  })
}
