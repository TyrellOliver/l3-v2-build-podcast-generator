const multer = require("multer");

const audioMimeTypes = ["audio/mp4", "audio/mpeg", "audio/wav", "audio/ogg"];

const fileFilter = (req, file, cb) => {
  if (audioMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only audio files are allowed"), false);
  }
};

const upload = multer({ storage: multer.memoryStorage(), fileFilter });

// console.log(upload)

module.exports = upload;
