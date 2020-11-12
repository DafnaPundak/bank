import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Breakdown from './components/Breakdown';
import Landing from './components/LandingPage';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [
      ]
    }
  }

  componentDidMount = async () => {
    let res = await axios.get(`/transactions`)
    this.setState({ data: res.data })
  }

  pushPosTransaction = async (newTransaction) => {
    newTransaction.amount = Number(newTransaction.amount)
    let res = await axios.post("/transaction", newTransaction)
    let data = [...this.state.data]
    data.push(res.data)
    this.setState({ data })
  }

  pushNegTransaction = async (newTransaction) => {
    newTransaction.amount = Number("-" + newTransaction.amount)
    let res = await axios.post("/transaction", newTransaction)
    let data = [...this.state.data]
    data.push(res.data)
    this.setState({ data })
  }

  deleteTransaction = async (transactionToDelete) => {
    await axios.delete("/transaction", { data: transactionToDelete })
    let data = [...this.state.data]
    for (var i = 0; i < data.length; i++) {
      if (data[i]._id === transactionToDelete.id) {
        data.splice(i, 1)
        this.setState({ data })
      }
    }
  }

  render() {
    return (
      <div>
        <div id="transactionContainer">
          <Router>
            <Route path="/" exact render={() => <Landing items={this.state.data} />} />
            <Route path="/transactions" exact render={() => <Transactions
              items={this.state.data} deleteTransaction={this.deleteTransaction} />} />
            <Route path="/operations" exact render={() => <Operations
              items={this.state.data} pushPosTransaction={this.pushPosTransaction} pushNegTransaction={this.pushNegTransaction} />} />
            <Route path="/breakdown" exact render={() => <Breakdown items={this.state.data} />} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
