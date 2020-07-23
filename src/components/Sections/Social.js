import React from "react";
import { Typography, Grid, makeStyles, Link } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    padding: "1rem",
    margin: "1rem",
    textDecoration: "none",
  },
  titleStyle: {
    padding: "2rem 0rem",
    margin: "0rem 2rem",
    fontSize: "2.8rem",
  },
  iconStyle: {
    fontSize: "4rem",
    color: "#333",
  },
}));

export default function Social() {
  const classes = useStyles();
  return (
    <section id="social">
      <div
        className="social"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h1" className={classes.titleStyle}>
          <Fade top>Connect With Me</Fade>
        </Typography>

        <div className={classes.root}>
          <Grid container spacing={5} alignItems="center" justify="center">
            <Fade bottom cascade>
              <Grid item xs={3} sm={2} lg={1} xl={1}>
                <Link href="https://www.linkedin.com/in/theshubhagrwl/">
                  <LinkedInIcon className={classes.iconStyle} />
                </Link>
              </Grid>
              <Grid item xs={3} sm={2} lg={1} xl={1}>
                <Link href="https://github.com/theshubhagrwl">
                  <GitHubIcon className={classes.iconStyle} />
                </Link>
              </Grid>
              <Grid item xs={3} sm={2} lg={1} xl={1}>
                <Link href="mailto: shubhagrawal1280@gmail.com">
                  <EmailIcon className={classes.iconStyle} />
                </Link>
              </Grid>
              <Grid item xs={3} sm={2} lg={1} xl={1}>
                <Link href="https://t.me/theshubhagrwl">
                  <TelegramIcon className={classes.iconStyle} />
                </Link>
              </Grid>
              <Grid item xs={3} sm={2} lg={1} xl={1}>
                <Link href="https://twitter.com/theshubhagrwl">
                  <TwitterIcon className={classes.iconStyle} />
                </Link>
              </Grid>
              <Grid item xs={3} sm={2} lg={1} xl={1}>
                <Link href="https://www.instagram.com/theshubhagrwl/">
                  <InstagramIcon className={classes.iconStyle} />
                </Link>
              </Grid>
            </Fade>
          </Grid>
        </div>
      </div>
    </section>
  );
}
