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
          <p className="text-sm my-1">
            Milliy IT Center - Innovatsiyalarni yaratishda biz bilan birga
            rivojlaning
          </p>
          <p className="text-sm my-1">Dushanba - Juma: 9:00 - 18:00</p>
          <p className="text-sm my-1">Dam olish kuni: Shanba, Yakshanba</p>
        </div>

        <div>
          <h3 className="font-swiss font-semibold text-2xl mb-2">Menyu</h3>
          <ul>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Xizmatlar
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Biz haqimizda
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Yangi loyihalar
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Biz bilan bog'lanish
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Talablar va shartlar
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-swiss font-semibold text-2xl mb-2">
            Bizning faoliyat
          </h3>
          <ul>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              IT konsalting
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Veb dasturlash
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Mobil ilovalar yaratish
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Dasturiy ta'minot integratsiyasi
            </li>
            <li className="text-sm my-1 hover:underline cursor-pointer">
              Kiber xavfsizlik
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-swiss font-semibold text-2xl mb-2">
            Yangiliklar xabarnomasi
          </h3>
          <div className="flex items-center border-b border-black py-1 gap-2">
            <TfiEmail />
            <input
              className="flex-1 outline-none"
              placeholder="Yangiliklar uchun elektron pochta qoldiring."
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
          <li className="hover:underline">Xizmat shartlari</li>
          <span className="hidden sm:inline">|</span>
          <li className="hover:underline">Maxfiylik siyosati</li>
          <span className="hidden sm:inline">|</span>
          <li className="hover:underline">Cookie siyosati</li>
        </ul>
        <p className="text-[#96989e] text-sm">
          ©2025 Milliy IT Center. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
}

export default Footer;
