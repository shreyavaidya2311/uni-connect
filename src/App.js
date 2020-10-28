import React, { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import FormPage from "./pages/FormPage";

function App() {
  useEffect(() => {
    axios
      .post("http://localhost:8000/predict/", { name: "sameer" })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/home" exact component={LandingPage} />
      <Route path="/form" exact component={FormPage} />
    </BrowserRouter>
  );
}

export default App;
