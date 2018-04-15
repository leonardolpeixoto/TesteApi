'use strict';

var _user = require('../controllers/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  var models = app.get('db').teste_api.models;

  var _UserController = (0, _user2.default)(models),
      login = _UserController.login;

  app.route('/user/login').post(login);

  app.route('/user/create').post(function (req, res) {
    return models.User.create({ login: "leo", password: "1234" });
  });
};