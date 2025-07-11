import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [sliderKey, setSliderKey] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
    setSliderKey((prevKey) => prevKey + 1);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1460px] mx-auto px-4 py-6 mb-10 sm:py-10">
      <div className="flex mt-10 sm:mt-20 flex-col-reverse md:flex-row justify-between items-center gap-6 sm:gap-10">
        <div data-aos="zoom-in-right" className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-swiss max-w-full md:max-w-[630px] text-[#000]">
            <span className="font-extrabold text-3xl sm:text-5xl md:text-6xl font-swiss max-w-full md:max-w-[630px] text-[#000] block mb-2">
              Milliy IT Center
            </span>
            - bu yechim emas! Bu natija
          </h1>
          <p className="font-extralight max-w-[670px] pt-4 md:pt-5 text-base sm:text-lg md:text-xl font-swiss">
            Biznesingiz uchun siz qidirgan barcha turdagi hizmatlarni bir yerga
            jamladik va uni Milliy IT Center deb atadik
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-6 md:pt-11">
            <button
              type="button"
              aria-label="Biz haqimizda"
              className="py-3 sm:py-4 px-4 sm:px-5 text-xl sm:text-2xl font-semibold rounded-lg bg-[#e5f3f4] text-black transform transition-transform duration-200 hover:scale-105"
              onClick={() => navigate("/aboutPage")}
            >
              Biz haqimizda
            </button>
            <button
              type="button"
              aria-label="Bog'lanish"
              className="py-3 sm:py-4 px-4 sm:px-5 text-xl sm:text-2xl font-semibold rounded-lg bg-[#539c9f] text-white transform transition-transform duration-200 hover:scale-105"
              onClick={() => navigate("/communication")}
            >
              Bog'lanish
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-[550px]" data-aos="zoom-in-left">
          <Slider {...settings} key={sliderKey}>
            <img src="/heroimg/brandingImg.png" alt="Brand" className="w-full h-auto" />
            <img src="/heroimg/crmImg.png" alt="Crm" className="w-full h-auto" />
            <img src="/heroimg/grafikDizaynImg.png" alt="Grafik" className="w-full h-auto" />
            <img src="/heroimg/logotipImg.png" alt="Logotip" className="w-full h-auto" />
            <img src="/heroimg/marketingImg.png" alt="Marketing" className="w-full h-auto" />
            <img src="/heroimg/mobilIlovaImg.png" alt="Mobil" className="w-full h-auto" />
            <img src="/heroimg/seoOptimizatsiyaImg.png" alt="Seo" className="w-full h-auto" />
            <img src="/heroimg/smmImg.png" alt="Smm" className="w-full h-auto" />
            <img src="/heroimg/vebSaytImg.png" alt="Veb" className="w-full h-auto" />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
