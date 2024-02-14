import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo_ptd.png";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 250);
    });
  });

  return (
    <nav id="navbar" className={`${scroll ? "sticky" : ""}`}>
      <div className="logo-wrapper">
        <Link to="home_section" smooth={true}>
          <img src={logo} alt="logo-ptd" />
        </Link>
      </div>
      <div className={`navbar-inner ${isOpen ? "toggle" : ""}`}>
        <div className="list-wrapper">
          <ul>
            <li>
              <Link
                to="howitworks"
                smooth={true}
                onClick={() => setOpen((prev) => !prev)}
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="features"
                smooth={true}
                onClick={() => setOpen((prev) => !prev)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="footer"
                smooth={true}
                onClick={() => setOpen((prev) => !prev)}
              >
                Documentation
              </Link>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </div>
      <Hamburger
        onClick={() => setOpen((prev) => !prev)}
        toggled={isOpen}
        toggle={setOpen}
        size={20}
      />
    </nav>
  );
};

export default Navbar;
