import { Link } from "react-router-dom";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
function Portfolio() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1460px] mx-auto px-4 py-12 md:py-24">
        <h3
          data-aos="zoom-in-right"
          className="font-semibold text-4xl md:text-6xl font-swiss text-center md:text-left"
        >
          Portfolio
        </h3>
        <Link
          data-aos="zoom-in-left"
          className="font-semibold text-lg md:text-2xl underline mt-4 md:mt-0"
          to="/"
        >
          Barchasini ko'rish
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 px-4 max-w-[1460px] mx-auto">
        <div
          data-aos="zoom-out-right"
          className="relative w-full h-[300px] sm:h-[400px] overflow-hidden group rounded-2xl shadow-2xl"
        >
          <img
            src="https://dora.uz/storage/cases/QRBBfwMcjXP98SOulhCZBbT1CuVsV4idxv8clr7G.webp"
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-4 sm:px-8 py-2 sm:py-4 rounded-xl shadow-md">
              <p className="text-lg sm:text-2xl font-bold text-center">
                Marketing Xizmati
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className="relative w-full h-[300px] sm:h-[400px] overflow-hidden group rounded-2xl shadow-2xl"
        >
          <img
            src="https://dora.uz/storage/cases/suja1kYxNVeYzZ6WcmKey3xAwrXg3QLfgZAulWIW.webp"
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-4 sm:px-8 py-2 sm:py-4 rounded-xl shadow-md">
              <p className="text-lg sm:text-2xl font-bold text-center">
                Korparativ veb-saytlar
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className="relative w-full h-[300px] sm:h-[400px] overflow-hidden group rounded-2xl shadow-2xl"
        >
          <img
            src="https://dora.uz/storage/cases/v0It8Vmaz2bsLR7JkXVE5zHekU6zhGc5wLJeP6yd.webp"
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-4 sm:px-8 py-2 sm:py-4 rounded-xl shadow-md">
              <p className="text-lg sm:text-2xl font-bold text-center">
                BrandBook yaratish
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out-left"
          className="relative w-full h-[300px] sm:h-[400px] overflow-hidden group rounded-2xl shadow-2xl"
        >
          <img
            src="https://dora.uz/storage/cases/ayupdf515BMLw0Ygowc5b7Zznws0MzYwNQ8gkVaz.webp"
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-4 sm:px-8 py-2 sm:py-4 rounded-xl shadow-md">
              <p className="text-lg sm:text-2xl font-bold text-center">
                Korparativ veb-saytlar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
