import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import car2 from '../assets/breeeza.png';
import car3 from '../assets/calero.png';
import car4 from '../assets/dezire.png';
import car5 from '../assets/kwid.png';
import car6 from '../assets/shift.png';
import car7 from '../assets/spresso.png';
import car9 from '../assets/xuv.png';

const CarSelection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars = [car2, car3, car4, car5, car6, car7, car9];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cars.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cars.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-100 py-4 px-6">
      <div className="text-center relative w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-10">
          Choose From Our Wide Range Of Cars
        </h1>
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <button
            onClick={handlePrev}
            className="absolute left-3 md:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 md:p-4 z-10"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={cars[currentIndex]}
              alt="Car"
              className="w-100 h-80 mb-7 object-cover rounded-lg transition-opacity duration-1000 ease-in-out"
              style={{ opacity: 1 }}
            />
          </div>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 md:p-4 z-10"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarSelection;
