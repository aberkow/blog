var mongoose = require('mongoose');
var user = require('./userModel');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  author: String,
  title: String,
  text: String,
  //each post has a user because it's easier to maintain.
  //check to see if ref 'User' needs to be required.
  user: { type: Schema.Types.ObjectId, ref: 'User' }
  //date: {type: Date, default: Date.now},
  //testId: Schema.Types.ObjectId
});

//mongoose model
var Post = mongoose.model('Post', PostSchema);

//virtual document for testing format
var testPost = new Post({
  author: 'Adam',
  title: 'First post',
  text: 'My first post',
  //date: new Date,
  //testId: new mongoose.Types.ObjectId
});

//logging virtual doc by hand
// console.log(testPost.author + ' ' + testPost.title + ' ' + testPost.text + ' ' + testPost.date /* + ' ' + testPost.testId */);

//this doesn't work yet. But it should allow a virtual function to log properties
PostSchema.virtual('test').get(function(){
  return this.author + ' ' + this.title + ' ' + this.text;
});

console.log(testPost.test);

module.exports = Post;

//best is to put these down here.
//ataching method to the singleton (prototype)
//MySchema.statics.instanceMethodA = function() {};
//ataching method to the instance
//new Post({})
