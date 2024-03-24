import React from "react";
import DestinationsBanner from "./destinations-banner.component";
import DestinationImageCarousel from "./destinations-image_carousel.component";
import "./destinations.styles.css";
import DestinationsCard from "./destinations-cards";

export default function Destinations() {
  // What the home page will display first
  return (
    <>
      <DestinationsBanner />
      <DestinationsCard />
      <DestinationImageCarousel />
    </>
  );
}
