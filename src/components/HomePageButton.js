import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

export default function HomeButton() {
  return (
    <Link to="/">
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<HomeOutlinedIcon />}
      ></Button>
    </Link>
  );
}
