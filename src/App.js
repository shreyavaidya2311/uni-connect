import React from 'react';
import LandingPage from "./components/LandingPage"
import { Grid } from "@material-ui/core"
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
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
