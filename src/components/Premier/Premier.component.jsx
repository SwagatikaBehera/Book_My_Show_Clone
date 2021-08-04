import React from "react";
import Slider from "react-slick";

// Component
import Poster from "../Poster/poster.component";

const Premier = () => {
  const PremierImages = [
    {
      src: "https://i.pinimg.com/originals/50/82/2c/50822cf9eee7f628761caec99159b94d.jpg",
      alt: "BangTan Boys",
      title: "BTS",
      subtitle: "English",
    },
    {
      src: "https://i.pinimg.com/originals/50/82/2c/50822cf9eee7f628761caec99159b94d.jpg",
      alt: "BangTan Boys",
      title: "BTS",
      subtitle: "English",
    },
    {
      src: "https://i.pinimg.com/originals/50/82/2c/50822cf9eee7f628761caec99159b94d.jpg",
      alt: "BangTan Boys",
      title: "BTS",
      subtitle: "English",
    },
    {
      src: "https://i.pinimg.com/originals/50/82/2c/50822cf9eee7f628761caec99159b94d.jpg",
      alt: "BangTan Boys",
      title: "BTS",
      subtitle: "English",
    },
    {
      src: "https://i.pinimg.com/originals/50/82/2c/50822cf9eee7f628761caec99159b94d.jpg",
      alt: "BangTan Boys",
      title: "BTS",
      subtitle: "English",
    },
    {
      src: "https://i.pinimg.com/originals/50/82/2c/50822cf9eee7f628761caec99159b94d.jpg",
      alt: "BangTan Boys",
      title: "BTS",
      subtitle: "English",
    },
    {
      src: "https://i.pinimg.com/originals/50/82/2c/50822cf9eee7f628761caec99159b94d.jpg",
      alt: "BangTan Boys",
      title: "BTS",
      subtitle: "English",
    },
    {
      src: "https://i.pinimg.com/originals/50/82/2c/50822cf9eee7f628761caec99159b94d.jpg",
      alt: "BangTan Boys",
      title: "BTS",
      subtitle: "English",
    },
  ];

  const settings = {
    infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinity: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="my-3 px-3">
        <h3 className="text-2xl text-white font-bold"> Premieres</h3>
        <p className="text-white text-sm">Brand new releases every Friday</p>
      </div>
      <Slider {...settings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premier;
