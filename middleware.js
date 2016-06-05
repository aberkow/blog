var basicAuth = require('basic-auth');

module.exports.auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'test' && user.pass === '1234') {
    res.redirect('/posts');
    return next();
  } else {
    return unauthorized(res);
  };
};
