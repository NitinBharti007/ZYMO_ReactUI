import React from "react";
import Slider from "react-slick";
import conv from "../assets/Conve.png";
import cost from "../assets/cost.png";
import flexi from "../assets/flexi.png";
import money from "../assets/money.png";

const ZymoBenefits = () => {
  const settings = {
    dots: false, 
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center py-10 bg-gray-100">
      <h1 className="text-5xl font-bold mb-8">Zymo Benefits</h1>
      <div className="relative px-4 sm:px-6 md:px-10">
        <Slider {...settings} className="px-2">
          {[
            {
              img: cost,
              title: "Cost Effective",
              desc: "Limited or Unlimited Kilometers Package Available As Per Requirement",
            },
            {
              img: conv,
              title: "Convenience",
              desc: "Self Pick-Up Or Home Delivered",
            },
            {
              img: flexi,
              title: "Flexibility",
              desc: "Rent For Few Hours Or For Months",
            },
            {
              img: money,
              title: "Great Prices",
              desc: "Get Prices After Comparing All The Options",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg flex flex-col items-center justify-center group overflow-hidden h-[300px] md:h-[300px] sm:h-[270px] xs:h-[240px]"
              style={{ margin: '0 8px' }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="mt-8 ml-10 w-60 h-70 object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20 p-4 text-center">
                <h2 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-white">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ZymoBenefits;
