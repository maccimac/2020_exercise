/** This is our server file! Where the magic happens. **/

// require express, for routing, and body parser, for form parsing
let express = require('express'),
    bodyParser = require('body-parser');

// connect to db models
let db = require('./models');

// make a new express app named "app".
let app = express();

// Body parser and encoding setup.
app.use(bodyParser.urlencoded({
    extended: true
}));

// get all
app.get('/api/posts', (req, res) => {
  //db used as from line 8
  db.Post.find(err, allPosts)=>{
    if(err){
      console.log(`index error: ${error}`)
    }else
    // res.json means we're sending/ responding back all our json
    res.json({
      post: allPosts
    })
  }
});

// get one
app.get('/api/posts/:id', (req, res) => {
  db.Post.findOne({
    // params is whatever is in the url, ex: :id
    _id: req.params.id
  }), (err,Post) =>{
    if (err){
      console.log(`show error: ${error}`);
    }
    res.json(Post);
  }

});

// create new
app.post('/api/posts', (req, res) => {
  // we are using req.body is because we are getting our data from form
  let newPost = new db.Post(req.body);
  newPost.save( (err,Post) =>{
    if(err){
      console.log(`save error: ${err}`);
    }
    console.log(`saved new Post: ${Post.name}`)
  })
});

// delete one
app.delete('/api/posts/:id', (req, res) => {
});

// update one
app.put('/api/posts/:id', (req, res) => {
});

// This is where we serve our API!
app.listen(process.env.PORT || 5000, () => {
    console.log('Your First API is running on http://localhost:5000/');
});
