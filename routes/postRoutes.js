var express = require('express');
var router = express.Router();
//var Post = require('../services/postServices');
var Post = require('../models/postModel');

router.post('/posts', function(req, res){
  Post.create({author: req.body.author, title: req.body.title, text: req.body.text, date: req.body.date}, function(post){
    console.log('from routes', req.body);
    res.status(201).json(post);
  }, function(err){
    res.status(400).json(err);
  });
});







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
