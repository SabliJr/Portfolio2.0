import React from "react";
import "./About.css";

import AboutImg from "../../Assests/me.jpg";

import css from "../../Assests/CSS.png";
import Js from "../../Assests/JS.png";
import ReactLogo from "../../Assests/React.png";
import Git from "../../Assests/Git.png";
import Adobe from "../../Assests/AB.png";

const About = () => {
  return (
    <section className='aboutSection' id='about'>
      <img className='aboutImg' src={AboutImg} alt='AboutImg' />
      <div className='textDiv'>
        <h3>About Me</h3>
        <p>
          My name is Sabli Junior I'm a self-thought frontend developer, who is
          highly passionate about coding and start-ups as I dream to found one
          myself one day! My love of technology and curiosity led me to coding,
          and from the moment I console logged “Hello World” I knew I was hooked
          into the world of software development.
          <br />
          <br />
          I love exploring and learning, because I hadn’t had an opportunity to
          go to school in Sudan for varies reasons. When I found coding It was a
          discovery moment for me to satiate my insatiable hunger for learning.
          My goal is to work in a company where I can deliver business values,
          while also levelling up my skills as a developer, I like to seek out
          learning opportunities and not being afraid to fail and struggle as a
          part of learning.
          <br />
          <br />
          Below you’ll find projects I’ve build that showcase my skill and
          general background in developing software, though I’m learning
          consistently and always working on what could stretch my ability and
          lead to higher growth.
        </p>

        <div className='skillsDiv'>
          <h5>Skills:</h5>
          <div className='iconsDiv'>
            <div className='iconImgDiv'>
              <img src={css} alt='' />
              <p>CSS</p>
            </div>
            <div className='iconImgDiv'>
              <img src={Js} alt='' />
              <p>JavaScript</p>
            </div>
            <div className='iconImgDiv'>
              <img src={ReactLogo} alt='' />
              <p>React</p>
            </div>
            <div className='iconImgDiv'>
              <img src={Git} alt='' />
              <p>Git</p>
            </div>
            <div className='iconImgDiv'>
              <img src={Adobe} alt='' />
              <p>Adobe suite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
