import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillTool } from "react-icons/ai";
import { PiForkKnife } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="max-w-[1460px] mx-auto px-4 py-4">
      <div>
        <p
          data-aos="zoom-in"
          className="bg-[#e5f3f4] font-swiss text-[#539c9f] p-2 rounded-md font-bold text-base inline-block mt-10"
        >
          MIC o'zi nega kerak?
        </p>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <h2
            data-aos="zoom-in-right"
            className="font-semibold text-3xl lg:text-6xl max-w-full lg:max-w-[900px] mt-6 font-swiss"
          >
            Biz o'z mijozlarimizga ularning raqobatchilaridan o'zib ketishiga va
            biznesini gullab yashnashiga katta yordam beramiz.
          </h2>
          <Link
            data-aos="zoom-in-left"
            className="font-semibold text-xl lg:text-2xl underline hover:text-[#539c9f] mt-4 lg:mt-0"
            to="/"
          >
            Barchasini ko'rish
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mt-12">
          <div data-aos="zoom-in-right" className="flex flex-col gap-2 w-full">
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <AiFillTool />
              Raqamlashtirish orqali ishlab chiqarish jarayonlarini
              avtomatlashtirish va optimallashtirish.
            </Link>
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <PiForkKnife />
              Brending, SMM, va raqamli marketing orqali mijoz oqimini oshirish.
            </Link>
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <FaChalkboardTeacher />
              Interaktiv platformalar, kontent yaratuvchiligi va foydalanuvchi
              tajribasi bilan boyitilgan yechimlar.
            </Link>
          </div>
          <div data-aos="zoom-in-left" className="flex flex-col gap-2 w-full">
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <FaUniversity />
              Mijozlar ishonchini oshiradigan xavfsiz va samarali tizimlar.
            </Link>
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <FaMapLocationDot />
              Onlayn bron qilish tizimlari, reklama strategiyalari va brending
              yechimlari.
            </Link>
            <Link className="flex items-center gap-2 text-lg lg:text-xl bg-[#e5f3f4] rounded-lg p-2">
              <MdOutlineHealthAndSafety />
              CRM joriy etish, mijozlar bilan aloqani kuchaytiruvchi tizimlar va
              onlayn xizmatlar.
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#e5f3f4] via-[#539c9f] to-[#ffffff] rounded-md mt-16 p-4">
          <div className="flex flex-col lg:flex-row justify-between mb-16 lg:mb-28 border-b-2 pb-7">
            <div data-aos="zoom-in-right">
              <p className="bg-[#539c9f] inline-block p-1 font-swiss text-white">
                Biz Haqimizda
              </p>
              <h3 className="font-extrabold text-xl lg:text-3xl max-w-full lg:max-w-[600px] font-swiss mt-4">
                Milliy IT Center - bu yechim emas! Bu natija.
              </h3>
            </div>
            <div data-aos="zoom-in-left" className="mt-6 lg:mt-0">
              <p className="font-swiss text-lg lg:text-xl pb-8 max-w-full lg:max-w-[500px]">
                Milliy IT Center - 5 yillik tajribaga ega bo'lib hozirgacha 350
                dan ortiq mijozlarni ishonchini qozongan va hozirda ulardan 324
                ta loyiha muvaffaqiyatli yakunlangan va 26 ta loyiha bilan hali
                hamon ishlashda davom etmoqdamiz.
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
          <div
            data-aos="zoom-out"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 justify-between items-center"
          >
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
