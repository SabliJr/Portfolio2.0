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
import Node from "../../Assets/Nodejs.png";

const About = () => {
  return (
    <main className="mainAbout">
      <section className="aboutSection" id="about">
        <img className="aboutImg" src={AboutImg} alt="AboutImg" />
        <div className="textDiv">
          <h3>About Me</h3>
          <p>
            name’s Sabli Jr. I am a frontend developer with a little less than a
            year of experience in the industry. My expertise lies in JavaScript,
            TypeScript, and ReactJS, and I am passionate about creating
            beautiful, responsive, and intuitive user interfaces that enhance
            the user experience. I have a keen eye for design and am able to
            translate complex designs into functional and aesthetically pleasing
            web applications.
            <br />
            <br />
            My love of technology and curiosity has driven me to pursue coding,
            I enjoy exploring and learning new things. I’m a lifelong learner
            and I possess the talent to learn quickly, which is essential in the
            fast-paced world of technology.
            <br />
            <br />
            In addition to my technical skills, I am a good communicator and am
            able to work effectively in a team environment.
          </p>
        </div>

        <div className="skillsDiv">
          <h5>Technical Skills:</h5>
          <div className="iconsDiv">
            <div className="iconImgDiv">
              <img src={HTML} alt="" />
              <p>HTML</p>
            </div>
            <div className="iconImgDiv">
              <img src={css} alt="" />
              <p>CSS</p>
            </div>
            <div className="iconImgDiv">
              <img src={Js} alt="" />
              <p>JavaScript</p>
            </div>
            <div className="iconImgDiv">
              <img src={ReactLogo} alt="" />
              <p>React</p>
            </div>
            <div className="iconImgDiv">
              <img src={Node} alt="" />
              <p>Node Js</p>
            </div>
            <div className="iconImgDiv">
              <img src={Git} alt="" />
              <p>Git</p>
            </div>
            <div className="iconImgDiv">
              <img src={Redux} alt="" />
              <p>Redux Toolkit</p>
            </div>
            <div className="iconImgDiv">
              <img src={Typescript} alt="" />
              <p>Typescript</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
