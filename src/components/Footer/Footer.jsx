import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import logo from "../../assets/CoinLOGO.png";

import "./Footer.css";

export const Footer = () => {
  return (
    <section id="footer">
      <div className="footerContent">
        <div className="footerLeft">
          <div className="footerAbout">
            <h4 className="footerHeading">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              adipisci nulla vitae quas facere, animi et ex maiores, eius
              dolores iure, debitis quia atque perspiciatis placeat veniam.
              Ratione, voluptatem repellat?
            </p>
          </div>
          <div className="footerlinks">
            <h5 className="footerHeading">Links</h5>
            <div className="linksContainer">
              <a href="#Header">HOME</a>
              <a href="#about">About Us</a>
              <a href="#marketCap">Market</a>
              <a href="#team">Team</a>
              <a href="#faq">FAQ</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerOther">
            <h5 className="footerHeading">Others</h5>
            <a href="#">Terms of Services</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Portfolio</a>
            <a href="#">Corporate</a>
          </div>
          <div className="footerSocial">
            <h5 className="footerHeading">Social Links</h5>
            <p>Follow us on Social Media</p>
            <div className="icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <SiMedium />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          &#169;2023 <span>COINDONE.</span> All Rights Reserved .
        </p>
        <p>English</p>
      </div>
    </section>
  );
};
