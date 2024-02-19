import React from "react";
import { featuresData } from "../features_data";
import { FaRegCirclePlay } from "react-icons/fa6";
import Modal from "./Modal";
import useModal from "../hooks/useModal ";

const Features = () => {
  const [isShowingModal, toggleModal, activeIndex] = useModal();

  return (
    <section id="features">
      <div className="header-wrapper">
        <p>Features</p>
        <h2>More options</h2>
      </div>
      {featuresData.map((feature, index) => {
        const { Icon, header, description, image, alt, video } = feature;
        return (
          <div key={index} className="feature-wrapper">
            <div className="desc">
              <div className="icon">
                <img src={Icon} alt="" />
              </div>
              <h4>{header}</h4>
              <p>{description}</p>
              <div className="button-wrapper">
                <button
                  className="btn primary-btn"
                  onClick={() => toggleModal(index, video)}
                >
                  <FaRegCirclePlay />
                  <span>Demo</span>
                </button>
                <button className="btn secondary-btn">
                  <span>Learn more</span>
                </button>
              </div>
            </div>
            <div className="img-wrapper">
              <div className="img-inner">
                <img src={image} alt={alt} />
              </div>
              <div className="img-background"></div>
            </div>

            {activeIndex === index && (
              <Modal
                show={isShowingModal}
                onCloseButtonClick={toggleModal}
                activeIndex={activeIndex}
                videoSrc={video}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Features;
