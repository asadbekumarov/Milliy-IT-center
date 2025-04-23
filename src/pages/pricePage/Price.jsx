import React, { useRef } from "react";
import Contact from "../../components/contact/Contact";

function Price() {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    const px = -100;
    const y =
      contactRef.current.getBoundingClientRect().top + window.pageYOffset + px;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div>
      <div className="max-w-[1460px] mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-between items-center pt-20 gap-6 md:flex-row flex-col">
    
          <div className="bg-[#009b9a] px-9 pb-7 rounded-2xl border transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110 w-full sm:w-[48%] lg:w-[30%]">
            <h3 className="text-center bg-white rounded-bl-3xl rounded-br-3xl text-4xl font-semibold font-swiss p-2">
              Silver
            </h3>
            <h3 className="text-white text-center pt-2 text-2xl font-semibold font-swiss">
              $399
            </h3>
            <ul className="list-disc pt-4 flex flex-col gap-5">
              <li className="text-white text-lg font-swiss">12 ta Rasmli Post</li>
              <li className="text-white text-lg font-swiss">12ta Istorya</li>
              <li className="text-white text-lg font-swiss">
                Profil Upakovka Instagram, Telegram
              </li>
              <li className="text-white text-lg font-swiss">
                Targeting Reklama (instagram)
              </li>
              <li className="text-white text-lg font-swiss">
                4ta video + mantaj
              </li>
              <li className="text-white text-lg font-swiss">
                Profil va Konkurent analizi
              </li>
              <li className="text-white text-lg font-swiss">
                Reklama natijasini tahlil qilish
              </li>
              <li className="text-white text-lg font-swiss">
                SMM online kurs (1 oyga)
              </li>
            </ul>
            <button
              onClick={handleScrollToContact}
              className="mt-6 w-full bg-white text-[#009b9a] font-swiss font-semibold py-2 rounded-xl hover:bg-[#00aaa9] border-2 border-[#00aaa9] hover:border hover:border-2 hover:border-[#fff] hover:text-white transition duration-300"
            >
              Bepul konsultatsiya oling
            </button>
          </div>

          <div className="bg-white px-9 pb-7 rounded-2xl border border-[#009b9a] transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110 w-full sm:w-[48%] lg:w-[30%]">
            <h3 className="text-center text-white bg-[#009b9a] rounded-bl-3xl rounded-br-3xl text-4xl font-semibold font-swiss p-2">
              Gold
            </h3>
            <h3 className="text-[#009b9a] text-center text-2xl pt-5 font-semibold font-swiss">
              $599
            </h3>
            <ul className="list-disc pt-6 flex flex-col gap-7">
              <li className="text-[#009b9a] text-lg font-swiss">16 ta Rasmli Post</li>
              <li className="text-[#009b9a] text-lg font-swiss">20ta Istorya</li>
              <li className="text-[#009b9a] text-lg font-swiss">
                Profil Upakovka Instagram, Telegram, Facebook
              </li>
              <li className="text-[#009b9a] text-lg font-swiss">
                Targeting Reklama (instagram, facebook)
              </li>
              <li className="text-[#009b9a] text-lg font-swiss">
                7ta video + mantaj
              </li>
              <li className="text-[#009b9a] text-lg font-swiss">
                Reklama natijasini tahlil qilish
              </li>
              <li className="text-[#009b9a] text-lg font-swiss">Web-site yasab berish</li>
              <li className="text-[#009b9a] text-lg font-swiss">Telegram Bot yasash</li>
              <li className="text-[#009b9a] text-lg font-swiss">
                Dizayn xizmatlari (flayer, buklet va vizitka)
              </li>
              <li className="text-[#009b9a] text-lg font-swiss">
                SMM online kurs (3 oyga)
              </li>
            </ul>
            <button
              onClick={handleScrollToContact}
              className="mt-6 w-full bg-white text-[#009b9a] font-swiss font-semibold py-2 rounded-xl hover:bg-[#00aaa9] border-2 border-[#00aaa9] hover:border hover:border-2 hover:border-[#fff] hover:text-white transition duration-300"
            >
              Bepul konsultatsiya oling
            </button>
          </div>

          <div className="bg-[#009b9a] px-9 pb-7 rounded-2xl border shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110 w-full sm:w-[48%] lg:w-[30%]">
            <h3 className="text-center bg-white rounded-bl-3xl rounded-br-3xl text-4xl font-semibold font-swiss p-2">
              DIAMOND
            </h3>
            <h3 className="text-white text-center pt-2 text-2xl font-semibold font-swiss">
              $1299
            </h3>
            <ul className="list-disc pt-4 flex flex-col gap-5">
              <li className="text-white text-lg font-swiss">Gold tarifidagi barchasi</li>
              <li className="text-white text-lg font-swiss">Amo Crm o'rnatish</li>
              <li className="text-white text-lg font-swiss">Sotuv bo'limini analiz qilish</li>
              <li className="text-white text-lg font-swiss">Hodimlar trening qilish</li>
              <li className="text-white text-lg font-swiss">Kampaniya analizi</li>
              <li className="text-white text-lg font-swiss">SMS xabarnoma yuborish</li>
              <li className="text-white text-lg font-swiss">Sotuv skriptlarini tuzib berish</li>
              <li className="text-white text-lg font-swiss">1+1 kelishuv (1 oy xizmat 1 oy supportlik)</li>
            </ul>
            <button
              onClick={handleScrollToContact}
              className="mt-6 w-full bg-white text-[#009b9a] font-swiss font-semibold py-2 rounded-xl hover:bg-[#00aaa9] border-2 border-[#00aaa9] hover:border hover:border-2 hover:border-[#fff] hover:text-white transition duration-300"
            >
              Bepul konsultatsiya oling
            </button>
          </div>
        </div>
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default Price;
