import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import "./signup.styles.css";

export default function SignUp() {
  return (
    <div>
      <div className="signup-container">
        <h1 className="section-title">Sign Up</h1>
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
          <button className="signup-button">Sign Up</button>
        </form>
        <p className="signup-link">
          Already have an account?{" "}
          <Link to="/signin" element={<SignUp />} className="link-accent">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
