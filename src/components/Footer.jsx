import { Link } from "react-router-dom";

const imgs = {
  phoneIcon: "https://www.figma.com/api/mcp/asset/8f2036f5-e7fd-4939-80b4-f7785e05d3cc",
  emailIcon: "https://www.figma.com/api/mcp/asset/74840394-5d1c-454c-b987-50ff3d69bc8a",
  locationIcon: "https://www.figma.com/api/mcp/asset/0da16a84-548b-4df1-b5f1-ac42e440939d",
  fbIcon: "https://www.figma.com/api/mcp/asset/1897ea8b-12e1-4fb9-8024-47deddeec5b2",
  twitterIcon: "https://www.figma.com/api/mcp/asset/cb2569c2-153d-4988-8f44-685ba668a666",
  igIcon: "https://www.figma.com/api/mcp/asset/ec7d0e53-d842-42b5-9e84-f3a0c1be86c2",
};

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Careers", path: "/careers" },
];

const serviceAreas = ["Chicago Loop", "Evanston", "Oak Park", "Lincoln Park"];

const contactInfo = [
  { icon: imgs.phoneIcon, text: "774-388-6228", iconClass: "w-4 h-4" },
  { icon: imgs.emailIcon, text: "blissfulcleaningma@gmail.com", iconClass: "w-5 h-4" },
  { icon: imgs.locationIcon, text: "Natick, Massachusetts 01760", iconClass: "w-4 h-5" },
];

const socialLinks = [
  { icon: imgs.fbIcon, label: "Facebook" },
  { icon: imgs.twitterIcon, label: "Twitter" },
  { icon: imgs.igIcon, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{
        background: "linear-gradient(76deg, rgb(255,255,255) 4%, rgb(255,243,229) 59%, rgb(255,230,202) 122%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="font-['Poppins',sans-serif] font-bold text-2xl no-underline">
              <span className="text-[#da1b61]">Blissful</span>{" "}
              <span className="text-[#b6c334] font-normal">cleaning</span>
            </Link>
            <p className="font-['Inter',sans-serif] text-black/65 text-sm leading-relaxed">
              Metro West (home base), Boston North Shore, Boston South Shore, Northern Rhode Island
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Inter',sans-serif] font-semibold text-[#0f172a] text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="font-['Inter',sans-serif] text-black/65 text-sm hover:text-[#da1b61] transition-colors no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Inter',sans-serif] font-semibold text-[#0f172a] text-sm">Service Areas</h4>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <a href="#" className="font-['Inter',sans-serif] text-black/65 text-sm hover:text-[#da1b61] transition-colors no-underline">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Inter',sans-serif] font-semibold text-[#0f172a] text-sm">Contact Info</h4>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <img src={item.icon} alt="" className={`${item.iconClass} shrink-0`} />
                  <span className="font-['Inter',sans-serif] text-black/65 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#f1f5f9] pt-8 flex items-center justify-between flex-wrap gap-4">
          <span className="font-['Inter',sans-serif] text-black/65 text-xs">© 2024 Blissful Cleaning. All rights reserved.</span>
          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a key={s.label} href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={s.icon} alt={s.label} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
