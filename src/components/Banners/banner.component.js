import React, { useState } from "react";
import Img1 from "../../assets/images/thailand.jpg";
import "./banners.styles.css";

export default function Banner() {
  const banner = [
    {
      url: Img1,
      title: "Thailand",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="banner-container color">
      <div className="banner-overlay">
        <h2 className="banner-title">{banner[currentIndex].title}</h2>
      </div>
    </div>
  );
}
