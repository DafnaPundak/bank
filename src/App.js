import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Menu from "./components/Menu";

function App() {
  const [transactions, setTransactions] = useState([]);
  
  // Fetch transactions from the backend when the app loads
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("/api/transactions"); // Fetch transactions from backend
        console.log("Fetched transactions:", response);
        setTransactions(response.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions(); // Invoke the fetch function
  }, []); // The empty array ensures it only runs once on component mount

  const addTransaction = async (newTransaction) => {
    const amount = Number(newTransaction.amount);

    if (newTransaction.type === "withdrawal") {
      newTransaction.amount = -Math.abs(amount);
    }

    try {
      const response = await axios.post("/api/transactions", newTransaction); // Save transaction in backend
      const savedTransaction = response.data;
      setTransactions([...transactions, savedTransaction]); // Add saved transaction to state
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const calculateBalance = () => {
    try {
      return transactions.reduce((acc, transaction) => {
        // Ensure amount is a number, log if not
        const amount = Number(transaction.amount);
        if (isNaN(amount)) {
          console.warn(`Invalid amount for transaction: ${transaction}`);
          return acc; // Skip invalid transactions
        }
        return acc + amount;
      }, 0);
    } catch (error) {
      console.error("Error calculating balance:", error);
      return 0; // Return 0 if an error occurs
    }
  };

  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Dashboard balance={calculateBalance()} />} />
          <Route path="/transactions" element={<TransactionList transactions={transactions} />} />
          <Route path="/add-transaction" element={<TransactionForm addTransaction={addTransaction} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
