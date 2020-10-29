import React, { useState } from "react";
import {
  Grid,
  ThemeProvider,
  createMuiTheme,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core";
import AcademicDetails from "./FormPages/AcademicDetails";
import PersonalDetails from "./FormPages/PersonalDetails";
import { ArrowBackIos, ArrowForwardIos, Publish } from "@material-ui/icons";
import axios from "axios";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Rubik",
  },
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "#003c6c",
        },
        "&$active": {
          color: "#003c6c",
        },
      },
    },
    MuiStepLabel: {
      label: {
        "&$completed": {
          color: "#e0e0e0",
        },
        "&$active": {
          color: "#e0e0e0",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        fontSize: "20px",
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: "18px",
        color: "#e0e0e0",
      },
    },
  },
});

const getSteps = () => {
  return ["Personal Details", "Academic Details"];
};

const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [formData, setFormData] = useState({});
  const [respData, setRespData] = useState(null); //eslint-disable-line
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (length) => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalDetails
            handleFormDataChange={handleFormDataChange}
            formData={formData}
          />
        );
      case 1:
        return (
          <AcademicDetails
            handleFormDataChange={handleFormDataChange}
            formData={formData}
          />
        );
      default:
        return "Unknown step";
    }
  };

  const handleSubmit = () => {
    const reqData = {
      name: formData.fname,
      gre: formData.gre,
      toefl: formData.toefl,
      university: formData.collegeTier,
      sop: formData.sop,
      lor: formData.lor,
      cgpa: formData.cgpa,
      research: 1,
    };
    axios
      .post("http://localhost:8000/grad/", { ...reqData })
      .then((res) => {
        setRespData(res.data);
        handleNext();
      })
      .catch((e) => console.log(e));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormDataChange = (state) => {
    setFormData({ ...formData, ...state });
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography style={{ color: "white" }}>
        Enter the following details and find out your results!
      </Typography>
      <Stepper
        activeStep={activeStep}
        style={{ backgroundColor: "transparent" }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <Typography
            style={{
              fontSize: "1em",
              color: "white",
              justifyContent: "center",
            }}
          >
            Your record has been saved succesfully
          </Typography>
        ) : (
          <div>
            <Grid container justify="center">
              {getStepContent(activeStep)}
            </Grid>
            <div>
              <Grid
                container
                justify="flex-end"
                spacing={2}
                style={{ marginTop: "1rem" }}
              >
                <Grid item>
                  {activeStep === 0 ? null : (
                    <Button
                      startIcon={<ArrowBackIos />}
                      style={{ color: "white" }}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#003c6c", color: "white" }}
                      endIcon={<Publish />}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#003c6c", color: "white" }}
                      endIcon={<ArrowForwardIos />}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  )}
                </Grid>
              </Grid>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default LinearStepper;
