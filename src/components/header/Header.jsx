import React, { useState } from "react";
import Logo from "../../assets/headerImg/logo.png";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow">
      <div className="max-w-[1460px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="max-w-40 md:max-w-52" src={Logo} alt="Logo img" />
          </Link>

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
              <Link
                to="/"
                className="hover:underline font-swiss hover:text-[#3b7f82] transition duration-200"
              >
                Bosh Sahifa
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:underline font-swiss hover:text-[#3b7f82] transition duration-200"
              >
                Xizmatlar
              </Link>
            </li>
            <li>
              <Link
                to="/dora"
                className="hover:underline font-swiss hover:text-[#3b7f82] transition duration-200"
              >
                Dora
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:underline font-swiss hover:text-[#3b7f82] transition duration-200"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:underline font-swiss hover:text-[#3b7f82] transition duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/aloqa"
                className="hover:underline font-swiss hover:text-[#3b7f82] transition duration-200"
              >
                Aloqa
              </Link>
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
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-white text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                En
              </button>
              <button
                type="button"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-white text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Uz
              </button>
              <button
                type="button"
                className="py-2 px-3 font-swiss text-sm font-medium rounded-full bg-white text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Ru
              </button>
            </span>

            <button
              type="button"
              className="py-3 font-swiss px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-[#539c9f] text-white hover:bg-[#417274]"
            >
              <MdPhoneInTalk />
              <span className="hidden sm:inline">(91) 123 45 56</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Bosh Sahifa
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link
                  to="/dora"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Dora
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/aloqa"
                  className="block font-swiss py-2 px-4 bg-[#f1f1f1] rounded hover:bg-[#539c9f] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Aloqa
                </Link>
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
