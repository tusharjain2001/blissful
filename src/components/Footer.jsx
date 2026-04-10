import { Link } from "react-router-dom";
import cash from "../assets/cash.svg";
import emailfooter from "../assets/emailfooter.svg";
import linkfooter from "../assets/linkfooter.svg";
import locationfooter from "../assets/locationfooter.svg";
import phonefooter from "../assets/phonefooter.svg";
import sharefooter from "../assets/sharefooter.svg";
import venmo from "../assets/venmo.svg";
import visa from "../assets/visa.svg";
import wififooter from "../assets/wififooter.svg";
import zelle from "../assets/zelle.svg";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Careers", path: "/careers" },
];

const serviceAreas = [
  "Boston Metro",
  "West",
  "North Shore",
  "South Shore",
];

const contactInfo = [
  { icon: phonefooter, text: "774-388-6228", iconClass: "w-4 h-4" },
  {
    icon: emailfooter,
    text: "blissfulcleaningma@gmail.com",
    iconClass: "w-4 h-4",
  },
  {
    icon: locationfooter,
    text: "Natick, Massachusetts 01760",
    iconClass: "w-4 h-4",
  },
];

const socialLinks = [
  { icon: sharefooter, label: "Facebook" },
  { icon: linkfooter, label: "Twitter" },
  { icon: wififooter, label: "Instagram" },
];

const paymentMethods = [
  { icon: cash, label: "Cash", className: "w-12" },
  { icon: venmo, label: "Venmo", className: "w-20" },
  { icon: zelle, label: "Zelle", className: "w-16" },
  { icon: visa, label: "Visa", className: "w-16" },
];

export default function Footer() {
  return (
    <footer
      className="py-14 sm:py-16"
      style={{
        background:
          "linear-gradient(76deg, rgb(255,255,255) 4%, rgb(255,243,229) 59%, rgb(255,230,202) 122%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
        <div className="grid grid-cols-[5fr_6fr] gap-x-3 gap-y-7 sm:gap-x-10 sm:gap-y-9 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-0">
          {/* Brand — col 1 on all sizes */}
          <div className="flex flex-col gap-3 sm:gap-5 lg:order-1">
            <Link
              to="/"
              className="font-['Poppins',sans-serif] text-[20px] sm:text-[28px] font-bold leading-none no-underline"
            >
              <span className="text-[#da1b61]">Blissful</span>{" "}
              <span className="font-normal text-[#b6c334]">cleaning</span>
            </Link>
            <div className="flex items-start gap-1.5 sm:gap-2.5">
              <img
                src={locationfooter}
                alt=""
                className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0"
              />
              <p className="font-['Inter',sans-serif] text-xs sm:text-sm leading-[1.35] text-black/65">
                Boston Metro, West, North Shore, South Shore
              </p>
            </div>
          </div>

          {/* Wrapper: 2-col sub-grid on mobile, transparent on desktop (lg:contents) */}
          <div className="col-span-1 grid grid-cols-2 gap-x-3 sm:gap-x-6 lg:contents">
            {/* Quick Links — desktop col 2 */}
            <div className="flex flex-col gap-3 sm:gap-5 lg:order-2">
              <h4 className="font-['Inter',sans-serif] text-xs sm:text-sm font-semibold text-[#0f172a]">
                Quick Links
              </h4>
              <ul className="m-0 flex list-none flex-col gap-2 sm:gap-3.5 p-0">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="font-['Inter',sans-serif] text-xs sm:text-[15px] text-black/65 transition-colors hover:text-[#da1b61] no-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas — desktop col 3 */}
            <div className="flex flex-col gap-3 sm:gap-5 lg:order-3">
              <h4 className="font-['Inter',sans-serif] text-xs sm:text-sm font-semibold text-[#0f172a]">
                Service Areas
              </h4>
              <ul className="m-0 flex list-none flex-col gap-2 sm:gap-3.5 p-0">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <span className="font-['Inter',sans-serif] text-xs sm:text-[15px] text-black/65">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info — mobile: bottom-left | desktop: col 5 */}
          <div className="flex flex-col gap-3 sm:gap-5 lg:order-5">
            <h4 className="font-['Inter',sans-serif] text-xs sm:text-sm font-semibold text-[#0f172a]">
              Contact Info
            </h4>
            <ul className="m-0 flex list-none flex-col gap-3 sm:gap-4 p-0">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-start gap-1.5 sm:gap-2.5">
                  <img
                    src={item.icon}
                    alt=""
                    className={`${item.iconClass} mt-0.5 shrink-0 w-3.5! h-3.5! sm:w-4! sm:h-4!`}
                  />
                  <span className="font-['Inter',sans-serif] text-xs sm:text-[15px] leading-[1.35] text-black/65">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* We Accepted — mobile: bottom-right | desktop: col 4 */}
          <div className="flex flex-col gap-3 sm:gap-5 lg:order-4">
            <h4 className="font-['Inter',sans-serif] text-xs sm:text-sm font-semibold text-[#0f172a]">
              We Accepted
            </h4>
            <div className="flex flex-col items-start gap-2.5 sm:gap-3.5">
              {paymentMethods.map((method) => (
                <img
                  key={method.label}
                  src={method.icon}
                  alt={method.label}
                  className={`${method.className} h-auto max-w-20 sm:max-w-none`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-[#e9e6e2] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-['Inter',sans-serif] text-xs text-black/65">
            © 2024 Blissful Cleaning. All rights reserved.
          </span>
          <div className="flex items-center gap-7">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href="#"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <img src={s.icon} alt={s.label} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
