import React, { useState } from "react";
import Img1 from "../../assets/images/england-3.jpg";
import Img2 from "../../assets/images/france-3.jpg";
import Img3 from "../../assets/images/italy-3.jpg";
import Img4 from "../../assets/images/greece-3.jpg";
import Img5 from "../../assets/images/singapore-1.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "./imageCarousel.styles.css";

export default function ImageCarousel() {
  const slides = [
    {
      url: Img1,
      title: "England",
    },
    {
      url: Img2,
      title: "France",
    },
    {
      url: Img3,
      title: "Italy",
    },
    {
      url: Img4,
      title: "Greece",
    },
    {
      url: Img5,
      title: "Singapore",
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
      <h1 className="section-title">See The World</h1>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="image-cover"
      ></div>
      <div className="title-overlay">
        <h2 className="image-title">{slides[currentIndex].title}</h2>
      </div>
      {/* Left Arrow */}
      <div className="left-arrow">
        <div className="arrow-icon">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
      </div>
      {/* Right Arrow */}
      <div className="right-arrow">
        <div className="arrow-icon">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
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
