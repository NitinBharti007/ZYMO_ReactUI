import React from "react";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore2.png";
import banner from "../assets/img20.jpg";

const ReferAndEarn = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-100 px-4 md:px-8">
      <div className="bg-purple-600 rounded-3xl p-6 md:p-10 flex flex-col items-center max-w-4xl w-full h-[60vh] flex-shrink-0">
        <div className="bg-white rounded-3xl flex flex-col items-center w-100 h-auto relative">
          <div className="w-100 h-75 relative">
            <img
              src={banner}
              alt="Smartphone with ZYMO logo"
              className="w-100 h-60 object-fill rounded-3xl"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex space-x-4">
            <a href="/" className="flex-shrink-0">
              <img
                src={playstore}
                alt="Get it on Google Play"
                className="w-32 md:w-36"
              />
            </a>
            <a href="/" className="flex-shrink-0">
              <img
                src={appstore}
                alt="Download on the App Store"
                className="w-32 md:w-36"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
