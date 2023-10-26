import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import zl from "../../Assets/zl.png";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import tech from "../../Assets/tech.png";

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
              descriptions= {["Design, and planning on Industrial-Electromechanical projects", 
              "Intelligent controllers, Electronic supply",
              "PV parks, Inverters, Energy Optimization"]}
              footer="October 2022- Present | Katerini, Pieria"
              tools= {null}
            />
          </Col>
       
        

        </Row>
        <h3 style={{ color: "white", marginTop: "400px" }}>
          Former Experience
        </h3>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
        <Col md={4} className="experience-old-card">
            <ExperienceCard
              imgPath={tech}
              header="24th Armored Brigade"
              title="IT Support"
              descriptions= {["Archive directory from/to the headquarters", `Troubleshooting & hardware inspection`, "WAN/LAN supervision for military"]}
              footer="Jan 2022 - Aug. 2022 | Litochoro, Greece"
              tools={null}
            />
          </Col>

          
        </Row>
      </Container>
    </Container>

   </>
  );
}

export default Experience;
