import React, { useEffect, useState } from "react";
import logo from "../assets/logo_ptd.png";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 250);
    });
  });

  let user = "mateusz-uran";
  let repo = "ptd-lite-mono";

  function getReadme(user, repo) {
    fetch(`https://api.github.com/repos/${user}/${repo}/contents/README.md`) // Fetch the file from GitHub's api
      .then((response) => response.json())
      .then((data) => {
        const content = atob(data.content); // Convert from base64 to readable text
        // document.getElementById("readme-text").textContent = content; // Apply content to the document
        console.log(content); // Log the content to the console
      })
      .catch((error) => console.log(error)); // Catch any errors
  }

  getReadme(user, repo);

  return (
    <nav id="navbar" className={`${scroll ? "sticky" : ""}`}>
      <div className="logo-wrapper">
        <Link
          // to="home_section"
          // smooth={true}
          href="/"
        >
          <img src={logo} alt="logo-ptd" />
        </Link>
      </div>
      <div className={`navbar-inner ${isOpen ? "toggle" : ""}`}>
        <div className="list-wrapper">
          <ul>
            <li className="list-link">
              <Link
                href="/"
                // to="howitworks"
                // smooth={true}
                onClick={() => setOpen((prev) => !prev)}
                className="link"
              >
                How it works
              </Link>
            </li>
            <li className="list-link">
              <Link
                href="/"
                // to="features"
                // smooth={true}
                onClick={() => setOpen((prev) => !prev)}
                className="link"
              >
                Features
              </Link>
            </li>
            <li className="list-link">
              <Link
                href="/"
                // to="footer"
                // smooth={true}
                onClick={() => setOpen((prev) => !prev)}
                className="link"
              >
                Documentation
              </Link>
            </li>
            <li>
              <a href="#" className="btn primary-btn">
                Login
              </a>
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
