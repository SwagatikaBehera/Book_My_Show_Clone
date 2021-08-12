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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowSm />,
    prevArrow: <PrevArrowSm />,
  };

  const images = [
    "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
    "https://ik.imagekit.io/ikmedia/backlit.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
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
