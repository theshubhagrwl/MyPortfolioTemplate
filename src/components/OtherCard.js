import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
    border: "0px",
    overflow: "hidden",
    zIndex: "10",
    color: "#fff",
  },
  content: {
    padding: "1rem",
    margin: "1rem",
    color: "#000",
    textAlign: "center",
    fontSize: "1.2rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bolder",
    textAlign: "center",
    textDecoration: "none",
    overflow: "hidden",
    margin: "1rem",
    letterSpacing: "0.1rem",
    color: "#000",
  },
}));

export default function OtherCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h1" gutterBottom>
        Other
      </Typography>
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <Icon
            className="devicon-photoshop-line colored"
            style={{ fontSize: "6rem", margin: "0.5rem" }}
          ></Icon>
        </Grid>
        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <Icon
            className="devicon-github-plain-wordmark colored"
            style={{ fontSize: "6rem", margin: "0.5rem" }}
          ></Icon>
        </Grid>
      </Grid>
      <Typography className={classes.content} variant="h6">
        Other tools I am familiar with
      </Typography>
    </div>
  );
}
