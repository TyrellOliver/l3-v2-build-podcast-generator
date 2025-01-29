const express = require("express");
const audio = express.Router();
const upload = require("../Upload/audioUpload");

audio.post("/upload", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No File Uploaded" });
    }
    const audioBuffer = req.file.buffer;
    // console.log(audioBuffer);
    console.log("Audio file received:", req.file);

    res.status(201).json({
      success: "Uploaded Successfully",
      fileName: req.file.originalname,
      fileSize: req.file.size,
    });
    console.log(upload);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = audio;
