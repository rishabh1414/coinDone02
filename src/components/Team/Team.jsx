import React from "react";
import team from "../../assets/team.png";
import mem1 from "../../assets/01.jpg";
import mem2 from "../../assets/02.jpg";
import mem3 from "../../assets/03.jpg";
import "./Team.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const Team = () => {
  return (
    <section id="team">
      <img src={team} alt="" />
      <div className="teamContent">
        <div className="teamMember">
          <div id="imgHolder">
            <span className="contactLinks">
              <p>
                <a href="tel:+4733378901">+47 333 78 901</a>
              </p>
              <p>
                <a href="mailto:someone@example.com">someone@example.com</a>
              </p>
            </span>
            <img className="teamImg" src={mem1} alt="" />
            <div className="social">
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <FaTwitter />
                </a>
              </span>
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <SiMedium />
                </a>
              </span>
            </div>
          </div>

          <h3>Davil Miller</h3>
          <p>CEO,Coindone</p>
        </div>
        <div className="teamMember">
          <div id="imgHolder">
            <span className="contactLinks">
              <p>
                <a href="tel:+4733378901">+47 333 78 901</a>
              </p>
              <p>
                <a href="mailto:someone@example.com">someone@example.com</a>
              </p>
            </span>
            <img className="teamImg" src={mem2} alt="" />
            <div className="social">
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <FaTwitter />
                </a>
              </span>
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <SiMedium />
                </a>
              </span>
            </div>
          </div>

          <h3>Rinks Cooper</h3>
          <p>CEO,Coindone</p>
        </div>
        <div className="teamMember">
          <div id="imgHolder">
            <span className="contactLinks">
              <p>
                <a href="tel:+4733378901">+47 333 78 901</a>
              </p>
              <p>
                <a href="mailto:someone@example.com">someone@example.com</a>
              </p>
            </span>
            <img className="teamImg" src={mem3} alt="" />
            <div className="social">
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <FaTwitter />
                </a>
              </span>
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span className="socialIcon">
                <a
                  href="https://react-icons.github.io/react-icons/search?q=fac"
                  target="blank"
                >
                  <SiMedium />
                </a>
              </span>
            </div>
          </div>

          <h3>Tom Holland</h3>
          <p>CEO,Coindone</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
