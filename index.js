const express = require("express");
const path = require("path");
const app = express();

const homeRoute = require("./routes/HomePage");
const servicesRoute = require("./routes/OurServices");
const contactRoute = require("./routes/ContactUs");
const workingTimeRoute = require("./routes/WorkingTime");

app.use(express.static(path.join(__dirname, "public", "stylesheet")));
let date = new Date();
let day = date.getDay();
let hours = date.getHours();

if (day < 6 && hours > 9 && hours < 17) {
  app.use(homeRoute);
  app.use(servicesRoute);
  app.use(contactRoute);
} else {
  app.use(workingTimeRoute);
}
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
