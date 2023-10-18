import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import CertificateCards from "./CertificateCards"

function Certificates() {
  return (
    <>
   
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center" }}>
        <Col md={3} className="home-about-description">
        <h1 style={{ fontSize: "1.1em" }}>
              A/A
            </h1>
          </Col>
          <Col md={3} className="home-about-description">
        <h1 style={{ fontSize: "1.1em" }}>
              Title
            </h1>
          </Col>
          <Col md={3} className="home-about-description">
        <h1 style={{ fontSize: "1.1em" }}>
              Year
            </h1>
          </Col>
          <Col md={3} className="home-about-description">
        <h1 style={{ fontSize: "1.1em" }}>
              Link
            </h1>
          </Col>

        </Row>
        
        
         
      </Container>
      <Container>
      <CertificateCards style={{marginTop:"2000"}} num="1" title={"FullStackOpen"} year="2003" link="fullstackopen.com/en" />
      </Container>
    </Container>

   </>
  );
}

export default Certificates;
