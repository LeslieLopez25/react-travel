import React, { useEffect, useState } from "react";
import imgData from "./imgData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./gallery.styles.css";
import "../../../App.css";

export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  // To determine if the image is clicked to open the model and close the model when the x-mark is clicked
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  // To have the page start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h2 className="gallery-heading section-title">Gallery</h2>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt={""} />
        <FontAwesomeIcon icon={faTimes} onClick={() => setModel(false)} />
      </div>
      <div className="gallery-container">
        {imgData.map((img, id) => {
          return (
            <div className="pics" key={id} onClick={() => getImg(img.imgSrc)}>
              <img src={img.imgSrc} alt={""} />
            </div>
          );
        })}
      </div>
    </>
  );
}
