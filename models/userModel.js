var mongoose = require('mongoose');

//do I need to add postModel as a subdocument to UserSchema?

var UserSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  LastName: String
  //password: {type: String, required: true}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
