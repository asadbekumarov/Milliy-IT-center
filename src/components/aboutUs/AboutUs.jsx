import React from "react";
import { Link } from "react-router-dom";
import { AiFillTool } from "react-icons/ai";
import { PiForkKnife } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function AboutUs() {
  return (
    <div className="max-w-[1460px] mx-auto px-4 py-4">
      <div>
        <p className="bg-[#e5f3f4] font-swiss text-[#539c9f] p-2 rounded-md font-bold text-base inline-block mt-10">
          Biz nima qilamiz
        </p>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <h2 className="font-semibold text-3xl lg:text-6xl max-w-full lg:max-w-[900px] mt-6 font-swiss">
            Biz qaysi sohalarda yechim berdik? Bosing va bilib oling!
          </h2>
          <Link
            className="font-semibold text-xl lg:text-2xl underline hover:text-[#539c9f] mt-4 lg:mt-0"
            to="/"
          >
            Barchasini ko'rish
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mt-12">
          <div className="flex flex-col gap-2 w-full">
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <AiFillTool />
              Ishlab chiqarish va sanoat 4.0
            </Link>
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <PiForkKnife />
              Oziq-ovqat sanoati, kafe va restoranlar
            </Link>
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <FaChalkboardTeacher />
              Ta’lim va o‘qitish
            </Link>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <FaUniversity />
              Moliyaviy xizmatlar va bank ishi
            </Link>
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <FaMapLocationDot />
              Turizm va mehmonxona xizmati
            </Link>
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <MdOutlineHealthAndSafety />
              Sog‘liqni saqlash va farmatsevtika
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#e5f3f4] via-[#539c9f] to-[#ffffff] rounded-md mt-16 p-4">
          <div className="flex flex-col lg:flex-row justify-between mb-16 lg:mb-28 border-b-2 pb-7">
            <div>
              <p className="bg-[#539c9f] inline-block p-1 font-swiss text-white">
                Biz Haqimizda
              </p>
              <h3 className="font-extrabold text-3xl lg:text-6xl max-w-full lg:max-w-[600px] font-swiss mt-4">
                Biz texnologiya muammolarini hal qilamiz
              </h3>
            </div>
            <div className="mt-6 lg:mt-0">
              <p className="font-swiss text-lg lg:text-2xl pb-8 max-w-full lg:max-w-[500px]">
                350 dan ortiq kompaniyalar ishonchini qozongan DORA turli
                sohalarda, jumladan, ishlab chiqarish va farmatsevtikada,
                biznesni rivojlantirish va jarayonlarni optimallashtirish uchun
                maxsus yechimlarni taklif etadi.
              </p>
              <Link
                className="font-bold text-lg lg:text-2xl font-swiss relative overflow-hidden group"
                to="/"
              >
                Batafsil
                <span className="absolute bottom-0 left-0 block w-full h-1 bg-gradient-to-r from-[#539c9f] to-[#000000] transition-all duration-500 group-hover:w-0"></span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 justify-between items-center">
            <div className="border-l-2 border-black pl-4">
              <h2 className="text-3xl lg:text-5xl font-semibold">5</h2>
              <p className="text-base lg:text-xl">Yillik Tajriba</p>
            </div>
            <div className="border-l-2 border-black pl-4">
              <h2 className="text-3xl lg:text-5xl font-semibold">350 +</h2>
              <p className="text-base lg:text-xl"> Mamnun mijozlar</p>
            </div>
            <div className="border-l-2 border-black pl-4">
              <h2 className="text-3xl lg:text-5xl font-semibold">324</h2>
              <p className="text-base lg:text-xl"> Tugallangan loyihalar</p>
            </div>
            <div className="border-l-2 border-black pl-4">
              <h2 className="text-3xl lg:text-5xl font-semibold">42</h2>
              <p className="text-base lg:text-xl">Hodimlar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
