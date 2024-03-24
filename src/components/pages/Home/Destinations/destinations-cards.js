import React from "react";
import DestinationsCardItem from "./destinations-card_item.component";
import "./cards.styles.css";

export default function DestinationsCard() {
  return (
    <div className="destinations-cards">
      <h1 className="section-title">Destinations</h1>
      <div className="destinations-cards__container">
        <div className="destinations-cards__wrapper">
          <ul className="destinations-cards__items">
            <DestinationsCardItem
              src={Img1}
              text="The Beauty And Colors Of The City"
              label="Canada"
            />
            <DestinationsCardItem
              src={Img2}
              text="The Scenery Of Ancient Architecture"
              label="England"
            />
            <DestinationsCardItem
              src={Img3}
              text="A Walk Through The Past"
              label="France"
            />
          </ul>
          <ul className="destinations-cards__items">
            <DestinationsCardItem
              src={Img4}
              text="Ancient Structures Standing Tall"
              label="Greece"
            />
            <DestinationsCardItem
              src={Img5}
              text="A Mix Of Past and Present"
              label="Italy"
            />
            <DestinationsCardItem
              src={Img6}
              text="Towns On Beautiful Islands Surrounding Each Other"
              label="Norway"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
