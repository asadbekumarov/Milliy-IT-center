import React from "react";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import AboutUs from "../../components/aboutUs/AboutUs";
import Portfolio from "../../components/portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Portfolio />
    </>
  );
};

export default Home;
