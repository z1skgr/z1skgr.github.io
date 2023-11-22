import React from "react";
import { Container, Col, Row } from "react-bootstrap";


import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function CertificateCard(props) {
  return (

    <Container>
      <div className="d-flex justify-content-between" style={{color:'white', marginTop: "auto" , marginBottom:"10px"}}>
    <div className="col-md-auto" style={{justifyContent:"center"}} >
    {props.num}
    </div>
    <div className="col-md-2" style={{justifyContent:"center"}}>
    {props.title}
    </div>
    <div className="col-md-auto" style={{justifyContent:"center"}}>
    {props.year}
    </div>
    <div className="col-md-4" style={{justifyContent:"center", marginLeft:"20px"}}>
      <Row>
      {props.skills.map((skill, i,j) => {
                                  return <Col key={i} xs={4} md={2} className="tech-cert-icons">
                            {skill.tech}
                            <div key={j} className="tool-tag">
                            {skill.text}
                            </div>
                            </Col>;})}
                            
                           
      </Row>
    
    </div>
    <div>
    <div className="col-md-auto">
    <a href= {props.githublink}
            target="_blank"
            rel="noreferrer"
            style={{color:"white", textAlign:"left"}}>
      <button type="button" className="btn btn-success">GitHub</button>
        </a>
        <a href={props.link}
            target="_blank"
            rel="noreferrer"
            style={{color:"white", textAlign:"left", marginLeft: "10px"}}>
      <button type="button" className="btn btn-success">Site</button>
        </a>
    </div>
    <div className="col-md-auto" style={{paddingTop:"10px"}}>
    <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href= {props.certificate}
            target="_blank"
            style={{ maxWidth: "125px" }}
          >
            <AiOutlineDownload />
            &nbsp;Certificate
          </Button>
        </Row>
       
    </div>

    </div>

    </div>

        </Container>
  );
}
export default CertificateCard;
