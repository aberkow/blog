var express = require('express');
var router = express.Router();
//var Post = require('../services/postServices');
var Post = require('../models/postModel');

//POST a blogpost to /posts
router.post('/posts', function(req, res){
  var post = new Post();
  post.author = req.body.author;
  post.title = req.body.title;
  post.text = req.body.text;
  post.date = req.body.date;

  post.save(function(err){
    if (err) {
      res.send(err);
      return;
    }
    res.status(201).json(post);
  });
});

//GET a list of all posts.
router.get('/posts', function(req, res){
  Post.find(function(err, posts){
    if (err) {
      res.send(err);
      return;
    }
    res.json(posts);
  });
});

//UPDATE a post ---- this doesn't work yet.
// router.update('/posts', function(req, res){
//   var id = req.body._id;
//   var newText = req.body.text;
//
//   Post.findByIdAndUpdate(id, newText, {new: true}, function(err, post){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.status(200).json(post);
//   });
// });


// router.post('/posts', function(req, res){
//   Post.create({author: req.body.author, title: req.body.title, text: req.body.text, date: req.body.date}, function(post){
//     console.log('from routes', req.body);
//     res.status(201).json(post);
//   }, function(err){
//     res.status(400).json(err);
//   });
// });







//how to handle mutli-part req.body?
// router.post('/posts', function(req, res){
//   //console.log(req);
//   Post.save({author: req.body.author, title: req.body.title, text: req.body.text}, function(post){
//     console.log('from routes', req.body);
//     res.status(201).json(post);
//   }, function(err){
//     console.log('there was an error...');
//     res.status(400).json(err);
//     //console.log('from routes', err);
//   });
// });
//
// router.get('/posts', function(req, res){
//   Post.list(function(posts){
//     res.json(posts);
//   }, function(err){
//     res.status(400).json(err);
//     //console.log('from get routes', err);
//   });
// });

// router.put(){
//
// }
//
// router.delete(){
//
// }

module.exports = router;
