var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  author: String,
  title: String,
  text: String,
  date: {type: Date, default: Date.now},
  //testId: Schema.Types.ObjectId
});

//mongoose model
var Post = mongoose.model('Post', PostSchema);


// PostSchema.methods.create = function(postDataObj, errback, callback){
//   Post.create(postDataObj, function(err, post){
//     if (err){
//       errback(err);
//       return;
//     }
//     callback(post);
//   });
// };


//virtual document for testing format
var testPost = new Post({
  author: 'Adam',
  title: 'First post',
  text: 'My first post',
  date: new Date,
  //testId: new mongoose.Types.ObjectId
});

//logging virtual doc by hand
console.log(testPost.author + ' ' + testPost.title + ' ' + testPost.text + ' ' + testPost.date /* + ' ' + testPost.testId */);

//this doesn't work yet. But it should allow a virtual function to log properties
PostSchema.virtual('test').get(function(){
  return this.author + ' ' + this.title + ' ' + this.text;
});

console.log('virtual post', testPost.test);







// var mongoose = require('mongoose');
// //holds all data for model abstraction.
// //look at mongoose docs for validation
// var PostSchema = new mongoose.Schema({
//   author: {type: String},
//   title: {type: String},
//   //date: {type: Date, default: Date.now},
//   //tags: {type: Array, required: false},
//   text: {type: String}
//
// });
//
// var Post = mongoose.model('Post', PostSchema);
//
// module.exports = Post;
// // new Post({author: 'testauth', title: 'testtitle', text: 'test'}).save();


module.exports = Post;
