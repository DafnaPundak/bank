import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import HomePageButton from "./HomePageButton";
import DepositButton from "./DepositButton";
import WithdrawButton from "./WithdrawButton";

class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      vendor: "",
      category: "",
    };
  }

  handleInput = (e) => {
    const target = e.target;
    const inputValue = e.target.value;
    const name = target.name;
    this.setState({ [name]: inputValue });
  };

  pushPosTransaction = () => {
    let newTransaction = this.state;
    this.props.pushPosTransaction(newTransaction);
  };

  pushNegTransaction = () => {
    let newTransaction = this.state;
    this.props.pushNegTransaction(newTransaction);
  };

  render() {
    return (
      <span>
        <span id="inputs">
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleInput}
          ></input>
          <input
            name="vendor"
            type="text"
            placeholder="Vendor"
            value={this.state.vendor}
            onChange={this.handleInput}
          ></input>
          <input
            name="category"
            type="text"
            placeholder="Category"
            value={this.state.category}
            onChange={this.handleInput}
          ></input>
        </span>

        <span id="buttons">
          <span id="deposit" onClick={this.pushPosTransaction}>
            <DepositButton />
          </span>
          <span id="withdraw" onClick={this.pushNegTransaction}>
            <WithdrawButton />
          </span>
          <span id="home page">
            <Divider />
            <HomePageButton />
          </span>
        </span>
      </span>
    );
  }
}

export default Operations;
