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

});

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
    postContainer.on('click', function(evt){
      target = $(evt.target);
      console.log('click');
      console.log(target);
    });
  });
}

var showPosts = function(results){
  var post = {
    title: '',
    author: '',
    text: '',
    html: ''
  }
  for (var i = 0; i < results.length; i++){
    post.title = results[i].title;
    post.author = results[i].author;
    post.text = results[i].text;
    post.html += "<div class='postView__container'><h2 class='postView__title'>" + post.title + "</h2>" + "<h3 class='postView__author'>" + post.author + "</h3>" + "<p class='postView__text'>" + post.text + "</p>" + "<button class='postView__button-delete'>Delete</button>" + "</div>"
  }
  $('.postView').append(post.html);

}


/*

constructor might be useful for building up posts.

Blog post object thoughts -
1 posts have a: title, author, text. Where does this data come from?
2 posts need some functions
  - add to page
  - delete posts
  - edit posts?
*/

function BlogPost(title, author, text){
  //postInfo is an object that contains everything going to the database.
  console.log(title);
  console.log(author);
  console.log(text);
  debugger;
  this.title = title;
  this.author = author;
  this.text = text;
}
