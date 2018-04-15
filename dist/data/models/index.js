'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
// import * as config from '../../config';


var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../../config/database');

var _database2 = _interopRequireDefault(_database);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Carrega os models para o sequelize de acordo com o banco certo.
 * @param {Sequelize} sequelize 
 * @param {string} database_name 
 */
var loadModels = function loadModels(sequelize, database_name) {
  var dir = _path2.default.join(__dirname);
  var models = [];

  function filterModels(file) {
    var archive_model = file.split(".");
    return database_name === archive_model[0];
  }

  function initModel(file) {
    var model = sequelize.import(_path2.default.join(dir, file));
    models[model.name] = model;
  }

  _fs2.default.readdirSync(dir).filter(filterModels).forEach(initModel);

  return models;
};

exports.default = function (app) {
  var databases = {};
  Object.keys(_database2.default).forEach(function (database) {
    if (_typeof(databases[database]) != database) {
      databases[database] = new _sequelize2.default(_database2.default[database]);
    }

    databases[database].models = loadModels(databases[database], database);

    /**
     * Set relacionamento entre os modelos
     */
    var Models = databases[database].models;
    Object.keys(Models).forEach(function (modelName) {
      if (Models[modelName].associate) {
        Models[modelName].associate(Models);
      }
    });

    databases[database].sync().done(function () {
      return databases[database];
    });
  });

  app.set('db', databases);
};