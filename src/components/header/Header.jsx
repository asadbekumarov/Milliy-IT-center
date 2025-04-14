import React from "react";
import Logo from "../../assets/headerImg/logo.png";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";

function Header() {
  return (
    <div className="max-w-[1460px] mx-auto px-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img className="max-w-52 py-4" src={Logo} alt="Logo img" />
        </Link>
        <ul className="flex justify-between gap-8">
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
              to="/xizmatlar"
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
        <div className="flex justify-between items-center gap-7">
          <input
            placeholder="Search..."
            className="border font-swiss py-2 px-3 outline-none rounded-md w-60 shadow-sm focus:ring-2 focus:ring-[#539c9f]"
            type="search"
          />

          <div className="flex items-center gap-7">
            <span className="flex gap-2 bg-[#e5f3f4] p-1 rounded-full">
              <button
                type="button"
                className="py-2 px-4 font-swiss text-sm font-medium rounded-full bg-white text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                En
              </button>
              <button
                type="button"
                className="py-2 px-4 font-swiss text-sm font-medium rounded-full bg-white text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Uz
              </button>
              <button
                type="button"
                className="py-2 px-4 font-swiss text-sm font-medium rounded-full bg-white text-[#539c9f] hover:bg-[#539c9f] hover:text-white transition"
              >
                Ru
              </button>
            </span>

            <button
              type="button"
              className="py-3 font-swiss px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#539c9f] text-white hover:bg-[#417274] focus:outline-hidden focus:bg-[#417274] disabled:opacity-50 disabled:pointer-events-none"
            >
              <MdPhoneInTalk />
              (91) 123 45 56
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
