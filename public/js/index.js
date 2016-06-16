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
    }
    getPosts();
  });
  //ajax request to get posts from api
  getPosts();
  updatePost();
  deletePost();
});

var addPost = function(postData){
  console.log(postData, 'from addPost');
  $.post('/posts', postData, function(data){
    console.log(data, 'from addPost');
    $('.postView').html(data);
  });
}

var getPosts = function(){
  $.getJSON('/posts', function(data){
    console.log(data);
    showPosts(data);
  });
}

var showPosts = function(results){
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
    post.html += "<div class='postView__container' data-id=" + post.id + "><h2 class='postView__title'>" + post.title + "</h2>" + "<h3 class='postView__author'>" + post.author + "</h3>" + "<div class='postView__text-wrapper'><p class='postView__text'>" + post.text + "</p></div>" + "<button class='postView__button-update'>Update</button><button class='postView__button-delete'>Delete</button> </div>"
  }
  $('.postView').append(post.html);
}

var updatePostAjax = function(postId){
  var updatePost = {
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

  })
  .fail(function(jqXHR, error){
    console.log(error, 'from updatePostAjax');
  });
}

var updatePost = function(){
  $(document).on('click', '.postView__button-update', function(evt){
    evt.preventDefault();
    var targetId = $(evt.target).parent().attr('data-id');
    var item = $(evt.target).parent();
    var updateTitle = item.children('.postView__title');
    var updateAuthor = item.children('.postView__author');
    var updateText = item.children('.postView__text-wrapper');
    console.log(targetId, 'from updatePost');
    //add updatePostAjax here.
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
