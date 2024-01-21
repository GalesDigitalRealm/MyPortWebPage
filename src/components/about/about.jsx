import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { FaRegFolderOpen } from "react-icons/fa6";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 months Working</small>
            </article>

            <article className="about__card">
              <HiMiniUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Working</small>
            </article>

            <article className="about__card">
              <FaRegFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, ad inventore doloribus nihil quis totam esse labore neque ullam voluptatibus iste nostrum debitis aut molestias consequatur. Nulla vitae nobis quasi?
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default about