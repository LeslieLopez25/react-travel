import React from "react";
import DestinationsCardItem from "./destinations-card_item.component";
import cardData from "./cardData";
import "./destinations.styles.css";

export default function DestinationsCard() {
  return (
    <div className="destinations-cards__container">
      <h1 className="section-title">Destinations</h1>
      <div className="destinations-cards__wrapper">
        <ul className="destinations-cards__items">
          {cardData.map((card, index) => (
            <DestinationsCardItem
              key={index}
              src={card.src}
              label={card.label}
              desc={card.desc}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
