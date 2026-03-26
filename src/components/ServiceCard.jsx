export default function ServiceCard({
  title,
  description,
  image,
  badge,
  badgeColor = "dark",
}) {
  return (
    <div className="bg-white border border-[rgba(218,27,97,0.05)] rounded-[10px] overflow-hidden w-full md:w-[356px] h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
      {/* Text content - flex-1 so it grows to fill space, pushing all images to align */}
      <div className="flex-1 px-5 lg:px-7 pt-5 lg:pt-7 pb-2">
        <h3 className="font-['Poppins',sans-serif] font-medium text-[#0f172a] text-xl leading-[33px] mb-2">
          {title}
        </h3>
        <p className="font-['Inter',sans-serif] text-[#475569] text-base leading-[27px] mb-5 lg:mb-7">
          {description}
        </p>
      </div>

      {/* Image area - fixed height, no flex-1 */}
      <div className="relative overflow-hidden mb-8">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] lg:h-[222px] object-cover"
        />
        {badge && <Badge label={badge} color={badgeColor} />}
      </div>
    </div>
  );
}

export function Badge({ label, color = "dark" }) {
  const colorClasses =
    color === "pink"
      ? "text-[#da1b61] font-['Plus_Jakarta_Sans',sans-serif] font-bold"
      : "text-[#0f172a] font-['Arial',sans-serif] font-bold";

  return (
    <div className="absolute top-4 right-4 backdrop-blur-[4px] bg-white/90 px-3 py-1 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <span className={`text-xs leading-4 ${colorClasses}`}>{label}</span>
    </div>
  );
}
