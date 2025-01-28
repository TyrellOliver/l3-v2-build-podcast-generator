const express = require("express");
const cors = require("cors");
const app = express();

// Import Controllers/Routes
const scriptController = require("./Controllers/scriptController")

//Middleware
app.use(express.json());
app.use("/script", scriptController)

app.get("/", (req, res) => {
  res.json({ index: "This is the index page" });
});

module.exports = app;
