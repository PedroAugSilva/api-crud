const Sequelize = require('sequelize');
const db = require('../config/database');
const connection = new Sequelize(db);
const User = require('../models/User')

User.init(connection)

module.exports = connection;