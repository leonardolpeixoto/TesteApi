'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  var User = app.get('db').teste_api.models.User;


  var opts = {
    secretOrKey: auth.jwt.secret,
    jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeader()
  };

  var strategy = new _passportJwt.Strategy(opts, function (payload, done) {
    User.findOne({ where: { id: payload.userId } }).then(function (user) {
      if (user) {
        return done(null, {
          id: user.id
        });
      }
      return done(new Error("Acesso não Autorizado"), null);
    }).catch(function (error) {
      return done(error, null);
    });
  });
  _passport2.default.use(strategy);

  return {
    initialize: function initialize() {
      return _passport2.default.initialize();
    },
    authenticate: function authenticate() {
      return _passport2.default.authenticate('jwt', auth.jwtSession);
    }
  };
};

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _server = require('./config/server');

var _server2 = _interopRequireDefault(_server);

var _passportJwt = require('passport-jwt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = _server2.default.auth;