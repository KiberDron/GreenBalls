const { GreenBalls } = require("../models/models");
const sequelize = require("../db");

class GreenBallsController {
  async getGreenBalls(req, res) {
    const greenBalls = await GreenBalls.findAll();
    return res.json(greenBalls);
  }

  async createGreenBall(req, res, next) {
    const greenBall = await GreenBalls.create();
    return res.json(greenBall);
  }

  async deleteGreenBalls(req, res, next) {
    await GreenBalls.truncate();
    return res.json({ deleted: true });
  }
}

module.exports = new GreenBallsController();
