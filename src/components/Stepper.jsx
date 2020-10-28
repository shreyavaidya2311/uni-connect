import React from "react";
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

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <PersonalDetails />;
    case 1:
      return <AcademicDetails />;
    default:
      return "Unknown step";
  }
};

const LinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
          alert("Completed Successfully!")
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
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#003c6c", color: "white" }}
                    endIcon={
                      activeStep === steps.length - 1 ? (
                        <Publish />
                      ) : (
                        <ArrowForwardIos />
                      )
                    }
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
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
