const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const studentRoute = require("./api/routes/student");

mongoose.connect(
  "mongodb+srv://shravanilajurkar:123@cluster0.2pal6n3.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("error", (err) => {
  console.log("Connection failed");
});
mongoose.connection.on("connected", (connected) => {
  console.log("Connection Successful");
});

app.use(bodyParser.json());

app.use("/student", studentRoute);

app.use((req, res, next) => {
  res.status(200).json({
    msg: "app.js file is running",
  });
});
module.exports = app;
