import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
// import Brand from "../../../public/heroimg/brandingImg.png";
// import Crm from "./../../../public/heroimg/crmImg.png";
// import Grafik from "./../../../public/heroimg/grafikDizaynImg.png";
// import Logotip from "./../../../public/heroimg/logotipImg.png";
// import Marketing from "./../../../public/heroimg/marketingImg.png";
// import Mobil from "./../../../public/heroimg/mobilIlovaImg.png";
// import Seo from "./../../../public/heroimg/seoOptimizatsiyaImg.png";
// import Smm from "./../../../public/heroimg/smmImg.png";
// import Veb from "./../../../public/heroimg/vebSaytImg.png";
// import Nev from "../../../public/news/persons.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const [sliderKey, setSliderKey] = useState(0);

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
    <div className="max-w-[1460px] mx-auto px-4 py-6 sm:py-10">
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
              className="py-3 sm:py-4 px-4 sm:px-5 text-xl sm:text-2xl font-semibold rounded-lg bg-[#e5f3f4] text-black transform transition-transform duration-200 hover:scale-105"
            >
              Biz haqimizda
            </button>
            <button
              type="button"
              className="py-3 sm:py-4 px-4 sm:px-5 text-xl sm:text-2xl font-semibold rounded-lg bg-[#539c9f] text-white transform transition-transform duration-200 hover:scale-105"
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
          {/* <img src={Nev} alt="Veb" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
