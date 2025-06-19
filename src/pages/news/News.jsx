import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [newsList, setNewsList] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.milliyitcenter.uz/api/news")
      .then((res) => {
        const allNews = res.data;

        setNewsList(allNews);
        setFilteredNews(allNews);

        const uniqueCategories = [
          ...new Set(
            allNews
              .filter((item) => item.new_category && item.new_category.name)
              .map((item) => item.new_category.name)
          ),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    if (categoryName === "all") {
      setFilteredNews(newsList);
    } else {
      const filtered = newsList.filter(
        (item) => item.new_category?.name === categoryName
      );
      setFilteredNews(filtered);
    }
  };

  if (loading) return <p className="text-center mt-10">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Xatolik: {error.message}</p>;

  return (
    <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="font-semibold text-3xl sm:text-4xl lg:text-6xl font-swiss mt-8 sm:mt-12 lg:mt-24">
        Yangiliklar
      </h2>
      <h4
        data-aos="zoom-out-right"
        className="font-semibold text-xl sm:text-2xl lg:text-3xl mt-6 sm:mt-8 font-swiss py-4"
      >
        Filtr
      </h4>
      {/* Kategoriya tugmalari */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10">
        <button
          onClick={() => handleCategoryClick("all")}
          className={`py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-sm sm:text-base transition-all duration-300
            ${activeCategory === "all" ? "bg-blue-600 text-white" : "bg-[#f8f9fa] hover:bg-blue-600 hover:text-white"}`}
        >
          Barchasini ko'rish
        </button>
        {categories.map((categoryName, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryClick(categoryName)}
            className={`py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-sm sm:text-base transition-all duration-300
              ${activeCategory === categoryName ? "bg-blue-600 text-white" : "bg-[#f8f9fa] hover:bg-blue-600 hover:text-white"}`}
          >
            {categoryName}
          </button>
        ))}
      </div>

      {/* Yangiliklar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredNews.length === 0 ? (
          <p className="text-base sm:text-lg">Yangiliklar topilmadi.</p>
        ) : (
          filteredNews.map((newsItem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="w-full h-40 sm:h-48 object-cover"
                src={newsItem.image || "/placeholder.jpg"}
                alt={newsItem.title}
              />
              <div className="p-4 sm:p-5">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {newsItem.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {(newsItem.description || "Tavsif mavjud emas").slice(0, 120)}...
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">
                  {new Date(newsItem.date).toLocaleDateString("uz-UZ", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default News;


