import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

export default function LandingPage(props) {
  let totalBalance = 0;
  props.items.map((transaction) => (totalBalance += transaction.amount));

  return (
    <Container fixed>
      <div>
        <div>Welcome to D-Bank</div>
        <Divider />
        <div>Available Balance: {"$ " + totalBalance.toFixed(2)}</div>
        <Link to="/menu">
          <Button variant="outlined" color="secondary">
            My account
          </Button>
        </Link>
      </div>
    </Container>
  );
}
