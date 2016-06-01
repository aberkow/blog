// var Post = require('../models/postModel');
//
//
// //export a function that extendds the router.
// exports.default = function(router){
//
//   //other routes can be added here.
//   //
//   router.post('/posts', function(req, res){
//     Post.create(req.body, function(err, post){
//       if (err){
//         res.status(403).json({});
//         console.error('post not created', err);
//         return;
//       }
//       res.send(post);
//     });
//   });
//
// };
//
//
//
//
// // module.exports = {
// //   add: function(req, res){
// //     Post.create(req.body, function(err, post){
// //       if (err) {
// //         res.send(err);
// //         return;
// //       }
// //       res.send(post);
// //     });
// //   }
// // }
//
// // exports.add = function(req, res){
// //   Post.create(req.body, function(err, post){
// //     if (err) {
// //       res.send(err);
// //       return;
// //     }
// //     //debugger;
// //     res.send(post);
// //   });
// // }
