import React from "react";

import { Container, Row, Col } from "react-bootstrap";


function CertificateCards(props) {
  return (

     
      <Row style={{ justifyContent: "center" }}>
      <Col md={3} className="home-about-description">
      <h1 style={{ fontSize: "1.1em" }}>
            {props.num}
          </h1>
        </Col>
        <Col md={3} className="home-about-description">
      <h1 style={{ fontSize: "1.1em" }}>
      {props.title}
          </h1>
        </Col>
        <Col md={3} className="home-about-description">
      <h1 style={{ fontSize: "1.1em" }}>
            {props.year}
          </h1>
        </Col>
        <Col md={3} className="home-about-description">
      <h1 style={{ fontSize: "1.1em" }}>
      {props.link}
          </h1>
        </Col>
      </Row>
  );
}
export default CertificateCards;
