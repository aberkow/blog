// var blogForm = $('#main__form');
// var author = $('#main__form-author').val();
// var title = $('#main__form-title').val();
// var blogText = $('#main__form-text').val();
// var post = $('#main__form-post');

$(document).ready(function(){
  console.log('doc ready');
  //var blogPost = new BlogPost();
  var blogForm = $('#main__form');
  var author = $('#main__form-author').val();
  var title = $('#main__form-title').val();
  var blogText = $('#main__form-text').val();
  var post = $('#main__form-post');
  blogForm.on('submit', function(evt){
    console.log(author + ' ' + title + ' ' + blogText);
    //debugger;
    $('.postView__title').text(title);
    $('.postView__author').text(author);
    $('.postView__text').text(blogText);
  });

});



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
