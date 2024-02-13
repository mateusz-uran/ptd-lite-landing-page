import React from "react";
import logo from "../assets/logo_big.png";

const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="top">
        <div className="column">
          <div className="logo">
            <img src={logo} alt="logo-ptd" />
          </div>
          <div className="desc">
            Open source application created for professional truck drivers to
            help them maintain clean and efficient work. Users can create and
            manage cards much faster than doing same work on paper with hand.
            Additonal features like statistics helps keep track of work and
            improve balance.
          </div>
        </div>
        <div className="column">
          <div className="inner-col">
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="">how it works</a>
              </li>
              <li>
                <a href="">features</a>
              </li>
              <li>
                <a href="">request a demo</a>
              </li>
            </ul>
          </div>
          <div className="inner-col">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="">Github</a>
              </li>
            </ul>
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
