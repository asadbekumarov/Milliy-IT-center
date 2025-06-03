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
  return (
    <>
      <Header />
      <ScrollToTop />
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
