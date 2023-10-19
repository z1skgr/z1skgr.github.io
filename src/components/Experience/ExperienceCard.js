import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Header>{props.header}</Card.Header>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Title>{props.title}</Card.Title>
      <Card.Body>
          <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
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
