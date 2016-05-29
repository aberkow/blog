var express = require('express');
var router = express.Router();
//var Post = require('../services/postServices');
var Post = require('../models/postModel');
var User = require('../models/userModel');

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
      res.status(400).json(err);
      return;
    }
    res.json(posts);
  });
});

//GET a list of all users.
router.get('/users', function(req, res){
  User.find(function(err, users){
    if (err){
      res.status(400).json(err);
      return;
    }
    res.json(users);
  });
});


//GET one post
router.get('/posts/:id', function(req, res){
  Post.findById(req.params.id, function(err, post){
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(post);
  });
});

//GET one user - currently uses find by id but it should prb be userName...
router.get('/users/:id', function(req, res){
  User.findById(req.params.id, function(err, user){
    if (err){
      res.status(400).json(err);
      return;
    }
    res.json(user);
  });
});
//{text: req.body.text} - you can pass in one object argument at a time, or the whole req.body.
//UPDATE a post by id
router.put('/posts/:id', function(req, res){
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post){
    if (err) {
      console.error('Post not updated', err);
      return;
    }
    //console.log(req.body.text);
    //debugger;
    res.status(200).json(post);
  });
});

//DELETE a post by id
router.delete('/posts/:id', function(req, res){
  Post.findByIdAndRemove(req.param.id, function(err){
    if (err) {
      console.error('Post not deleted', err);
    return;
    }
    console.log('post deleted');
    res.status(200).json({message: 'Post deleted.'});
  });
});

module.exports = router;
