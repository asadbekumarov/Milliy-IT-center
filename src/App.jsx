import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "./components/notFound/Notfound";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import Communication from "./pages/communication/Communication";
import Price from "./pages/pricePage/Price";
import Portfolio from "./pages/portfolioPage/Portfolio";
import Blog from "./pages/blogPage/Blog";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
import ScrollToTop from "./components/scrollToTopButton/ScrollToTop";
import WeAbout from "./pages/weAbout/weAbout";
import AboutPage from "./pages/aboutPage/AboutPage";
import OurTeam from "./pages/ourTeam/OurTeam";
import News from "./pages/news/News";
import Partners from "./pages/partners/Partners";
function App() {
  // const [showModal, setShowModal] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  // useEffect(() => {
  //   if (!submitted) {
  //     const timer = setTimeout(() => {
  //       setShowModal(true);
  //       document.body.style.overflow = "hidden";
  //     }, 3000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [submitted]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowModal(false);
  //   setSubmitted(true);
  //   document.body.style.overflow = "auto";
  // };
  return (
    <>
      <Header />
      <ScrollToTop />
      {/* {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl text-center font-semibold mb-4">
              Ro'yhatdan o'ting
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ism"
                className="w-full p-3 mb-4 border outline-none rounded-md focus:ring-2 focus:ring-[#539c9f]"
              />
              <input
                type="text"
                placeholder="Familiya"
                className="w-full p-3 mb-4 border outline-none rounded-md focus:ring-2 focus:ring-[#539c9f]"
              />
              <input
                type="tel"
                placeholder="Telefon raqami"
                className="w-full p-3 mb-4 border outline-none rounded-md focus:ring-2 focus:ring-[#539c9f]"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#539c9f] text-white rounded-md hover:bg-[#3f7a7b] transition duration-300"
              >
                Kirish
              </button>
            </form>
          </div>
        </div>
      )} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<ServicesPage />} />
        <Route path="about" element={<WeAbout />} />
        <Route path="communication" element={<Communication />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="price" element={<Price />} />
        <Route path="aboutPage" element={<AboutPage />} />
        <Route path="ourTeam" element={<OurTeam />} />
        <Route path="news" element={<News />} />
        <Route path="partners" element={<Partners />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
