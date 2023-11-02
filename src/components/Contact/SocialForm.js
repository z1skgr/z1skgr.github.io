import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";




function SocialForm(props) {


  return (

    <Card className="experience-card-view">
      
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col >
      <Card.Title>{props.title}</Card.Title>
      </Col>
      </Row>
      
      
      
      <Card.Body>
      <Col>
      <Card.Footer style={{ textAlign: "center", fontSize:18 }}>
      <a href= {props.link}
            target="_blank"
            rel="noreferrer"
            style={{color:"white", textAlign:"left"}}>
      {props.footer}
        </a>
         </Card.Footer>
      </Col>
                

       
        
      </Card.Body>

       
    </Card>
      
  );
}

export default SocialForm;
