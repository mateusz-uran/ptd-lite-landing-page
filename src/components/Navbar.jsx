import React, { useState } from "react";
import logo from "../assets/logo_ptd.png";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav id="navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="logo-ptd" />
      </div>
      <div className={`navbar-inner ${isOpen ? "toggle" : ""}`}>
        <div className="list-wrapper">
          <ul>
            <li>
              <a href="/">How it works</a>
            </li>
            <li>
              <a href="">Features</a>
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
