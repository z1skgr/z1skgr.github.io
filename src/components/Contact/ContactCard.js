import React, {useRef, useState} from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiFillMail } from "react-icons/ai";
import {  pdfjs } from "react-pdf";

import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const SERVICE_ID = "service_ypirwh1"
const TEMPLATE_ID = "template_024cef7"
const USER_ID = "xPyqSIU6BgWGIiiKr"

function ContactCard() {

  const [formIn, setForm] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })


  const handleName = (event) => {
    setForm({
      ...formIn,
      from_name: event.target.value
    })

  }

  const handleEmail = (event) => {
    setForm({
      ...formIn,
      from_email: event.target.value
    })

  }

  const handleMessage = (event) => {
    setForm({
      ...formIn,
      message: event.target.value
    })

  }

  const form = useRef(0)
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
        });
      });
      setForm({
        from_name: '',
        from_email: '',
        message: '',
      })
  }

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
       {/* <Button
            variant="primary"
            href="mailto:cziskas@gmail.com"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiFillMail />
            &nbsp;Mail Me
  </Button>   */}
          


          <form ref={form} onSubmit={sendEmail}>
  <div className="form-group" >
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input id="from_email"  value={formIn.from_email}  type="from_email" name="from_email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleEmail}/>
    <small id="emailHelp"  className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInput1">Name</label>
    <input type="from_name" className="form-control" id="from_name" name="from_name" value={formIn.from_name} onChange={handleName}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputMessage1">Message</label>
    <input type="message" className="form-control" id="message" name="message" value={formIn.message} onChange={handleMessage}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
       
          </Row>





  
 </div>



      
  );
}

export default ContactCard;
