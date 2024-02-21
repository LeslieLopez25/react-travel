import React from "react";

// CardItem component for the Card component
export default function CardItem({ label, src, text }) {
  return (
    <li className="cards__item">
      <div className="cards__item_block">
        <figure className="cards__item__pic-wrap" data-category={label}>
          <img className="cards__item__img" src={src} alt="Travel" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
        </div>
      </div>
    </li>
  );
}
