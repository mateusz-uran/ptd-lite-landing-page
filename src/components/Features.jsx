import React from "react";
import { featuresData } from "../features_data";
import { FaRegCirclePlay } from "react-icons/fa6";

const Features = () => {
  return (
    <section id="features">
      <div className="header-wrapper">
        <p>Features</p>
        <h2>More options</h2>
      </div>
      {featuresData.map((feature, index) => {
        const { Icon, header, description, image, video } = feature;
        return (
          <div key={index} className="feature-wrapper">
            <div className="desc">
              <div className="icon">
                <img src={Icon} alt="" className="svg-style" />
              </div>
              <h4>{header}</h4>
              <p>{description}</p>
              <div className="button-wrapper">
                <button>
                  <FaRegCirclePlay />
                  <span>Demo</span>
                </button>
                <button>Learn more</button>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={image} alt="" />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
