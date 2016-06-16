//take action off the form.
//make a submit handler that calls the api function
//take the data that comes back and render to screen.


var mainForm = $('#main__form');

var postContainer = $('.postView__container');
var postTitle = $('.postView__title');
var postAuthor = $('.postView__author');
var postText = $('.postView__text');
var postDelete = $('.postView__button-delete');

$(document).ready(function(){
  mainForm.on('submit', function(evt){
    title = $('#main__form-title').val();
    author = $('#main__form-author').val();
    text = $('#main__form-text').val();
    evt.preventDefault();
    var post = new BlogPost(title, author, text);
    addPost(post);
    debugger;
    getPosts();
  });

  //ajax request to get posts from api
  getPosts();
  deletePostView();

});

// var clickTest = function(){
//   $('.postView__button-delete').on('click', function(evt){
//     evt.preventDefault();
//     console.log('click');
//   });

  // $('.postView__container').on('click', 'button', function(evt){
  //   evt.preventDefault();
  //   console.log('click');
  // });
//}

var addPost = function(postData){
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
    post.html += "<div class='postView__container' data-id=" + post.id + "><h2 class='postView__title'>" + post.title + "</h2>" + "<h3 class='postView__author'>" + post.author + "</h3>" + "<p class='postView__text'>" + post.text + "</p>" + "<button class='postView__button-delete'>Delete</button> </div>"
  }
  $('.postView').append(post.html);
}

var deletePost = function(postId){
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
    console.log(result, 'from deletePost');

  })
  .fail(function(jqXHR, error){
    console.log(error, 'from deletePost');
  });
}

var deletePostView = function(){
  $(document).on('click', '.postView__button-delete', function(evt){
    evt.preventDefault();
    var targetId = $(evt.target).parent().attr('data-id');
    console.log(targetId, 'from deletePostView');
    var targetToRemove = $(evt.target).parent().remove();
    deletePost(targetId);
  });
}

// var clickTest = function(){
//   $(document).on('click', '.postView__button-delete', function(evt){
//     evt.preventDefault();
//     var targetId = $(evt.target).parent().attr('data-id');
//     console.log(targetId);
//   });
// }

function BlogPost(title, author, text){
  //postInfo is an object that contains everything going to the database.
  this.title = title;
  this.author = author;
  this.text = text;
}
