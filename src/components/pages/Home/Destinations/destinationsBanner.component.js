import React from "react";
import Banner from "../../../../assets/videos/video-2.mp4";
import "./destinations.styles.css";

export default function DestinationsBanner() {
  return (
    <div className="video-container">
      <video src={Banner} autoPlay loop muted />
      <h1 className="section-title">
        Forge your path and behold the beauty of the world!
      </h1>
    </div>
  );
}
