import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  customButton: {
    // background:
    backgroundImage:
      "linear-gradient(to bottom, #536eda, #5d64e2, #6d56e8, #8243ea, #9921e8)",
    border: "0px",
    outline: 0,
    color: "white",
    height: 48,
    margin: "0.7rem 0rem",
    padding: "1rem 2rem",
    boxShadow: "0 3px 5px 2px rgba(128,41,143,.3)",
    borderRadius: "2.5rem",
  },
}));
export default function CustomButton(props) {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.customButton}
      >
        {props.btnText}
      </Button>
    </div>
  );
}
