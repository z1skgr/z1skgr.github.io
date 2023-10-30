import React from "react";
import { Container } from "react-bootstrap";

import Particle from "../Particle";
import CertificateCard from "./CertificateCard"

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3,
  DiDocker,
  

} from "react-icons/di";
import {
  SiTypescript,
  SiApollographql,
  SiRedux,
  SiAndroidstudio,
  SiNodemon,
  SiPrettier,
  SiCypress,
  SiExpo,
  SiJest,
  SiExpress,
  SiRailway,  SiPostman, SiEslint, SiLodash, SiDotenv,
  SiSequelize,
  SiPostgresql,
  SiGithub,
  SiJsonwebtokens
} from "react-icons/si";


function Certificates() {
  return (
    <>
       <Container fluid className="project-section">

<Container>
  <h1 className="project-heading">
    <strong className="purple">Certificates </strong>
  </h1>
  <p style={{ color: "white" }}>
    Here are a few certificates I've taken part recently.
  </p>
  
  <CertificateCard num={1}  title={"Full Stack Open"} year="2023" link="https://fullstackopen.com/en" githublink="https://github.com/z1skgr/FullOpenStack2023"
skills={[  <DiReact />, <DiJavascript1/>, <DiMongodb/> , <DiNodejs/>, <SiTypescript/>, <DiGit/>, <SiApollographql/>, <SiRedux/>,
<SiNodemon/>, <SiPrettier/>, <SiCypress/>, <SiJest/> , <SiExpress/> , <SiRailway/>, <SiPostman/>, <SiEslint/>, <SiLodash/>, <DiCss3 />, <SiDotenv/>
] }/>
<CertificateCard num={2}  title={"Full Stack Open React Native"} year="2023" link="https://fullstackopen.com/en/part10"  githublink="https://github.com/z1skgr/FullOpenStack2023_ReactNative"
skills={[  <SiAndroidstudio /> , <SiExpo/>, <SiEslint/>, <SiApollographql/>, <SiDotenv/>,  <DiReact />, <DiGit/>, <DiCss3/>
]}/>
<CertificateCard num={3}  title={"Full Stack Open Databases"} year="2023" link="https://fullstackopen.com/en/part13"  githublink="https://github.com/z1skgr/full-stack-open-sql"
skills={[  <SiPostgresql /> , <SiSequelize/>, <SiEslint/>, <SiApollographql/>, <SiDotenv/>,  <DiReact />, <DiGit/>, <DiCss3/>, <DiDocker/>,
<SiExpress/>, <SiGithub/>, <DiNodejs/>, <SiJsonwebtokens/>
]}/>
  
   
</Container>

<Particle/>


</Container>




   </>
  );
}

export default Certificates;
