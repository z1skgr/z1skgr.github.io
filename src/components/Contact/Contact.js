import React from "react";
import { Container } from "react-bootstrap";
import ContactCard from "./ContactCard"
import Social from "./Social"
import Particle from "../Particle";


function Contacts() {
  return (
   
    <Container fluid className="contact-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
        Get in  <strong className="purple">Touch </strong>
      </h1>
        <ContactCard />
        <Social/>
      </Container>
    </Container>

   
  );
}

export default Contacts;
