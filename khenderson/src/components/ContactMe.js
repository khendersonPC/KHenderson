import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactMe() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_k6hwqa9', 'template_jtqppaq', e.target, 'user_vqzc4j8PXPYIQfBCE5BBk')
      .then((result) => {
          console.log(result.text);
          //clear the form?
      }, (error) => {
          console.log(error.text);
      });
    
  }
  return (
        <form className="contact-form" onSubmit={sendEmail}>
            <br /><br />
            <div className="form-group">
                <label for="InputEmail1">Email address</label>
                <input type="email" name = "senderEmail" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <input type="text" className="form-control" id="FormControlTextarea1" name="message" placeholder="Message" />
            </div>
        </form>
  );
}