import React, {useRef, useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';

import logo from "../../Assets/logo2.gif";

import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_ypirwh1"
const TEMPLATE_ID = "template_024cef7"
const USER_ID = "xPyqSIU6BgWGIiiKr"

function ContactForm() {

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

  <div class="container-fluid" style={{marginTop:"100px",marginBottom:"200px"}}>
  <div class="row">
  <div class="col-sm-3">
  <img
                src={logo}
                alt="logo"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius:100, height: "8em",
                width: "10em" }}
              />
            </div>
  <div class="col-sm-6">
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
  </div>
  <div class="col-sm-3">
  <ul class="list-unstyled mb-0">
          <li>
          <FontAwesomeIcon className='icon' icon={faMap}/>
            <p>Katerini, CA 60 100, Greece</p>
          </li>
          <li>
          <FontAwesomeIcon className='icon' icon={faPhone}/>
            <p>+ 30 697 930 5332</p>
          </li>
          <li>
          <FontAwesomeIcon className='icon' icon={faEnvelope}/>
            <p class="mb-0">cziskas@gmail.com</p>
          </li>
        </ul>
            </div>
</div>
</div>
      
  );
}

export default ContactForm;
