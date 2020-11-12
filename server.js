const express = require("express");
const path = require('path')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Transaction = require("./src/components/transactionSchema");

// mongoose.connect("mongodb://localhost/bankDB", { useNewUrlParser: true })
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bankDB", {
  useNewUrlParser: true,
});
// const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);

const app = express();

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
app.get(`/transactions`, async (req, res) => {
  let transactions = await Transaction.find({});
  res.send(transactions);
});

app.post(`/transaction`, async (req, res) => {
  let newTransaction = new Transaction({
    amount: req.body.amount,
    category: req.body.category,
    vendor: req.body.vendor,
  });
  let transaction = await newTransaction.save({});
  res.send(transaction);
});

app.delete(`/transaction`, async (req, res) => {
  let transactionToRemove = req.body.id;
  let transactions = await Transaction.deleteOne({ _id: transactionToRemove });
  res.send(transactions);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = 4000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
