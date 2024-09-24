import React, { useState } from "react";
import "./TransactionForm.css"; // Import the CSS file

function TransactionForm({ addTransaction }) {
  const [transaction, setTransaction] = useState({ amount: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(transaction);
    setTransaction({ amount: "", type: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={transaction.amount}
        onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })}
        required
      />
      <select
        value={transaction.type}
        onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
        required
      >
        <option value="">Choose Transaction Type</option>
        <option value="deposit">Deposit</option>
        <option value="withdrawal">Withdrawal</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
