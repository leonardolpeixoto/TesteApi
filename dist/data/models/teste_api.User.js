'use strict';

var _bcrypt = require('bcrypt');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (sequelize, DataTypes) {
  var Op = sequelize.Op;


  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    login: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  }, {
    tableName: 'User',
    hooks: {
      beforeCreate: function beforeCreate(user) {
        var salt = (0, _bcrypt.genSaltSync)();
        user.password = (0, _bcrypt.hashSync)(user.password, salt);
      }
    }
  });

  User.prototype.isPassword = function (password) {
    return (0, _bcrypt.compareSync)(password, this.password);
  };

  User.findByLogin = function (login) {
    return this.findOne({
      where: {
        login: _defineProperty({}, Op.like, login)
      }
    });
  };
  return User;
};