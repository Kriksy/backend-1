const { sequelize } = require("./db");
const { DataTypes } = require("sequelize");

const Hero = sequelize.define("Hero", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    validate: { min: 0 }
  }
});


exports.Hero = Hero;
