const sparkIcon = "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293579/blissful-cleaning/efe80d3a-ce51-4401-b112-5b27f81cdee6";

export default function CustomQuoteCard() {
  return (
    <div className="bg-[rgba(248,248,248,0.28)] border-2 border-dashed border-[rgba(218,27,97,0.2)] rounded-[10px] w-full md:w-[354px] h-auto md:h-[471px] flex flex-col items-center justify-center px-8 py-12 md:py-24">
      {/* Icon */}
      <div className="bg-[#b6c334] rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <img src={sparkIcon} alt="" className="w-7 h-6" />
      </div>

      {/* Title */}
      <h3 className="font-['Poppins',sans-serif] font-medium text-[#0f172a] text-xl text-center mb-2">
        Need something else?
      </h3>

      {/* Description */}
      <p className="font-['Inter',sans-serif] text-[#475569] text-base text-center leading-5 mb-6 max-w-[262px]">
        We offer custom cleaning solutions tailored to your unique requirements.
      </p>

      {/* Button */}
      <button className="bg-[#da1b61] text-white font-['Poppins',sans-serif] font-medium text-sm px-6 py-2 rounded-[10px] hover:bg-[#c01850] transition-colors cursor-pointer">
        Get Custom Quote
      </button>
    </div>
  );
}
