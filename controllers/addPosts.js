var Post = require('../models/postModel');

exports.add = function(){
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
}
