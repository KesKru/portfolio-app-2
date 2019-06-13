'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const sequelize = require('../config/databaseConfig');
const md = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    // const model = require(path.join(__dirname, file));
    const model = sequelize.import(path.join(__dirname, file));
    md[model.name] = model;
  });

Object.keys(md).forEach((modelName) => {
  if (md[modelName].associate) {
    md[modelName].associate(md);
  }
});

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = md;
