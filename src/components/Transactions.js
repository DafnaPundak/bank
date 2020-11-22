import React, { Component } from "react";
import Transaction from "./Transaction";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TransactionTable from "./TransactionsTable";
import HomePageButton from "./HomePageButton";

class Transactions extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteTransaction = (transactionToDelete) => {
    this.props.deleteTransaction(transactionToDelete);
  };

  render() {
    return (
      <div>
        <p>Recent Transactions:</p>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {this.props.items.map((t) => (
                <Grid key={t._id} item>
                  <Paper />
                  <Transaction
                    key={t._id}
                    id={t._id}
                    amount={t.amount}
                    vendor={t.vendor}
                    category={t.category}
                    deleteTransaction={this.deleteTransaction}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <TransactionTable />
        <br />
        <Divider />
        <HomePageButton />
      </div>
    );
  }
}

export default Transactions;
