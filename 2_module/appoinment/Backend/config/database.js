const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('appoinment', 'root', 'bbec2253', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;