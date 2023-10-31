import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anac from "../../Assets/Projects/anac-logo.png";
import tinyos3 from "../../Assets/Projects/tinyos3.png";
import tomasulo from "../../Assets/Projects/tomasulo.png";
import solitaire from "../../Assets/Projects/solitaire.png";
import nqueens from "../../Assets/Projects/nqueens.png";
import intel from "../../Assets/Projects/intc.webp";
import homepage from "../../Assets/Projects/homepage.gif";
import RH from "../../Assets/Projects/RH.gif";

import {
  DiPython,
  DiJava,
  DiLinux,
  DiEclipse,
  DiSublime,
  DiReact,
  DiNodejs,
  DiCss3,
  DiVisualstudio
} from "react-icons/di";
import {
  SiIntel,
  SiC,
  SiPycharm,
  SiXilinx,
  SiGenius,
  SiVisualstudiocode,
  SiGithubpages,
  SiGithubactions,
  SiNodemon,
  SiBootstrap,
  SiTensorflow,
  SiPytorch,
  SiAnaconda,
  SiOverleaf,
  SiCsharp
  
} from "react-icons/si";
import {
  FaRaspberryPi,
  FaUnity,
  
} from "react-icons/fa";

function Projects() {
  return (
    <>
   
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-top-card">
            <ProjectCard
              imgPath={homepage}
              isBlog={false}
              title="Portfolio"
              description="My personal site using React.JS and Bootstrap"
              ghLink="https://github.com/z1skgr/z1skgr.github.io"
              skills={[  <DiReact />, <SiVisualstudiocode/>, <SiGithubpages/>, <DiNodejs/>, <DiCss3/>, <  SiGithubactions />, < SiNodemon/>, <SiBootstrap/>
                ]}
              demoLink="https://z1skgr.github.io"
            />
          </Col>
        </Row>
        <h4 style={{ marginTop:"125px", color: "white" }}>
          Here are a few projects I've worked on recently.
        </h4>
        <Row style={{justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RH}
              isBlog={false}
              title="RH implementation"
              description="Evolutionary algorithm analysis determing player's profile in Unity using ml-agents"
              ghLink="https://github.com/z1skgr/RH_-drive_car"
              skills={[  <SiTensorflow/>, <SiPytorch/>, <SiAnaconda/>, <SiOverleaf/>, <FaUnity/>, <SiCsharp/>, <DiVisualstudio/>
                ]}
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          </Row>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solitaire}
              isBlog={false}
              title="Solitaire"
              description="Classic Solitaire Card Game build with pygame graphics in Python"
              ghLink="https://github.com/z1skgr/SolitaireGame"
              skills={[  <DiPython />, <FaRaspberryPi />,  <SiPycharm/>
                ]}
          //    demoLink="https://github.com/z1skgr/SolitaireGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intel}
              isBlog={false}
              title="SM and OMEGA"
              description="SM & Omega calculations - Parallization protocols for accelerating algorithm performance using Intel Intrinsincs"
              ghLink="https://github.com/z1skgr/SIMD-instruction-MPI-PTHREADS-parallism"
             // demoLink="https://github.com/z1skgr/SIMD-instruction-MPI-PTHREADS-parallismhttps://blogs.soumya-jit.tech/"
             skills={[<DiLinux/> , <SiIntel />, <SiC />,
                ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tomasulo}
              isBlog={false}
              title="Tomasulo Processor"
              description="Dynamic scheduling Processor - Simple Tomasulo-based processor back-end in VHDL"
              ghLink="https://github.com/z1skgr/Tomasulo-BASED-processor"
           //   demoLink="https://github.com/z1skgr/Tomasulo-BASED-processor" 
           skills={[  <SiXilinx />
             ]}          
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tinyos3}
              isBlog={false}
              title="TinyOS3 Updates"
              description="Simple-minded VM - Multicore preemptive scheduler, Serial terminal devices in pure Shell and C"
              ghLink="https://github.com/z1skgr/TinyOS3-updates"
              skills={[  <SiC />, <DiLinux/> , <DiSublime/>
                ]}
            //  demoLink="https://github.com/z1skgr/TinyOS3-updates"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nqueens}
              isBlog={false}
              title="N Queen Problem"
              description="Implementation using Hill Climbing and Local Constraints in Java "
              ghLink="https://github.com/z1skgr/N\_Queens"
              skills={[  <DiJava />, <DiEclipse/>, 
                ]}
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anac}
              isBlog={false}
              title="ANAC Competition"
              description="Agent participating to local Automated Negotiation Agent Competition"
              ghLink="https://github.com/z1skgr/ANAC-competition"
              skills={[   <DiJava />, <SiGenius/>, <DiEclipse/>
                ]}
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

      

        </Row>
      </Container>
    </Container>

   </>
  );
}

export default Projects;
