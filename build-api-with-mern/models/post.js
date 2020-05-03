// set up mongoose
let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema = Blueprint
let PostSchema = new Schema({
  // list model properties
  // ex: String, Number, Boolean
  title: String,
  category: String,
  publishDate: Date,
  modifyDates: [ Date ],
  // featuredImg: String
})

let Post = mongoose.model('Post', PostSchema);
module.exports = Post;
