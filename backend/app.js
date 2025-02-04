const express = require("express");
const cors = require("cors");
const app = express();

// Import Controllers/Routes
const scriptController = require("./Controllers/scriptController");
const audioFileController = require("./Controllers/audioFileController");

//Middleware
app.use(cors())
app.use(express.json());
app.use("/script", scriptController);
app.use("/audioFile", audioFileController);

app.get("/", (req, res) => {
  res.json({ index: "This is the index page" });
});

module.exports = app;
