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
                alt="Service"
                src="https://st.depositphotos.com/1000423/1637/i/450/depositphotos_16372601-stock-photo-business-woman-with-financial-symbols.jpg"
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
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative pt-[75%]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                alt="Service"
                src="https://st.depositphotos.com/1000423/1637/i/450/depositphotos_16372601-stock-photo-business-woman-with-financial-symbols.jpg"
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
                Brending
              </h3>
              <p className="mt-2 font-swiss text-center text-sm sm:text-base text-gray-600">
                Samarali marketing strategiyalari orqali biznesingizni kengaytiring va maqsadli auditoriyaga yetib boring
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative pt-[75%]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                alt="Service"
                src="https://st.depositphotos.com/1000423/1637/i/450/depositphotos_16372601-stock-photo-business-woman-with-financial-symbols.jpg"
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
Dasturlash              </h3>
              <p className="mt-2 font-swiss text-center text-sm sm:text-base text-gray-600">
                Samarali marketing strategiyalari orqali biznesingizni kengaytiring va maqsadli auditoriyaga yetib boring
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative pt-[75%]">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                alt="Service"
                src="https://st.depositphotos.com/1000423/1637/i/450/depositphotos_16372601-stock-photo-business-woman-with-financial-symbols.jpg"
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
                Biznes jarayonlarni avtomatlashtirish
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
