import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
// import Button from "@material-ui/core/Button";
// import CreditCardIcon from "@material-ui/icons/CreditCard";
import "./LandingPage.css"

export default function LandingPage(props) {
  let totalBalance = 0;
  props.items.map((transaction) => (totalBalance += transaction.amount));

  return (
    <Container fixed>
      <div className="header">
        <h1>Welcome to D-Bank</h1>
        <Divider />
        <div>Available Balance: {"$ " + totalBalance.toFixed(2)}</div>
        <br/>
        {/* <Link to="/menu" style={{ textDecoration: 'none' }} background-color="white"> */}
          {/* <Button
            variant="outlined"
            color="default"
            startIcon={<CreditCardIcon />}
          >
            My account
          </Button> */}
          <a href="/menu" className="btn btn-white btn-animated" to="/menu" component={Link}>My account</a>
        {/* </Link> */}
      </div>
    </Container>
  );
}
