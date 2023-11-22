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
skills={[ {tech: <DiReact />, text:"React"}, {tech:<DiJavascript1/>, text:"Javascript"}, {tech:<DiMongodb/>,text:"MongoDB"} , {tech:<DiNodejs/>, text:"Node.js"}, {tech:<SiTypescript/>,text:"Typescript"}, {tech:<DiGit/>,text:"Git"}, {tech:<SiApollographql/>, text:"ApolloGraphQL"}, {tech:<SiRedux/> , text:"Redux"},
{tech:<SiNodemon/>,text:"Nodemon"}, {tech:<SiPrettier/>,text:"Prettier"}, {tech:<SiCypress/>,text:"CyPress"}, {tech:<SiJest/>,text:"Jest"} , {tech:<SiExpress/>,text:"Express"} , {tech:<SiRailway/>,text:"Railway"}, {tech:<SiPostman/>,text:"Postman"}, {tech:<SiEslint/>,text:"EsLint"}, {tech:<SiLodash/>,text:"Lodash"}, {tech:<DiCss3 />,text:"Css"}, {tech:<SiDotenv/>, text:"Dotenv"}
] } certificate="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/4f06d6ec63af4b74c515d4db5b37c4ca"

/>
<CertificateCard num={2}  title={"Full Stack Open React Native"} year="2023" link="https://fullstackopen.com/en/part10"  githublink="https://github.com/z1skgr/FullOpenStack2023_ReactNative"
skills={[  {tech:<SiAndroidstudio />, text:"Android Studio"} , {tech:<SiExpo/>,text:"Expo"},{tech:<SiEslint/>,text:"EsLint"},  {tech:<SiApollographql/>, text:"ApolloGraphQL"}, {tech:<SiDotenv/>, text:"Dotenv"}, {tech: <DiReact />, text:"React"}, {tech:<DiGit/>,text:"Git"}, {tech:<DiCss3 />,text:"Css"}
]} certificate= "https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/8758ec03cd7fd2759118e0b4fd178399"
/>
<CertificateCard num={3}  title={"Full Stack Open Databases"} year="2023" link="https://fullstackopen.com/en/part13"  githublink="https://github.com/z1skgr/full-stack-open-sql"
skills={[  {tech:<SiPostgresql />, text: "PostgreSQL"} , {tech:<SiSequelize/>, text: "Sequelize"}, {tech:<SiEslint/>,text:"ESLint"}, {tech:<SiApollographql/>, text:"ApolloGraphQL"}, {tech:<SiDotenv/>, text:"Dotenv"},  {tech: <DiReact />, text:"React"},{tech:<DiGit/>,text:"Git"}, {tech:<DiCss3 />,text:"Css"}, {tech:<DiDocker/>,text:"Docker"},
{tech:<SiExpress/>,text:"Express"}, {tech:<SiGithub/>,text:"GitHub"}, {tech:<DiNodejs/>, text:"Node.js"}, {tech:<SiJsonwebtokens/>,text:"Json webtokens"}
]} certificate="https://studies.cs.helsinki.fi/stats/api/certificate/fs-psql/en/0607c998792a0e208ede7f1639066938"
/>
  
   
</Container>

<Particle/>


</Container>




   </>
  );
}

export default Certificates;
