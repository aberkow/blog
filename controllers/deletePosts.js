var Post = require('../models/postModel');

exports.deleteById = function(){
  Post.findByIdAndRemove(req.param.id, function(err){
    if (err) {
      console.error('Post not deleted', err);
    return;
    }
    console.log('post deleted');
    res.status(200).json({message: 'Post deleted.'});
  });
}

exports.deleteByTitle = function(){
  Post.findOneAndRemove(req.param.title, function(err){
    if (err) {
      console.error('Post not deleted', err);
    return;
    }
    console.log('post deleted');
    res.status(200).json({message: 'Post deleted.'});
  });
}
