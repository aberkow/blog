var mongoose = require('mongoose');
var postModel = require('./postModel');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  blogPost: [postModel]
  //password: {type: String, required: true}
});

var User = mongoose.model('User', UserSchema);

var testUser = new User({
  userName: 'testUser',
  firstName: 'Joe',
  lastName: 'Bob',
  blogPost: [postModel]
});
debugger;
//testUser.blogPost[0].title etc is still undefined.
console.log(testUser.userName + ' ' + testUser.firstName + ' ' + testUser.lastName + ' ' + testUser.blogPost[0].title);


// console.log(testUser.userName + ' ' + testUser.firstName + ' ' + testUser.lastName + ' ' + testUser.blogPost[0].title, testUser.blogPost[0].text);



module.exports = User;
