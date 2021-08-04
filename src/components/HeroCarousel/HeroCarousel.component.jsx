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
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    "https://ik.imagekit.io/ikmedia/backlit.jpg",
    "https://lh3.googleusercontent.com/proxy/xcD1QYXYorzGmm7GN02ZQxUc8VpnjnyibUxY04_L_LcEads73EL2dhQh3A4a7aSQwg9uuJCUWOyReFOOXvJetVJ_j2RB39yPNojBhNWIZ42iTRiINtEOPWTppaJ-90MNa4BMbe8CCRDxAvIFBw6GrNuii1cOwlTl",
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
