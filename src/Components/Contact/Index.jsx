import React from "react";
import "./Contact.css";

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  let today = new Date();
  let currentDate = today.getFullYear();

  return (
    <section className='contact_section' id='contact'>
      <h2>Get in touch...</h2>
      <p className='conText'>
        If you're looking for a junior dev that has these characteristics my
        resume is ready to go, just shoot me an email. Or You can find me on
        social media at the links provided below.
      </p>
      <div className='contactDiv'>
        <div
          onClick={() => (window.location.href = "mailto:sablijr@yahoo.com")}
          className='email_btn'>
          Email Me
        </div>
        <a
          target='#blank'
          href='https://www.linkedin.com/in/sablijr/'
          className='linkedIn'>
          <BsLinkedin />
        </a>
      </div>
      <div className='footer'>
        <div className='social_div'>
          <a target='#blank' href='https://twitter.com/SabLiJr'>
            <BsTwitter className='i' />
          </a>
          <a target='#blank' href='https://www.instagram.com/sabli.jr/'>
            <BsInstagram className='i' />
          </a>
          <a target='#blank' href='https://github.com/SabliJr'>
            <BsGithub className='i' />
          </a>
        </div>
        <p className='copyRight'>&copy; Sabli Jr. {currentDate} </p>
      </div>
    </section>
  );
};

export default Contact;
