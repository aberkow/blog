var mongoose = require('mongoose');

//look at mongoose docs for validation
var PostSchema = new mongoose.Schema({
  author: String,
  title: String,
  //date: {type: String, required: true},
  //tags: {type: Array, required: false},
  text: String
});

var Post = mongoose.model('Post', PostSchema);

//var testPost = new Post('author', 'title', 'text');

module.exports = Post;
//module.exports = testPost;
