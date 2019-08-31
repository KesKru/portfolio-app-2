'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  User.prototype.hashPassword = function() {
    return bcrypt.hash(this.password, 10);
  };

  User.prototype.comparePassword = function(passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
  };

  return User;
};
