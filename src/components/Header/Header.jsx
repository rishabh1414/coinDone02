import React from "react";
import logo from "../../assets/logo.png";
import back from "../../assets/two.png";
import "./Header.css";

const Header = () => {
  return (
    <section id="Header">
      <div className="headerContentLeft">
        <h3>The premier alternative crypto investments fund in the UAE</h3>
        <p>
          We intend to filter through the noise found in the crypto space, and
          pick low-cap gems that will handsomely reward investors.
        </p>
        <div className="outer__button button__left-right">
          <a href="/contact-us">
            <div className="text">GET IN TOUCH</div>
          </a>
        </div>
      </div>
      <div className="headerContentRight">
        <img className="logo" src={logo} alt="" />
        <img className="back" src={back} alt="" />
        <img className="back2" src={back} alt="" />
      </div>
    </section>
  );
};

export default Header;
