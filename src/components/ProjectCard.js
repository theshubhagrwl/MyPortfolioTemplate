import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography, Icon, Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
    backgroundColor: "#fff",
    border: "0px solid white",
    maxWidth: "100%",
    boxShadow: "0 10px 12px rgb(66, 66, 66,0.2)",
  },
  content: {
    margin: "0rem 1rem",
    color: "#000",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bolder",
    textAlign: "center",
    textDecoration: "none",
    overflow: "hidden",
    color: "#000",
    padding: "0.5rem",
  },
  buttonStyle: {
    backgroundColor: "#9921e8",
    backgroundImage:
      "linear-gradient(to bottom, #536eda, #5d64e2, #6d56e8, #8243ea, #9921e8)",
    "&:hover": {
      boxShadow: "0 6px 5px 4px rgba(128,41,143,.2)",
    },
    border: "0px",
    outline: 0,
    color: "white",
    height: 48,
    margin: "0.5rem 0rem",
    padding: "0.1rem 1rem",
    borderRadius: "2.5rem",
  },
  subTitle: {
    color: "black",
    fontSize: "1rem",
    fontWeight: "bolder",
    padding: "0.6rem 0rem",
  },
}));

const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={5}
      >
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <Card className={classes.root} raised={true}>
            <CardMedia
              height="auto"
              width="auto"
              component="img"
              alt={props.projTitle}
              image={`${props.projImage}`}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {props.projTitle}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.content}
              >
                {props.projDescription}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                // component="h2"
                className={classes.subTitle}
              >
                Technology Used
              </Typography>
              <Icon
                className={`${props.iconClass}`}
                style={{ fontSize: "3.5rem" }}
              ></Icon>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "1rem",
              }}
            >
              {props.projDemoLink && (
                <Link
                  href={props.projDemoLink}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    className={classes.buttonStyle}
                    size="medium"
                    color="primary"
                    variant="contained"
                  >
                    <Icon
                      className="fa fa-external-link"
                      aria-hidden="true"
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "0.5rem",
                        color: "white",
                      }}
                    />
                    Visit Site
                  </Button>
                </Link>
              )}
              <Link
                href={props.projLink}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  className={classes.buttonStyle}
                  size="medium"
                  color="primary"
                  variant="contained"
                >
                  <Icon
                    className="fa fa-github"
                    aria-hidden="true"
                    style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
                  />
                  View Code
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCard;
