import React, { useEffect, useState } from "react";
import Icon from "../../assets/icon.png";
import Contact from "../../components/contact/Contact";
import { Link } from "react-router-dom";
import Aos from "aos";

function ServicesPage() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [active, setActive] = useState("Barchasi ko‘rish");

  return (
    <div>
      <div className="max-w-[1460px] mx-auto px-4 py-4">
        <h2
          data-aos="zoom-out-right"
          className="font-semibold text-6xl font-swiss mt-24"
        >
          Xizmatlar
        </h2>
        <p
          data-aos="zoom-out-right"
          className="font-semibold text-xl text-[#646575] font-swiss mt-6"
        >
          DORA® kompaniyasi keng qamrovli xizmatlarni taqdim etadi, jumladan,
          web-sayt yaratish, raqamli marketing, biznes avtomatlashtirish va
          dizayn xizmatlari. Bizning xizmatlarimiz mijozlarimizning
          ehtiyojlariga moslashtirilgan va ularning biznes muvaffaqiyatini
          ta'minlashga yordam beradi. DORA® bilan samarali yechimlar toping.
        </p>
        <h4
          data-aos="zoom-out-right"
          className="font-semibold text-3xl mt-10 font-swiss"
        >
          Filtr
        </h4>
        <div
          data-aos="zoom-out-right"
          className="flex flex-col sm:flex-row flex-wrap gap-x-3 gap-y-2 mt-5"
        >
          <button
            data-aos="zoom-out-right"
            onClick={() => setActive("Barchasi ko‘rish")}
            className={`font-normal text-base sm:text-xl py-2 px-3 rounded-full font-swiss 
      transition-all duration-300 ease-in-out 
      hover:bg-blue-600 hover:text-white 
      ${
        active === "Barchasi ko‘rish"
          ? "bg-blue-600 text-white"
          : "bg-[#f8f9fa]"
      }`}
          >
            Barchasi ko‘rish
          </button>

          <button
            data-aos="zoom-out-right"
            onClick={() => setActive("Marketing")}
            className={`font-normal text-base sm:text-xl py-2 px-3 rounded-full font-swiss 
      transition-all duration-300 ease-in-out 
      hover:bg-blue-600 hover:text-white 
      ${active === "Marketing" ? "bg-blue-600 text-white" : "bg-[#f8f9fa]"}`}
          >
            Marketing
          </button>

          <button
            data-aos="zoom-out-right"
            onClick={() => setActive("Brending")}
            className={`font-normal text-base sm:text-xl py-2 px-3 rounded-full font-swiss 
      transition-all duration-300 ease-in-out 
      hover:bg-blue-600 hover:text-white 
      ${active === "Brending" ? "bg-blue-600 text-white" : "bg-[#f8f9fa]"}`}
          >
            Brending
          </button>

          <button
            data-aos="zoom-out-right"
            onClick={() => setActive("Dasturlash")}
            className={`font-normal text-base sm:text-xl py-2 px-3 rounded-full font-swiss 
      transition-all duration-300 ease-in-out 
      hover:bg-blue-600 hover:text-white 
      ${active === "Dasturlash" ? "bg-blue-600 text-white" : "bg-[#f8f9fa]"}`}
          >
            Dasturlash
          </button>

          <button
            data-aos="zoom-out-right"
            onClick={() => setActive("Biznes jarayonlarini avtomatlashtirish")}
            className={`font-normal text-base sm:text-xl py-2 px-3 rounded-full font-swiss 
      transition-all duration-300 ease-in-out 
      hover:bg-blue-600 hover:text-white 
      ${
        active === "Biznes jarayonlarini avtomatlashtirish"
          ? "bg-blue-600 text-white"
          : "bg-[#f8f9fa]"
      }`}
          >
            Biznes jarayonlarini avtomatlashtirish
          </button>
          <Link
            data-aos="zoom-out-right"
            className={`font-normal text-base text-center  sm:text-xl py-2 px-3 rounded-full font-swiss 
      transition-all duration-300 ease-in-out 
      hover:bg-blue-600 hover:text-white 
      ${active === "Price" ? "bg-blue-600 text-white" : "bg-[#f8f9fa]"}`}
            to="/price"
          >
            <button onClick={() => setActive("Price")}>Price</button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
          <div
            data-aos="zoom-out-right"
            className="max-w-[427px] border border-[#c4c8cb] p-8 mt-16 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <img className="w-14" src={Icon} alt="" />
            <h3 className="font-semibold text-2xl mt-6">Landing page</h3>
            <p className="text-base leading-6 mt-3 text-[#96989e] max-w-[333px]">
              Biz siz uchun mobil va desktop versiyalarga mos, SEO
              optimallashtirilgan bir sahifalik veb-sayt yaratamiz. Yangi
              bizneslar va mahsulotlarni targ'ib qilish uchun mukammal yechim!
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default ServicesPage;
