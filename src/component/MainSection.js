import React from "react";
import phoneMockup1 from "../assets/IMG_3290.png";
import phoneMockup2 from "../assets/IMG_3291.png";
import phoneMockup3 from "../assets/IMG_3292.png";
import appstore from '../assets/appstore.png';
import playstore from '../assets/playstore2.png';

const MainSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#8a24cd] to-[#6e32c1] text-white p-6 md:p-12">
      <div className="border-4 border-white rounded-xl p-6 md:p-10 shadow-2xl max-w-xs md:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="text-center mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Download the ZYMO App
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Get a voucher worth <strong>Rs.100</strong> instantly!
            </p>
            <p className="text-base md:text-lg mb-6">
              Download the app from your preferred store:
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="focus:outline-none"
              >
                <img
                  src={appstore}
                  alt="App Store"
                  className="w-28 sm:w-28 md:w-32 lg:w-36 h-auto cursor-pointer hover:scale-110 transition-transform border-2 border-white rounded-lg p-0"
                />
              </a>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="focus:outline-none"
              >
                <img
                  src={playstore}
                  alt="Play Store"
                  className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto cursor-pointer hover:scale-110 transition-transform border-2 border-white rounded-lg p-0"
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex overflow-x-auto space-x-4 md:space-x-3 md:overflow-x-visible">
              <img
                src={phoneMockup1}
                alt="Phone Mockup 1"
                className="w-24 sm:w-28 md:w-1/3 shadow-xl rounded-lg transition-transform transform hover:scale-105"
              />
              <img
                src={phoneMockup2}
                alt="Phone Mockup 2"
                className="w-24 sm:w-28 md:w-1/3 shadow-xl rounded-lg transition-transform transform hover:scale-105"
              />
              <img
                src={phoneMockup3}
                alt="Phone Mockup 3"
                className="w-24 sm:w-28 md:w-1/3 shadow-xl rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
