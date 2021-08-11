import React from "react";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

// Component
import MovieHero from "../components/MovieHero/MovieHero.component";

const Movie = () => {
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
      </div>
    </>
  );
};

export default Movie;
