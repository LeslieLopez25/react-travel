import React, { useState } from "react";
import Img1 from "../../assets/images/england-4.jpg";
import Img2 from "../../assets/images/france-4.jpg";
import Img3 from "../../assets/images/italy-4.jpg";
import Img4 from "../../assets/images/greece-4.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function ImageCarousel() {
  const slides = [
    {
      url: { Img1 },
    },
    {
      url: { Img2 },
    },
    {
      url: { Img3 },
    },
    {
      url: { Img4 },
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
    <div className="image-container">
      <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className="cover-image"
      ></div>
      {/* Left Arrow */}
      <div className="left-arrow">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="right-arrow">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="slide-indicator">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="slider"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
