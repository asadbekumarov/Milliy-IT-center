//  * ScrollToTop komponenti:
//  * 
//  * Bu komponent foydalanuvchi sahifani o‘zgartirganda (yani, URL o‘zgarishi) sahifaning 
//  * yuqori qismiga avtomatik ravishda qaytaradi. Sahifa yuklanishida yoki URL o‘zgarganda 
//  * `window.scrollTo()` yordamida sahifa yuqorisiga smooth (sekin) tarzda o‘tadi.
//  * 
//  * `useLocation` hooki orqali, foydalanuvchi sahifani har o‘zgartirganda sahifa yuqoriga 
//  * ko‘chadi, bu esa yaxshilangan foydalanuvchi tajribasini ta'minlaydi.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
