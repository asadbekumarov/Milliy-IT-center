import React from "react";
import Logo from "../../assets/headerImg/logo.png";
import { TfiEmail } from "react-icons/tfi";
import { RiTelegram2Line } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="max-w-[1460px] mx-auto px-4 py-4">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 mb-28"
      >
        <div>
          <img className="max-w-52 mb-4" src={Logo} alt="logo img" />
          <p className="text-sm my-1">DORA® Будьте уникальными вместе с нами</p>
          <p className="text-sm my-1">Пн - Сб: 9:00 - 19:00</p>
          <p className="text-sm my-1">Закрыто по выходным</p>
        </div>

        <div>
          <h3 className="font-swiss font-semibold text-2xl mb-2">Menyu</h3>
          <ul>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Mijozlar
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Veb-sayt yaratish (Brief)
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Tez-tez soraladigan savollar
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Veb-saytga texnik xizmat ko'rsatish
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Bosh ish o'rinlari
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-swiss font-semibold text-2xl mb-2">
            Faoliyat yo‘nalishlari
          </h3>
          <ul>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Ko'ngilochar xizmatlar va media
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Konsolting va Proffesional xizmatlar
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Energiya va atrof-muhit
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Savdo va elektron tijorat
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Axborot texniyologiyalari va telekommunikatsiyalar
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-swiss font-semibold text-2xl mb-2">
            Yangiliklar xabarnomasi
          </h3>
          <div className="flex items-center border-b border-black px-2 py-1 gap-2">
            <TfiEmail />
            <input
              className="flex-1 outline-none"
              placeholder="Elektron pochta manzilingiz"
              type="email"
            />
            <RiTelegram2Line />
          </div>

          <div className="flex flex-wrap justify-start gap-4 mt-7">
            <GrFacebookOption className="w-10 h-10 p-2 border border-black rounded-full transition" />
            <FaLinkedinIn className="w-10 h-10 p-2 border border-black rounded-full transition" />
            <FaTwitter className="w-10 h-10 p-2 border border-black rounded-full transition" />
            <AiFillYoutube className="w-10 h-10 p-2 border border-black rounded-full transition" />
            <RiInstagramFill className="w-10 h-10 p-2 border border-black rounded-full transition" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between border-t pt-8 pb-4 text-center sm:text-left">
        <ul className="flex flex-col sm:flex-row items-center text-sm text-[#96989e] gap-2 sm:gap-4">
          <li className="hover:underline">Xizmat ko'rsatish shartlari</li>
          <span className="hidden sm:inline">|</span>
          <li className="hover:underline">MAxfiylik siyosati</li>
          <span className="hidden sm:inline">|</span>
          <li className="hover:underline">Cookie siyosati</li>
        </ul>
        <p className="text-[#96989e] text-sm">
          ©2019- 2025 DORA®. Barcha huquqlar himoyalangan
        </p>
      </div>
    </div>
  );
}

export default Footer;
