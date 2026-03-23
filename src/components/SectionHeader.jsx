export default function SectionHeader({ title, highlight, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-2.5">
      <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl md:text-4xl lg:text-[48px] text-[#0f172a] leading-tight">
        {title}{" "}
        <span className="font-normal text-[#da1b61]">{highlight}</span>
      </h2>
      {description && (
        <p className="font-['Satoshi',sans-serif] text-black text-base leading-[26px] max-w-[946px] text-center">
          {description}
        </p>
      )}
    </div>
  );
}
