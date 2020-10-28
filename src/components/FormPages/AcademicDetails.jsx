import React from "react";
import "../../styles/formPage.css";
import { Grid, TextField, withStyles } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#e0e0e0",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e0e0e0",
    },
  },
})(TextField);

const AcademicDetails = () => {
  return (
    <>
      <Grid container spacing={2} justify="center">
        <Grid item lg={6}>
          <CssTextField
            required
            id="gre"
            name="gre"
            label="GRE Score"
            type="number"
            fullWidth
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
          />
        </Grid>
        <Grid item lg={6}>
          <CssTextField
            required
            id="toefl"
            name="toefl"
            label="TOEFL Score"
            fullWidth
            type="number"
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
          />
        </Grid>
        <Grid item lg={12}>
          <CssTextField
            required
            id="sop"
            name="sop"
            label="SOP"
            fullWidth
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
          />
        </Grid>
        <Grid item lg={6}>
          <CssTextField
            required
            id="lor"
            name="lor"
            label="Number of LORs"
            type="number"
            fullWidth
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
          />
        </Grid>
        <Grid item lg={6}>
          <CssTextField
            required
            id="cgpa"
            name="cgpa"
            label="CGPA"
            type="number"
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AcademicDetails;
