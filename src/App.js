import React, { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import { Grid } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .post("http://localhost:8000/predict/", { name: "sameer" })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <Grid container justify="center">
        <BrowserRouter>
          <Route path="/" exact component={LandingPage} />
        </BrowserRouter>
      </Grid>
    </div>
  );
}

export default App;
