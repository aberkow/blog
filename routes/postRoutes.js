var express = require('express');
var router = express.Router();
var Post = require('../services/postServices');

//how to handle mutli-part req.body?
router.post('/posts', function(req, res){
  console.log(req);
  Post.save(req.body.author, req.body.title, req.body.text, function(post){
    res.status(201).json(post);
  }, function(err){
    res.status(400).json(err);
    //console.log('from routes', err);
  });
});

router.get('/posts', function(req, res){
  Post.list(function(posts){
    res.json(posts);
  }, function(err){
    res.status(400).json(err);
    //console.log('from get routes', err);
  });
});

// router.put(){
//
// }
//
// router.delete(){
//
// }

module.exports = router;
