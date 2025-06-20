import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { FaArrowsRotate } from "react-icons/fa6";
import Aos from "aos";

function Communication() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="wave-gradient-bg animate-wave-gradient w-full pb-32">
      <div className="max-w-[1460px] mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-10 pt-10">
          <div className="flex-1 w-full">
            <h3
              data-aos="zoom-out-right"
              className="bg-[#e5f3f4] inline-block p-2 text-[#539c9f] rounded-md font-bold font-swiss text-sm"
            >
              Biz bilan bog'lanish
            </h3>
            <h2
              data-aos="zoom-out-right"
              className="font-semibold text-3xl py-5 sm:text-5xl md:text-6xl pt-5"
            >
              Aloqa
            </h2>
            <p
              data-aos="zoom-out-right"
              className="text-base sm:text-lg max-w-[600px] py-4"
            >
              Sizda savollar bormi yoki bizning xizmatlarimiz haqida qo'shimcha
              ma'lumot kerakmi? Biz bilan bog'lanish uchun quyidagi kontakt
              ma'lumotlaridan foydalaning yoki onlayn murojaat shaklini
              to'ldiring. MIC kompaniyasi siz bilan bog'lanishga tayyor.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt
                  data-aos="zoom-in-down"
                  className="bg-[#539c9f] p-2 rounded-full text-white text-2xl sm:text-3xl"
                />
                <p data-aos="zoom-out-right" className="text-sm sm:text-base">
                  +998952625578
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <IoMdMail
                  data-aos="zoom-in-down"
                  className="bg-[#539c9f] p-2 rounded-full text-white text-2xl sm:text-3xl"
                />
                <p data-aos="zoom-out-right" className="text-sm sm:text-base">
                  info@MIC.uz
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <TfiLocationPin
                  data-aos="zoom-in-down"
                  className="bg-[#539c9f] p-2 rounded-full text-white text-2xl sm:text-3xl"
                />
                <p data-aos="zoom-out-right" className="text-sm sm:text-base">
                  Toshkent, Olmazor tumani, Qoraqamish 1/2, 18a-uy,
                  axborot-kutubxona markazi
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full lg:w-[500px] bg-white bg-gradient-to-t from-[#539c9f] to-[#ffffff] p-4 sm:p-5 rounded-lg shadow-md"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Bepul konsultatsiya oling
            </h3>
            <div className="space-y-4 mt-4">
              {["Ism", "Telefon", "Kompaniya nomi"].map((label, idx) => (
                <div key={idx}>
                  <p className="py-1 sm:py-2">{label}</p>
                  <input
                    className="border outline-none py-2 px-3 rounded-md w-full focus:ring-2 focus:ring-[#539c9f] min-w-0"
                    placeholder={label}
                    type="text"
                    aria-label={label}
                  />
                </div>
              ))}
              <div>
                <p className="py-1 sm:py-2">
                  Biz sizga qanday yordam bera olamiz?
                </p>
                <select className="border outline-none py-2 px-3 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]">
                  {[
                    "Korporativ veb-saytlar",
                    "Landing page",
                    "Katalog sayt",
                    "Internet do'kon",
                    "Marketplace",
                    "SMM xizmati",
                    "Logo yaratish",
                    "Brandbook yaratish",
                    "Marketing xizmati",
                    "amoCRM",
                    "Maqsadli reklama",
                    "Mobil ilovalar yaratish",
                    "МойСклад",
                    "IP Telefoniya",
                    "SEO",
                    "Qidiruv tizimi reklama xizmatlari",
                    "ERP",
                    "Business Intelligence/Data Analytics",
                    "1C",
                    "Telegram Bot",
                  ].map((item, idx) => (
                    <option key={idx} value="">
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="py-1 sm:py-2">Xabaringizni kiriting</p>
                <textarea
                  className="border outline-none py-2 px-3 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]"
                  rows={4}
                  placeholder="Xabaringizni kiriting"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="flex flex-col flex-grow">
                  <p className="text-sm py-1">Tasdiqlash kodini kiriting</p>
                  <input
                    className="border px-3 py-2 rounded-md w-full outline-none focus:ring-2 focus:ring-[#539c9f]"
                    type="text" q
                  />
                </div>
                <div className="flex gap-2 items-end">
                  <button
                    className="bg-[#e5f3f4] px-4 py-2 rounded-md text-sm"
                    aria-label="parol"
                  >
                    asdfgh
                  </button>
                  <button
                    aria-label="Parolni yangilash"
                    className="w-[44px] h-[44px] flex items-center justify-center rounded-lg bg-[#539c9f] hover:bg-[#3c7f82] transition">
                    <FaArrowsRotate className="text-white text-lg" />
                  </button>
                </div>
              </div>
              <button
                className="bg-[#539c9f] border text-white w-full py-3 mt-2 rounded-md font-semibold text-base hover:bg-[#3c7f82] transition"
                aria-label="Xabaringizni yuborish"
              >
                Yuborish
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3
            data-aos="zoom-out-right"
            className="font-medium text-3xl sm:text-5xl"
          >
            Bizning joylashuvlarimiz
          </h3>
          <p
            data-aos="zoom-out-right"
            className="text-base sm:text-lg text-[#84848d] py-3 mt-2"
          >
            Bizning merosimiz va o'sishimiz yo'lini kuzatish
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[1, 2, 3, 4].map((_, idx) => (
              <div
                key={idx}
                data-aos="zoom-out-right"
                className="p-4 rounded-xl w-full shadow-lg text-black bg-white"
              >
                <h4 className="font-semibold text-xl sm:text-2xl font-swiss">
                  MIC System
                </h4>
                <div className="mt-2">
                  <p className="text-sm sm:text-lg text-[#6c6d77]">Address:</p>
                  <p className="font-medium text-sm sm:text-lg">
                    Olmazor axborot-kutubxona markazi Qoraqamish 1/2 18a Uy
                  </p>
                </div>
                <div className="mt-1">
                  <p className="text-sm sm:text-lg text-[#6c6d77]">
                    Phone Number:
                  </p>
                  <p className="font-medium text-sm sm:text-lg">
                    +998952625578
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communication;
