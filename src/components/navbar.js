import React, { useState } from "react";
import logo from '../images/logo.png';
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            {/* <img src={logo}  alt=""/> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse justify-content-end navbar-collapse ${
              show ? "show" : ""
            }`}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Locations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Offerings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item link_btn">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
