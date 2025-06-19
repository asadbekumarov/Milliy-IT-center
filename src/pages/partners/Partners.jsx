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
      .catch((err) => {
        setError("Ma'lumot yuklashda xatolik yuz berdi");
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#e5f3f4]">
      <div className="max-w-[1460px] mx-auto px-4">
        <div className="pb-24">
          <h1 className="text-6xl font-semibold font-swiss leading-10 py-16 text-center">
            Hamkorlar
          </h1>
          <p className="text-lg leading-7 mx-auto text-center pb-16 font-swiss text-gray-600 max-w-4xl">
            MIC kompaniyasi turli sohalarda muvaffaqiyatli hamkorlik qiluvchi
            kompaniyalar bilan ishlaydi. Quyida ularning logotiplari, nomlari va
            qisqacha izohlarini ko‘rishingiz mumkin.
          </p>
          <div className="bg-white p-16 rounded-3xl shadow-lg mx-auto flex items-center gap-10 justify-between flex-wrap mb-20">
            <div>
              <h4 className="font-semibold text-5xl leading-10 font-swiss">
                MARKETING.UZ
              </h4>
              <p className="text-lg leading-7 max-w-[525px] font-swiss text-gray-600 mt-4">
                MIC kompaniyasi o‘z sohasidagi yetakchi kompaniyalar bilan
                samarali hamkorlik yo‘lida harakat qilmoqda. Yangi hamkorimiz –
                MARKETING.UZ. Ushbu hamkorlik raqamli marketing xizmatlarimizni
                kengaytirishga xizmat qiladi.
              </p>
            </div>
            <img
              className="w-96"
              src="/icon.png"
              alt="Marketing.uz Logo"
              loading="lazy"
            />
          </div>
          {loading ? (
            <p className="text-center text-lg font-medium">Yuklanmoqda...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden"
                >
                  <img
                    className="w-full h-52 object-cover"
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-indigo-600 font-medium mb-2">
                      {partner.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
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
