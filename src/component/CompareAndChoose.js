import React, { useEffect, useRef } from 'react';
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import img13 from '../assets/13.png'
import img14 from '../assets/14.png'

const CompareAndChoose = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollStep = 2; // Adjust this value to change the scroll speed
    const scrollInterval = 20; // Adjust this value to change the scroll interval

    const autoScroll = () => {
      if (container) {
        scrollAmount += scrollStep;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, scrollInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-10 overflow-hidden">
      <h1 className="text-5xl font-bold mb-8">Compare And Choose From</h1>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden space-x-4 px-4 py-6 bg-gradient-to-r from-purple-500 to-purple-700"
        >
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img1} alt="Logo 1" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img2} alt="Logo 2" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img3} alt="Logo 3" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img4} alt="Logo 4" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img5} alt="Logo 5" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img6} alt="Logo 6" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img7} alt="Logo 7" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img8} alt="Logo 8" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img9} alt="Logo 9" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img10} alt="Logo 10" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img11} alt="Logo 10" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img12} alt="Logo 10" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img13} alt="Logo 10" className="w-20 h-20" />
          </div>
          <div className="flex-none w-40 h-40 bg-white rounded-lg flex items-center justify-center shrink-0">
            <img src={img14} alt="Logo 10" className="w-20 h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareAndChoose;
