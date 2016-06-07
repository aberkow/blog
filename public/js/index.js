// var postContainer = $('.postView__container');
// var postTitle = $('.postView__title');
// var postAuthor = $('.postView__author');
// var postText = $('.postView__text');
// var postDelete = $('.postView__button-delete');

$(document).ready(function(){
  var postContainer = $('.postView__container');
  var postTitle = $('.postView__title');
  var postAuthor = $('.postView__author');
  var postText = $('.postView__text');
  var postDelete = $('.postView__button-delete');

  //ajax request to get posts from api
  getPosts();
  //test to make sure clicks register.
  postContainer.on('click', function(evt){
    target = $(evt.target);
    console.log('click');
    console.log(target);
  });

});

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







// $.post('/login', { username: "test", password : "1234"},
//     function(returnedData){
//          console.log(returnedData);
// }).fail(function(){
//       console.log("error");
// });

// $.ajax({
//   url: '/login',
//   data: {
//     username: 'test',
//     password: '1234'
//   },
//   dataType: 'JSON',
//   type: 'GET'
// })
// .done(function(response){
//   console.log(response, 'ajax response');
// })
// .fail(function(jqXHR, error){
//   console.log(error);
// });


// var BlogPost = function(){
//   this.mainForm = $('#main__form');
//   this.postButton = $('#main__form-post');
//   this.author = $('#main__form-author').val();
//   this.title = $('#main__form-title').val();
//   this.text = $('$main__form-text').val();
//   this.postButton.on('click', '#main__form-post' this.addPost.bind(this));
// };

/*
functions need to
- display posts/info in a div/section
- update posts in view
- delete posts in view
*/
