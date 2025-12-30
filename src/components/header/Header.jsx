import { useEffect, useState } from "react";
import Logo from "../../assets/headerImg/logo.png";
import { NavLink } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Aos from "aos";

 

function Header() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("Uz");
  const langClass = (lang) =>
    `py-2 px-3 font-swiss text-sm font-medium rounded-full transition ${activeLang === lang
      ? "bg-[#539c9f] text-white"
      : "bg-white text-[#539c9f] hover:bg-[#539c9f] hover:text-white"
    }`;

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow">
      <div className="max-w-[1460px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img
              className="w-[150px] sm:w-[200px] md:w-[250px]"
              src={Logo}
              alt="Logo img"
            />
          </NavLink>

          <div className="lg:hidden">
            <button
              aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}

              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-[#539c9f]"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
          <ul className="hidden lg:flex justify-between gap-6 xl:gap-8">
            {[
              { to: "/", label: "Bosh Sahifa" },
              { to: "/service", label: "Xizmatlar" },
              // { to: "/aboutPage", label: "Biz haqimizda" },
              { to: "/ourTeam", label: "Bizning jamoa" },
              { to: "/news", label: "Yangiliklar" },
              // { to: "/partners", label: "Hamkorlar" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/blog", label: "Blog" },
              { to: "/communication", label: "Aloqa" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "font-swiss text-[#3b7f82] font-semibold underline"
                      : "hover:underline font-swiss font-semibold hover:text-[#3b7f82] transition duration-200"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-4">
            {/* <input
              placeholder="Search..."
              className="border font-swiss py-2 px-3 outline-none rounded-md w-60 shadow-sm focus:ring-2 focus:ring-[#539c9f]"
              type="search"
              aria-label="Search"
            // value={searchTerm}
            /> */}
            <div className="relative">
              {/* <input
                placeholder="Search..."
                className="border font-swiss py-2 px-3 outline-none rounded-md w-60 shadow-sm focus:ring-2 focus:ring-[#539c9f]"
                type="search"
                aria-label="Search"
              /> */}
            </div>
            <span className="flex gap-1 bg-[#e5f3f4] p-1 rounded-full">
              <button
                type="button"
                className={`${langClass("En")} font-semibold`}
                onClick={() => setActiveLang("En")}
                aria-label="English language"
              >
                En
              </button>

              <button
                type="button"
                className={`${langClass("Uz")} font-semibold`}
                onClick={() => setActiveLang("Uz")}
                aria-label="Uzbek language"
              >
                Uz
              </button>
              {/* <button
                type="button"
                className={`${langClass("Ru")} font-semibold`}
                onClick={() => setActiveLang("Ru")}
                aria-label="Russian language"
              >
                Ru
              </button> */}
            </span>

            <a href="tel:+998952625578" aria-label="Qo‘ng‘iroq qilish">
              <button
                type="button"
                className="py-3 font-swiss px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-[#539c9f] text-white hover:bg-[#417274]"
              >
                <MdPhoneInTalk className="text-xl" />
                <span className="hidden font-semibold sm:inline">
                  (95) 262 55 78
                </span>
              </button>
            </a>

          </div>
        </div>
        {menuOpen && (
          <div
            key={menuOpen ? "menu-open" : "menu-closed"}
            data-aos="fade-down"
            data-aos-duration="500"
            className="lg:hidden space-y-4 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg absolute top-full left-0 right-0 z-50"
          >
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink
                  to="/"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Bosh Sahifa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Xizmatlar
                </NavLink>
              </li>

              {/* MIC dropdown menyusi (mobil uchun) */}
              <li>
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/aboutPage"
                      className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Biz haqimizda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ourTeam"
                      className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Bizning jamoa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/news"
                      className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Yangiliklar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/partners"
                      className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Hamkorlar
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/portfolio"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/communication"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Aloqa
                </NavLink>
              </li>
            </ul>

            <input
              placeholder="Search..."
              className="w-full border font-swiss py-2 px-3 outline-none rounded-md shadow-sm focus:ring-2 focus:ring-[#539c9f]"
              type="search"
              aria-label="Search"
            // value={searchTerm}
            />

            <div className="flex justify-center gap-2">
              <button
                type="button"
                aria-label="English language"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-[#e5f3f4] text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                En
              </button>
              <button
                type="button"
                aria-label="Uzbek language"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-[#e5f3f4] text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Uz
              </button>
              <button
                type="button"
                aria-label="Russian language"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-[#e5f3f4] text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Ru
              </button>
            </div>

            <button
              type="button"
              aria-label="Qo‘ng‘iroq qilish"
              onClick={() => window.location.href = "tel:+998951234567"}
              className="w-full py-3 font-swiss px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-[#539c9f] text-white hover:bg-[#417274]"
            >
              <MdPhoneInTalk />
              (91) 123 45 56
            </button>
          </div>
        )}

      </div>
    </header>
  );
}

export default Header;
