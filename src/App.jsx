import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<ServicesPage />} />
        <Route path="communication" element={<Communication />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="price" element={<Price />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
