import React from "react";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";
import { Button, Grid } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

const LandingPage = () => {
  let cursor = {
    show: true,
    element: "|",
    hideWhenDone: true,
  };

  return (
    <div className="landing">
      <Grid container justify="center">
        <div
          style={{
            fontFamily: "Rubik",
            fontSize: "2em",
            color: "black",
            marginLeft: "1em",
            marginRight: "1em",
            textAlign: "center",
          }}
        >
          <Typist avgTypingDelay={85} startDelay={1000} cursor={cursor}>
            Want to find out your chances of studying abroad?
            <Typist.Delay ms={700} /> <br />
            You've come to the right place!
          </Typist>
          <br />
          <br />
          <Fade bottom delay={11000}>
            Welcome to UniConnect!
          </Fade>
          <br />
          <Fade bottom delay={12000}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Button
                endIcon={<ArrowForwardIos />}
                size="large"
                variant="contained"
                style={{
                  backgroundColor: "#003c6c",
                  color: "white",
                  fontFamily: "Rubik",
                  fontSize: "0.5em",
                }}
              >
                Learn more
              </Button>
            </Link>
          </Fade>
        </div>
      </Grid>
    </div>
  );
};

export default LandingPage;
