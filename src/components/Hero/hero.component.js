import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/button.component";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="left-section"></div>
      <div className="right-section">
        <h1>Forge your path and behold the beauty of the world! </h1>
        <h2>Immerse yourself in the vibrant culture of the Netherlands.</h2>
        <p>
          Explore the Netherlands for its historic charm, modern innovation, and
          diverse experiences. From Amsterdam's iconic canals to picturesque
          tulip fields, the country offers a rich blend of culture, vibrant
          cities, and stunning landscapes, making it an ideal destination for
          history, art, and nature enthusiasts.
        </p>
        <div className="hero-btns">
          <Link to="/gallery">
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              Gallery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
