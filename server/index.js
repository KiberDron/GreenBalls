require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");

const PORT = process.env.PORT || 5000;

const app = express();

const corsOptions = {
  origin: ["https://greenballs.netlify.app", "http://localhost:3000"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
