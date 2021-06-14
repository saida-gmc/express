const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/services", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "OurServices.html"));
  console.log("Time:", Date());
  next();
});
module.exports = router;
