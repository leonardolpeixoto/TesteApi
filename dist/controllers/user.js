'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _passportJwt = require('passport-jwt');

var _getToken = require('../helpers/getToken');

var _getToken2 = _interopRequireDefault(_getToken);

var _decodeToken = require('../helpers/decodeToken');

var _decodeToken2 = _interopRequireDefault(_decodeToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (models) {
  var User = models.User;


  var login = function login(req, res, next) {
    var _req$body = req.body,
        login = _req$body.login,
        password = _req$body.password;

    User.findByLogin(login).then(function (user) {
      if ((0, _ramda.isNil)(user) || !user.isPassword(password)) {
        next(next((0, _ramda.assoc)('status', _httpStatus2.default.UNAUTHORIZED, { error: "Não autorizado" })));
      } else {
        res.send({
          token: (0, _getToken2.default)({ userId: user.id })
        });
      }
    }).catch(function (err) {
      return next((0, _ramda.assoc)('status', _httpStatus2.default.INTERNAL_SERVER_ERROR, err));
    });
  };

  return {
    login: login
  };
};