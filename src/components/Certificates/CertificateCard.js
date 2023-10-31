import React from "react";
import { Container, Col, Row } from "react-bootstrap";



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
      {props.skills.map((skill, i) => {
                                  return <Col key={i} xs={4} md={2} className="tech-cert-icons">
                            {skill}
                            </Col>;})}
      </Row>
    
    </div>
    <div className="col-md-auto" >
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

    </div>

        </Container>
  );
}
export default CertificateCard;
