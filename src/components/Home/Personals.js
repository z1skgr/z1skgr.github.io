import React from "react";
import { Container, Row, Col } from "react-bootstrap"

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa"


import myimg from "../../Assets/avatar.png"

function Personals() {

  
    return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ME <span className="purple">  MYSELF </span> & I
            </h1>
            <p className="home-about-body">
              Programming is my thing and I have at least learnt
              something, I suppose… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, C++, Java, Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Games </b> and
                also in areas related to{" "}
                <b className="purple">
                  ML.
                </b>
              </i>
              <br/>
              <br/>
              Οpen to learning stuff that makes me intrigued.
              <br />
              <br />
              Whenever possible, I apply my interest for developing software
              with  <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myimg}  style={{ borderRadius: "50%",  width: "400px"}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/z1skgr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:cziskas@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
            </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/christos-ziskas-1b683822b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/christosziskas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Personals;
