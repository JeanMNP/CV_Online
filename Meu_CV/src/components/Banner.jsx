// Banner.jsx
import React from "react";
import "./Banner.css";

function Banner({ image, title, description }) {
  return (
    <div className="banner">
      <div className="banner-content">
        <h3>{title}</h3>
        <img src={image} alt={title} className="banner-image" />
        <p className="banner-description">{description}</p>
      </div>
    </div>
  );
}

export default Banner;
