import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.jpg";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Welcome to Sage</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Counseling</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>at your</p>
          <p>doorstep</p>
        </div>
        <div className="hero-latest-btn">
          <div>Explore Now</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
      </div>
    </div>
  );
};

export default Hero;
