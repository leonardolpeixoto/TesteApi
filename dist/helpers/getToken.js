'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _server = require('../config/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = _server2.default.auth;

exports.default = function (data) {
  return _jsonwebtoken2.default.sign(data, auth.jwt.secret, { expiresIn: '1d' });
};