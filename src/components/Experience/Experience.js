import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import zl from "../../Assets/zl.png";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import tech from "../../Assets/tech.png";
import joblogo from "../../Assets/ai2cyber_logo.jfif";

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
              "Intelligent controllers, Electronic supply", "Electrical drawings to facilitate the understanding of procedures for the client.",
              "PV parks, Inverters, Energy Optimization", "Troubleshooting with the team, demonstrate the installation steps."]}
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
              descriptions= {["Archive directory from/to the headquarters", `Troubleshooting & hardware inspection`, "LANs installation, management for military exercises" , "Supervision WANs of military units","Helpdesk"]}
              footer="Jan 2022 - Aug. 2022 | Litochoro, Greece"
              tools={null}
            />
          </Col>
          <Col md={4} className="experience-old-card">
            <ExperienceCard
              imgPath={joblogo}
              header="AI2Cyber"
              title="System Engineer"
              descriptions= {["Experience in Windows and Linux", `Configuring and troubleshooting routes, VPNs and firewalls`, "Orchestrate advanced workflows for application deployment.","Automating tasks and managing configurations. ",
              "Document processes and system","Automation management using Python and Bash.","Containerized application deployment and management with Docker.",
              "Troubleshoot cloud-based environments. Experience with AWS (EC2, VPCs, S3).",
              "GNS3 experience in network design and simulation."
              ]}
              footer="Aug 2024 - Oct. 2024 | Remote"
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
