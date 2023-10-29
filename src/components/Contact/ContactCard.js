import React from "react";
import { Row } from "react-bootstrap";

import ContactForm from "./ContactForm"



function ContactCard() {

  return (
 <div>
      <div >
      <p className="home-about-body" style={{textAlign: "center"}}>
      My inbox is always open. Whether you have a question or 
      just want to say hello, I'll try my best to get back to you! 
      Feel free to mail me about any relevant job updates.
      </p>
      </div>




          <Row style={{ paddingTop:"50px", justifyContent: "center", position: "relative" }}>
    
   <ContactForm/>

       
          </Row>





  
 </div>



      
  );
}

export default ContactCard;
