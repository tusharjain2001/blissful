const imgs = {
  ctaPerson: "https://www.figma.com/api/mcp/asset/b0bf9919-c892-42db-9756-60c606a0d274",
  ellipse: "https://www.figma.com/api/mcp/asset/71feab2a-e003-4d5f-927f-cd8bff77e0c6",
  sparkle1: "https://www.figma.com/api/mcp/asset/d7c246b4-fc0f-419c-a25e-b0042eeee576",
  sparkle2: "https://www.figma.com/api/mcp/asset/20e3a43f-ab17-4daa-9b65-7d13157d0cdb",
  sparkle3: "https://www.figma.com/api/mcp/asset/7d094c1f-f20c-416c-b40d-b5deda9bd6c4",
};

export default function CTABanner() {
  return (
    <section className="relative bg-[#da1b61] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 py-16 flex items-center justify-between relative z-10">
        {/* Left content */}
        <div className="flex flex-col gap-4 max-w-[543px]">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[48px] text-white leading-[72px]">
            Make your home{" "}
            <span className="font-normal text-[#e2e8f0]">blissful today</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/80 text-[21px] leading-[33px]">
            Join over 5,000+ happy households who trust our blissful touch.
          </p>
          <button className="bg-white text-[#da1b61] font-['Poppins',sans-serif] font-medium text-[24px] px-14 py-4 rounded-[10px] w-fit hover:bg-gray-50 transition-colors shadow-lg cursor-pointer mt-2">
            Book Your Appointment
          </button>
        </div>

        {/* Right decorative image */}
        <div className="hidden lg:block relative h-[434px] w-[500px] shrink-0">
          <img
            src={imgs.ellipse}
            alt=""
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] object-contain opacity-30"
          />
          <img
            src={imgs.ctaPerson}
            alt="Cleaning professional"
            className="absolute right-0 bottom-[-64px] h-[500px] object-contain object-bottom"
          />
          {/* Sparkle decorations */}
          <img src={imgs.sparkle1} alt="" className="absolute left-[-40px] top-[30px] w-14 opacity-60" />
          <img src={imgs.sparkle2} alt="" className="absolute left-[0px] top-[80px] w-7 opacity-60" />
          <img src={imgs.sparkle3} alt="" className="absolute right-[100px] top-[60px] w-20 opacity-40" />
        </div>
      </div>
    </section>
  );
}
