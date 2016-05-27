var Post = require('../models/postModel');

exports.run = function(callback, errback){
  Post.create({author: 'Stephen King', title: 'How to write scary stories', text: 'A scary text'}, {author: 'Michael Chabon', title: 'Comic books!', text: 'A post about comics'}, {author: 'Guest', title: 'Guest Post', text: 'Some ideas'}, function(err, posts){
    if (err) {
      errback(err);
      return;
    }
    callback(posts);
  });
};

if (require.main === module){
  require('./connect');
  exports.run(function(){
    var mongoose = require('mongoose');
  }, function(err){
    console.error(err);
  });
}
