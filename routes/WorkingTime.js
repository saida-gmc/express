const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res,next) => {
  res.sendFile(path.join(__dirname, "..", "public", "WorkingTime.html"));
  console.log('Time:', Date());
  next()
});
module.exports = router;
