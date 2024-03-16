const Router = require("express");
const router = new Router();
const greenBallsController = require("../controllers/greenBallsController");

router.get("/", greenBallsController.getGreenBalls);
router.post("/", greenBallsController.createGreenBall);
router.delete("/", greenBallsController.deleteGreenBalls);

module.exports = router;
