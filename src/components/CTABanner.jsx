import cta from "../assets/cta.svg";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#da1b61]">
      <div className="relative mx-auto flex min-h-[265px] items-center px-6 py-10 md:px-10 lg:px-[86px]">
        {/* Left content */}
        <div className="relative z-10 max-w-[420px] flex flex-col items-start">
          <h2 className="m-0 font-['Poppins',sans-serif] text-white font-semibold text-[28px] leading-[38px] md:text-[40px] md:leading-[52px] lg:text-[49px] lg:leading-[62px]">
            Make your home
            <br />
            <span className="font-normal text-white">blissful today</span>
          </h2>

          <p className="mt-4 mb-0 max-w-[360px] font-['Inter',sans-serif] text-white text-sm leading-6 md:text-base md:leading-7">
            Join over 5,000+ happy households who trust our blissful touch.
          </p>

          <button className="mt-6 rounded-[8px] bg-white px-5 py-3 font-['Poppins',sans-serif] text-[18px] font-medium text-[#da1b61] shadow-sm transition-colors hover:bg-gray-100">
            Book Your Appointment
          </button>
        </div>

        {/* Right image */}
        <img
          src={cta}
          alt="Cleaning supplies"
          className="pointer-events-none absolute right-0 top-0 h-full w-auto max-w-none object-contain"
        />
      </div>
    </section>
  );
}