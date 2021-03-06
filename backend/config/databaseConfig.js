const Sequelize = require('sequelize');

const sequelize = new Sequelize('portfolio-app-2', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = (noLog) => {
  if (noLog) {
    return sequelize;
  } else {
    sequelize
      .authenticate()
      .then(() => console.log('PostgreSQL connected...'))
      .catch((err) => {
        console.log(err);
      });
    return sequelize;
  }
};
