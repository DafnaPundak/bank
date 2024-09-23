const express = require("express");
const Transaction = require("./models/Transaction"); // Adjust the path as needed
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "build")));

// API routes
app.post("/api/transactions", async (req, res) => {
  console.log("Received transaction:", req.body);

  try {
    const newTransaction = new Transaction(req.body);
    const savedTransaction = await newTransaction.save();
    console.log("Transaction saved:", savedTransaction);
    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error("Error saving transaction:", error);
    res.status(500).json({ message: "Error saving transaction", error });
  }
});

app.get("/api/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find(); // Fetch all transactions
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Error fetching transactions", error });
  }
});

// Catch-all route to serve the React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
