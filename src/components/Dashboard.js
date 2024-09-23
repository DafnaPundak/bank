import React from "react";

function Dashboard({ balance }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Current Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
}

export default Dashboard;
