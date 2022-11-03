import React, { useEffect, useState } from "react";
import logo from "../../assets/3dLogo1.png";
import "./Navbar.css";
import { BsFileArrowUp } from "react-icons/bs";
import { CryptoState } from "../../CryptoContext";

const Navbar = () => {
  const [btnState, setBtnState] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { currency, setCurrency } = CryptoState();
  console.log(currency);

  function toggleHum() {
    setBtnState((btnState) => !btnState);
  }
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  useEffect(() => {
    setBtnState(false);
  }, [currency]);
  let toggleClass = btnState ? "open" : null;
  let cross = btnState ? "line1" : null;
  let activeClass = navbar ? "active" : null;

  return (
    <nav id="Nav" className={activeClass}>
      <div className={`top ${activeClass}`}>
        <a href="#Header">
          <BsFileArrowUp />
        </a>
      </div>
      <div className="logo">
        <img src={logo} alt="" />
        <div className="logoContent">
          <h1>COINDONE</h1>
          <h2>Digital Asset Management</h2>
        </div>
      </div>
      <div className={`links ${toggleClass}`}>
        <ul>
          <li>
            <a href="#Header" onClick={() => setBtnState(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#service" onClick={() => setBtnState(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#marketCap" onClick={() => setBtnState(false)}>
              Market
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => setBtnState(false)}>
              Team
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setBtnState(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setBtnState(false)}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setBtnState(false)}>
              Contact Us
            </a>
          </li>
        </ul>

        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="AED">AED</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="humberger" onClick={toggleHum}>
        <div className={`line ${cross} `}></div>
        <div className={`line ${cross} `}></div>
        <div className={`line ${cross} `}></div>
      </div>
    </nav>
  );
};

export default Navbar;
