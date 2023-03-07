import React from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from "react";

const Contact=()=>{

    const form = useRef();
    const [msg,setMsg]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zawilw8', 'template_dxaw00u', form.current, 'BsUhOCcjP6CWMOuLJ')
      .then((result) => {
          console.log(result.text);
          setMsg(true);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <div className="contact-form">
            {/* left side */}
            <div className="w-left">
                <div className="awesome" id="w-awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur c-blur" style={{background:"#ABF1FF94"}}>
                       
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_mail" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" id="mail-button" />
                    <span>{msg && "Thanks for contacting me!"}</span>
                    <div className="blur c-blur" style={{background:"var(--purple)"}}>

                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default Contact