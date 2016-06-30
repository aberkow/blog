/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	//var server = require('../../server.js');
	
	var mainForm = $('#main__form');
	
	var postContainer = $('.postView__container');
	var postTitle = $('.postView__title');
	var postAuthor = $('.postView__author');
	var postText = $('.postView__text');
	var postDelete = $('.postView__button-delete');
	
	$(document).ready(function(){
	  mainForm.on('submit', function(evt){
	    var title = $('#main__form-title').val();
	    var author = $('#main__form-author').val();
	    var text = $('#main__form-text').val();
	    evt.preventDefault();
	    var post = new BlogPost(title, author, text);
	    //validate the form.
	    if (!title || !author || !text){
	      console.log('Please fill out the post.');
	    } else {
	      addPost(post);
	      // $('#main__form-title').val('');
	      // $('#main__form-author').val('');
	      // $('#main__form-text').val('');
	    }
	    getPosts();
	  });
	  //ajax request to get posts from api
	  getPosts();
	
	  deletePost();
	
	  updatePost();
	  showUpdateForm();
	});
	
	showPosts = function(results){
	  var post = {
	    title: '',
	    author: '',
	    text: '',
	    id: '',
	    html: ''
	  }
	  for (var i = 0; i < results.length; i++){
	    post.title = results[i].title;
	    post.author = results[i].author;
	    post.text = results[i].text;
	    post.id = results[i]._id;
	    post.html += "<div class='postView__container' data-id=" + post.id + "><h2 class='postView__title'>" + post.title + "</h2><h3 class='postView__author'>" + post.author + "</h3>" + "<div class='postView__text-wrapper'><p class='postView__text'>" + post.text + "</p></div>" + "<button class='postView__button-update'>Update</button><button class='postView__button-delete'>Delete</button> </div><div class='postView__update' style='display:none;' data-id=" + post.id + "><form method='POST' class='postView__update-form'><input type='text' name='title' class='postView__update-title'><input type='text' name='author' class='postView__update-author'><textarea name='text' rows='8' cols='40' class='postView__update-text'></textarea><input type='submit' value='POST' class='postView__update-post'></form></div>"
	  }
	  $('.postView').append(post.html);
	}
	
	var showOnePost = function(results){
	  //perhaps use .html() to reset the contents of the post div.
	  var onePost = {
	    title: results.title,
	    author: results.author,
	    text: results.text,
	    id: results._id,
	    html: ''
	  }
	  onePost.html = "<div class='postView__container' data-id=" + onePost.id + "><h2 class='postView__title'>" + onePost.title + "</h2><h3 class='postView__author'>" + onePost.author + "</h3>" + "<div class='postView__text-wrapper'><p class='postView__text'>" + onePost.text + "</p></div>" + "<button class='postView__button-update'>Update</button><button class='postView__button-delete'>Delete</button> </div><div class='postView__update' style='display:none;' data-id=" + onePost.id + "><form method='POST' class='postView__update-form'><input type='text' name='title' class='postView__update-title'><input type='text' name='author' class='postView__update-author'><textarea name='text' rows='8' cols='40' class='postView__update-text'></textarea><input type='submit' value='POST' class='postView__update-post'></form></div>"
	  $('.postView').html(onePost.html);
	}
	
	var addPost = function(postData){
	  console.log(postData, 'from addPost');
	  $.post('/posts', postData, function(data){
	    console.log(data, 'from addPost');
	    $('.postView').html(data);
	  });
	}
	
	
	//try adding a getJSON request for just one post.
	//maybe
	// var getOnePost = function(postId){
	//   $.getJSON('/posts/', postId, function(data){
	//     console.log(data, 'from getOnePost');
	//     showOnePost(data);
	//   });
	// }
	
	var getPosts = function(){
	  $.getJSON('/posts', function(data){
	    console.log(data);
	    showPosts(data);
	  });
	}
	
	var updatePostAjax = function(newTitle, newAuthor, newText, postId){
	  var updatePost = {
	    title: newTitle,
	    author: newAuthor,
	    text: newText,
	    postId: postId
	  }
	  $.ajax({
	    url: '/posts/' + updatePost.postId,
	    data: updatePost,
	    dataType: 'JSON',
	    method: 'PUT'
	  })
	  .done(function(result){
	    console.log(result, 'from updatePostAjax');
	    console.log(updatePost);
	    $('.postView__container').remove();
	    getPosts();
	    //getOnePost(updatePost.postId);
	  })
	  .fail(function(jqXHR, error){
	    console.log(error, 'from updatePostAjax');
	  });
	}
	
	var showUpdateForm = function(){
	  $(document).on('click', '.postView__button-update', function(evt){
	    evt.preventDefault();
	    var targetId = $(evt.target).parent().attr('data-id');
	    var item = $(evt.target).parent();
	    var updateForm = item.next('.postView__update');
	    console.log(targetId, 'from updatePost');
	    updateForm.show();
	  });
	}
	
	var updatePost = function(){
	  $(document).on('submit', '.postView__update-form', function(evt){
	    evt.preventDefault();
	    var updateForm = $('.postView__update-form');
	    var postId = updateForm.parent().attr('data-id');
	    var newTitle = updateForm.children('.postView__update-title').val();
	    var newAuthor = updateForm.children('.postView__update-author').val();
	    var newText = updateForm.children('.postView__update-text').val();
	
	    updatePostAjax(newTitle, newAuthor, newText, postId);
	    updateForm.hide();
	
	  });
	}
	
	var deletePostAjax = function(postId){
	  var deletePost = {
	    postId: postId
	  }
	  $.ajax({
	    url: '/posts/' + deletePost.postId,
	    data: deletePost,
	    dataType: 'JSON',
	    method: 'DELETE'
	  })
	  .done(function(result){
	    console.log(result, 'from deletePostAjax');
	
	  })
	  .fail(function(jqXHR, error){
	    console.log(error, 'from deletePostAjax');
	  });
	}
	
	var deletePost = function(){
	  $(document).on('click', '.postView__button-delete', function(evt){
	    evt.preventDefault();
	    var targetId = $(evt.target).parent().attr('data-id');
	    console.log(targetId, 'from deletePostView');
	    var targetToRemove = $(evt.target).parent().remove();
	    deletePostAjax(targetId);
	  });
	}
	
	function BlogPost(title, author, text){
	  //postInfo is an object that contains everything going to the database.
	  this.title = title;
	  this.author = author;
	  this.text = text;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map