import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// Config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="container mx-auto lg:px-40 ">
          <h1 className="text-2xl font-bold text-gray-800 my-3 lg:text-3xl">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-premier-700 py-6 my-4">
          <div className="hidden md:block px-32 pb-6">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Premier"
              className="w-full h-full"
            />
          </div>

          <div className="container mx-auto lg:px-32">
            <PosterSlider
              images={TempPosters}
              title="Premieres"
              subtitle="Brand new releases every Friday"
              isDark
            />
          </div>
        </div>

        <div className="container mx-auto lg:px-32">
          <PosterSlider
            images={TempPosters}
            title="Online Streaming Events"
            isDark={false}
          />
        </div>

        <div className="container mx-auto lg:px-32">
          <PosterSlider
            images={TempPosters}
            title="Outdoor Events"
            isDark={false}
          />
        </div>

        <div className="container mx-auto lg:px-32">
          <PosterSlider
            images={TempPosters}
            title="Laughter Therapy"
            isDark={false}
          />
        </div>

        <div className="container mx-auto lg:px-32">
          <PosterSlider
            images={TempPosters}
            title="Popular Events"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
