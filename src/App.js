import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Menu from "./components/Menu";
import LandingPage from "./components/LandingPage";
import MenuTransactions from "./components/MenuTransactions";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(`/transactions`);
    this.setState({ data: response.data });
  };

  pushPosTransaction = async (newTransaction) => {
    newTransaction.amount = Number(newTransaction.amount);
    const response = await axios.post("/transaction", newTransaction);
    let data = [...this.state.data];
    data.push(response.data);
    this.setState({ data });
  };

  pushNegTransaction = async (newTransaction) => {
    newTransaction.amount = Number("-" + newTransaction.amount);
    const response = await axios.post("/transaction", newTransaction);
    let data = [...this.state.data];
    data.push(response.data);
    this.setState({ data });
  };

  deleteTransaction = async (transactionToDelete) => {
    await axios.delete("/transaction", {
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
                pushNegTransaction={this.pushNegTransaction}
                deleteTransaction={this.deleteTransaction}
              />
            )}
          />
          <Route
            path="/transactions"
            exact
            render={() => (
              <MenuTransactions
                items={this.state.data}
                pushPosTransaction={this.pushPosTransaction}
                pushNegTransaction={this.pushNegTransaction}
                deleteTransaction={this.deleteTransaction}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
