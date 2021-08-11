import React from "react";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

// Component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// Config
import TempPosters from "../config/TempPosters.config";

const Movie = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-2/3 lg:ml-20 ">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            To get home on time, Hans drives recklessly on the highway with his
            family. His arrogance rubs another driver the wrong way and this man
            will stop at nothing to get revenge.
          </p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-4 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2">
              <div className="w-8 h-8 ">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all VISA cards* on BookMyShow
                  stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2">
              <div className="w-8 h-8 ">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div>
          <h2 className="text-gray-800 font-bold text-2xl mb-3">Cast & Crew</h2>
          <div className="flex flex-wrap gap-4 ">
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jodie-foster-1005-24-03-2017-12-35-26.jpg"
              castName="Jodie Foster"
              role="Sarah Tobias"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jodie-foster-1005-24-03-2017-12-35-26.jpg"
              castName="Jodie Foster"
              role="Sarah Tobias"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jodie-foster-1005-24-03-2017-12-35-26.jpg"
              castName="Jodie Foster"
              role="Sarah Tobias"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jodie-foster-1005-24-03-2017-12-35-26.jpg"
              castName="Jodie Foster"
              role="Sarah Tobias"
            />
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="You might also like"
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="BMS XCLUSIVE"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
