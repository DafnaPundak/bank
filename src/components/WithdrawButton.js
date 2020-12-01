import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    props.setIndexTab(1);
  };

  return (
    <div className={classes.root}>
      <Link to="/transactions" style={{ textDecoration: "none" }}>
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Withdraw
        </Button>
      </Link>
    </div>
  );
}
