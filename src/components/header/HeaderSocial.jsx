import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" targer="_blanck">
        <IoLogoLinkedin />
      </a>
      <a href="https://github.com" targer="_blanck">
        <FaGithub />
      </a>
      <a href="https://facebook.com" targer="_blanck">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
