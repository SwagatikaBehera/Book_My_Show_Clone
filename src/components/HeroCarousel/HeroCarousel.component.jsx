import React from "react";
import HeroSlider from "react-slick";

// Component
import { NextArrow, PrevArrow, NextArrowSm,PrevArrowSm } from "./Arrows.component";

const HeroCarousel = () => {
  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "400px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowSm />,
    prevArrow: <PrevArrowSm />,
  };

  const images = [
    "https://images.unsplash.com/photo-1523997596732-56d0ebb8eacf?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1627308158115-e62e8b8f9a6a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1519155751704-f00dce84d79b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1597587176449-b38f5b9bf691?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-52 md:h-72 py-3">
              <img src={image} alt="CarousalImage" className="w-full h-full" />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block ">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={image}
                alt="CarousalImage"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>{" "}
      </div>
    </>
  );
};

export default HeroCarousel;
