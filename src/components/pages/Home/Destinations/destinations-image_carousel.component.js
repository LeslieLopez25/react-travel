import React, { useState } from "react";
import Img6 from "../../../../assets/images/japan-4-min.jpg";
import Img7 from "../../../../assets/images/mexico-4-min.jpg";
import Img8 from "../../../../assets/images/u.s.a-4-min.jpg";
import Img9 from "../../../../assets/images/ireland-3.jpg";
import Img10 from "../../../../assets/images/norway-3-min.jpg";
import Img11 from "../../../../assets/images/canada-3-min.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "./destinations.styles.css";

export default function DestinationImageCarousel() {
  const slides = [
    {
      url: Img6,
      title: "Japan",
    },
    {
      url: Img7,
      title: "Mexico",
    },
    {
      url: Img8,
      title: "United States",
    },
    {
      url: Img9,
      title: "Ireland",
    },
    {
      url: Img10,
      title: "Norway",
    },
    {
      url: Img11,
      title: "Canada",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="destinations-image_container">
      <h1 className="section-title">Experience the Extraordinary</h1>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="destinations-image_cover"
      ></div>
      <div className="destinations-title_overlay">
        <h2 className="destinations-image_title">
          {slides[currentIndex].title}
        </h2>
      </div>
      {/* Left Arrow */}
      <div className="d-left_arrow">
        <div className="arrow-icon">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
      </div>
      {/* Right Arrow */}
      <div className="d-right_arrow">
        <div className="arrow-icon">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="destinations-slide_indicator">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="destinations-slider"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
