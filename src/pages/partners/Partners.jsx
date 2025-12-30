import { useEffect, useState } from "react";
import axios from "axios";

function Partners() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.milliyitcenter.uz/api/partners")
      .then((res) => {
        setPartners(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Ma'lumot yuklashda xatolik yuz berdi");
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#e5f3f4]">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:pb-24">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold font-swiss leading-tight py-8 sm:py-16 text-center">
            Hamkorlar
          </h1>
          <p className="text-base sm:text-lg leading-7 mx-auto text-center pb-8 sm:pb-16 font-swiss text-gray-600 max-w-4xl">
            MIC kompaniyasi turli sohalarda muvaffaqiyatli hamkorlik qiluvchi
            kompaniyalar bilan ishlaydi. Quyida ularning logotiplari, nomlari va
            qisqacha izohlarini ko'rishingiz mumkin.
          </p>
          <div className="bg-white p-6 sm:p-10 lg:p-16 rounded-3xl shadow-lg mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10 justify-between flex-wrap mb-10 sm:mb-20">
            <div>
              <h4 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight font-swiss">
                MARKETING.UZ
              </h4>
              <p className="text-base sm:text-lg leading-7 max-w-[525px] font-swiss text-gray-600 mt-4">
                MIC kompaniyasi o'z sohasidagi yetakchi kompaniyalar bilan
                samarali hamkorlik yo'lida harakat qilmoqda. Yangi hamkorimiz –
                MARKETING.UZ. Ushbu hamkorlik raqamli marketing xizmatlarimizni
                kengaytirishga xizmat qiladi.
              </p>
            </div>
            <img
              className="w-64 sm:w-80 lg:w-96"
              src="/icon.png"
              alt="Marketing.uz Logo"
              loading="lazy"
            />
          </div>
          {loading ? (
            <p className="text-center text-base sm:text-lg font-medium">Yuklanmoqda...</p>
          ) : error ? (
            <p className="text-center text-red-500 text-base sm:text-lg">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 pb-10 sm:pb-20">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden"
                >
                  <img
                    className="w-full h-40 sm:h-52 object-cover"
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-indigo-600 font-medium mb-2">
                      {partner.title}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-4">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Partners;
