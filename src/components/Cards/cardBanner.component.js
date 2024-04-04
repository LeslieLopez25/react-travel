import React from "react";
import CardBannerItem from "./cardBannerItem.component";

export default function CardBanner() {
  return (
    <div>
      <h1>A Vast World</h1>
      <CardBannerItem
        imageUrl="../../assets/images/mexico-3-min.jpg"
        desc="Mexico: A land of ancient civilizations, spicy cuisine, and vibrant fiestas! From the towering pyramids of Teotihuacan to the turquoise waters of Cancun, there's never a dull moment in this colorful country!"
      />
    </div>
  );
}
