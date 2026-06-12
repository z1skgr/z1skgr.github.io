import React from "react";
import ContactForm from "./ContactForm";

function ContactCard() {
  return (
    <div className="contact-card-wrapper">
      <p className="home-about-body contact-intro">
        My inbox is always open. Whether you have a question or just want to say
        hello, I'll get back to you! Feel free to mail me about any relevant job
        updates.
      </p>

      <div className="contact-form-row">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactCard;
