import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let totalBalance = 0;
    this.props.items.map((transaction) => (totalBalance += transaction.amount));

    return (
      <div className="bankApp">
        <header className="bankApp-header">
          <div>My Bank</div>
          <div>Total Balance: {totalBalance}</div>
        </header>

        <br></br>
        <Link to="/operations">Operations</Link>
        <br></br>
        <Link to="/transactions">Transactions</Link>
        <br></br>
        <Link to="/breakdown">Breakdown</Link>
      </div>
    );
  }
}

export default Landing;
