import React from "react";
import PropTypes from "prop-types";

function Transaction({ amount, type }) {
  return (
    <div className="transaction">
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Amount:</strong> ${amount}
      </p>
    </div>
  );
}

// Prop types for type checking
Transaction.propTypes = {
  amount: PropTypes.string.isRequired, // Use string if you are sending it as a string
  type: PropTypes.string.isRequired,
};

export default Transaction;
