import React from "react";
import Container from "react-bootstrap/Container";
import classes from "./Home.css";
import Name from "./Name/Name";
import Image from "react-bootstrap/Image";

const home = () => {
  return (
    <div className={classes.Home}>
      <Container>
        <div className="pt-5">
          <Name />
          <Image
            src={require("../../assets/images/sharan.png")}
            className="float-right"
            width="250px"
            alt="Sharan"
            roundedCircle
          />
        </div>
      </Container>
    </div>
  );
};

export default home;
