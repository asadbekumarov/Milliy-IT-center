import React from "react";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import AboutUs from "../../components/aboutUs/AboutUs";
import Portfolio from "../../components/portfolio/Portfolio";

const Home = () => {
  return (
    <div className="w-full max-w-[1460px] mx-auto px-4">
      <Hero />
      <Services />
      <AboutUs />
      <Portfolio />
    </div>
  );
};

export default Home;
