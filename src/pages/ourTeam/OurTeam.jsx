import React from "react";
import TeamImg from "../../assets/ourTeamImg/Team.jpg";
import Mexriddin from "../../assets/ourTeamImg/Mexriddin.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Communication from "../communication/Communication";

function OurTeam() {
  return (
    <div className="bg-[#e5f3f4]">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold font-swiss leading-tight pt-8 sm:pt-16 text-center">
              Bizning jamoa
            </h1>
            <p className="text-base sm:text-lg leading-7 text-center font-swiss text-gray-600 pt-4 sm:pt-5">
              Jamoamiz a'zolari bilan yaqindan tanishing.
            </p>
            <img className="rounded-xl sm:rounded-2xl py-6 sm:py-10" src={TeamImg} alt="TeamImg" />
            <p className="text-base sm:text-lg leading-7 font-swiss text-gray-600 mt-4">
              MIC IT-da bizning jamoamiz innovatsiyalarimiz va
              muvaffaqiyatlarimiz ortida turgan harakatlantiruvchi kuchdir. Biz
              sodiq mutaxassislar guruhimiz, ularning har biri ilg'or texnologik
              yechimlarni taqdim etish uchun tajriba va ishtiyoq keltiradi.
              Birgalikda biz biznesning rivojlanishi va rivojlanishiga yordam
              beradigan ajoyib raqamli tajribalarni taqdim etishga intilamiz.
              Bizning jamoamizning xilma-xil ko'nikmalari va hamkorlik ruhi
              bizni texnologiya sanoatining oldingi saflarida qolishimizni
              ta'minlaydi, chegaralarni kengaytiradi va dasturiy ta'minotni
              ishlab chiqish, IT xizmatlari va raqamli transformatsiyada yangi
              standartlarni o'rnatadi.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-3xl sm:text-4xl lg:text-5xl pt-8 sm:pt-10 pb-8 sm:pb-14 leading-tight">
              Jamoa a'zolari
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-4 sm:py-7">
              {/* Team member card - repeated 4 times */}
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index}>
                  <div className="relative w-full sm:w-[300px] overflow-hidden rounded-xl group shadow-lg">
                    <img
                      src={Mexriddin}
                      alt="Mexriddin photo"
                      className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-110 group-hover:blur-sm"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                      <h4 className="text-white text-lg sm:text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                        Mexriddin – Software Engineer
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start justify-between py-3 gap-3 group transition-colors duration-300 rounded-lg px-2">
                    <h4 className="text-black text-lg sm:text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                      Mexriddin Nuriddinov
                      <br />
                      <span className="relative block w-full text-gray-600 text-sm sm:text-base font-normal group-hover:text-black transition-colors duration-500 before:content-[''] before:absolute before:left-0 before:top-0 before:h-[2px] before:bg-[#539c9f] before:w-0 group-hover:before:w-full before:transition-all before:duration-500">
                        Software Engineer
                      </span>
                    </h4>
                    <div className="flex gap-2 sm:gap-4">
                      <Link
                        to="https://www.linkedin.com/in/mexriddin/"
                        target="_blank"
                        className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                      <Link
                        to="https://twitter.com/mexriddin"
                        target="_blank"
                        className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                      >
                        <FaGithub size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#539c9f] text-white mb-10 sm:mb-20 p-6 sm:p-16 rounded-lg mt-6 sm:mt-10 gap-6 lg:gap-10">
          <div>
            <h4 className="text-2xl sm:text-3xl font-semibold font-swiss leading-tight max-w-[400px]">
              Bizning jamoamizga qo'shiling, qiziqarli imkoniyatlarni o'rganing
            </h4>
            <p className="text-base sm:text-lg leading-7 font-swiss text-gray-200 mt-4">
              Bizning tajribamiz yordamida o'z biznesingizni rivojlantiring.
            </p>
          </div>
          <button
            type="button"
            aria-label="Hozir qo'shiling!"
            className="bg-white font-medium text-[#539c9f] py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Hozir qo'shiling!
          </button>
        </div>
      </div>
      <Communication />
    </div>
  );
}

export default OurTeam;
