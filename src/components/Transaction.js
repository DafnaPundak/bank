import React from "react";
import PropTypes from "prop-types";
import "./Transaction.css"; // Import the CSS file

function Transaction({ amount, type }) {
  return (
    <div className="transaction-row">
      <span>{type}: </span>
      <span>{`$${parseFloat(amount).toFixed(2)}`}</span> {/* Add currency sign here */}
    </div>
  );
}

// Prop types for type checking
Transaction.propTypes = {
  amount: PropTypes.string.isRequired, // Use string if you are sending it as a string
  type: PropTypes.string.isRequired,
};

export default Transaction;
