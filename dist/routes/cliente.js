'use strict';

var _cliente = require('../controllers/cliente');

var _cliente2 = _interopRequireDefault(_cliente);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  var models = app.get('db').teste_api.models;

  var _ClienteController = (0, _cliente2.default)(models),
      melhoresCompradores = _ClienteController.melhoresCompradores;

  app.route('/clientes/melhoresCompradores/produto/:produtoId').all(app.get('authenticate')).get(melhoresCompradores);
};