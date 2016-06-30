var User = require('../models/userModel');
var bcrypt = require('bcrypt');

exports.default = function(router){

  //post login w/ basic validation
  router.post('/', function(req, res){
    //check that there's a req.body
    console.log(req.body, 'check proper request');
    if (!req.body){
      return res.status(400).json({
        message: 'No request body'
      });
    }
    //make sure there's a username
    if (!('username' in req.body)){
      return res.status(422).json({
        message: 'Missing field: username'
      });
    }
    //set variable username
    var username = req.body.username;
    //check username is a String
    if (typeof username !== 'string'){
      return res.status(422).json({
        message: 'Incorrect field type: username'
      });
    }
    //get rid of spaces before/after the username
    username = username.trim();
    //check that it still has a length - username can't be just spaces
    if (username === ''){
      return res.status(422).json({
        message: 'Incorrect field length: username'
      });
    }
    //make sure there's a password
    if (!('password' in req.body)){
      return res.status(422).json({
        message: 'Missing field: password'
      });
    }
    //set variable password
    var password = req.body.password;
    //check password is a String
    if (typeof password !== 'string'){
      return res.status(422).json({
        message: 'Incorrect field type: password'
      });
    }
    //get rid of spaces before/after password
    password = password.trim();
    //check that password still has a length
    if (password === ''){
      return res.status(422).json({
        message: 'Incorrect field length: username'
      });
    }

    //create the user...?
    var user = new User({
      username: username,
      password: password
    });

    //every time a user is logged in there needs to be a response.
    if (user) {
      res.redirect('../');
      // res.redirect('../posts');
      // res.status(200).json({
      //   message: 'user logged in'
      // });

    } else {
      return res.status(500).json({
        message: 'server error'
      });
    }
  });
}

// router.get('/login', function(req, res){
//   console.log(req.body);
//   User.find({}, function(err, users){
//     if (err){
//       return res.status(400).json(err);
//     }
//     res.status(200).json(users);
//   });
// });

//get list of users???
// rouer.get('/users', function(req, res){
//   User.find({}, function(err, users){
//     if (err){
//       return res.status(400).json(err);
//     }
//     res.status(200).json(users);
//   });
// });

//check http base authentication
//use basic auth js as a middleware

// //salt the password
// bcrypt.genSalt(10, function(err, salt){
//   if (err){
//     return res.status(500).json({
//       message: 'Internal server error'
//     });
//   }
//   //has the password
//   bcrypt.hash(password, salt, function(err, hash){
//     if (err){
//       return res.status(500).json({
//         message: 'Internal server error'
//       });
//     }
//
//   });
// });
