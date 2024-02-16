import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // handleClick to determine if the icon is clicked
  const handleClick = () => setClick(!click);
  // closeMobileMenu to close the mobile menu
  const closeMobileMenu = () => setClick(false);

  // Displays button if the screen is less than 960px
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // To render the button
  useEffect(() => {
    showButton();
  }, []);

  // When the screen size changes, the button is displayed or not
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={closeMobileMenu}>
          <Link to="/" className="logo">
            Trailblaze
          </Link>
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
        </ul>
      </div>
    </nav>
  );
}
