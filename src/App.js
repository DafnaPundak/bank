import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Menu from "./components/Menu";
import LandingPage from "./components/LandingPage";
import "./App.css";

const App = () => {
  // State using hooks
  const [data, setData] = useState([]);

  // useEffect to replace componentDidMount
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/transactions`);
      setData(response.data);
    };

    fetchData();
  }, []); // Empty dependency array mimics componentDidMount

  // Function to handle positive transaction
  const pushPosTransaction = async (newTransaction) => {
    newTransaction.amount = Number(newTransaction.amount);
    const response = await axios.post("/transaction", newTransaction);
    setData([...data, response.data]);
  };

  // Function to handle negative transaction
  const pushNegTransaction = async (newTransaction) => {
    newTransaction.amount = Number("-" + newTransaction.amount);
    const response = await axios.post("/transaction", newTransaction);
    setData([...data, response.data]);
  };

  // Function to handle deletion of a transaction
  const deleteTransaction = async (transactionToDelete) => {
    await axios.delete("/transaction", {
      data: transactionToDelete,
    });
    const updatedData = data.filter(
      (transaction) => transaction._id !== transactionToDelete.id
    );
    setData(updatedData);
  };

  return (
    <div>
      <Router>
        <Route
          path="/"
          exact
          render={() => <LandingPage items={data} />}
        />
        <Route
          path="/menu"
          exact
          render={() => (
            <Menu
              index={0}
              items={data}
              pushPosTransaction={pushPosTransaction}
              pushNegTransaction={pushNegTransaction}
              deleteTransaction={deleteTransaction}
            />
          )}
        />
        <Route
          path="/transactions"
          exact
          render={() => (
            <Menu
              index={1}
              items={data}
              pushPosTransaction={pushPosTransaction}
              pushNegTransaction={pushNegTransaction}
              deleteTransaction={deleteTransaction}
            />
          )}
        />
      </Router>
    </div>
  );
};

export default App;
