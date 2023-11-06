import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaChess,
  FaFootballBall,
  FaDog,
  FaBasketballBall,
  FaBeer,
  FaRunning,
} from "react-icons/fa";
import {
  SiCounterstrike,
  SiFerrari,
  SiNba,
  SiNetflix,
  SiNintendo,
  SiPlaystation5,
  SiValorant,
  SiEslgaming
} from "react-icons/si";


function Interests() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="interest-icons">
        <FaChess />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaFootballBall />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaBeer />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaDog />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaBasketballBall />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaRunning />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiCounterstrike />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiFerrari />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiNba />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiNetflix />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiNintendo />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiPlaystation5 />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiValorant />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiEslgaming />
      </Col>
      
      
    </Row>
  );
}

export default Interests;
