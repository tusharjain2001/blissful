import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import search from "../assets/navbar-search.svg";
import language from "../assets/navbar-language.svg";
import arrow from "../assets/navbar-white-arrow.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          to="/"
          className="font-['Poppins',sans-serif] font-bold text-lg md:text-2xl shrink-0 no-underline"
        >
          <span className="text-[#da1b61]">Blissful</span>{" "}
          <span className="text-[#b6c334] font-normal">cleaning</span>
        </Link>

        {/* Nav Links — desktop only */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`font-['Inter',sans-serif] text-base text-black/65 hover:text-[#da1b61] transition-colors whitespace-nowrap no-underline ${
                location.pathname === item.path
                  ? "border-b-2 border-black pb-0.5 text-black"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search icon — always visible */}
          <img src={search} />

          {/* Globe / language — hidden on mobile */}
          <div className="hidden md:flex items-center gap-1 rounded-[10px] px-2 py-1">
            <img src={language} />
          </div>

          {/* Request a Quote — desktop only */}
          <Link
            to="/quote"
            className="hidden lg:inline-flex gap-1 bg-[#da1b61] text-white font-['Poppins',sans-serif] text-sm px-4 py-2 rounded-[10px] hover:bg-[#c01850] transition-colors whitespace-nowrap cursor-pointer no-underline"
          >
            <img src={arrow} /> {" "} Request a Quote
          </Link>

          {/* Hamburger — mobile/tablet only (hidden on lg+) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer bg-transparent border-0 p-0 shrink-0"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-black/70 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-black/70 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-black/70 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`font-['Inter',sans-serif] text-base py-3 px-3 rounded-[8px] no-underline transition-colors ${
                  location.pathname === item.path
                    ? "text-[#da1b61] bg-[#da1b61]/5 font-medium"
                    : "text-black/70 hover:text-[#da1b61] hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-100">
              <Link
                to="/quote"
                onClick={() => setMenuOpen(false)}
                className="block w-full bg-[#da1b61] text-white font-['Poppins',sans-serif] text-sm px-4 py-3 rounded-[10px] hover:bg-[#c01850] transition-colors text-center no-underline cursor-pointer"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
