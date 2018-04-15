import { genSaltSync, hashSync, compareSync, compare } from 'bcrypt';

module.exports = function(sequelize, DataTypes) {
  const { Op } = sequelize;
  
  const User = sequelize.define('User', {
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
      beforeCreate: user => {
       const salt = genSaltSync();
       user.password = hashSync(user.password, salt);
     }
   }
  });
  
  User.prototype.isPassword = function(password) {
    return compareSync(password, this.password);
  }

  User.findByLogin = function(login) {
    return this 
      .findOne({
        where: {
          login: {[Op.like]: login}
        }
      })
  }
  return User;
};
