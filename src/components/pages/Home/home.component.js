import React from "react";
import HeroSection from "../../Hero/hero.component";
import { VideoBanner, Banner } from "../../exportBanners.component";
import Cards from "../../Cards/cards.component";
import ImageCarousel from "../../ImageCarousel/imageCarousel.component";
import "../../../App.css";
import CardBanner from "../../Cards/cardBanner.component";

export default function Home() {
  // What the home page will display first
  return (
    <>
      <VideoBanner />
      <HeroSection />
      <Cards />
      <Banner />
      <ImageCarousel />
      <CardBanner />
    </>
  );
}
