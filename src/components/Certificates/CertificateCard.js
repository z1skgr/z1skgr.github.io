import React from "react";

import { Container, Row, Col } from "react-bootstrap";



function CertificateCard(props) {
  return (

    <Container>

    <Row style={{ justifyContent: "center" }}>
         <Col md={3} className="certs-description">
         <h1 style={{ fontSize: "1.1em" }}>
               {props.num}
             </h1>
           </Col>
           <Col md={3} className="certs-description">
         <a href="https://github.com/z1skgr"
            target="_blank"
            rel="noreferrer"
            style={{color:"white"}}> {props.title} </a>
           </Col>
           <Col md={3} className="certs-description">
         <h1 style={{ fontSize: "1.1em" }}>
               {props.year}
             </h1>
           </Col>

            <Col md={3} className="certs-description">
            <Row style={{justifyContent: "center"}} className="certs-description">
                      {props.skills.map((skill, i) => {
                                  return <Col key={i} xs={4} md={1} className="tech-cert-icons">
                            {skill}
                    </Col>
                                })}
                      
                      </Row>
            </Col>
            </Row>
        </Container>
  );
}
export default CertificateCard;
