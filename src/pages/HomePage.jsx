import React from "react";
import "../styles/homePage.css";
import {
  Grid,
  ThemeProvider,
  createMuiTheme,
  Breadcrumbs,
  Button,
  Typography,
} from "@material-ui/core";
import {
  NavigateNext,
  DoubleArrow,
  School,
  PollOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Rubik",
  },
});

const FormPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="home">
        <div style={{ position: "absolute", top: "5%", left: "5%" }}>
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1em",
              }}
            >
              UniConnect
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1em",
              }}
              to="/home"
            >
              Home
            </Link>
          </Breadcrumbs>
        </div>
        <div
          className="info"
          style={{
            fontFamily: "Rubik",
            fontSize: "1.25em",
            color: "black",
            marginLeft: "1em",
            marginRight: "1em",
            textAlign: "center",
          }}
        >
          <Grid container justify="center">
            <Grid item>
              <Grid container justify="space-evenly">
                <Grid item lg={2}>
                  <Fade bottom delay={1000}>
                    <School
                      style={{
                        fontSize: "3.5rem",
                        justifyContent: "center",
                      }}
                    />
                    <Typography
                      style={{
                        marginBottom: "0.15rem",
                      }}
                    >
                      Our Aim
                    </Typography>
                    To accurately predict your chances of getting into the
                    university of your choice.
                  </Fade>
                </Grid>
                <Grid item lg={2}>
                  <Fade bottom delay={1000}>
                    <PollOutlined
                      style={{
                        fontSize: "3.5rem",
                        justifyContent: "center",
                      }}
                    />
                    <Typography
                      style={{
                        marginBottom: "0.15rem",
                      }}
                    >
                      What we do
                    </Typography>
                    We analyse the data you enter and calculate the probability
                    of admission in your dream college.
                  </Fade>
                </Grid>
                <Grid item lg={2}>
                  <Fade bottom delay={1000}>
                    <DoubleArrow
                      style={{
                        fontSize: "3.5rem",
                        justifyContent: "center",
                      }}
                    />
                    <Typography
                      style={{
                        marginBottom: "0.15rem",
                      }}
                    >
                      How to get started
                    </Typography>
                    Click on the GET STARTED button below and fill in your
                    details. Your results are just a click away!
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ margin: "1em" }}>
              <Fade bottom delay={2000}>
                <Link
                  to="/form"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    size="large"
                    variant="contained"
                    style={{
                      backgroundColor: "#003c6c",
                      color: "white",
                      fontFamily: "Rubik",
                      fontSize: "0.75em",
                    }}
                  >
                    Get Started!
                  </Button>
                </Link>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default FormPage;
