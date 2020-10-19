import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Inplant from "./components/Inplant/Inplant";
import classes from "./App.css";

function App() {
  return (
    <div>
      <div className={classes.Progress}></div>
      <Header />
      <Home />
      <Projects />
      <Inplant />
    </div>
  );
}

export default App;
