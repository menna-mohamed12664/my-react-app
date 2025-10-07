import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <div className="hero container" name={"Hero"}>
      <div className="hero-text">
        <h1>We Ensure Better Aducation For a Better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn dark-arrow">
        <a href="https://www.mans.edu.eg/" title="Click here to learn more about this.">Explore More
         <img src={dark_arrow} /></a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
