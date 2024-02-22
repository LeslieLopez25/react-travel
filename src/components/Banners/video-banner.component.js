import React from "react";
import Video from "../../assets/videos/video-1.mp4";
import "./banners.styles.css";

export default function VideoBanner() {
  return (
    <div className="video-container">
      <video src={Video} autoPlay loop muted />
    </div>
  );
}
