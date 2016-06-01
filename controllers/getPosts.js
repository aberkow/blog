var Post = require('../models/postModel');

module.exports = {
  findAll: function(req, res){
    Post.find(function(err, posts){
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.status(200).json(posts);
    });
  },
  findById: function(req, res){
    Post.findById(req.params.id, function(err, post){
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.json(post);
    });
  },
  findByTitle: function(req, res){
    Post.findOne(req.params.title, function(err, post){
      if (err){
        res.status(400).json(err);
        return;
      }
      res.json(post);
    });
  },
  findByAuthor: function(req, res){
    Post.findOne(req.params.author, function(err, post){
      if (err){
        res.status(400).json(err);
        return;
      }
      res.json(post);
    });
  }
}



// exports.findAll = function(req, res){
//   Post.find(function(err, posts){
//     if (err) {
//       res.status(400).json(err);
//       return;
//     }
//     res.status(200).json(posts);
//   });
// }
//
// exports.findById = function(req, res){
//   Post.findById(req.params.id, function(err, post){
//     if (err) {
//       res.status(400).json(err);
//       return;
//     }
//     res.json(post);
//   });
// }
//
// exports.findByTitle = function(){
//   Post.findOne(req.params.title, function(err, post){
//     if (err){
//       res.status(400).json(err);
//       return;
//     }
//     res.json(post);
//   });
// }
//
// exports.findByAuthor = function(){
//   Post.findOne(req.params.author, function(err, post){
//     if (err){
//       res.status(400).json(err);
//       return;
//     }
//     res.json(post);
//   });
// }
