import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "../ProjectCard";
import { Typography, Divider } from "@material-ui/core";
import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";
import projimg from "../../assets/projimg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    padding: "1rem",
    margin: "1rem",
  },
  titleStyle: {
    padding: "2rem 0rem",
    margin: "0rem 1rem",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <section id="projects">
      <div className="projects">
        <Typography variant="h1" className={classes.titleStyle}>
          <Fade top>Projects I Made</Fade>
        </Typography>

        <div className={classes.root}>
          <Fade cascade>
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <ProjectCard
                  projImage={projimg}
                  projTitle="My Movie Time"
                  projDescription="With this tool you can see how much time you spent watching awesome movies"
                  projLink="https://github.com/theshubhagrwl/MyMovieTime"
                  projDemoLink="https://mymovietime.netlify.app/"
                  iconClass="devicon-react-original-wordmark colored"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <ProjectCard
                  projImage={projimg}
                  projTitle="Value My Money"
                  projDescription="With this tool you can see how much the value of your money is affected due to inflation"
                  projLink="https://github.com/theshubhagrwl/ValueMyMoney"
                  projDemoLink="https://valuemymoney.herokuapp.com/"
                  iconClass="devicon-django-plain-wordmark colored"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={4}>
                <ProjectCard
                  projImage={projimg}
                  projTitle="Wallpaper App"
                  projDescription="This is a simple app that fetched latest and awesome looking wallpapers from reddit."
                  projLink="https://github.com/theshubhagrwl/react-wall-app"
                  projDemoLink="https://theshubhagrwl.github.io/react-wall-app/"
                  iconClass="devicon-react-original-wordmark colored"
                />
              </Grid>
            </Grid>
          </Fade>
        </div>
      </div>
      <Divider variant="middle" />
    </section>
  );
}
