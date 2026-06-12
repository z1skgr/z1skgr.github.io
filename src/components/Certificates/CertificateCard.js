import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function CertificateCard(props) {
  return (
    <Container className="certificate-card-container">
      <div className="certificate-card-row">
        <div className="certificate-number">{props.num}</div>

        <div className="certificate-title">{props.title}</div>

        <div className="certificate-year">{props.year}</div>

        <div className="certificate-skills">
          <Row className="certificate-skills-row">
            {props.skills.map((skill, i) => {
              return (
                <Col key={i} xs={4} sm={3} md={2} className="tech-cert-icons">
                  {skill.tech}
                  <div className="tool-tag">{skill.text}</div>
                </Col>
              );
            })}
          </Row>
        </div>

        <div className="certificate-actions">
          <div className="certificate-action-row">
            <Button
              variant="success"
              href={props.githublink}
              target="_blank"
              rel="noreferrer"
              className="certificate-action-btn"
            >
              GitHub
            </Button>

            <Button
              variant="success"
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className="certificate-action-btn"
            >
              Site
            </Button>
          </div>

          <Button
            variant="primary"
            href={props.certificate}
            target="_blank"
            rel="noreferrer"
            className="certificate-action-btn certificate-download-btn"
          >
            <AiOutlineDownload /> &nbsp;Certificate
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default CertificateCard;
