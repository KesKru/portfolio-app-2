const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const sequelize = require('../config/databaseConfig')('noLog');

const models = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    // const model = require(path.join(__dirname, file));
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
