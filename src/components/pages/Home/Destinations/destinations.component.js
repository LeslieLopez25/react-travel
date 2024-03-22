import React from "react";
import DestinationsBanner from "./destinationsBanner.component";
import DestinationImageCarousel from "./destinationsImageCarousel.component";
import "./destinations.styles.css";

export default function Destinations() {
  // What the home page will display first
  return (
    <>
      <DestinationsBanner />
      <DestinationImageCarousel />
    </>
  );
}
