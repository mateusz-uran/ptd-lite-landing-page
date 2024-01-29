import React from "react";
import add_card from "../assets/addcard_form.png";

const HowItWorks = () => {
  return (
    <section id="howitworks">
      <h2>How does it work?</h2>
      <div className="card-wrapper">
        <div className="left-side">
          <div className="number">01</div>
          <div className="explanation">
            <h4>Add card</h4>
            <p>
              Add card with random or specific number that can contains numbers
              and letters
            </p>
          </div>
        </div>
        <div className="line">a</div>
        <div className="img-wrapper">
          <img src={add_card} alt="Add card form" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
