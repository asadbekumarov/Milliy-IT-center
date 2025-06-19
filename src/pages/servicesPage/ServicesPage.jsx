import { useEffect, useState } from "react";
import Icon from "../../assets/icon.png";
import Aos from "aos";
import axios from "axios";

function ServicesPage() {
  const [data, setData] = useState({ services: [], categories: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState("all");

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    axios
      .get("http://api.milliyitcenter.uz/api/categories")
      .then((res) => {
        const categories = res.data;
        const services = categories.flatMap((category) =>
          category.services.map((service) => ({
            ...service,
            category_name: category.name,
          }))
        );

        setData({ services, categories });
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const filteredServices =
    activeCategoryId === "all"
      ? data.services
      : data.services.filter(
        (service) => service.category_id === activeCategoryId
      );

  if (loading) return <p className="text-center mt-20">Yuklanmoqda...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 mt-20">Xatolik: {error.message}</p>
    );

  return (
    <div>
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2
          data-aos="zoom-out-right"
          className="font-semibold text-4xl sm:text-5xl lg:text-6xl font-swiss mt-12 sm:mt-16 lg:mt-24"
        >
          Xizmatlar
        </h2>
        <p
          data-aos="zoom-out-right"
          className="font-semibold text-base sm:text-lg lg:text-xl text-[#646575] font-swiss mt-4 sm:mt-6"
        >
          MIC kompaniyasi tomonidan amalga oshirilgan muvaffaqiyatli loyihalar
          bilan tanishing. Bizning mijozlarimiz uchun yaratgan veb-saytlar,
          marketing kampaniyalari va texnologik yechimlarimiz haqida batafsil
          ma'lumot oling. MIC bilan birgalikda muvaffaqiyatga erishgan
          loyihalarimizni ko'ring.
        </p>

        <h4
          data-aos="zoom-out-right"
          className="font-semibold text-xl sm:text-2xl lg:text-3xl mt-8 sm:mt-10 font-swiss"
        >
          Filtr
        </h4>

        <div className="flex flex-col sm:flex-row flex-wrap gap-x-2 sm:gap-x-3 gap-y-2 mt-4 sm:mt-5">
          <button
            onClick={() => setActiveCategoryId("all")}
            className={`font-normal text-sm sm:text-base lg:text-xl py-2 px-3 sm:px-4 rounded-full 
              transition-all duration-300 ease-in-out 
              hover:bg-blue-600 hover:text-white 
              ${activeCategoryId === "all" ? "bg-blue-600 text-white" : "bg-[#f8f9fa]"}`}
          >
            Barchasini ko‘rish
          </button>

          {data.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryId(category.id.toString())}
              className={`font-normal text-sm sm:text-base lg:text-xl py-2 px-3 sm:px-4 rounded-full 
                transition-all duration-300 ease-in-out 
                hover:bg-blue-600 hover:text-white 
                ${activeCategoryId === category.id.toString()
                  ? "bg-blue-600 text-white"
                  : "bg-[#f8f9fa]"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              data-aos="zoom-out-right"
              className="w-full border border-[#c4c8cb] p-6 sm:p-8 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              <img className="w-12 sm:w-14" src={Icon} alt="" />
              <h3 className="font-semibold text-xl sm:text-2xl mt-4 sm:mt-6">
                {service.name}
              </h3>
              <p className="text-sm sm:text-base leading-6 mt-3 text-[#96989e]">
                {service.description || "Biz korporativ veb-saytlar yaratishda tajribaga ega mutaxassislarmiz. Zamonaviy va funksional dizayn, SEO optimizatsiya va mijozlar bilan qulay muloqot. Sifatli biznes yechimlarini toping!"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
