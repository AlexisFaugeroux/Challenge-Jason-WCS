// Require sequelize Model
const { Model, DataTypes } = require('sequelize');
// Require sequelize instance
const sequelize = require('../database.js');

// Definition of model "Crew" using Sequelize extending Model approach

class Crew extends Model {}

Crew.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, // passing the connection instance
    modelName: 'Crew', // explicitly giving the model name otherwise Sequelize would pluralize it
    tableName: 'crew', //  explicity giving the tablename proprety so that we make sure it matches the table name within the database
});

module.exports = Crew;
