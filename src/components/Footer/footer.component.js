import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <h2 className="footer-heading">Blaze Ahead!</h2>
      <div className="footer-content">
        <div className="footer-wrapper">
          <div className="footer-items">
            <h2>Address</h2>
            <p>placeholder</p>
          </div>
          <div className="footer-items">
            <h2>Address</h2>
            <p>placeholder</p>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer-items">
            <h2>Contact</h2>
            <p>placeholder</p>
          </div>
          <div className="footer-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media_wrap">
          <div className="footer-logo">
            <div className="social-logo">
              Trailblaze
              <img src={logo} alt="icon" className="navbar-icon" />
            </div>
          </div>
          <small className="website-rights">
            Trailblaze © {new Date().getFullYear()}
          </small>
          <div className="social-icons">
            <Link
              className="social-icon_link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon_link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon_link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
