import React from "react";
import "../../styles/formPage.css";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      width: 300,
      height: 170,
    },
    [theme.breakpoints.up("sm")]: {
      width: 425,
      height: 250,
    },
    [theme.breakpoints.up("md")]: {
      width: 600,
      height: 350,
    },
    [theme.breakpoints.up("lg")]: {
      width: 600,
      height: 350,
    },
  },
}));

const ResultPage = (props) => {
  const classes = useStyles();
  const resultsData = {
    labels: ["Accepted", "Not Accepted"],
    datasets: [
      {
        label: "Chances of getting in",
        backgroundColor: ["#66bb6a", "#ef5350"],
        data: [
          Math.ceil(props.respData.pred * 100),
          100 - Math.ceil(props.respData.pred * 100),
        ],
      },
    ],
  };
  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Typography
            style={{
              color: "whitesmoke",
              fontSize: "1.5rem",
              fontFamily: "Rubik",
            }}
          >
            Hey <b>{props.respData.name}</b>!
          </Typography>
        </Grid>

        <br />
        <Grid item>
          <Typography
            style={{
              color: "whitesmoke",
              fontSize: "1rem",
              fontFamily: "Rubik",
            }}
          >
            Congratulations! You've taken your first step to pursue your dream
            of studying abroad.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{
              color: "whitesmoke",
              fontSize: "1rem",
              fontFamily: "Rubik",
            }}
          >
            Your chances of studying in your dream university are{" "}
            {Math.ceil(props.respData.pred * 100)}%
          </Typography>
        </Grid>
        <Grid item className={classes.root} lg={12}>
          <Doughnut
            data={resultsData}
            options={{
              title: {
                display: true,
                text: "Chances of studying abroad",
                fontColor: "white",
                fontFamily: "Rubik",
              },
              legend: {
                labels: {
                  fontColor: "white",
                  fontFamily: "Rubik",
                },
              },
            }}
          />
        </Grid>
        <Grid item>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Button
              startIcon={<Home />}
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#003c6c",
                color: "white",
                fontFamily: "Rubik",
                margin: "1rem",
              }}
            >
              Go back to Home Page
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default ResultPage;
