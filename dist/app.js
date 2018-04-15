'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _consign = require('consign');

var _consign2 = _interopRequireDefault(_consign);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _server = require('./config/server');

var _server2 = _interopRequireDefault(_server);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _models = require('./data/models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//
// Load Models
// -----------------------------------------------------------------------------
(0, _models2.default)(app);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(_express2.default.static(_path2.default.resolve(__dirname, 'public')));
app.use((0, _cookieParser2.default)());
app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

//
// Authentication
// -----------------------------------------------------------------------------
var authentication = (0, _auth2.default)(app);

app.set('authenticate', authentication.authenticate());
app.use(authentication.initialize());

(0, _consign2.default)({ cwd: 'dist' }).then('routes').into(app);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(res.locals.error);
});

exports.default = app;