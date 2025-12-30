 
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import AboutUs from "../../components/aboutUs/AboutUs";
import Portfolio from "../../components/portfolio/Portfolio";

const Home = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <Services />
      <AboutUs />
      <Portfolio />
    </div>
  );
};

export default Home;
