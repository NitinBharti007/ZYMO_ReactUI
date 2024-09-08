import React, { useEffect, useRef } from "react";
import big from "../assets/big.png";
import dubai from "../assets/dubai.png";
import lokk from "../assets/lokkk.png";
import lokmat from "../assets/lokmat.png";
import world from "../assets/world.png";
import up from "../assets/up.png";
import zee from "../assets/zee.png";
import british from "../assets/british.png";
import mid from "../assets/mid.png";

const FeaturedIn = () => {
  const logos = [big, dubai, lokk, lokmat, up, mid, zee, british, world];
  const logosRef = useRef(null);
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const interval = setInterval(() => {
      if (logosRef.current) {
        const logoWidth = logosRef.current.children[0].offsetWidth;
        const logosPerSlide = 4;
        const slideWidth = logoWidth * logosPerSlide;

        logosRef.current.style.transition = "transform 0.5s ease-in-out";
        logosRef.current.style.transform = `translateX(-${slideWidth}px)`;

        setTimeout(() => {
          logosRef.current.style.transition = "none";
          logosRef.current.style.transform = "translateX(0)";

          for (let i = 0; i < logosPerSlide; i++) {
            logosRef.current.appendChild(logosRef.current.children[0]);
          }
        }, 500);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-80 bg-pink-50 overflow-hidden py-10">
      <h1 className="text-5xl font-bold mb-12">Featured In</h1>
      <div className="w-full overflow-hidden">
        <div
          className="flex"
          ref={logosRef}
          style={{
            width: "100%",
            height: "auto",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Featured logo"
              className="h-16 mx-2 flex-shrink-0"
              style={{
                width: "calc(25% - 1rem)",
                objectFit: "contain",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
