module.exports = function(router){
  require('./posts').default(router);
  //create other files for other possible routes e.g.
  //require('./users').default(router);
};
