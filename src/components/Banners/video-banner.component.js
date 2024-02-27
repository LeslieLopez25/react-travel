import React from "react";
import Video from "../../assets/videos/video-1.mp4";
import "./banners.styles.css";

export default function VideoBanner() {
  return (
    <div className="video-container">
      <video src={Video} autoPlay loop muted />
      <h1 className="section-title">
        Forge your path and behold the beauty of the world!
      </h1>
    </div>
  );
}
