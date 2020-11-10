import React from "react";
import "../styles/formPage.css";
import { Grid, Breadcrumbs } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import Stepper from "../components/Stepper";
import { Link } from "react-router-dom";

const FormPage = () => {
  return (
    <div className="form">
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
              fontFamily: "Rubik",
            }}
          >
            UniConnect
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1em",
              fontFamily: "Rubik",
            }}
            to="/home"
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1em",
              fontFamily: "Rubik",
            }}
            to="/form"
          >
            Getting Started
          </Link>
        </Breadcrumbs>
      </div>
      <div className="box" style={{ padding: "2rem" }}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Stepper />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FormPage;
