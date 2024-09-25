import React from "react";
import "./Dashboard.css"; // Import the CSS file

// In your Dashboard.js
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Dashboard({ balance }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Current Balance: ${formatNumber(balance)}</h2>
    </div>
  );
}

export default Dashboard;
