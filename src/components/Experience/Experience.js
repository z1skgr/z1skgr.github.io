import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";


function Experience() {
  return (
    <>
   
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My current <strong className="purple">Work </strong>
        </h1>

        <h2 className="project-heading">
           <strong className="purple">Experience </strong>
        </h2>
        <p style={{ color: "white" }}>
          Here are a few places I've worked on recently.
        </p>
      </Container>
    </Container>

   </>
  );
}

export default Experience;
