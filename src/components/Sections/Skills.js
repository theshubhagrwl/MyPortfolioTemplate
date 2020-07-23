import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Divider } from "@material-ui/core";
import LanguageCard from "../LanguageCard";
import ToolsCard from "../ToolsCard";
import TechCard from "../TechCard";
import OtherCard from "../OtherCard";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    padding: "1rem",
  },
  titleStyle: {
    padding: "2rem 0rem",
    margin: "0rem 2rem",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <section id="skills">
      <div className="skills">
        <Typography variant="h1" className={classes.titleStyle}>
          <Fade duration={800}>My Expertise</Fade>
        </Typography>

        <div className={classes.root}>
          <Grid container spacing={4} alignItems="center" justify="center">
            <Grid item xs={12} sm={6} lg={4} xl={4}>
              <Fade duration={800}>
                <LanguageCard />
              </Fade>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={4}>
              <Fade duration={800}>
                <ToolsCard />
              </Fade>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={4}>
              <Fade duration={800}>
                <TechCard />
              </Fade>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={4}>
              <Fade duration={800}>
                <OtherCard />
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
      <Divider variant="middle" />
    </section>
  );
}
