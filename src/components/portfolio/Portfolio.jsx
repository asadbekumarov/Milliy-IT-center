import { Link } from "react-router-dom";
import Aos from "aos";
import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";

import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
          className="font-semibold flex items-end gap-2 text-xl lg:text-2xl underline hover:text-[#539c9f] mt-4 lg:mt-0"
          to="/"
        >
          <FaEye />
          Barchasini ko'rish
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-[1460px] mx-auto">
        {/* Card 1 */}
        <div
          data-aos="zoom-out-right"
          className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden group rounded-2xl shadow-2xl"
        >
          <img
            src="https://dora.uz/storage/cases/QRBBfwMcjXP98SOulhCZBbT1CuVsV4idxv8clr7G.webp"
            alt="Marketing Xizmati"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-4 py-4 rounded-xl shadow-md">
              <p className="text-base sm:text-xl font-bold text-center">
                Marketing Xizmati
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          data-aos="zoom-out"
          className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden group rounded-2xl shadow-2xl"
        >
          <img
            src="https://dora.uz/storage/cases/suja1kYxNVeYzZ6WcmKey3xAwrXg3QLfgZAulWIW.webp"
            alt="Korparativ veb-saytlar"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-4 py-4 rounded-xl shadow-md">
              <p className="text-base sm:text-xl font-bold text-center">
                Korparativ veb-saytlar
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          data-aos="zoom-out"
          className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden group rounded-2xl shadow-2xl"
        >
          <img
            src="https://dora.uz/storage/cases/v0It8Vmaz2bsLR7JkXVE5zHekU6zhGc5wLJeP6yd.webp"
            alt="BrandBook yaratish"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-4 py-4 rounded-xl shadow-md">
              <p className="text-base sm:text-xl font-bold text-center">
                BrandBook yaratish
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          data-aos="zoom-out-left"
          className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden group rounded-2xl shadow-2xl"
        >
          <img
            src="https://dora.uz/storage/cases/ayupdf515BMLw0Ygowc5b7Zznws0MzYwNQ8gkVaz.webp"
            alt="Korparativ veb-saytlar"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-4 py-4 rounded-xl shadow-md">
              <p className="text-base sm:text-xl font-bold text-center">
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
