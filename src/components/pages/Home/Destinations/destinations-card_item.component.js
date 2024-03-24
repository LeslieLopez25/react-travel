import React from "react";

// DestinationsCardItem component for the Card component
export default function DestinationsCardItem({ label, src, desc }) {
  return (
    <li className="destinations-cards__item">
      <div className="destinations-cards__item__block">
        <figure
          className="destinations-cards__item__pic-wrap"
          data-category={label}
        >
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
