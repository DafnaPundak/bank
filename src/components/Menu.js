import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // Import the CSS file

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Menu = ({ balance }) => {
  return (
    <div>
      <div className="menu">
        <div className="menu-button-container">
          <Link to="/">
            <button className="menu-button">Dashboard</button>
          </Link>
        </div>
        <div className="menu-button-container">
          <Link to="/transactions">
            <button className="menu-button">Transactions</button>
          </Link>
        </div>
        <div className="menu-button-container">
          <Link to="/add-transaction">
            <button className="menu-button">Add Transaction</button>
          </Link>
        </div>
        <div className="balance-display">
          <div>Your Balance:</div>
          <div>${formatNumber(balance)}</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
