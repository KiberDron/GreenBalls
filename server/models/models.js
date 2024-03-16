const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const GreenBalls = sequelize.define("green_balls", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

module.exports = {
  GreenBalls,
};
