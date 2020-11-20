import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';

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
        <div>
          <p>Vendor: {this.props.vendor}</p>
          <p>Amount: {this.props.amount}</p>
          <p>Category: {this.props.category}</p>
        </div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={this.deleteTransaction}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default Transaction;
