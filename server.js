const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const api = require("./api/api");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/bankDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(`${err.message}`);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));

// never ever add the Access-Control... code snippet in your production code,
// it allows anyone to access your server with all permissions.
// It is only safe for development purposes.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.use("/", api);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = 4000;
app.listen(process.env.PORT || PORT, function () {
  console.log(`Running server on port ${PORT}`);
});
