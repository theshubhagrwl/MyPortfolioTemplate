import React from "react";
import Type from "../Type";
import myImg from "../../assets/myimg.jpg";
// import Particles from "../ParticlesBG";
import CustomButton from "../CustomButton";
import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <section id="header">
      {/* <Fade delapy={1000}>
        <Particles />
      </Fade> */}
      <Fade delay={600} top cascade>
        <div className="header">
          <img src={myImg} alt="Shubh Agrawal" className="avatar" />
          <Typography variant="h1">Hey, I am Shubh Agrawal</Typography>
          <Type />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="#projects"
              style={{ textDecoration: "none", paddingRight: "1rem" }}
            >
              <CustomButton style={{ zIndex: "10" }} btnText="Projects" />
            </a>
            <a href="#skills" style={{ textDecoration: "none" }}>
              <CustomButton style={{ zIndex: "10" }} btnText="About Me" />
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
}
