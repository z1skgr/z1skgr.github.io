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
            Additionally, I am currently employed as a Assistant Manager at
            Zalikas-Liontas.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Track N Field
            </li>
            <li className="about-activity">
              <ImPointRight /> Role-play games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things and learn the world. This will make the difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chris</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
