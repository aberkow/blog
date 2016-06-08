var Post = require('../models/postModel');
var middleware = require('../middleware');
//export a function that extendds the router.
//default in this case is a node reserved word.
exports.default = function(router){
  //get
  //this is from wednesday night session - break to new branch to test.
  // router.get('/posts', function(req, res){
  //   Post.find({})
  //   .where(req.query.where || '')
  //         .sort(req.query.sort || '')
  //         .select(req.query.select || '')
  //         .limit(req.query.limit || '')
  //         .skip(req.query.skip || '')
  //         .populate(req.query.populate || '')
  //   .exec( function(err, posts){
  //     if (err) {
  //       res.status(400).json(err);
  //       return;
  //     }
  //     res.status(200).json(posts);
  //   });
  // });

  router.get('/posts', function(req, res){
    Post.find({}, function(err, posts){
      if (err){
        res.status(400).json(err);
        return;
      }
      res.status(200).json(posts);
    });
  });

  router.get('/posts/:id', function(req, res){
    console.log({_id: req.params.id}, 'id test');
    Post.findOne({_id: req.params.id})
    .exec( function(err, posts){
      console.log(arguments, 'arguments');
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.status(200).json(posts);
    });
  });
  //get filter
  // example of filtering /posts/filter?type='title'&query='my first post'
  // router.get('/posts/filter', function(req, res){
  //   var query = {};
  //   query[req.query.type || 'title'] = req.query.query;
  //   Post.find(query, function(err, posts){
  //     if (err) {
  //       return res.status(400).json(err);
  //     }
  //     res.status(200).json(posts);
  //   });
  // });

  //update
  router.put('/posts/:id', middleware.auth, function(req, res){
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post){
      if (err){
        console.error('Post not updated', err);
        return;
      }
      res.status(200).json(post);
    });
  });
  //create
  router.post('/posts', middleware.auth, function(req, res){
    console.log(req.body);
    Post.create(req.body, function(err, post){
      if (err){
        res.status(403).json({});
        console.error('post not created', err);
        return;
      }
      res.send(post);
    });
  });
  //delete
  router.delete('/posts/:id', middleware.auth, function(req, res){
    Post.findByIdAndRemove(req.param.id, function(err){
      if (err) {
        console.error('Post not deleted', err);
      return;
      }
      console.log('post deleted');
      res.status(200).json({message: 'Post deleted.'});
    });
  });
};
