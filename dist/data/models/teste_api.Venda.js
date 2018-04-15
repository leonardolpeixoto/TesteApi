'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Venda = sequelize.define('Venda', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    clienteId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Cliente',
        key: 'id'
      }
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    vendedorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Vendedor',
        key: 'id'
      }
    }
  }, {
    tableName: 'Venda'
  });

  Venda.associate = function (models) {
    this.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
    this.belongsTo(models.Vendedor, { foreignKey: 'vendedorId' });
    this.belongsToMany(models.Produto, { as: 'Produtos', through: 'Venda_has_Produto', foreignKey: 'vendaId', otherKey: 'produtoId' });
  };

  return Venda;
};