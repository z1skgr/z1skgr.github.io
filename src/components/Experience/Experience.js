import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import zl from "../../Assets/zl.png";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";


function Experience() {
  return (
    <>
   
   <Container fluid className="project-section">
      <Particle />
      <Container style={{marginTop:"-40px"}}>
        <h1 className="project-heading">
          Current <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={zl}
              header="Zalikas Liontas Co"
              title="Assistant Manager"
              subtitle={"subtitle"}
              description="Classic Solitaire Card Game build with pygame graphics in Python"
              footer="October 2022- Present | Katerini, Pieria"
              tools= {["tech"]}
            />
          </Col>

        </Row>
        <h3 style={{ color: "white", marginTop: "400px" }}>
          Here are a few jobs  I've worked in  the past.
        </h3>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
        <Col md={4} className="experience-old-card">
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
