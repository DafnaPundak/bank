import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Divider from "@material-ui/core/Divider";

export default function HomeButton() {
  return (
    <div>
      <Divider />
      <br />
      <Link to="/">
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<HomeOutlinedIcon />}
        ></Button>
      </Link>
    </div>
  );
}
