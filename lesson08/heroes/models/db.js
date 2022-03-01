const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql://root:superhemligt@localhost:3306/lotr");

exports.sequelize = sequelize;
