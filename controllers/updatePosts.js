// var Post = require('../models/postModel');
//
// exports.default = function(router){
//   //update post by id
//   router.put('/posts/:id', function(req, res){
//     Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post){
//       if (err){
//         console.error('Post not updated', err);
//         return;
//       }
//       res.status(200).json(post);
//     });
//   });
//   //update post by title
//   router.post('/posts', function(req, res){
//     Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post){
//       if (err){
//         console.error('Post not updated', err);
//         return;
//       }
//       res.status(200).json(post);
//     });
//   });
// }

// exports.updateById = function(req, res){
//   Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post){
//     if (err) {
//       console.error('Post not updated', err);
//       return;
//     }
//     res.status(200).json(post);
//   });
// }
//
// exports.updateByTitle = function(req, res){
//   Post.findOneAndUpdate(req.params.title, req.body, {new: true}, function(err, post){
//     if (err) {
//       console.error('Post not updated', err);
//       return;
//     }
//     res.status(200).json(post);
//   });
// }
