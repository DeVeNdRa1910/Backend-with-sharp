const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'bbec2253', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
