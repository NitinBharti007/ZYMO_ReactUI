import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCar, faHandshake, faCity } from "@fortawesome/free-solid-svg-icons";

const WhyZymo = () => {
  return (
    <div className="text-center py-10 bg-white">
      <h1 className="text-5xl font-bold mb-10">Why Zymo?</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center w-full px-4 sm:px-6 md:px-10">
        
        {/* Satisfied Users */}
        <div className="flex flex-col items-center w-full max-w-[140px] sm:max-w-xs">
          <div
            className="rounded-lg p-6 sm:p-8 md:p-10 text-white flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
            style={{ background: "linear-gradient(to right, #8a24cd, #6e32c1)" }}
          >
            <FontAwesomeIcon icon={faUsers} className="text-4xl sm:text-5xl md:text-6xl" />
          </div>
          <p className="text-xl sm:text-2xl font-bold mt-4">100,000+</p>
          <p className="text-sm sm:text-base">Satisfied Users</p>
        </div>

        {/* Cars */}
        <div className="flex flex-col items-center w-full max-w-[140px] sm:max-w-xs">
          <div
            className="rounded-lg p-6 sm:p-8 md:p-10 text-white flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
            style={{ background: "linear-gradient(to right, #8a24cd, #6e32c1)" }}
          >
            <FontAwesomeIcon icon={faCar} className="text-4xl sm:text-5xl md:text-6xl" />
          </div>
          <p className="text-xl sm:text-2xl font-bold mt-4">30,000+</p>
          <p className="text-sm sm:text-base">Cars</p>
        </div>

        {/* Service Providers */}
        <div className="flex flex-col items-center w-full max-w-[140px] sm:max-w-xs">
          <div
            className="rounded-lg p-6 sm:p-8 md:p-10 text-white flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
            style={{ background: "linear-gradient(to right, #8a24cd, #6e32c1)" }}
          >
            <FontAwesomeIcon icon={faHandshake} className="text-4xl sm:text-5xl md:text-6xl" />
          </div>
          <p className="text-xl sm:text-2xl font-bold mt-4">18</p>
          <p className="text-sm sm:text-base">Service Providers</p>
        </div>

        {/* Cities */}
        <div className="flex flex-col items-center w-full max-w-[140px] sm:max-w-xs">
          <div
            className="rounded-lg p-6 sm:p-8 md:p-10 text-white flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
            style={{ background: "linear-gradient(to right, #8a24cd, #6e32c1)" }}
          >
            <FontAwesomeIcon icon={faCity} className="text-4xl sm:text-5xl md:text-6xl" />
          </div>
          <p className="text-xl sm:text-2xl font-bold mt-4">59</p>
          <p className="text-sm sm:text-base">Cities</p>
        </div>
      </div>
    </div>
  );
};

export default WhyZymo;
