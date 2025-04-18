import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { FaArrowsRotate } from "react-icons/fa6";

function Communication() {
  return (
    <div className="bg-gradient-to-b from-[#539c9f] to-[#ffffff] w-full">
      <div className="max-w-[1460px] mx-auto px-4 py-4 mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 pt-20">
          <div className="flex-1">
            <h3 className="bg-[#e5f3f4] inline-block p-2 text-[#539c9f] rounded-md font-bold font-swiss text-sm">
              Biz bilan bog'lanish
            </h3>
            <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl pt-5">
              Aloqa
            </h2>
            <p className="text-base sm:text-lg max-w-[600px] py-4">
              Sizda savollar bormi yoki bizning xizmatlarimiz haqida qo'shimcha
              ma'lumot kerakmi? Biz bilan bog'lanish uchun quyidagi kontakt
              ma'lumotlaridan foydalaning yoki onlayn murojaat shaklini
              to'ldiring. DORA kompaniyasi siz bilan bog'lanishga tayyor.
            </p>
            <div className="flex flex-col space-y-3 pt-10">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="bg-[#539c9f] p-2 rounded-full text-white text-3xl" />
                <p>+998935125324</p>
              </div>
              <div className="flex items-center space-x-3">
                <IoMdMail className="bg-[#539c9f] p-2 rounded-full text-white text-3xl" />
                <p>info@dora.uz</p>
              </div>
              <div className="flex items-center space-x-3">
                <TfiLocationPin className="bg-[#539c9f] p-2 rounded-full text-white text-3xl" />
                <p className="text-base">
                  O‘zbekiston, Toshkent shahri, Chilonzor 2/2
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[500px] bg-white bg-gradient-to-t from-[#539c9f] to-[#ffffff] p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Bepul konsultatsiya oling</h3>
            <div className="space-y-4">
              <div>
                <p className="py-2">Ism</p>
                <input
                  className="border outline-none py-3 px-3 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]"
                  placeholder="Ism"
                  type="text"
                />
              </div>
              <div>
                <p className="py-2">Telefon</p>
                <input
                  className="border outline-none py-3 px-3 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]"
                  placeholder="Telefon"
                  type="text"
                />
              </div>
              <div>
                <p className="py-2">Kompaniya nomi</p>
                <input
                  className="border outline-none py-3 px-3 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]"
                  placeholder="Kompaniya nomi"
                  type="text"
                />
              </div>
              <div>
                <p className="py-2">Biz sizga qanday yordam bera olamiz?</p>
                <select className="border outline-none py-3 px-3 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]">
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
              </div>
              <div>
                <p className="py-2">Xabaringizni kiriting</p>
                <textarea
                  className="border outline-none py-3 px-3 rounded-md w-full focus:ring-2 focus:ring-[#539c9f]"
                  rows={4}
                  placeholder="Xabaringizni kiriting"
                />
              </div>
              <div className="flex flex-col md:flex-row items-stretch gap-4">
                <div className="flex flex-col flex-grow">
                  <p className="text-sm py-2">Tasdiqlash kodini kiriting</p>
                  <input
                    className="border px-3 py-3 rounded-md w-full outline-none focus:ring-2 focus:ring-[#539c9f]"
                    type="text"
                  />
                </div>
                <div className="flex gap-2 items-end">
                  <button className="bg-[#e5f3f4] px-4 py-3 rounded-md">
                    asdfgh
                  </button>
                  <button className="w-[48px] h-[48px] flex items-center justify-center rounded-lg bg-[#539c9f] hover:bg-[#3c7f82] transition">
                    <FaArrowsRotate className="text-white" />
                  </button>
                </div>
              </div>
              <button className="bg-[#539c9f] border text-white w-full py-3 mt-2 rounded-md font-semibold text-lg hover:bg-[#3c7f82] transition">
                Yuborish
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-5xl">Bizning joylashuvlarimiz</h3>
          <p className="text-lg text-[#84848d] py-3">
            Bizning merosimiz va o'sishimiz yo'lini kuzatish
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <div className="p-4 rounded-xl w-full shadow-lg text-black bg-gradient-to-r from-[#539c9f] via-[#ffffff] to-[#539c9f]">
              <h4 className="font-semibold text-2xl font-swiss">
                DORA® System
              </h4>
              <span>
                <p className="text-lg text-[#6c6d77]">Address:</p>
                <p className="font-medium text-lg">Chilanzar street 2/2</p>
              </span>
              <span>
                <p className="text-lg text-[#6c6d77]">Phone Number:</p>
                <p className="font-medium text-lg">+998935135324</p>
              </span>
            </div>
            <div className="p-4 rounded-xl w-full shadow-lg text-black bg-gradient-to-r from-[#539c9f] via-[#ffffff] to-[#539c9f]">
              <h4 className="font-semibold text-2xl font-swiss">
                DORA® System
              </h4>
              <span>
                <p className="text-lg text-[#6c6d77]">Address:</p>
                <p className="font-medium text-lg">Chilanzar street 2/2</p>
              </span>
              <span>
                <p className="text-lg text-[#6c6d77]">Phone Number:</p>
                <p className="font-medium text-lg">+998935135324</p>
              </span>
            </div>
            <div className="p-4 rounded-xl w-full shadow-lg text-black bg-gradient-to-r from-[#539c9f] via-[#ffffff] to-[#539c9f]">
              <h4 className="font-semibold text-2xl font-swiss">
                DORA® System
              </h4>
              <span>
                <p className="text-lg text-[#6c6d77]">Address:</p>
                <p className="font-medium text-lg">Chilanzar street 2/2</p>
              </span>
              <span>
                <p className="text-lg text-[#6c6d77]">Phone Number:</p>
                <p className="font-medium text-lg">+998935135324</p>
              </span>
            </div>
            <div className="p-4 rounded-xl w-full shadow-lg text-black bg-gradient-to-r from-[#539c9f] via-[#ffffff] to-[#539c9f]">
              <h4 className="font-semibold text-2xl font-swiss">
                DORA® System
              </h4>
              <span>
                <p className="text-lg text-[#6c6d77]">Address:</p>
                <p className="font-medium text-lg">Chilanzar street 2/2</p>
              </span>
              <span>
                <p className="text-lg text-[#6c6d77]">Phone Number:</p>
                <p className="font-medium text-lg">+998935135324</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communication;
