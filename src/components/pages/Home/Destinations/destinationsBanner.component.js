import React from "react";
import Banner from "../../../../assets/videos/video-2.mp4";
import "./destinations.styles.css";

export default function DestinationsBanner() {
  return (
    <div className="destinations-video_container">
      <video src={Banner} autoPlay loop muted />
      <h1 className="section-title">Chase the Horizon</h1>
    </div>
  );
}
