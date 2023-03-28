import React from "react";
import "./About.css";

import AboutImg from "../../Assets/me.jpg";

import css from "../../Assets/CSS.png";
import Js from "../../Assets/JS.png";
import ReactLogo from "../../Assets/React.png";
import Git from "../../Assets/Git.png";
import Typescript from "../../Assets/Typescrip.png";
import HTML from "../../Assets/Html.png";
import Redux from "../../Assets/redux.png";

const About = () => {
  return (
    <main className='mainAbout'>
      <section className='aboutSection' id='about'>
        <img className='aboutImg' src={AboutImg} alt='AboutImg' />
        <div className='textDiv'>
          <h3>About Me</h3>
          <p>
            My name's Sabli Jr. I'm a self-thought frontend software developer,
            who is really passionate about coding and start-ups as I dream to
            found one myself one day! My love of technology and curiosity led me
            to code. I love exploring and learning, I’m a lifelong learner and
            my talent is the ability to learn expeditiously.
            <br />
            <br />
            Because I hadn’t had an opportunity to finish school in Sudan for
            various reasons, when I found the world of coding, it was a
            discovery moment for me to satiate my hunger for learning. My goal
            is to work in a company where I can deliver business values, while
            also leveling up my skills as a developer, I like to seek out
            learning opportunities and not be afraid to fail and struggle as a
            part of learning.
            <br />
            <br />
            Below you’ll find projects I’ve completed that showcase my skill and
            general knowledge in developing software, though I’m consistently
            learning and always working on what could stretch my skills and lead
            to higher growth.
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
              <img src={Redux} alt='' />
              <p>Redux Toolkit</p>
            </div>
            <div className='iconImgDiv'>
              <img src={Typescript} alt='' />
              <p>Typescript</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
