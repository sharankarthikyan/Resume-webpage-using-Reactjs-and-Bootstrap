import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const project = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <div className="mt-3 block-example border-left border-dark">
              <div className="pl-2">
                <h4>Online assessment Portal</h4>
                <p className="pt-2">
                  <strong>Languages Used</strong>: HTML, CSS, JS, PHP, SQL and
                  AJAX.
                </p>
                <p className="pt-2">
                  <strong>Framework Used</strong>: Bootstrap.
                </p>
                <p className="pt-2">
                  <strong>Description</strong>: It is a simple online assessment
                  portal for our College students. We can conduct coding and
                  MCQs.
                </p>
                <p>
                  <strong>Developed</strong>: 2018
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 7 }}>
            <div className="mt-3 block-example border-right border-dark text-left">
              <div className="pl-2 align-self-end">
                <h4>Navigation App using MapBox</h4>
                <p className="pt-2">
                  <strong>Languages Used</strong>: Java, XML and MapBox API.
                </p>
                <p className="pt-2">
                  <strong>Description</strong>: This Application used to
                  navigate the person, who are all using the app.
                </p>
                <p>
                  <strong>Developed</strong>: 2020
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="mt-3 block-example border-left border-dark">
              <div className="pl-2">
                <h4>Admission page for Freshers</h4>
                <p className="pt-2">
                  <strong>Languages Used</strong>: HTML, CSS, SQL and PHP.
                </p>
                <p className="pt-2">
                  <strong>Framework Used</strong>: Bootstrap.
                </p>
                <p>
                  <strong>Developed</strong>: 2020
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default project;
