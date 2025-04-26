import Aos from "aos";
import React, { useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FaArrowsRotate } from "react-icons/fa6";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-gradient-to-r from-[#e5f3f4] via-[#539c9f] to-[#ffffff] rounded-md mt-16">
      <div className="max-w-[1460px] mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10 py-10">
          <div className="flex-1">
            <h4
              data-aos="zoom-out-right"
              className="bg-[#539c9f] inline-block p-1 font-swiss text-white font-bold text-lg"
            >
              Biz bilan bog'lanish
            </h4>
            <h2
              data-aos="zoom-out-right"
              className="font-semibold text-4xl sm:text-5xl md:text-6xl text-black my-7"
            >
              Bepul konsultatsiya
            </h2>
            <p
              data-aos="zoom-out-right"
              className="text-lg md:text-xl mb-5 text-black max-w-[717px]"
            >
              Biznesingiz uchun to‘g‘ri yo‘lni tanlang! Bepul konsultatsiyaga
              yozilib, marketing va IT bo‘yicha kuchli strategiyalar bilan
              rivojlanishni boshlang. To‘xtamang, hozir harakat qiling!
            </p>
            <ul className="space-y-2">
              <li
                data-aos="zoom-out-right"
                className="flex items-center gap-2 text-base md:text-xl font-swiss text-black"
              >
                <BsCheckLg />
                Uchrashuv tafsilotlarini tasdiqlash
              </li>
              <li
                data-aos="zoom-out-right"
                className="flex items-center gap-2 text-base md:text-xl font-swiss text-black"
              >
                <BsCheckLg />
                Batafsil tadqiqot va tayyorgarlik
              </li>
              <li
                data-aos="zoom-out-right"
                className="flex items-center gap-2 text-base md:text-xl font-swiss text-black"
              >
                <BsCheckLg />
                Moslashtirilgan yechimlar bo‘yicha maslahat
              </li>
              <li
                data-aos="zoom-out-right"
                className="flex items-center gap-2 text-base md:text-xl font-swiss text-black"
              >
                <BsCheckLg />
                Maxsus strategiyalar uchun ehtiyojlarni baholash
              </li>
              <li
                data-aos="zoom-out-right"
                className="flex items-center gap-2 text-base md:text-xl font-swiss text-black"
              >
                <BsCheckLg />
                Taklif qilingan yechimlarni taqdim etish
              </li>
              <li
                data-aos="zoom-out-right"
                className="flex items-center gap-2 text-base md:text-xl font-swiss text-black"
              >
                <BsCheckLg />
                Loyihani muammosiz amalga oshirish
              </li>
              <li
                data-aos="zoom-out-right"
                className="flex items-center gap-2 text-base md:text-xl font-swiss text-black"
              >
                <BsCheckLg />
                Samaradorlikni baholash va qoniqishni ta’minlash
              </li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-md w-full max-w-2xl mx-auto shadow-md flex-1">
            <h3
              data-aos="zoom-out-left"
              className="font-semibold text-2xl font-swiss mb-4"
            >
              Bepul konsultatsiya oling
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <span data-aos="zoom-out-left" className="flex flex-col flex-1">
                  <p className="text-sm">Ism</p>
                  <input
                    className="border outline-none p-2 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]"
                    type="text"
                  />
                </span>
                <span data-aos="zoom-out-left" className="flex flex-col flex-1">
                  <p className="text-sm">Telefon</p>
                  <input
                    className="border outline-none p-2 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]"
                    placeholder="+998"
                    type="number"
                  />
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <span data-aos="zoom-out-left" className="flex flex-col flex-1">
                  <p className="text-sm">Kompaniya nomi</p>
                  <input
                    className="border outline-none p-2 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]"
                    type="text"
                  />
                </span>
                <span data-aos="zoom-out-left" className="flex flex-col flex-1">
                  <p className="text-sm">Xizmat turini tanlang</p>
                  <select className="border outline-none p-2 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]">
                    <option value="">Korporativ veb-saytlar</option>
                    <option value="">Landing page</option>
                    <option value="">Katalog sayt</option>
                    <option value="">Internet do'kon</option>
                    <option value="">Marketplace</option>
                    <option value="">SMM xizmati</option>
                    <option value="">Logo yaratish</option>
                    <option value="">Brandbook yaratish</option>
                    <option value="">Marketing xizmati</option>
                    <option value="">amoCRM</option>
                    <option value="">Maqsadli reklama</option>
                    <option value="">Mobil ilovalar yaratish</option>
                    <option value="">МойСклад</option>
                    <option value="">IP Telefoniya</option>
                    <option value="">SEO</option>
                    <option value="">Qidiruv tizimi reklama xizmatlari</option>
                    <option value="">ERP</option>
                    <option value="Business Intelligence/Data Analytics">
                      Business Intelligence/Data Analytics
                    </option>
                    <option value="">1C</option>
                    <option value="">Telegram Bot</option>
                  </select>
                </span>
              </div>

              <div data-aos="zoom-out-left">
                <p className="text-sm">Xabaringizni kiriting</p>
                <textarea className="w-full h-28 border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#539c9f] focus:border-[#539c9f]"></textarea>
              </div>

              <div className="flex flex-col md:flex-row items-stretch gap-4">
                <div
                  data-aos="zoom-out-left"
                  className="flex flex-col flex-grow"
                >
                  <p className="text-sm">Tasdiqlash kodini kiriting</p>
                  <input
                    className="border p-2 rounded-md w-full outline-none focus:ring-2 focus:ring-[#539c9f]"
                    type="text"
                  />
                </div>

                <div className="flex gap-2 items-end">
                  <button
                    data-aos="zoom-out-left"
                    className="bg-[#e5f3f4] p-2 rounded-md"
                  >
                    asdfgh
                  </button>
                  <button
                    data-aos="zoom-out-left"
                    className="w-[60px] h-[48px] flex items-center justify-center rounded-lg bg-[#539c9f] hover:bg-[#3c7f82] transition"
                  >
                    <FaArrowsRotate className="text-white" />
                  </button>
                </div>
              </div>

              <button
                data-aos="zoom-in-down"
                className="bg-[#539c9f] text-white w-full py-2 mt-2 rounded-md font-semibold text-xl hover:bg-[#3c7f82] transition"
              >
                Yuborish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
