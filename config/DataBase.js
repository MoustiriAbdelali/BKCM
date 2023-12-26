require('dotenv').config();
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

if (!config || !config.database) {
  console.error('Error: Configuration or database property is undefined.');
  process.exit(1);
}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql'
  }
);

module.exports = sequelize;




 