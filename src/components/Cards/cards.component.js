import React from "react";
import CardItem from "./card-item.component";
import Img1 from "../../assets/images/canada-4-min.jpg";
import Img2 from "../../assets/images/england-4.jpg";
import Img3 from "../../assets/images/france-4.jpg";
import Img4 from "../../assets/images/greece-4.jpg";
import Img5 from "../../assets/images/italy-4.jpg";
import Img6 from "../../assets/images/norway-4-min.jpg";
import "./cards.styles.css";

export default function Cards() {
  return (
    <div className="cards">
      <h1 className="section-title">Where Would You Like To Go?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Img1}
              text="The Beauty And Colors Of The City"
              label="Canada"
            />
            <CardItem
              src={Img2}
              text="The Scenery Of Ancient Architecture"
              label="England"
            />
            <CardItem
              src={Img3}
              text="A Walk Through The Past"
              label="France"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Img4}
              text="Ancient Structures Standing Tall"
              label="Greece"
            />
            <CardItem
              src={Img5}
              text="A Mix Of Past and Present"
              label="Italy"
            />
            <CardItem
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
