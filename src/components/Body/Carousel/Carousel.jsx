import React from "react";
import "./Carousel.css";
import backgroundVideo from "./video/backgroundVideo.mp4";

const Carousel = () => {
  return (
    <div className="background-container">
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Carousel;
