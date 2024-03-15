import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo.png";
import "./footer.styles.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <h2 className="footer-heading section-title">Blaze Ahead!</h2>
      <div className="footer-content">
        <div className="footer-wrapper">
          <div className="footer-items">
            <h2>Home</h2>
            <p>Features</p>
            <p>Pricing</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-items">
            <h2>About Us</h2>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>FAQ</p>
            <p>Support</p>
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
            <Link to="/" target="_blank" aria-label="Facebook">
              <FontAwesomeIcon
                className="social-icon_link"
                icon={faFacebookF}
              />
            </Link>
            <Link to="/" target="_blank" aria-label="Instagram">
              <FontAwesomeIcon
                className="social-icon_link"
                icon={faInstagram}
              />
            </Link>
            <Link to="/" target="_blank" aria-label="Twitter">
              <FontAwesomeIcon className="social-icon_link" icon={faTwitter} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
