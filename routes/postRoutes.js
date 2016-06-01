module.exports = function(router){
  var getPosts = require('../controllers/getPosts');
  var addPosts = require('../controllers/addPosts');
  var updatePosts = require('../controllers/updatePosts');
  var deletePosts = require('../controllers/deletePosts');
  //GET posts
  router.get('/posts', getPosts.findAll);
  router.get('/posts/:id', getPosts.findById);
  router.get('/posts/:title', getPosts.findByTitle);
  router.get('/posts/:author', getPosts.findByAuthor);
  //POST posts
  router.post('/posts', addPosts.add);
  //PUT posts
  router.put('/posts/:id', updatePosts.updateById);
  router.put('/posts/:title', updatePosts.updateByTitle);
  //DELETE posts
  router.delete('/posts/:id', deletePosts.deleteById);
  router.delete('/posts/:title', deletePosts.deleteByTitle);
}




// var express = require('express');
// var router = express.Router();
// var Post = require('../models/postModel');
//
// //POST a blogpost to /posts
// router.post('/posts', function(req, res){
//   var post = new Post();
//   post.author = req.body.author;
//   post.title = req.body.title;
//   post.text = req.body.text;
//   post.date = req.body.date;
//
//   post.save(function(err){
//     if (err) {
//       res.send(err);
//       return;
//     }
//     res.status(201).json(post);
//   });
// });
//
// //GET a list of all posts.
// router.get('/posts', function(req, res){
//   Post.find(function(err, posts){
//     if (err) {
//       res.status(400).json(err);
//       return;
//     }
//     res.json(posts);
//   });
// });
//
// //GET one post by ID
// router.get('/posts/:id', function(req, res){
//   Post.findById(req.params.id, function(err, post){
//     if (err) {
//       res.status(400).json(err);
//       return;
//     }
//     res.json(post);
//   });
// });
//
// //GET one post by title
// router.get('/posts/:title', function(req, res){
//   Post.findOne(req.params.title, function(err, post){
//     if (err){
//       res.status(400).json(err);
//       return;
//     }
//     res.json(post);
//   });
// });
// //{text: req.body.text} - you can pass in one object argument at a time, or the whole req.body.
// //UPDATE a post by id
// router.put('/posts/:id', function(req, res){
//   Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post){
//     if (err) {
//       console.error('Post not updated', err);
//       return;
//     }
//     res.status(200).json(post);
//   });
// });
//
// //UPDATE a post by title
// router.put('/posts/:title', function(req, res){
//   Post.findOneAndUpdate(req.params.title, req.body, {new: true}, function(err, post){
//     if (err) {
//       console.error('Post not updated', err);
//       return;
//     }
//     //console.log(req.body.text);
//     //debugger;
//     res.status(200).json(post);
//   });
// });
//
// //DELETE a post by id
// router.delete('/posts/:id', function(req, res){
//   Post.findByIdAndRemove(req.param.id, function(err){
//     if (err) {
//       console.error('Post not deleted', err);
//     return;
//     }
//     console.log('post deleted');
//     res.status(200).json({message: 'Post deleted.'});
//   });
// });
//
// //DELETE a post by title
// router.delete('/posts/:title', function(req, res){
//   Post.findOneAndRemove(req.param.title, function(err){
//     if (err) {
//       console.error('Post not deleted', err);
//     return;
//     }
//     console.log('post deleted');
//     res.status(200).json({message: 'Post deleted.'});
//   });
// });
//
//
// module.exports = router;
