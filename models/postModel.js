var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String, required: true},
  date: {type: String, required: true},
  tags: {type: Array, required: false},
  text: {type: String, required: true}
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
