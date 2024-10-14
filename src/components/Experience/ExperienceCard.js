import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      
      <Card.Header>{props.header}</Card.Header>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col >
      <Card.Img style={{height:"7em", width:"15em"}} variant="top" src={props.imgPath} alt="card-img" />
      <Card.Title style={{ fontWeight: 'bold' }}>{props.title}</Card.Title>
      </Col>
      </Row>
      
      
      
      <Card.Body>
      <ul>

         
        {props.descriptions.map((des,i)=>{
          return <li key={i} style={{textAlign: "left"}}>
            {des}
          </li>
            
          
        })}
     </ul>
         

        <Card.Text style={{marginTop:"25px",textAlign: "left"}}>
          {props.tools ? "Tools:" : ""}
          {props.tools ? props.tools.map((tl,i)=>{
           return ` ${tl},`
          }) : ""}
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
