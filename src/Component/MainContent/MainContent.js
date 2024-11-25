import React, { useState, useRef, useEffect } from "react";
import "./MainContent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import RabbitRaiders from "../../assets/Rabbit_Raiders.webp"; // The combined image of Rabbit Raiders section
import slide1 from "../../assets/1.webp";
import slide3 from "../../assets/3.webp";
import slide4 from "../../assets/4.webp";
import slide5 from "../../assets/5.webp";

import slide7 from "../../assets/7.webp";
import slide8 from "../../assets/8.webp";
import slide9 from "../../assets/9.webp";
import slide10 from "../../assets/10.webp";
import slide11 from "../../assets/11.webp";
import slide12 from "../../assets/12.webp";
import astropainter from "../../assets/astro_painter.png"

const MainContent = () => {
  const [showSlider, setShowSlider] = useState(false);
  const sliderRef = useRef(null);
  const exploreSectionRef = useRef(null);
  const [showExploreSection, setShowExploreSection] = useState(false);
  const images = [slide1, slide3, slide4, slide5, slide7, slide8, slide9, slide10, slide11, slide12];

  const handleArrowClick = () => {
    setShowSlider(true);

    // Smooth scroll to the slider section
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (showSlider && sliderRef.current) {
      sliderRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showSlider]);

  const handleExploreClick = () => {
    setShowExploreSection(true);
    if (exploreSectionRef.current) {
      exploreSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="main-content">
      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Left Text Section */}
        <div className="text-section">
          <hr style={{ border: "2px solid #d7a43e", marginBottom: "20px" }} />
          <h1>Buy MoonBoxes<br /> and expand your<br /> NFT collection</h1>
          <p>
            Buying MoonBoxes is a unique way to <br />acquire NFTs and build your collection. It is<br /> built on
            the Binance Smart Chain,<br /> MoonRiver, Polygon, Ethereum, and <br />DogeChain. Only available on<span style={{ color: "white" }} />
            MoonBoxes.io.
          </p>
          <hr style={{ border: "1px solid #d7a43e", marginBottom: "20px" }} />
          <button className="cta-button">Buy A MoonBox</button>

          {/* Arrow Icon */}
          <div className="arrow-icon" style={{ display: "contents" }} onClick={handleArrowClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96px"
              height="22px"
              color="#f5c72b"
              fill="currentColor"
              className="bi bi-arrow-down-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
              />
            </svg>
          </div>
        </div>


        <div className="image-section">
          <img src={RabbitRaiders} alt="Rabbit Raiders Section" className="rabbit-raiders-image" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* Slider Section */}
      {showSlider && (
        <div className="slider-section" ref={sliderRef}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            className="swiper-container"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
              </SwiperSlide>
            ))}
          </Swiper>





          <br />

          <div className="paragraph-section" style={{ display: "flex", gap: "174px" }}>

            <div style={{ flex: 1 }}>
              <hr width="100%" size="4" color="#d7a43e" noshade />
              <h2><span style={{ color: "white" }}> MoonBoxes.io</span> <br />YOUR BASE TO<br /> PURCHASE NFTs</h2>
              <hr width="100%" size="1" color="#d7a43e" noshade />
            </div>
            <div style={{ flex: 1 }}>
              <hr width="100%" size="4" color="#d7a43e" noshade />
              <p >
                <span style={{ color: "white" }}> MoonBoxes.io</span> offers you a  <br /> complete overview of upcoming  <br /> active and recent NFT drops.
              </p>

              <br />
              <p> <span style={{ color: "white" }}> MoonBoxes.io</span> will be home to <br /> collectors and amezing NFT<br />artists </p>
              <button className="cta-button" style={{ marginRight: "28rem", borderRadius: "18px", fontSize: "12px" }} onClick={handleExploreClick}>Explore</button>
            </div>

          </div>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Explore Section */}
      {showExploreSection && (


        <div className="content-wrapper" style={{ alignItems: "center" }}>

          <div className="text-section" ref={exploreSectionRef}>
            <hr style={{ border: "2px solid #d7a43e", marginBottom: "20px" }} />
            <h1 style={{ textAlign: "center" }}><span style={{ color: "white" }}>Call for artists!</span><br />Applications are <br />open for all <br />artist & creators</h1>
            <hr style={{ border: "1px solid #d7a43e", marginBottom: "20px" }} />
            <button className="cta-button2"  >Contact Us</button><br /> <br />
            <button className="cta-button3" > <FontAwesomeIcon icon={faBook} alt="" /> Application Form</button>

          </div>


          <div className="image-section" style={{ width: "40%" }}>
            <img src={astropainter} alt="astro painter Section" className="rabbit-raiders-image" />

          </div>

        </div>
      )}
    </div>
  );
};

export default MainContent;
