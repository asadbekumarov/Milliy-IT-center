import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
function Hero() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="max-w-[1460px] mx-auto px-4 py-10">
      <div className="flex mt-20 flex-col-reverse md:flex-row justify-between items-center gap-10">
        <div data-aos="zoom-in-right" className="text-center md:text-left">
          <h1 className="font-semibold text-sm md:text-4xl font-swiss max-w-full md:max-w-[630px] text-[#000]">
            Milliy IT Center - bu yechim emas! Bu natija
          </h1>
          <p className="font-extralight max-w-[670px] pt-4 md:pt-5 text-black text-base md:text-lg font-swiss">
            Biznesingiz uchun siz qidirgan barcha turdagi hizmatlarni bir yerga
            jamladik va uni Milliy IT Center deb atadik{" "}
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-6 md:pt-11">
            <button
              type="button"
              className="py-3 px-5 text-sm font-semibold rounded-lg bg-[#e5f3f4] text-black transform transition-transform duration-200 hover:scale-105"
            >
              Biz haqimizda
            </button>
            <button
              type="button"
              className="py-3 px-5 text-sm font-semibold rounded-lg bg-[#539c9f] text-white transform transition-transform duration-200 hover:scale-105"
            >
              Bog'lanish
            </button>
          </div>
        </div>
        <div data-aos="zoom-in-left">
          <img
            src="https://www.dora.uz/images/Laptop.webp"
            alt="Laptop rasmi"
            className="w-full max-w-[800px] mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
