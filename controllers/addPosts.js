var Post = require('../models/postModel');

module.exports = {
  add: function(req, res){
    Post.create(req.body, function(err, post){
      if (err) {
        res.send(err);
        return;
      }
      res.send(post);
    });
  }
}

// exports.add = function(req, res){
//   Post.create(req.body, function(err, post){
//     if (err) {
//       res.send(err);
//       return;
//     }
//     //debugger;
//     res.send(post);
//   });
// }
