import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";



import { AiFillMail } from "react-icons/ai";
import {  pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ContactCard() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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
          <Button
            variant="primary"
            href="mailto:cziskas@gmail.com"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiFillMail />
            &nbsp;Mail Me
          </Button>

          </Row>





  
 </div>



      
  );
}

export default ContactCard;
