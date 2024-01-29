import React, { useEffect, useRef, useState } from "react";
import pdf1 from "../assets/pdf1.png";
import pdf2 from "../assets/pdf2.png";
import { FaArrowCircleDown } from "react-icons/fa";
import { howItWorksData } from "../howitworks_data";

const HowItWorks = () => {
  return (
    <section id="howitworks">
      <h2>How does it work?</h2>

      {howItWorksData.map((how, index) => {
        const { number, header, paragraph, image } = how;
        return (
          <div key={index} className="card">
            <div className="card-wrapper">
              <div className="top">
                <div className="number">{number}</div>
                <h4>{header}</h4>
              </div>
              <div className="bottom">
                <p>{paragraph}</p>
                <div className="img-wrapper">
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
            <div className="arrow">
              <FaArrowCircleDown />
            </div>
          </div>
        );
      })}

      <div className="card-wrapper result">
        <div className="top">
          <div className="number">05</div>
          <h4>Final result</h4>
        </div>
        <div className="bottom">
          <div className="img-wrapper">
            <img src={pdf1} alt="" />
            <img src={pdf2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
