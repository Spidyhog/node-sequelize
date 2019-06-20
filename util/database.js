const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop', 'root', 'stpeter789', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
