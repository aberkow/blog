// module.exports = function(router){
//   var getPosts = require('../controllers/getPosts');
//   var addPosts = require('../controllers/addPosts');
//   var updatePosts = require('../controllers/updatePosts');
//   var deletePosts = require('../controllers/deletePosts');
//   //GET posts
//   router.get('/posts', getPosts.findAll);
//   router.get('/posts/:id', getPosts.findById);
//   router.get('/posts/:title', getPosts.findByTitle);
//   router.get('/posts/:author', getPosts.findByAuthor);
//   //POST posts
//
//   //router.post('/posts', addPosts.add);
//   //PUT posts
//   router.put('/posts/:id', updatePosts.updateById);
//   router.put('/posts/:title', updatePosts.updateByTitle);
//   //DELETE posts
//   router.delete('/posts/:id', deletePosts.deleteById);
//   router.delete('/posts/:title', deletePosts.deleteByTitle);
// }
