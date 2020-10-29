import React, { useState, useEffect } from "react";
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

const PersonalDetails = (props) => {
  const [persDetails, setPersDetails] = useState({
    fname: props.formData.fname,
    lname: props.formData.lname,
    college: props.formData.college,
    collegeTier: props.formData.collegeTier,
    country: props.formData.country,
  });

  const handleChange = (e) =>
    setPersDetails({ ...persDetails, [e.target.name]: e.target.value });

  useEffect(() => {
    props.handleFormDataChange(persDetails);
  }, [persDetails]); //eslint-disable-line

  return (
    <>
      <Grid container spacing={2} justify="center">
        <Grid item lg={6}>
          <CssTextField
            required
            id="fname"
            name="fname"
            label="First Name"
            fullWidth
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            value={persDetails.fname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item lg={6}>
          <CssTextField
            required
            id="lname"
            name="lname"
            label="Last Name"
            fullWidth
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            value={persDetails.lname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item lg={12}>
          <CssTextField
            required
            id="college"
            name="college"
            label="College"
            fullWidth
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            value={persDetails.college}
            onChange={handleChange}
          />
        </Grid>
        <Grid item lg={6}>
          <CssTextField
            required
            id="collegeTier"
            name="collegeTier"
            label="College Tier"
            type="number"
            fullWidth
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            value={persDetails.collegeTier}
            onChange={handleChange}
          />
        </Grid>
        <Grid item lg={6}>
          <CssTextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            value={persDetails.country}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalDetails;
