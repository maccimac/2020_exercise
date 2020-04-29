export const getToDo = () =>{
  fetch('https://jsonplaceholder.typicode.com/todos/4', {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key1: "value"
    })
  })
  .then(response => response.json())
  .then(data =>{
    console.log("data");
  })
}
