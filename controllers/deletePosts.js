var Post = require('../models/postModel');

module.exports = {
  deleteById: function(req, res){
    Post.findByIdAndRemove(req.param.id, function(err){
      if (err) {
        console.error('Post not deleted', err);
      return;
      }
      console.log('post deleted');
      res.status(200).json({message: 'Post deleted.'});
    });
  },
  deleteByTitle: function(req, res){
    Post.findOneAndRemove(req.param.title, function(err){
      if (err) {
        console.error('Post not deleted', err);
      return;
      }
      console.log('post deleted');
      res.status(200).json({message: 'Post deleted.'});
    });
  }
}

// exports.deleteById = function(req, res){
//   Post.findByIdAndRemove(req.param.id, function(err){
//     if (err) {
//       console.error('Post not deleted', err);
//     return;
//     }
//     console.log('post deleted');
//     res.status(200).json({message: 'Post deleted.'});
//   });
// }
//
// exports.deleteByTitle = function(req, res){
//   Post.findOneAndRemove(req.param.title, function(err){
//     if (err) {
//       console.error('Post not deleted', err);
//     return;
//     }
//     console.log('post deleted');
//     res.status(200).json({message: 'Post deleted.'});
//   });
// }
