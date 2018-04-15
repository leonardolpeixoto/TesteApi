'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Cliente = sequelize.define('Cliente', {
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
    tableName: 'Cliente'
  });

  Cliente.associate = function (models) {
    this.hasOne(models.Venda, { foreignKey: 'clienteId' });
  };

  Cliente.melhoresCompradores = function (produtoId) {
    var query = "select c.nome, count(p.id) / ( " + "select count(p.descricao)  from Venda_has_Produto as vhp" + " inner join Venda   as v on (v.id = vhp.vendaId)" + " inner join Produto as p on (p.id = vhp.produtoId)" + " inner join Cliente as c on (c.id = v.clienteId)" + " where p.id = :produtoId " + " group by p.descricao " + " ) as porcentagem, " + " count(p.id) as quantidade" + " from Venda_has_Produto as vhp " + " inner join Venda   as v on (v.id = vhp.vendaId) " + " inner join Produto as p on (p.id = vhp.produtoId) " + " inner join Cliente as c on (c.id = v.clienteId) " + " where p.id = :produtoId " + " group by c.nome " + " limit 5";

    return sequelize.query(query, { replacements: { produtoId: produtoId }, type: sequelize.QueryTypes.SELECT });
  };
  return Cliente;
};