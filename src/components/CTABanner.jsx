// Fresh Figma asset URLs (re-fetched 2026-03-23)
const imgs = {
  ctaPerson: "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293571/blissful-cleaning/49edc353-7917-4069-a3cf-39e3858c590b.png",
  ellipse:   "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293573/blissful-cleaning/3b0a1247-9ba7-4daa-ad69-453c9e629b1a",
  sparkle1:  "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293574/blissful-cleaning/4eafdbff-3f7c-43ad-af67-7a00d8433980",
  sparkle2:  "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293576/blissful-cleaning/1f738b4a-209c-43ac-91bc-b725cefd9557",
  sparkle3:  "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293577/blissful-cleaning/6d4a45d4-dee3-4ee0-ad2e-65eaef0e3ed7",
};

export default function CTABanner() {
  return (
    <section className="relative bg-[#da1b61] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[147px] py-10 lg:py-[70px] flex items-center justify-between relative z-10">
        {/* ── Left content ── */}
        <div className="flex flex-col gap-3 lg:gap-[10px] max-w-full lg:max-w-[543px]">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-white m-0 text-2xl md:text-4xl lg:text-[48px] lg:leading-[72px]">
            Make your home{" "}
            <span className="font-normal text-[#e2e8f0]">blissful today</span>
          </h2>

          <p className="font-['Inter',sans-serif] font-normal text-white/80 m-0 text-sm md:text-base lg:text-[21.21px] lg:leading-[33px]">
            Join over 5,000+ happy households who trust our blissful touch.
          </p>

          <button
            className="bg-white text-[#da1b61] font-['Poppins',sans-serif] font-medium rounded-[10px] hover:bg-gray-50 transition-colors cursor-pointer shadow-lg mt-2 w-full md:w-auto"
            style={{ fontSize: 16, padding: "14px 32px" }}
          >
            Book Your Appointment
          </button>
        </div>

        {/* ── Right decorative — hidden on mobile ── */}
        <div
          className="hidden lg:block relative shrink-0 overflow-visible"
          style={{ width: 500, height: 434 }}
        >
          {/* Background ellipse */}
          <img
            src={imgs.ellipse}
            alt=""
            className="absolute pointer-events-none"
            style={{ width: 811, height: 811, left: 0, top: 70, opacity: 0.35 }}
          />

          {/* Cleaning person */}
          <img
            src={imgs.ctaPerson}
            alt="Cleaning professional"
            className="absolute pointer-events-none"
            style={{ height: 942, left: 37, top: -428, objectFit: "contain" }}
          />

          {/* Sparkle accents */}
          <img src={imgs.sparkle1} alt="" className="absolute pointer-events-none opacity-70"
            style={{ width: 56, left: -40, top: -160 }} />
          <img src={imgs.sparkle2} alt="" className="absolute pointer-events-none opacity-70"
            style={{ width: 28, left: 0, top: -110 }} />
          <img src={imgs.sparkle3} alt="" className="absolute pointer-events-none opacity-50"
            style={{ width: 91, right: 220, top: 60, transform: "rotate(90deg)" }} />
        </div>
      </div>
    </section>
  );
}
