import { Link, useLocation } from "react-router-dom";

const imgs = {
  searchIcon: "https://www.figma.com/api/mcp/asset/e58471fc-475f-49b4-992f-0b05e853150b",
  globeIcon: "https://www.figma.com/api/mcp/asset/ca586267-72a5-4d7a-b6c2-8688e6d36c4e",
  chevronIcon: "https://www.figma.com/api/mcp/asset/762df86c-e3a6-4021-8255-af5536427d01",
};

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-10 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="font-['Poppins',sans-serif] font-bold text-2xl shrink-0 no-underline">
          <span className="text-[#da1b61]">Blissful</span>{" "}
          <span className="text-[#b6c334] font-normal">cleaning</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`font-['Inter',sans-serif] text-base text-black/65 hover:text-[#da1b61] transition-colors whitespace-nowrap no-underline ${
                location.pathname === item.path ? "border-b-2 border-black pb-0.5 text-black" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 shrink-0">
          <img src={imgs.searchIcon} alt="search" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100" />
          <div className="hidden md:flex items-center gap-1 border border-black/15 rounded-[10px] px-2 py-1">
            <img src={imgs.globeIcon} alt="globe" className="w-4 h-4" />
            <span className="font-['Inter',sans-serif] text-sm text-black/65">English</span>
            <img src={imgs.chevronIcon} alt="" className="w-4 h-4" />
          </div>
          <button className="bg-[#da1b61] text-white font-['Poppins',sans-serif] text-sm px-4 py-2 rounded-[10px] hover:bg-[#c01850] transition-colors whitespace-nowrap cursor-pointer">
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
