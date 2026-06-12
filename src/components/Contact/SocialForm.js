import React from "react";
import Card from "react-bootstrap/Card";

function SocialForm(props) {
  return (
    <Card className="social-card-view personal-social-card">
      <Card.Body className="personal-social-body">
        <Card.Title className="personal-social-title">{props.title}</Card.Title>

        {props.link ? (
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="personal-social-link"
          >
            {props.footer}
          </a>
        ) : (
          <span className="personal-social-link personal-social-link-static">
            {props.footer}
          </span>
        )}
      </Card.Body>
    </Card>
  );
}

export default SocialForm;
