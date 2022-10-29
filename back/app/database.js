// In this project we use Sequelize as an interface
// to connect our application with our Postgres database.

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL);

module.exports = sequelize;
