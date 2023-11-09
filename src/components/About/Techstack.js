import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiLinux,
  DiHtml5,
  DiMarkdown,  
  DiDocker,
  DiCss3
} from "react-icons/di";
import {
  SiPostgresql,
  SiTypescript,
  SiCsharp,
  SiDelphi,
  SiLatex,
  SiC,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <div className="tech-tag">
          C
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <div className="tech-tag">
          Embedded C
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div className="tech-tag">
          Java
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-tag">
          Javascript
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div className="tech-tag">
          Typescript
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <div className="tech-tag">
          C#
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-tag">
          Python
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDelphi />
        <div className="tech-tag">
          Delphi
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="tech-tag">
          Html
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="tech-tag">
          Css
        </div>
      </Col>
      <Row style={{marginTop: "100px"}}>
        
      </Row>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex />
        <div className="tech-tag">
          Latex
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-tag">
          Git
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <div className="tech-tag">
          Linux
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMarkdown />
        <div className="tech-tag">
          Markdown
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div className="tech-tag">
          Postgresql
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="tech-tag">
          MongoDB
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <div className="tech-tag">
          Docker
        </div>
      </Col>

      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-tag">
          React
        </div>
      </Col>
      
      
      
      
      
 
      
      
      

      
    </Row>
  );
}

export default Techstack;
