import React from "react"
// import NavComp from "./NavComp.js"

import Logo from "./GS_logo_black(1).png";


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#/logo">
      <img src={Logo} alt="logo" className="image" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/evnt">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ourprograms">
              Program
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ourcommunity">
             Our Community
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ourimpact">
              Our Impact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/contact/">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login">
              Login
            </a>
          </li>
        </ul>
        <a href="#/donate" className="button">Donate Now</a>
        <a href="#/join us" className="button">Join Us</a>
      </div>
    </nav>

  );
};

export default Navbar;