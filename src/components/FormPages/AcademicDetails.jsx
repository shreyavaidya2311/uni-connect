import React, { useEffect, useState } from "react";
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

const AcademicDetails = (props) => {
  const [acadDetails, setAcadDetails] = useState({});

  const handleChange = (e) =>
    setAcadDetails({ ...acadDetails, [e.target.name]: e.target.value });

  useEffect(() => {
    props.handleFormDataChange(acadDetails);
  }, [acadDetails]); //eslint-disable-line

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
            value={acadDetails.gre}
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            onChange={handleChange}
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
            value={acadDetails.toefl}
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item lg={12}>
          <CssTextField
            required
            id="sop"
            name="sop"
            label="SOP"
            fullWidth
            value={acadDetails.sop}
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            onChange={handleChange}
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
            value={acadDetails.lor}
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item lg={6}>
          <CssTextField
            required
            id="cgpa"
            name="cgpa"
            label="CGPA"
            type="number"
            value={acadDetails.cgpa}
            InputProps={{
              style: { color: "white", fontFamily: "Rubik" },
            }}
            fullWidth
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AcademicDetails;
