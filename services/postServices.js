var Post = require('../models/postModel');




//just pass one object called userData that holds all the attributes???????
exports.save = function(userData, callback, errback){
  Post.create(userData, function(err, post){
      if (err){
        errback(err);
        return;
      }
      callback(post);
  });
};


// exports.save = function(author, title, date, tags, text, callback, errback){
//   Post.create({author: author}, {title: title}, {date: date}, {tags: tags}, {text: text}, function(err, post){
//     if (err) {
//       errback(err);
//       return;
//     }
//     callback(post);
//   });
// };


// exports.save = function(author, title, text, callback, errback){
//   Post.create([{author: author}, {title: title}, {text: text}], function(err, post){
//     if (err){
//       errback(err);
//       return;
//     }
//     console.log(post);
//     debugger;
//     callback(post);
//   });
// };

exports.list = function(callback, errback){
  Post.find(function(err, posts){
    if (err) {
      errback(err);
      //console.log('from services', err);
      return;
    }
    callback(posts);
  });
};

// exports.update = function(){
//
// }
//
// exports.delete = function(){
//
// }
