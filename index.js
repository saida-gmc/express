const express = require("express");
const path = require("path");
const app = express();

const homeRoute = require("./routes/HomePage");
const servicesRoute = require("./routes/OurServices");
const contactRoute = require("./routes/ContactUs");
const workingTimeRoute = require("./routes/WorkingTime");

app.use(express.static(path.join(__dirname, "public", "stylesheet")));

app.use(homeRoute);
app.use(servicesRoute);
app.use(contactRoute);
app.use(workingTimeRoute);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
