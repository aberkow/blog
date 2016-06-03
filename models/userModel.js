var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
  //should I bring in my postModel as a subdocument?
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
