import React, { useEffect, useState } from "react";
import Logo from "../../assets/headerImg/logo.png";
import { NavLink } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Dropdown } from "antd";
import Aos from "aos";

const items = [
  {
    key: "1",
    label: (
      <NavLink className={{}} to="/aboutPage">
        Biz haqimizda
      </NavLink>
    ),
  },
  {
    key: "2",
    label: (
      <NavLink className={{}} to="/ourTeam">
        Bizning jamoa
      </NavLink>
    ),
  },
  {
    key: "3",
    label: (
      <NavLink className={{}} to="/news">
        Yangiliklar
      </NavLink>
    ),
  },
  {
    key: "4",
    label: (
      <NavLink className={{}} to="/partners">
        Hamkorlar
      </NavLink>
    ),
  },
];

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
    <div className="sticky top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow">
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
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-[#539c9f]"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>

          <ul className="hidden lg:flex justify-between gap-6 xl:gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-swiss text-[#3b7f82] font-semibold underline"
                    : "hover:underline font-swiss font-semibold hover:text-[#3b7f82] transition duration-200"
                }
              >
                Bosh Sahifa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive
                    ? "font-swiss text-[#3b7f82] font-semibold underline"
                    : "hover:underline font-swiss font-semibold hover:text-[#3b7f82] transition duration-200"
                }
              >
                Xizmatlar
              </NavLink>
            </li>
            <li>
              <Dropdown
                overlayClassName="custom-dropdown"
                className="cursor-pointer"
                overlay={
                  <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-2 gap-2 w-[300px]">
                    {items.map((item) => (
                      <a
                        key={item.key}
                        href={item.label.props.to}
                        className="block px-3 py-2 text-[#0d210e] hover:text-[#539c9f] text-ba font-semibold rounded hover:bg-[#f2f2f2] hover:underline transition-all"
                      >
                        {item.label.props.children}
                      </a>
                    ))}
                  </div>
                }
                trigger={["hover"]}
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  className="text-[#0d1321] font-bold"
                >
                  MIC®
                </a>
              </Dropdown>
            </li>
            <li>
              <NavLink
                to="/Portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "font-swiss text-[#3b7f82] font-semibold underline"
                    : "hover:underline font-swiss font-semibold hover:text-[#3b7f82] transition duration-200"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "font-swiss text-[#3b7f82] font-semibold underline"
                    : "hover:underline font-swiss font-semibold hover:text-[#3b7f82] transition duration-200"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/communication"
                className={({ isActive }) =>
                  isActive
                    ? "font-swiss text-[#3b7f82] font-semibold underline"
                    : "hover:underline font-swiss font-semibold hover:text-[#3b7f82] transition duration-200"
                }
              >
                Aloqa
              </NavLink>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <input
              placeholder="Search..."
              className="border font-swiss py-2 px-3 outline-none rounded-md w-60 shadow-sm focus:ring-2 focus:ring-[#539c9f]"
              type="search"
            />

            <span className="flex gap-1 bg-[#e5f3f4] p-1 rounded-full">
              <button
                type="button"
                className={`${langClass("En")} font-semibold`}
                onClick={() => setActiveLang("En")}
              >
                En
              </button>

              <button
                type="button"
                className={`${langClass("Uz")} font-semibold`}
                onClick={() => setActiveLang("Uz")}
              >
                Uz
              </button>
              <button
                type="button"
                className={`${langClass("Ru")} font-semibold`}
                onClick={() => setActiveLang("Ru")}
              >
                Ru
              </button>
            </span>

            <button
              type="button"
              className="py-3 font-swiss px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-[#539c9f] text-white hover:bg-[#417274]"
            >
              <MdPhoneInTalk className="text-xl" />
              <span className="hidden font-semibold sm:inline">
                (95) 262 55 78
              </span>
            </button>
          </div>
        </div>

        {/* {menuOpen && (
          <div
            key={menuOpen ? "menu-open" : "menu-closed"}
            data-aos="fade-down"
            data-aos-duration="500"
            className="lg:hidden mt-4 space-y-4 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg absolute top-full left-0 right-0 z-50"
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
              <li>
                <NavLink
                  to="/dora"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  MIC®
                </NavLink>
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
            />

            <div className="flex justify-center gap-2">
              <button
                type="button"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-[#e5f3f4] text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                En
              </button>
              <button
                type="button"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-[#e5f3f4] text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Uz
              </button>
              <button
                type="button"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-[#e5f3f4] text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Ru
              </button>
            </div>

            <button
              type="button"
              className="w-full py-3 font-swiss px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-[#539c9f] text-white hover:bg-[#417274]"
            >
              <MdPhoneInTalk />
              (91) 123 45 56
            </button>
          </div>
        )} */}
        {menuOpen && (
          <div
            key={menuOpen ? "menu-open" : "menu-closed"}
            data-aos="fade-down"
            data-aos-duration="500"
            className="lg:hidden mt-4 space-y-4 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg absolute top-full left-0 right-0 z-50"
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
            />

            <div className="flex justify-center gap-2">
              <button
                type="button"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-[#e5f3f4] text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                En
              </button>
              <button
                type="button"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-[#e5f3f4] text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Uz
              </button>
              <button
                type="button"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-[#e5f3f4] text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Ru
              </button>
            </div>

            <button
              type="button"
              className="w-full py-3 font-swiss px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-[#539c9f] text-white hover:bg-[#417274]"
            >
              <MdPhoneInTalk />
              (91) 123 45 56
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Header;
