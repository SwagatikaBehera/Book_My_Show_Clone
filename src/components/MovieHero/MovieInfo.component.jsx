import React from "react";

const MovieInfo = () => {
  return (
    <>
      <div className="flex flex-col gap-3  lg:gap-10">
        <div className="flex items-center gap-3 md:px-4">
          <div className="w-40 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
          <span className=" bg-navGrey-600 text-white text-lg p-1 rounded-3xl">
            Streaming Now
          </span>
        </div>

        <h1 className="hidden lg:text-white lg:text-5xl font-bold">Tailgate</h1>

        <div className="flex flex-col-reverse gap-3 lg:flex-col">
          <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>English &bull; Languages: Audio(1), Subtitles(1)</h4>
            <h4>
              1h 37m &bull; Drama , Thriller &bull; 13+ &bull; 31 Oct, 2019
            </h4>
          </div>

          <div className="flex items-center gap-2 md:w-screen px-3 lg:w-full">
            <button className="bg-red-600 w-full py-2 text-white font-semibold rounded-lg">
              Rent ₹149
            </button>
            <button className="bg-red-600 w-full py-2 text-white font-semibold rounded-lg">
              Buy ₹149
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
