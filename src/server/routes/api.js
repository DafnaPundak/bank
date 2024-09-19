const express = require("express");
const router = express.Router();
const request = require("request");
const Transaction = require("../../model/Transaction");

router.get(`/transactions`, (req, res) => {
  Transaction.find({}, (err, transactions) => {
    res.send(transactions);
  });
});

router.post(`/transaction`, (req, res) => {
  let newTransaction = new Transaction({
    amount: req.body.amount,
    category: req.body.category,
    vendor: req.body.vendor,
  });
  newTransaction.save({}, (err, transaction) => {
    res.send(transaction);
  });
});

router.delete(`/transaction`, (req, res) => {
  let transactionToRemove = req.body.id;
  Transaction.deleteOne({ _id: transactionToRemove }, (err) => {
    res.end();
  });
});

module.exports = router;
