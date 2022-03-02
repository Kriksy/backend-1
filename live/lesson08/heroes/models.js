const { seq } = require("async");
const { DataTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql://root:superhemligt@localhost:3306/lotr");

const Hero = sequelize.define("Hero", {
    name: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true
    },
    age: { type: DataTypes.INTEGER, validate: { min: 0 }}
});

module.exports = {sequelize, Hero};