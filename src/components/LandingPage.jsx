import React from "react";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";
import { Button } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";

function LandingPage() {
  let cursor = {
    show: true,
    element: "|",
    hideWhenDone: true,
  };

  return (
    <>
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
          Worried about higher education and job opportunities?
          <Typist.Delay ms={700} /> <br />
          You've come to the right place!
        </Typist>
        <br />
        <br />
        <Fade bottom delay={11000}>
          Welcome to our application!
        </Fade>
        <br />
        <Fade bottom delay={12000}>
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
        </Fade>
      </div>
    </>
  );
}

export default LandingPage;
