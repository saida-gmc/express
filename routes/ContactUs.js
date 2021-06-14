const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "ContactUs.html"));
  console.log("Time:", Date());
  next();
});
module.exports = router;
