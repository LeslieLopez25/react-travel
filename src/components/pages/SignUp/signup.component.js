import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  return (
    <div>
      <div className="signup-container">
        <h1 className="section-title">Sign Up</h1>
        <p className="signup-error">Error</p>
        <form className="signup-form_container">
          <label>Email</label>
          <div className="signup-input_container">
            <input type="email" className="signup-input" />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </form>
      </div>
    </div>
  );
}
