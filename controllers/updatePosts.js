var Post = require('../models/postModel');

exports.updateById = function(){
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post){
    if (err) {
      console.error('Post not updated', err);
      return;
    }
    res.status(200).json(post);
  });
}

exports.updateByTitle = function(){
  Post.findOneAndUpdate(req.params.title, req.body, {new: true}, function(err, post){
    if (err) {
      console.error('Post not updated', err);
      return;
    }
    //console.log(req.body.text);
    //debugger;
    res.status(200).json(post);
  });
}
