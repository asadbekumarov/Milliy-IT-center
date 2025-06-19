import { Carousel } from "antd";
import axios from "axios";
import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import Slider from "react-slick";
function Services() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.milliyitcenter.uz/api/companies", {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((response) => {
        console.log("Response:", response?.data);
        setResponse(response); setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="bg-[#e5f3f4]">
      <div className="max-w-[1460px] mx-auto px-4 py-10 sm:py-16">
        <div className="flex justify-center flex-col items-center">
          <p className="bg-[#e5f3f4] font-swiss mt-6 sm:mt-10 text-[#539c9f] text-center p-2 rounded-md font-bold text-base sm:text-lg">
            Xizmatlar
          </p>
          <h2 className="font-semibold font-swiss pt-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center">
            Bizning Xizmatlarimiz
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 pb-8 sm:pb-12">
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative pt-[75%]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                src="data:image/jpeg;base64,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"
                alt="Service"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white flex flex-col items-center text-base sm:text-lg font-swiss font-semibold text-center px-4">
                  Texnik ishlar olib borilmoqda
                  <FaLock className="text-4xl sm:text-5xl text-[#539c9f] pt-4" />
                </p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-swiss text-center font-semibold text-gray-800">
                Marketing
              </h3>
              <p className="mt-2 font-swiss text-center text-sm sm:text-base text-gray-600">
                Samarali marketing strategiyalari orqali biznesingizni kengaytiring va maqsadli auditoriyaga yetib boring
              </p>
            </div>
          </div>
          {/* Repeat similar structure for other service cards */}
        </div>
      </div>
    </div>
  );
}

export default Services;
