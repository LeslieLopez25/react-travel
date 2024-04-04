import React from "react";

import "./cards.styles.css";

export default function CardBannerItem({ imageUrl, desc }) {
  return (
    <div className="card-banner_container">
      <div className="card-banner_text">
        <p>{desc}</p>
      </div>
      <div className="card-banner_image">
        <img src={imageUrl} alt="Travel" />
      </div>
    </div>
  );
}
