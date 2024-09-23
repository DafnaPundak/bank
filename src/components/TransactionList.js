import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transaction List</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        transactions.map((transaction) => (
          <Transaction
            key={transaction._id} // Use unique _id if available
            amount={String(transaction.amount)} // Ensure it's a string
            type={transaction.type}
          />
        ))
      )}
    </div>
  );
}

export default TransactionList;
