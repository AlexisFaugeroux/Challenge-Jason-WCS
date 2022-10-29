// In this project we use Sequelize as an interface
// to connect our application with our Postgres database.

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        // by default, Sequelize adds "createdAt" and "updatedAt" properties in model instances
        // but our database is rather using "created_at" and "updated_at" fields
        // so we need to tell Sequelize that these fields are mapped in the databse
        // to columns using identical names but in snake_case
        // we use underscored property to do so
        underscored: true,
        // (fields remains in camelCase in the JavaScript side)
    },
});

module.exports = sequelize;
