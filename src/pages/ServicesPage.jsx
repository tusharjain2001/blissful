import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import CustomQuoteCard from "../components/CustomQuoteCard";
import CTABanner from "../components/CTABanner";

const serviceImages = {
  standard: "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293695/blissful-cleaning/85aa9ed6-3528-44d3-bf93-1d6fa689cb06.png",
  deep: "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293698/blissful-cleaning/6cbc4d07-f436-4399-9ebb-4025e936e2d6.png",
  moveInOut: "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293701/blissful-cleaning/f6de5ca0-5886-47ff-85c2-e4621edacc4c.png",
};

const cleaningServices = [
  {
    title: "Standard Cleaning",
    description:
      "Perfect for maintaining a tidy home on a regular basis. Includes dusting, vacuuming, mopping, and surface sanitization.",
    image: serviceImages.standard,
    badge: "Popular",
    badgeColor: "dark",
  },
  {
    title: "Deep Cleaning",
    description:
      "A thorough top-to-bottom scrub for a spotless living space. We reach the areas often missed during routine cleaning.",
    image: serviceImages.deep,
  },
  {
    title: "Move In/Out Cleaning",
    description:
      "Specialized cleaning for transitions. We ensure your new home is ready for you or your old home is ready for its next residents.",
    image: serviceImages.moveInOut,
  },
];

const additionalServices = [
  {
    title: "Recurring Cleaning",
    description:
      "Scheduled weekly, bi-weekly, or monthly cleanings to keep your home consistently fresh without the hassle.",
    image: serviceImages.standard,
  },
  {
    title: "Post-Construction",
    description:
      "Removing fine dust, debris, and residues after renovations or new builds. Making your new space livable.",
    image: serviceImages.deep,
  },
];

const dailyPlans = [
  {
    title: "Monthly Cleaning",
    description:
      "Perfect for maintaining a tidy home on a regular basis. Includes dusting, vacuuming, mopping, and surface sanitization.",
    image: serviceImages.standard,
    badge: "Monthly",
    badgeColor: "pink",
  },
  {
    title: "Weekly Cleaning",
    description:
      "A thorough top-to-bottom scrub for a spotless living space. We reach the areas often missed during routine cleaning.",
    image: serviceImages.deep,
    badge: "Weekly",
    badgeColor: "pink",
  },
  {
    title: "Bi-Weekly Cleaning",
    description:
      "Specialized cleaning for transitions. We ensure your new home is ready for you or your old home is ready for its next residents.",
    image: serviceImages.moveInOut,
    badge: "BI Weekly",
    badgeColor: "pink",
  },
];

const sectionDescription =
  "Professional, reliable, and thorough cleaning tailored specifically to your home's needs. Experience the bliss of a truly clean space.";

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(37deg, rgb(255, 255, 255) 3.7%, rgb(255, 239, 221) 82%, rgb(255, 223, 186) 103%)",
      }}
    >
      {/* Our Cleaning Services Section */}
      <section className="pt-10 lg:pt-20 pb-8 lg:pb-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[72px]">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <SectionHeader
              title="Our Cleaning"
              highlight="Services"
              description={sectionDescription}
            />

            {/* First row - service cards */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-[52px] w-full">
              {cleaningServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>

            {/* Second row - 2 service cards + custom quote */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch md:items-end gap-6 lg:gap-[52px] w-full">
              {additionalServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
              <CustomQuoteCard />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Plans Section */}
      <section className="py-8 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[72px]">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <SectionHeader
              title="Daily"
              highlight="plans"
              description={sectionDescription}
            />

            {/* Plan cards */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-[52px] w-full">
              {dailyPlans.map((plan) => (
                <ServiceCard key={plan.title} {...plan} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />
    </div>
  );
}
