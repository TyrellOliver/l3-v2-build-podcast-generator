const express = require("express");
const script = express.Router();
const callGeminiApi = require("../API/geminiAPI");

script.post("/", async (req, res) => {
  try {
    const { text } = req.body; // Extract text input from the request body | The user's input text

    // Validate Input
    if (!text || typeof text !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid input. Please provide text." });
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
