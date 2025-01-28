const express = require("express");
const script = express.Router();

script.post("/", async (req, res) => {
  try {
    const text = req.body;

    // Validate Input
    if (!text || typeof text !== "string") {
      res.status(400).json({ error: "Invalid input. Please provide text." });
    }

    // Call AI Service
    const createScript = await callGeminiApi(text);

    // Respond with the generated script
    res.status(201).json(createScript);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = script;
