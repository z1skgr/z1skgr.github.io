import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaDAndDBeyond,
  FaSteam,
  FaChess,
  FaFootballBall,
  FaDog,
  FaBasketballBall,
  FaBeer,
  FaRunning,
  FaTwitch,
  FaBattleNet
} from "react-icons/fa";
import {
  SiCounterstrike,
  SiFerrari,
  SiNba,
  SiNetflix,
  SiNintendo,
  SiPlaystation5,
  SiValorant
} from "react-icons/si";


function Interests() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="interest-icons">
        <FaChess />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaDAndDBeyond />
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
        <FaSteam />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaRunning />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaTwitch />
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaBattleNet />
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
      
      
    </Row>
  );
}

export default Interests;
