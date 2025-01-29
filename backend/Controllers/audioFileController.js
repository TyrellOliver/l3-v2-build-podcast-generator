const express = require("express");
const audio = express.Router();
const upload = require("../Upload/audioUpload");

audio.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No File Uploaded" });
  }
  

  try {
    res.status(201).json({
      success: "Uploaded Successfully",
      fileName: req.file.originalname,
      fileSize: req.file.size,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = audio;
