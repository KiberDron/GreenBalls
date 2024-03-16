const Router = require("express");
const router = new Router();
const greenBallsRouter = require("./greenBallsRouter");

router.use("/green_balls", greenBallsRouter);

module.exports = router;
