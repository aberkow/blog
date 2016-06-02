var User = require('../models/userModel');

exports.default = function(router){
  //get
  router.get('/users', function(req, res){
    User.find({}, function(err, users){
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(users);
    });
  });
  //create
  router.post('/users', function(req, res){
    User.create(req.body, function(err, user){
      if (err){
        res.status(403).json({});
        console.error('user not created', err);
        return;
      }
      res.send(user);
    });
  });
  //update
  router.put('/users/:id', function(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user){
      if (err) {
        console.error('User not updated', err);
        return;
      }
      res.status(200).json(user);
    });
  });
  //delete
  router.delete('/users/:id', function(req, res){
    User.findByIdAndRemove(req.param.id, function(err){
      if (err) {
        console.error('User not deleted', err);
        return;
      }
      console.log('user deleted');
      res.status(200).json({message: 'User deleted'});
    });
  });
}
