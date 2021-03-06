import React from "react";
import Slider from "react-slick";

// Component
import Poster from "../Poster/poster.component";

// Configs
import PosterCarouselSettings from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
  
  const sliderConfig = props.config ? props.config : PosterCarouselSettings;

  return (
    <>
      <div className="my-3 px-3">
        <h3
          className={`text-3xl font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider {...sliderConfig}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
