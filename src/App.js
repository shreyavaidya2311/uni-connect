import React from "react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

function App() {
  React.useEffect(() => {
    axios
      .post("http://localhost:8000/predict/", { name: "sameer" })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/form" exact component={FormPage} />
    </BrowserRouter>
  );
}

export default App;
