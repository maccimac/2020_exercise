$.ajax({
  type: 'GET',
  url: 'https://jsonplaceholder.typicode.com/todos/4',
  data:{
    key1: "value1",
    key2: "valu2"
  },
  success: function(data){
    console.log(data)
  },
  error: function(){
    console.log(error)
  }
})
