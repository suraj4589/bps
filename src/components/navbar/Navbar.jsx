import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <Header />
      {/*---------- Navbar -------------*/}
      <div className="container-project">
        <nav className="navbar navbar-expand-md navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={isToggled}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isToggled ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
