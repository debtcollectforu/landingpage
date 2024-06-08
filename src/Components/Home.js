import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img 
            src={BannerBackground} 
            alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Efficient. Professional. Reliable Debt Collection Services.
          </h1>
          <p className="primary-text">
            Your Trusted Partner in Debt Collection and Business Dispute Management. 
          </p>
          <a href="#contactus" className="secondary-button">
            Contact Now <FiArrowRight />{" "}
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
