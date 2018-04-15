'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (models) {
  var Cliente = models.Cliente;

  //Filtrado por Produtos

  var melhoresCompradores = function melhoresCompradores(req, res, next) {
    var produtoId = req.params.produtoId;


    Cliente.melhoresCompradores(produtoId).then(function (clientes) {
      res.send(clientes);
    }).catch(function (err) {
      return next((0, _ramda.assoc)('status', _httpStatus2.default.INTERNAL_SERVER_ERROR, err));
    });
  };

  return {
    melhoresCompradores: melhoresCompradores
  };
};