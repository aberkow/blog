var mongoose = require('mongoose');
//holds all data for model abstraction.
//look at mongoose docs for validation
var PostSchema = new mongoose.Schema({
  author: {type: String},
  title: {type: String},
  //date: {type: Date, default: Date.now},
  //tags: {type: Array, required: false},
  text: {type: String}

});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
// new Post({author: 'testauth', title: 'testtitle', text: 'test'}).save();
