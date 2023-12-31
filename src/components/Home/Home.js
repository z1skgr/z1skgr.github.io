import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import Particle from "../Particle";
import Personals from "./Personals";
import Type from "./Type";
import main from "../../Assets/home-main.png";

function Home() {
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi Stranger!{" "} 
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Christos</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={main}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius:150 }}
              />
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
      
      <Personals />
    </section>
  );
}

export default Home;
