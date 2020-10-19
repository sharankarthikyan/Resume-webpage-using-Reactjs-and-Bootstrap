import React from "react";
import Container from "react-bootstrap/Container";

import classes from "./Inplant.css";
import Jumbotron from "react-bootstrap/Jumbotron";

const inplant = () => {
  return (
    <div className={classes.Inplant}>
      <Container>
        <div className="pt-5">
          <samp>
            <h4>Inplant Training</h4>
          </samp>
          <Jumbotron style={{ width: "50%" }} className={classes.Jumbotron}>
            <h3>SCHWING Shetter India</h3>
            <p>Duration: 10 days.</p>
          </Jumbotron>
          <Jumbotron style={{ width: "60%" }} className={classes.Jumbotron2}>
            <h3>American Mega Trends Private Limited</h3>
            <p>Duration: 7 days.</p>
          </Jumbotron>
          <Jumbotron style={{ width: "70%" }} className={classes.Jumbotron3}>
            <h3>Jouve India Private Limited</h3>
            <p>Duration: 7 days.</p>
          </Jumbotron>
        </div>
      </Container>
    </div>
  );
};

export default inplant;
