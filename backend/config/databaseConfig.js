const Sequelize = require('sequelize');

const sequelize = new Sequelize('portfolio-app-2', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('PostgreSQL connected...');
  })
  .catch((err) => {
    console.log(err);
  });

// sequelize.sync({ force: true }).then(() => {
//   console.log(`Database & tables created!`);
// });

module.exports = sequelize;
