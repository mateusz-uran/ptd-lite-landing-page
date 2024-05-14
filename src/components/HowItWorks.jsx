import React, { useEffect, useRef, useState } from "react";
import pdf1 from "../assets/home/pdf1.png";
import pdf2 from "../assets/how_it_works/pdf2.png";
import { FaArrowCircleDown } from "react-icons/fa";
import { howItWorksData } from "../howitworks_data";

const HowItWorks = () => {
  const [intersectingCards, setIntersectingCards] = useState([]);
  const cardRefs = [...howItWorksData.map(() => useRef()), useRef()];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0% -50% 0%",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      const intersectingCards = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target);

      setIntersectingCards(intersectingCards);
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    cardRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [cardRefs]);

  return (
    <section id="howitworks">
      <div className="header-wrapper">
        <p>Application purpose</p>
        <h2>How does it work?</h2>
      </div>

      {howItWorksData.map((how, index) => {
        const { number, header, paragraph, image, alt } = how;
        const isIntersecting = intersectingCards.includes(
          cardRefs[index].current
        );

        return (
          <div key={index} className={`card `}>
            <div
              className={`card-wrapper ${isIntersecting ? "intersecting" : ""}`}
              ref={cardRefs[index]}
            >
              <div className="top">
                <div className="number">{number}</div>
                <h4>{header}</h4>
              </div>
              <div className="bottom">
                <p>{paragraph}</p>
                <div className="img-wrapper">
                  <img src={image} alt={alt} />
                </div>
              </div>
            </div>
            <div className="arrow">
              <FaArrowCircleDown />
            </div>
          </div>
        );
      })}

      <div
        className={`card-wrapper result ${
          intersectingCards.includes(cardRefs[cardRefs.length - 1].current)
            ? "intersecting"
            : ""
        }`}
        ref={cardRefs[cardRefs.length - 1]}
      >
        <div className="top">
          <div className="number">05</div>
          <h4>Final result</h4>
        </div>
        <div className="bottom">
          <div className="img-wrapper">
            <img src={pdf1} alt="PDF card first page" />
            <img src={pdf2} alt="PDF card second page" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
