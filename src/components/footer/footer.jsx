import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Gales
      </a>

      <ul className='permalinks'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Sevices</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testemonials">Testemonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://facebook.com">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gales. All Rights Reserved</small>
      </div>
    </footer>
  );
}

export default footer