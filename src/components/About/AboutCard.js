import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Christos Ziskas </span>
            from <span className="purple"> Katerini, Greece.</span>
            <br /> I am an ECE with rising experience. 
            <br/>
            Additionally, I am currently employed as 
            <br/>
            <br/><b>Assistant Manager</b> at
            <br/>
            <br/>
            </p>
            <ul style={{listStyleType:"none"}}>
            <li>
            <u style={{justifyContent: "center", paddingBottom: "2px", paddingTop: "10px", textAlign:"center", marginRight: "80px"}}> 
              Zalikas-Liontas Construction Co. </u></li>      
            </ul>  

<p style={{ textAlign: "justify" }}>
            <br/>
             dedicated to Indrustrial, Electromechanical, Energy Projects
            <br />
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love!
            </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Track & Field
            </li>
            <li className="about-activity">
              <ImPointRight /> Role-play games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things and learn the world. This will make the difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chris</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
