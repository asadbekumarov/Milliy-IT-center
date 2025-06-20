//  * ScrollToTopButton komponenti:
//  * 
//  * Bu komponent foydalanuvchi sahifada pastga skroll qilganida ko‘rinib turadigan va 
//  * foydalanuvchi yuqoriga qaytishi uchun ishlatiladigan tugmani yaratadi. Sahifada 200px 
//  * yoki undan ko‘p pastga siljiganida tugma ko‘rinadi va yuqoriga qaytishga imkon beradi.
//  * 
//  * `window.scrollTo()` yordamida foydalanuvchi tugmani bosganda sahifa yuqorisiga smooth 
//  * (sekin) tarzda o‘tadi.
//  * 
//  * `useState` va `useEffect` yordamida sahifa qaysi joyda ekanligi va tugmaning ko‘rinishi 
//  * boshqariladi.


import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 p-4 rounded-full bg-[#539c9f] text-white shadow-lg hover:bg-[#4a8c8e] transition-all duration-300 
        transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"} ease-in-out`}
    >
      <FaArrowUp className="text-2xl" />
    </button>
  );
};

export default ScrollToTopButton;

