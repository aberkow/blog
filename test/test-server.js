/*
What is the point of these tests when they use different methods
than those used in postRoutes? Doesn't that mean they aren't really testing the code that will be used in production?
*/



var chai = require('chai');
var chaiHttp = require('chai-http');

global.environment = 'test';

var server = require('../server.js');
var Post = require('../models/postModel');
var testSeed = require('../db/testSeed');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Blog Posts', function(){
  //go back to testSeed.js to seed the file 'before' testing.
  before(function(done){
    testSeed.run(function(){
      done();
    });
  });
  it('should list all posts on GET', function(done){
    chai.request(app)
        .get('/posts')
        .end(function(err, res){
          res.should.have.status(200);
          res.body.should.be.an('array');
          console.log(res.body);
          res.body[0].should.be.an('object');
          res.body[0].should.have.property('_id');
          res.body[0]._id.should.be.a('string');
          res.body[0].should.have.property('author');
          res.body[0].author.should.be.a('string');
          res.body[0].should.have.property('title');
          res.body[0].title.should.be.a('string');
          res.body[0].should.have.property('text');
          res.body[0].text.should.be.a('string');
          done();
        });
  });
  //this doesnt work yet.
  // it('should list an individual post on GET by id', function(done){
  //   Post.find({author: 'Stephen King'}, function(err, post){
  //     var id = post[0][id];
  //     chai.request(app)
  //         .get('/posts/' + id)
  //         .end(function(err, res){
  //           console.log(res.body);
  //           //res.should.have.status(200);
  //           done();
  //         });
  //   });
  });
  it('should add a new post on POST', function(done){
    chai.request(app)
        .post('/posts')
        .send({'author': 'test author', 'title': 'test title', 'text': 'test text'})
        .end(function(err, res){
          res.should.have.status(201);
          should.equal(err, null);
          res.should.be.json;
          res.body.should.be.an('object');
          res.body.should.have.property('_id');
          res.body.should.have.property('author').and.be.a('string').and.equal('test author');
          res.body.should.have.property('title').and.be.a('string').and.equal('test title');
          res.body.should.have.property('text').and.be.a('string').and.equal('test text');

          console.log('POST', res.body);
          done();
        });
        chai.request(app)
            .get('/posts')
            .end(function(err, res){
              res.body.should.have.length(4);
            });
  });
  // it('should update a post on UPDATE', function(done){
  //
  // })
//try using '/posts/' + mongoose.Types.ObjectId();
    it('should delete a post on DELETE', function(done){

    });

  // it('should delete a post on DELETE', function(done){
  //   Post.find({author: 'Michael Chabon'}, function(err, post){
  //     var id = post[0][id];
  //     chai.request(app)
  //         .delete('/items/' + id)
  //         .end(function(err, res){
  //           console.log('delete', res.body);
  //           done();
  //         });
  //   });
  // });
  after(function(done){
    Post.remove(function(){
      done();
    });
  });

});
