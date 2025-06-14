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
    <div className="max-w-[1460px] mx-auto px-4 py-10">
      <div className="flex mt-20 flex-col-reverse md:flex-row justify-between items-center gap-10">
        <div data-aos="zoom-in-right" className="text-center md:text-left">
          <h1 className="font-semibold text-sm md:text-5xl font-swiss max-w-full md:max-w-[630px] text-[#000]">
            <span className="font-extrabold text-sm md:text-6xl font-swiss max-w-full md:max-w-[630px] text-[#000]">
              Milliy IT Center
            </span>
            - bu yechim emas! Bu natija
          </h1>
          <p className="font-extralight max-w-[670px] pt-4 md:pt-5 text-black text-base md:text-lg font-swiss">
            Biznesingiz uchun siz qidirgan barcha turdagi hizmatlarni bir yerga
            jamladik va uni Milliy IT Center deb atadik
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-6 md:pt-11">
            <button
              type="button"
              className="py-4 px-5 text-2xl font-semibold rounded-lg bg-[#e5f3f4] text-black transform transition-transform duration-200 hover:scale-105"
            >
              Biz haqimizda
            </button>
            <button
              type="button"
              className="py-4 px-5 text-2xl font-semibold rounded-lg bg-[#539c9f] text-white transform transition-transform duration-200 hover:scale-105"
            >
              Bog'lanish
            </button>
          </div>
        </div>

        <div className="max-w-[550px] text-start" data-aos="zoom-in-left">
          <Slider {...settings} key={sliderKey}>
            <img src="/heroimg/brandingImg.png" alt="Brand" />
            <img src="/heroimg/crmImg.png" alt="Crm" />
            <img src="/heroimg/grafikDizaynImg.png" alt="Grafik" />
            <img src="/heroimg/logotipImg.png" alt="Logotip" />
            <img src="/heroimg/marketingImg.png" alt="Marketing" />
            <img src="/heroimg/mobilIlovaImg.png" alt="Mobil" />
            <img src="/heroimg/seoOptimizatsiyaImg.png" alt="Seo" />
            <img src="/heroimg/smmImg.png" alt="Smm" />
            <img src="/heroimg/vebSaytImg.png" alt="Veb" />
          </Slider>
          {/* <img src={Nev} alt="Veb" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
