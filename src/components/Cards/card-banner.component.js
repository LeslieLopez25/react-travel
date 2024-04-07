import React from "react";
import CardBannerItem from "./card-banner-item.component";
import Img1 from "../../assets/images/mexico-3-min.jpg";

export default function CardBanner() {
  return (
    <div className="card-banner">
      <h1 className="section-title">Discover the Unexpected</h1>
      <div className="subtitle-container">
        <h2 className="subtitle">Mexico</h2>
        <CardBannerItem
          imageUrl={Img1}
          desc="A land of ancient civilizations, spicy cuisine, and vibrant fiestas! From the towering pyramids of Teotihuacan to the turquoise waters of Cancun, there's never a dull moment in this colorful country!"
        />
      </div>
    </div>
  );
}
