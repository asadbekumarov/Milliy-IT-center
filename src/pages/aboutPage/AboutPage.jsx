import React from "react";

function AboutPage() {
  return (
    <div className=" bg-[#e5f3f4] h-screen">
      <div className="max-w-[1460px] mx-auto">
        <div>
          <h1 className="text-6xl font-semibold font-swiss leading-10 py-16 text-center">
            Biz haqimizda
          </h1>
          <div className="bg-white p-16 rounded-3xl shadow-lg mx-auto flex items-center gap-10 justify-between">
            <div>
              <h4 className="font-semibold text-5xl leading-10 font-swiss">
                MIC®
              </h4>
              <p className="text-lg leading-7 max-w-[525px] font-swiss text-gray-600 mt-4">
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
            <img className="w-96" src="/icon.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
