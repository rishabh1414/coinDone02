import React from "react";
import faq from "../../assets/faqHeading.png";
import "./Faq.css";

const Faq = () => {
  return (
    <section id="faq">
      <div className="faqHead">
        <img src={faq} alt="" />
      </div>
      <div className="faqContainer">
        <div className="faqContent">
          <h4>What cryptocurrencies can I use to purchase?</h4>
          <p>
            It is a long esfaqlished fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
        </div>
        <div className="faqContent">
          <h4>What cryptocurrencies can I use to purchase?</h4>
          <p>
            It is a long esfaqlished fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
        </div>
        <div className="faqContent">
          <h4>How can I participate in the ICO Token sale?</h4>
          <p>
            It is a long esfaqlished fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
        </div>
        <div className="faqContent">
          <h4>How can I participate in the ICO Token sale?</h4>
          <p>
            It is a long esfaqlished fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
