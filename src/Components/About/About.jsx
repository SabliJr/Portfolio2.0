import React from "react";
import "./About.css";

import AboutImg from "../../Assests/me.jpg";

import css from "../../Assests/CSS.png";
import Js from "../../Assests/JS.png";
import ReactLogo from "../../Assests/React.png";
import Git from "../../Assests/Git.png";
import Typescript from "../../Assests/Typescrip.png";
import HTML from "../../Assests/Html.png";
import Redux from "../../Assests/redux.png";
import Sass from "../../Assests/sass.png";

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
          I love learning & exploring, I’m a lifelong learner, and my talent is
          the ability to learn expeditiously. My goal is to work in a company
          where I can deliver business values, while also levelling up my skills
          as a developer, I like to seek out learning opportunities and not
          being afraid to fail and struggle as a part of learning.
          <br />
          <br />
          Below you’ll find projects I’ve build that showcase my skill and
          general background in developing software, though I’m learning
          consistently and always working on what could stretch my ability and
          lead to higher growth.
        </p>
      </div>

      <div className='skillsDiv'>
        <h5>Technical Skills:</h5>
        <div className='iconsDiv'>
          <div className='iconImgDiv'>
            <img src={HTML} alt='' />
            <p>HTML</p>
          </div>
          <div className='iconImgDiv'>
            <img src={css} alt='' />
            <p>CSS</p>
          </div>
          <div className='iconImgDiv'>
            <img src={Sass} alt='' />
            <p>SASS</p>
          </div>
          <div className='iconImgDiv'>
            <img src={Js} alt='' />
            <p>JS</p>
          </div>
          <div className='iconImgDiv'>
            <img src={ReactLogo} alt='' />
            <p>React</p>
          </div>
          <div className='iconImgDiv'>
            <img src={Redux} alt='' />
            <p>Redux</p>
          </div>
          <div className='iconImgDiv'>
            <img src={Git} alt='' />
            <p>Git</p>
          </div>
          <div className='iconImgDiv'>
            <img src={Typescript} alt='' />
            <p>TS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
