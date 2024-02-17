import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  // handleClick to determine if the icon is clicked
  const handleClick = () => setClick(!click);
  // closeMobileMenu to close the mobile menu
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={closeMobileMenu}>
          <Link to="/" className="logo">
            Trailblaze
          </Link>
          <img
            src="../../assets/images/logo.png"
            alt="icon"
            className="navbar-icon"
          />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/destinations"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Destinations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
