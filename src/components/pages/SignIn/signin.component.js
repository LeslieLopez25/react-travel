import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import "./signin.styles.css";

export default function SignIn() {
  return (
    <div>
      <div className="signup-container">
        <h1 className="section-title">Sign In</h1>
        {/* <p className="signup-error">Error</p> */}
        <form>
          <div className="signup-form_container">
            <label>Email</label>
            <div className="signup-input_container">
              <input type="email" className="signup-input" />
              <FontAwesomeIcon icon={faEnvelope} className="icons" />
            </div>
          </div>
          <div className="signup-form_container">
            <label>Password</label>
            <div className="signup-input_container">
              <input type="password" className="signup-input" />
              <FontAwesomeIcon icon={faLock} className="icons" />
            </div>
          </div>
          <button className="signup-button">Sign In</button>
        </form>
        <p className="signup-link">
          Don't have an account?{" "}
          <Link to="/signup" className="link-accent">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
