var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  //author: String,
  title: String,
  text: String,
  //date: {type: Date, default: Date.now},
  //testId: Schema.Types.ObjectId
});

//mongoose model
var Post = mongoose.model('Post', PostSchema);

//virtual document for testing format
var testPost = new Post({
  //author: 'Adam',
  title: 'First post',
  text: 'My first post',
  //date: new Date,
  //testId: new mongoose.Types.ObjectId
});

//logging virtual doc by hand
console.log(testPost.author + ' ' + testPost.title + ' ' + testPost.text + ' ' + testPost.date  + ' ' + testPost.testId);

//this doesn't work yet. But it should allow a virtual function to log properties
// PostSchema.virtual('test').get(function(){
//   return this.author + ' ' + this.title + ' ' + this.text;
// });
//
// console.log(testPost.test);



//to get rid of errors - export the Schema not the model to the parent model. But... see userModel...
module.exports = PostSchema;
//module.exports = Post;
