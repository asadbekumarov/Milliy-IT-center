import React from "react";
import TeamImg from "../../assets/ourTeamImg/Team.jpg";
import Mexriddin from "../../assets/ourTeamImg/Mexriddin.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Communication from "../communication/Communication";

function OurTeam() {
  return (
    <div className="bg-[#e5f3f4]">
      <div className="max-w-[1460px] mx-auto">
        <div>
          <div>
            <h1 className="text-6xl font-semibold font-swiss leading-10 pt-16 text-center">
              Bizning jamoa
            </h1>
            <p className="text-lg leading-7 text-center font-swiss text-gray-600 pt-5">
              Jamoamiz a’zolari bilan yaqindan tanishing.
            </p>
            <img className="rounded-2xl py-10" src={TeamImg} alt="TeamImg" />
            <p className="text-lg leading-7 font-swiss text-gray-600 mt-4">
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
            <h2 className="font-medium text-5xl pt-10 pb-14 leading-10">
              Jamoa a'zolari
            </h2>
            <div className="flex py-7 justify-between items-center">
              <div>
                <div className="relative w-[300px] overflow-hidden rounded-xl group shadow-lg">
                  <img
                    src={Mexriddin}
                    alt="Mexriddin photo"
                    className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                      Mexriddin – PHP Developer
                    </h4>
                  </div>
                </div>
                <div className="flex items-start justify-between py-3 gap-3 group transition-colors duration-300 rounded-lg px-2">
                  <h4 className="text-black text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                    Mexriddin Nuriddinov
                    <br />
                    <span
                      className="relative block w-full text-gray-600 text-base font-normal group-hover:text-black transition-colors duration-500
      before:content-[''] before:absolute before:left-0 before:top-0 before:h-[2px] before:bg-[#539c9f] 
      before:w-0 group-hover:before:w-full before:transition-all before:duration-500"
                    >
                      PHP Developer
                    </span>
                  </h4>
                  <Link
                    to="https://www.linkedin.com/in/mexriddin/"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>
                  <Link
                    to="https://twitter.com/mexriddin"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </Link>
                </div>
              </div>

              <div>
                <div className="relative w-[300px] overflow-hidden rounded-xl group shadow-lg">
                  <img
                    src={Mexriddin}
                    alt="Mexriddin photo"
                    className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                      Mexriddin – PHP Developer
                    </h4>
                  </div>
                </div>
                <div className="flex items-start justify-between py-3 gap-3 group transition-colors duration-300 rounded-lg px-2">
                  <h4 className="text-black text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                    Mexriddin Nuriddinov
                    <br />
                    <span
                      className="relative block w-full text-gray-600 text-base font-normal group-hover:text-black transition-colors duration-500
      before:content-[''] before:absolute before:left-0 before:top-0 before:h-[2px] before:bg-[#539c9f] 
      before:w-0 group-hover:before:w-full before:transition-all before:duration-500"
                    >
                      PHP Developer
                    </span>
                  </h4>
                  <Link
                    to="https://www.linkedin.com/in/mexriddin/"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>
                  <Link
                    to="https://twitter.com/mexriddin"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </Link>
                </div>
              </div>
              <div>
                <div className="relative w-[300px] overflow-hidden rounded-xl group shadow-lg">
                  <img
                    src={Mexriddin}
                    alt="Mexriddin photo"
                    className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                      Mexriddin – PHP Developer
                    </h4>
                  </div>
                </div>
                <div className="flex items-start justify-between py-3 gap-3 group transition-colors duration-300 rounded-lg px-2">
                  <h4 className="text-black text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                    Mexriddin Nuriddinov
                    <br />
                    <span
                      className="relative block w-full text-gray-600 text-base font-normal group-hover:text-black transition-colors duration-500
      before:content-[''] before:absolute before:left-0 before:top-0 before:h-[2px] before:bg-[#539c9f] 
      before:w-0 group-hover:before:w-full before:transition-all before:duration-500"
                    >
                      PHP Developer
                    </span>
                  </h4>
                  <Link
                    to="https://www.linkedin.com/in/mexriddin/"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>
                  <Link
                    to="https://twitter.com/mexriddin"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </Link>
                </div>
              </div>
              <div>
                <div className="relative w-[300px] overflow-hidden rounded-xl group shadow-lg">
                  <img
                    src={Mexriddin}
                    alt="Mexriddin photo"
                    className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                      Mexriddin – PHP Developer
                    </h4>
                  </div>
                </div>
                <div className="flex items-start justify-between py-3 gap-3 group transition-colors duration-300 rounded-lg px-2">
                  <h4 className="text-black text-xl font-semibold scale-95 group-hover:scale-100 transition-transform duration-500">
                    Mexriddin Nuriddinov
                    <br />
                    <span
                      className="relative block w-full text-gray-600 text-base font-normal group-hover:text-black transition-colors duration-500
      before:content-[''] before:absolute before:left-0 before:top-0 before:h-[2px] before:bg-[#539c9f] 
      before:w-0 group-hover:before:w-full before:transition-all before:duration-500"
                    >
                      PHP Developer
                    </span>
                  </h4>
                  <Link
                    to="https://www.linkedin.com/in/mexriddin/"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>
                  <Link
                    to="https://twitter.com/mexriddin"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#539c9f] text-white mb-20 p-16 rounded-lg mt-10">
          <div>
            <h4 className="text-3xl font-semibold font-swiss leading-10 max-w-[400px]">
              Bizning jamoamizga qo'shiling, qiziqarli imkoniyatlarni o'rganing
            </h4>
            <p className="text-lg leading-7 font-swiss text-gray-200 mt-4">
              Bizning tajribamiz yordamida o'z biznesingizni rivojlantiring.
            </p>
          </div>
          <button className="bg-white font-medium text-[#539c9f] py-2 px-4 rounded-lg">
            Hozir qo'shiling!
          </button>
        </div>
      </div>
      <Communication />
    </div>
  );
}

export default OurTeam;
