import sparkIcon from "../assets/customquotenew.svg";
export default function CustomQuoteCard() {
  return (
    <div className="w-full rounded-[14px] border border-dashed border-[rgba(255,119,167,0.45)] bg-[rgba(255,255,255,0.26)] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto flex max-w-[520px] flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#b6c334]">
          <img src={sparkIcon} alt="" className="h-6 w-6" />
        </div>

        <h3 className="mb-2 font-['Poppins',sans-serif] text-xl font-medium text-[#0f172a]">
          Need something else?
        </h3>

        <p className="mb-6 font-['Inter',sans-serif] text-sm leading-6 text-[#64748b] sm:text-[15px]">
          We offer custom cleaning solutions tailored to your unique
          requirements.
        </p>

        <button className="rounded-[10px] bg-[#da1b61] px-6 py-2.5 font-['Poppins',sans-serif] text-sm font-medium text-white transition-colors hover:bg-[#c01850]">
          Get Custom Quote
        </button>
      </div>
    </div>
  );
}
