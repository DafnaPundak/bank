import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import Breakdown from "./components/Breakdown";
import Menu from "./components/Menu";
import LandingPage from "./components/LandingPage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(`http://localhost:4000/transactions`);
    this.setState({ data: response.data });
  };

  pushPosTransaction = async (newTransaction) => {
    newTransaction.amount = Number(newTransaction.amount);
    const response = await axios.post(
      "http://localhost:4000/transaction",
      newTransaction
    );
    let data = [...this.state.data];
    data.push(response.data);
    this.setState({ data });
  };

  pushNegTransaction = async (newTransaction) => {
    newTransaction.amount = Number("-" + newTransaction.amount);
    const response = await axios.post(
      "http://localhost:4000/transaction",
      newTransaction
    );
    let data = [...this.state.data];
    data.push(response.data);
    this.setState({ data });
  };

  deleteTransaction = async (transactionToDelete) => {
    await axios.delete("http://localhost:4000/transaction", {
      data: transactionToDelete,
    });
    let data = [...this.state.data];
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === transactionToDelete.id) {
        data.splice(i, 1);
        this.setState({ data });
      }
    }
  };

  render() {
    return (
      <div>
        <Router>
          <Route
            path="/"
            exact
            render={() => <LandingPage items={this.state.data} />}
          />
          <Route
            path="/menu"
            exact
            render={() => (
              <Menu
                items={this.state.data}
                pushPosTransaction={this.pushPosTransaction}
              />
            )}
          />
          <Route
            path="/transactions"
            exact
            render={() => (
              <Transactions
                items={this.state.data}
                deleteTransaction={this.deleteTransaction}
              />
            )}
          />
          <Route
            path="/operations"
            exact
            render={() => (
              <Operations
                items={this.state.data}
                pushPosTransaction={this.pushPosTransaction}
                pushNegTransaction={this.pushNegTransaction}
              />
            )}
          />
          <Route
            path="/breakdown"
            exact
            render={() => <Breakdown items={this.state.data} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
