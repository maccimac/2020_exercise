/** This is our server file! Where the magic happens. **/

// require express, for routing, and body parser, for form parsing
let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// connect to db models
let db = require('./models');

// make a new express app named "app".
let app = express();

app.use(cors());
// Body parser and encoding setup.
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// NOTE: Body parser defines what res.body you want to send. Is it a formData or json etc

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// get all
app.get('/api/posts', (req, res) => {
  //db used as from line 8
  db.Post.find((err, allPosts)=>{
    if(err){
      console.log(`index error: ${error}`)
    }else{
    // res.json means we're sending/ responding back all our json
      res.json({
        post: allPosts
      })
    }
  })
});

// get one
app.get('/api/posts/:id', (req, res) => {
  db.Post.findOne({
    // params is whatever is in the url, ex: :id
    _id: req.params.id
  }, (err, post) =>{
    if (err){
      console.log(`show error: ${error}`);
    }
    console.log(post)
    res.json({post});
  })

});

// create new
app.post('/api/posts', (req, res) => {
  // we are using req.body is because we are getting our data from form
  let newPost = new db.Post(req.body);
  newPost.save( (err, post) =>{
    if(err){
      console.log(`save error: ${err}`);
    }
    console.log(`saved new Post: ${post}`)
    res.json(post)
  })
});

// delete one
app.delete('/api/posts/:id', (req, res) => {
  let postId = req.params.id;
  // req.params = url
  // req.body = sent from forms

  db.Post.findOneAndRemove({
    _id: postId
  })
    //populate the model with that id we get (?)
    .populate('post')
    // execute the delete methor
    .exec((err, deletedPostData) =>{
      res.json(deletedPostData);
    })


});

// update one
app.put('/api/posts/:id', (req, res) => {
  let postId = req.params.id;
  db.Post.findOne({
    _id: postId
  }, (err, foundPost) => {
    if (err){
      console.log("Could not find creature")
    }
    foundPost.name = req.body.name || foundPost.name;
    foundPost.category = req.body.category || foundPost.category;
    // let newModifiedDate;
    if (!foundPost.modifyDates || foundPost.modifyDates==[]){
      foundPost.modifyDates = [new Date()]
    }else{
      foundPost.modifyDates = foundPost.modifyDates.push(new Date())
    }

    console.log(`updating ${foundPost.name}`)

    foundPost.save((err, post) =>{
      if (err){
        console.log(`update error: ${err}`)
      }
      console.log(`updated: ${post.title}`);
      res.json(post)
    })


  })
});

// This is where we serve our API!
app.listen(process.env.PORT || 5000, () => {
    console.log('Your First API is running on http://localhost:5000/');
});
