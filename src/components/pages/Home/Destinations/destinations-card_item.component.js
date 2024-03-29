import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

// DestinationsCardItem component for the Card component
export default function DestinationsCardItem({ label, src, desc }) {
  const [savedDestination, setSavedDestination] = useState(false);

  return (
    <li className="destinations-cards__item">
      <div className="destinations-cards__item__block">
        <figure
          className="destinations-cards__item__pic-wrap"
          data-category={label}
        >
          <div className="heart-icons">
            <div className="heart-icon_box">
              {savedDestination ? (
                <FontAwesomeIcon icon={solidHeart} className="heart-icon" />
              ) : (
                <FontAwesomeIcon icon={regularHeart} className="heart-icon" />
              )}
            </div>
          </div>
          <img
            className="destinations-cards__item__img"
            src={src}
            alt="Travel"
          />
        </figure>
        <div className="explanation">
          <p>{desc}</p>
        </div>
      </div>
    </li>
  );
}
