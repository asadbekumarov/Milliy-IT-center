import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <div className="flex items-center justify-between max-w-[1460px] mx-auto px-4 py-24">
        <h3 className="font-semibold text-6xl font-swiss">Portfolio</h3>
        <Link className="font-semibold text-2xl underline" to="/">
          Barchasini ko'rish
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="relative w-[500px] h-[400px] overflow-hidden group rounded-2xl shadow-2xl">
          <img
            src="https://dora.uz/storage/cases/QRBBfwMcjXP98SOulhCZBbT1CuVsV4idxv8clr7G.webp"
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-8 py-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-center">
                Marketing Xizmati
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[500px] h-[400px] overflow-hidden group  shadow-2xl">
          <img
            src="https://dora.uz/storage/cases/suja1kYxNVeYzZ6WcmKey3xAwrXg3QLfgZAulWIW.webp"
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-8 py-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-center">
                Korparativ veb-saytlar
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[500px] h-[400px] overflow-hidden group  shadow-2xl">
          <img
            src="https://dora.uz/storage/cases/v0It8Vmaz2bsLR7JkXVE5zHekU6zhGc5wLJeP6yd.webp"
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-8 py-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-center">
                BrandBook yaratish
              </p>
            </div>
          </div>
        </div>
        <div className="relative  overflow-hidden group shadow-lg">
          <img
            src="https://dora.uz/storage/cases/ayupdf515BMLw0Ygowc5b7Zznws0MzYwNQ8gkVaz.webp"
            alt="img"
            className="w-[500px] h-[400px] object-cover transition duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out bg-white bg-opacity-90 backdrop-blur-sm text-black px-8 py-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-center">
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
