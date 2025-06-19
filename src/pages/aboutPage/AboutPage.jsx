import React from "react";

function AboutPage() {
  return (
    <div className="bg-[#e5f3f4] min-h-screen py-8 px-4">
      <div className="max-w-[1460px] mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold font-swiss leading-tight py-8 md:py-16 text-center">
            Biz haqimizda
          </h1>
          <div className="bg-white p-6 md:p-12 lg:p-16 rounded-3xl shadow-lg mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10 justify-between">
            <div>
              <h4 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight font-swiss">
                MIC®
              </h4>
              <p className="text-base md:text-lg leading-7 max-w-[525px] font-swiss text-gray-600 mt-4">
                MIC - jamoasi 7 yildan buyon o'z faoliyatini davom ettirib
                kelmoqda va hozirga qadar 300 dan ortiq loyihalar bilan ishlab
                ularni muvaffaqiyatli yakunlagan. Ularning ichida turli xil
                online do'konlar, tadbirkorlar, biznes egalari, o'quv markazlari
                hamda restoranlar bor.
                <span className="block mt-4">
                  Bizning maqsadimiz — mijozlar ishonchini oqlash va ularning
                  biznesini yangi darajaga olib chiqish
                </span>
              </p>
            </div>
            <img className="w-64 md:w-80 lg:w-96" src="/icon.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
