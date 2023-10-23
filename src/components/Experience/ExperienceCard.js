import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      
      <Card.Header>{props.header}</Card.Header>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col >
      <Card.Img style={{height:"10em", width:"25em "}} variant="top" src={props.imgPath} alt="card-img" />
      <Card.Title>{props.title}</Card.Title>
      </Col>
      </Row>
      
      
      
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{textAlign: "left"}}>
          {props.tools}
        </Card.Text>
       
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        

        <Card.Footer style={{ textAlign: "justify" }}>
          {props.footer}
        </Card.Footer>
        
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
