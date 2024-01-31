import React from "react";
import dashboard from "../assets/home/dashboard_medium.png";
import pdf_front from "../assets/home/pdf1.png";
import addtrip_form from "../assets/home/addtrip_form.png";

const Home = () => {
  return (
    <section id="home_section">
      <header>
        <h2>
          PTD Lite <br /> Management System
        </h2>
        <p>
          A sophisticated system for managing professional truck drivers,
          meticulously designed to optimize and streamline paperwork processes.
        </p>
        <p className="p_second">
          The application empowers drivers to swiftly complete road cards,
          significantly expediting the trip documentation process. It features
          an automated system that efficiently records specific trip details
          from origin (point A) to destination (point B).
        </p>
      </header>
      <main>
        <button>Request a demo</button>
        <figure>
          <img src={addtrip_form} alt="" className="addtrip" />
          <img src={dashboard} alt="" className="dash" />
          <img src={pdf_front} alt="" className="pdf" />
          <span className="dash-background"></span>
        </figure>
      </main>
    </section>
  );
};

export default Home;
