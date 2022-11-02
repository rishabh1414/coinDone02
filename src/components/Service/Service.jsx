import React from "react";
import "./Service.css";
import service from "../../assets/about.png";

function Service() {
  return (
    <>
      <section id="service">
        <img src={service} alt="" />
        <div className="service__content">
          <div className="left"></div>
          <div className="right">
            <div className="content service">
              <h3 className="topLine">The Service we provide</h3>
              <p>
                Using proprietary analyses techniques , CoinDone will select
                alt-coin projects that are at the forefront of blockchain
                technology as a whole. These selections will be up and coming
                projects with huge potential in the coming growth of the crypto
                market. <br /> <br /> The industries of interest to CD include
                Decentralized Finance (DeFi), meta-verse projects including
                gaming and virtual workspace projects, staking tokens,
                real-estate related tokens, as well new emerging segments.
              </p>
            </div>

            <div className="content ourVision">
              <h3 className="topLine">Our Vision</h3>
              <p>
                CoinDone’s vision is to be the premier alternative crypto
                investments fund in the UAE. We are committed to providing
                excellent insight, consistency, and customer service to all of
                our clients.
              </p>
            </div>
            <div className="content mission">
              <h3 className="topLine">Our Mission</h3>
              <p>
                Our mission is to bring the highest standards for research, risk
                management and transparency to digital asset investing. <br />{" "}
                <br />
                When clients invest with us they know that their funds will be
                deployed responsibly, safely, and ethically to ensure a healthy
                return.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
