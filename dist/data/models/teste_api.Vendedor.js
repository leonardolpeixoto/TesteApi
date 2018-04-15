'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Vendedor = sequelize.define('Vendedor', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    nome: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    tableName: 'Vendedor'
  });

  return Vendedor;
};