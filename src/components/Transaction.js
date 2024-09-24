import React from "react";
import PropTypes from "prop-types";
import "./Transaction.css"; // Import the CSS file

function Transaction({ amount, type }) {
  return (
    <div className="transaction-row">
      <span>{amount}</span>
      <span>{type}</span>
    </div>
  );
}

// Prop types for type checking
Transaction.propTypes = {
  amount: PropTypes.string.isRequired, // Use string if you are sending it as a string
  type: PropTypes.string.isRequired,
};

export default Transaction;
