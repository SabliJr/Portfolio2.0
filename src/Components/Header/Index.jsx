import "./Header.css";

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../SVG/NewLogo.svg";
import HeroTitleSvg from "./Title";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTrigger = () => setIsOpen(!isOpen);
  let menuRef = useRef(null);

  useEffect(() => {
    let MenuHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", MenuHandler);

    return () => {
      document.removeEventListener("mousedown", MenuHandler);
    };
  });

  return (
    <section className='heroSection'>
      <main className='mainHero'>
        <div className='navDiv'>
          <nav className='navBar'>
            <img className='logo' src={Logo} alt='Logo' />
            <ul
              className={`navLinks ${isOpen ? "navLinks expand" : ""}`}
              ref={menuRef}>
              <li>
                <Link
                  to='/'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='myWork'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>
                  MyWork
                </Link>
              </li>
              <li id='contAct'>
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}>
                  Contact
                </Link>
              </li>

              <a
                className='ResumeLink'
                target='#blank'
                href='https://drive.google.com/file/d/1TQpbdW-6tHEci6qBpFdPSkis6qA9XVrH/view?usp=sharing'
                download='Resume'>
                <button className='ResumeBtn'>Resume</button>
              </a>
            </ul>
            <div
              className='mobileMenuIcon'
              onClick={handleTrigger}
              ref={menuRef}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
          </nav>
        </div>

        <article className='heroArticle'>
          <div className='heroFirstDiv'>
            <HeroTitleSvg className='heroImg' />
            <p className='heroP'>
              I bring beautiful modern designs into functionality on the web.
            </p>
            <button className='HeroBtn'>
              <Link
                to='myWork'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                My Work
              </Link>
            </button>
          </div>
        </article>
      </main>
    </section>
  );
};

export default Header;
