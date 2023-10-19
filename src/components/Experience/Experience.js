import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";


function Experience() {
  return (
    <>
   
   <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Current <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={logo}
              header="header"
              title="title"
              subtitle={"subtitle"}
              description="Classic Solitaire Card Game build with pygame graphics in Python"
              footer="footer"

            />
          </Col>

        </Row>
        <h2 style={{ color: "white", marginTop: "200px" }}>
          Here are a few jobs  I've worked in  the past.
        </h2>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
        <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={logo}
              header="header"
              title="title"
              subtitle={"subtitle"}
              description="Classic Solitaire Card Game build with pygame graphics in Python"
              footer="footer"

            />
          </Col>

          
        </Row>
      </Container>
    </Container>

   </>
  );
}

export default Experience;
