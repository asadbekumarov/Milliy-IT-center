import React from "react";
import Partner from "../../assets/partners/partners.jpg"; // Adjust the path as necessary
function Partners() {
  return (
    <div className=" bg-[#e5f3f4]">
      <div className="max-w-[1460px] mx-auto">
        <div className="pb-24">
          <h1 className="text-6xl font-semibold font-swiss leading-10 py-16 text-center">
            Hamkorlar
          </h1>
          <p className="text-lg leading-7  mx-auto text-center pb-16 font-swiss text-gray-600">
            MIC kompaniyasi turli sohalarda muvaffaqiyatli hamkorlik qiluvchi
            kompaniyalar bilan ishlaydi. Bizning hamkorlarimiz bilan yaqindan
            tanishing va ularga qanday xizmat ko'rsatishimiz haqida bilib oling.
            Hamkorlikdagi muvaffaqiyatlarimiz bilan tanishing.
          </p>
          <div className="bg-white p-16 rounded-3xl shadow-lg mx-auto flex items-center gap-10 justify-between">
            <div>
              <h4 className="font-semibold text-5xl leading-10 font-swiss">
                MARKETING.UZ
              </h4>

              <p className="text-lg leading-7 max-w-[525px] font-swiss text-gray-600 mt-4">
                MIC kompaniyasi o‘z sohasidagi yetakchi kompaniyalar bilan
                samarali hamkorlik yo‘lidagi qadamlarini mustahkamlashda davom
                etmoqda. Bizning yangi hamkorimiz – MARKETING.UZ. Ushbu
                hamkorlik marketing va raqamli reklama xizmatlarimizni yanada
                kengaytirishga imkon beradi. MARKETING.UZ bilan hamkorligimiz
                orqali mijozlarimizga marketing sohasida ilg‘or echimlarni
                taqdim etishga intilamiz.
                <span className="block mt-4">
                  Ushbu hamkorlik bizning rivojlanish strategiyamizda muhim
                  qadam bo‘lib, u...
                </span>
              </p>
            </div>
            <img className="w-96" src="/icon.png" alt="Logo" />
          </div>
        </div>
        <div>
          <div className="flex justify-between flex-wrap gap-5 items-center pb-44">

            <div className="relative w-[300px] overflow-hidden rounded-xl group shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-[300px] rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:opacity-70"
                src={Partner}
                alt="Partners"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {/* You can also customize the font size here */}AmoCRM
                </p>
              </div>
            </div>
            <div className="relative w-[300px] overflow-hidden rounded-xl group shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-[300px] rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:opacity-70"
                src={Partner}
                alt="Partners"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {/* You can also customize the font size here */}AmoCRM
                </p>
              </div>
            </div>
            <div className="relative w-[300px] overflow-hidden rounded-xl group shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-[300px] rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:opacity-70"
                src={Partner}
                alt="Partners"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {/* You can also customize the font size here */}AmoCRM
                </p>
              </div>
            </div>
            <div className="relative w-[300px] overflow-hidden rounded-xl group shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-[300px] rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:opacity-70"
                src={Partner}
                alt="Partners"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {/* You can also customize the font size here */}AmoCRM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
