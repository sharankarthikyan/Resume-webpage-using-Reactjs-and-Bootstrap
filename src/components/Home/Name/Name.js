import Education from "../Education/Education";
import React from "react";

const name = () => {
  return (
    <div className="float-left">
      <h1 className="display-4">I'm Sharan.</h1>
      <h6 className="lead">Studying Computer Science and Engineering.</h6>
      <hr />
      <Education />
    </div>
  );
};

export default name;
