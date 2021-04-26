import React from 'react';
import emailjs from 'emailjs-com';
import './App.css';
export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fxgu0dh','template_fasv3sr',e.target, 'user_6c12cKMfv9v9DYnRpijbL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
      
    <form className="contact-form" onSubmit={sendEmail}>
    
      <input type="submit" value="Send" />
    </form>
  );
}

