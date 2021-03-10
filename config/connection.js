//import the Sequelize constructor from the libray
const Sequelize = require('sequelize');
require('dotenv').config();

//Create connection to our database, pass in your MySql information for username and password
const sequelize = new Sequelize
    (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;