import React from "react";
import HeroSection from "../../Hero/hero.component";
import VideoBanner from "../../Banners/video-banner.component";
import Cards from "../../Cards/cards.component";
import Banner from "../../Banners/banner.component";
import "../../../App.css";

export default function Home() {
  // What the home page will display first
  return (
    <>
      <VideoBanner />
      <HeroSection />
      <Cards />
      <Banner />
    </>
  );
}
