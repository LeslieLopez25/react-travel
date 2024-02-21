import React from "react";
import Video_2 from "../../assets/videos/video-2.mp4";
export default function video_2() {
  return (
    <div className="video-container">
      <video src={Video_2} autoPlay loop muted />
    </div>
  );
}
