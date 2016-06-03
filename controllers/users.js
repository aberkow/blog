var User = require('../models/userModel');

exports.default = function(router){

  // router.get('/users', function(req, res){
  //   User.find({}, function)
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

  //post login w/ basic validation
  router.post('/login', function(req, res){
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
      return res.status(200).json({
        message: 'user logged in'
      });
      //return res.render()
    } else {
      return res.status(500).json({
        message: 'server error'
      });
    }
  });
}



// exports.default = function(router){
//   //get
//   router.get('/users', function(req, res){
//     User.find({}, function(err, users){
//       if (err) {
//         return res.status(400).json(err);
//       }
//       res.status(200).json(users);
//     });
//   });
//   //create
//   router.post('/users', function(req, res){
//     User.create(req.body, function(err, user){
//       if (err){
//         res.status(403).json({});
//         console.error('user not created', err);
//         return;
//       }
//       res.send(user);
//     });
//   });
//   //update
//   router.put('/users/:id', function(req, res){
//     User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user){
//       if (err) {
//         console.error('User not updated', err);
//         return;
//       }
//       res.status(200).json(user);
//     });
//   });
//   //delete
//   router.delete('/users/:id', function(req, res){
//     User.findByIdAndRemove(req.param.id, function(err){
//       if (err) {
//         console.error('User not deleted', err);
//         return;
//       }
//       console.log('user deleted');
//       res.status(200).json({message: 'User deleted'});
//     });
//   });
// }
