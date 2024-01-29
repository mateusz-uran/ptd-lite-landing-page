import React from "react";
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
          <>
            <div key={index} className="card-wrapper">
              <div className="left-side">
                <div className="number">{number}</div>
                <div className="explanation">
                  <h4>{header}</h4>
                  <p>{paragraph}</p>
                </div>
              </div>
              <div className="img-wrapper">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="arrow">
              <FaArrowCircleDown />
            </div>
          </>
        );
      })}

      <div className="card-wrapper result">
        <div className="left-side">
          <div className="number">05</div>
        </div>
        <div className="result-wrapper">
          <h4>Final result</h4>
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
