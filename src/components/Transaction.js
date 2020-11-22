import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

class Transaction extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteTransaction = async () => {
    let transactionToDelete = this.props;
    this.props.deleteTransaction(transactionToDelete);
  };

  render() {
    return (
      <div id="transaction">
        <p>Amount: {this.props.amount}</p>
        <p>Vendor: {this.props.vendor}</p>
        <p>Category: {this.props.category}</p>
        <Button
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={this.deleteTransaction}
        ></Button>
      </div>
    );
  }
}

export default Transaction;
