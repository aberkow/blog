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
  blogPost: [{
    title: 'test'
  }]
});
debugger;
//testUser.blogPost[0].title etc is undefined if testUser.blogPost = [postModel]. But returns as expected if blogPost: [{ title: 'test'}]
console.log(testUser.userName + ' ' + testUser.firstName + ' ' + testUser.lastName + ' ' + testUser.blogPost[0].title);


// console.log(testUser.userName + ' ' + testUser.firstName + ' ' + testUser.lastName + ' ' + testUser.blogPost[0].title, testUser.blogPost[0].text);



module.exports = User;
