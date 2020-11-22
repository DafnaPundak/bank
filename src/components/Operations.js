import React from "react";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import HomePageButton from "./HomePageButton";
import DepositButton from "./DepositButton";
import WithdrawButton from "./WithdrawButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: "25ch",
  },
}));

export default function Operations(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    vendor: "",
    category: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const pushPosTransaction = () => {
    let newTransaction = values;
    props.pushPosTransaction(newTransaction);
  };

  const pushNegTransaction = () => {
    let newTransaction = values;
    props.pushNegTransaction(newTransaction);
  };

  return (
    <div>
      <div id="inputs" className={classes.root}>
        <div>
          <FormControl
            fullWidth
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
          <TextField
            fullWidth
            label="Vendor"
            id="outlined-start-adornment-Vendor"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Vendor</InputAdornment>
              ),
            }}
            variant="outlined"
            name="vendor"
            value={values.vendor}
            onChange={handleChange("vendor")}
          />
          <TextField
            fullWidth
            label="Category"
            id="outlined-start-adornment-Category"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Category</InputAdornment>
              ),
            }}
            variant="outlined"
            value={values.category}
            onChange={handleChange("category")}
          />
        </div>
      </div>
      <br />
      <div id="submit buttons">
        <div id="deposit" onClick={pushPosTransaction}>
          <DepositButton />
        </div>
        <div id="withdraw" onClick={pushNegTransaction}>
          <WithdrawButton />
        </div>
        <div id="home page">
          <Divider />
          <HomePageButton />
        </div>
      </div>
    </div>
  );
}
