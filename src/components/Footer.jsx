import React from "react";
import logo from "../assets/logo_big.png";
import { Link } from "react-scroll";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="top">
        <div className="logo-wrapper">
          <img src={logo} alt="" />
          <p>
            Open source application created for professional truck drivers to
            improve work efficiency.
          </p>
          <div className="icons-wrapper">
            <a href="https://github.com/mateusz-uran/ptd-lite-mono">
              <IoLogoGithub />
            </a>
            <a href="mailto: ptdlite@gmail.com">
              <BiLogoGmail />
            </a>
          </div>
        </div>
        <div className="links">
          <div className="column">
            <h4>Navigation</h4>
            <div className="link-wrapper">
              <Link href="#" to="howitworks" smooth={true} className="link">
                How it works
              </Link>
              <Link href="#" to="features" smooth={true} className="link">
                Features
              </Link>
            </div>
          </div>
          <div className="column">
            <h4>Contact & Docs</h4>
            <div className="link-wrapper">
              <a href="https://github.com/mateusz-uran/ptd-lite-mono">Github</a>
              <a href="mailto: ptdlite@gmail.com">Gmail</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; {currentYear} All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
