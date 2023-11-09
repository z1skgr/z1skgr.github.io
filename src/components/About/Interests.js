import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaChess,
  FaDog,
  FaBasketballBall,
  FaBeer,
  FaRunning,
} from "react-icons/fa";
import {
  SiCounterstrike,
  SiFerrari,
  SiNba,
  SiPlaystation5,
  SiValorant,
} from "react-icons/si";


function Interests() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="interest-icons">
        <FaChess />
        <div className="interest-tag">
          Chess
        </div>
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaBeer />
        <div className="interest-tag">
          Beer
        </div>
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaDog />
        <div className="interest-tag">
          Dogs
        </div>
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaBasketballBall />
        <div className="interest-tag">
          Basketball
        </div>
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <FaRunning />
        <div className="interest-tag">
          Running
        </div>
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiCounterstrike />
        <div className="interest-tag">
          Counterstrike
        </div>
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiFerrari />
        <div className="interest-tag">
          Ferrar
        </div>
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiNba />
        <div className="interest-tag">
          Nba
        </div>
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiPlaystation5 />
        <div className="interest-tag">
          PlayStation 5
        </div>
      </Col>
      <Col xs={4} md={2} className="interest-icons">
        <SiValorant />
        <div className="interest-tag">
          Valorant
        </div>
      </Col>
      
      
      
    </Row>
  );
}

export default Interests;
