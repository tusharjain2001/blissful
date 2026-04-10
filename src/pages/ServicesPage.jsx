import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import CustomQuoteCard from "../components/CustomQuoteCard";
import CTABanner from "../components/CTABanner";
import electro from "../assets/electrostatic.svg";
import standardcleaning from "../assets/standardcleaning.svg";
import deepcleaning from "../assets/deepcleaning.svg";
import movecleaning from "../assets/movecleaning.svg";
import recurringcleaning from "../assets/recurringcleaning.svg";
import constructioncleaning from "../assets/constructioncleaning.svg";
import weeklycleaning from "../assets/weeklycleaning.png";
import biweeklycleaning from "../assets/biweeklycleaning.png";
import monthlycleaning from "../assets/monthlycleaning.png";



const cleaningServices = [
  {
    title: "Standard Cleaning",
    description:
      "Perfect for maintaining a tidy home on a regular basis. Includes dusting, vacuuming, mopping, and surface sanitization.",
    image: standardcleaning,
    badge: "Popular",
    badgeColor: "dark",
  },
  {
    title: "Deep Cleaning",
    description:
      "A thorough top-to-bottom scrub for a spotless living space. We reach the areas often missed during routine cleaning.",
    image: deepcleaning,
  },
  {
    title: "Move In/Out Cleaning",
    description:
      "Specialized cleaning for transitions. We ensure your new home is ready for you or your old home is ready for its next residents.",
    image: movecleaning,
  },
];

const additionalServices = [
  {
    title: "Recurring Cleaning",
    description:
      "Scheduled weekly, bi-weekly, or monthly cleanings to keep your home consistently fresh without the hassle.",
    image: recurringcleaning,
  },
  {
    title: "Post-Construction",
    description:
      "Removing fine dust, debris, and residues after renovations or new builds. Making your new space livable.",
    image: constructioncleaning,
  },
  {
    title: "Electrostatic Cleaning",
    description:
      "Evenly coats surfaces using charged disinfectant, reaching hidden areas for quick, thorough sanitization across spaces.",
    image: electro,
  },
];

const dailyPlans = [
  {
    title: "Monthly Cleaning",
    description:
      "Perfect for maintaining a tidy home on a regular basis. Includes dusting, vacuuming, mopping, and surface sanitization.",
    image: monthlycleaning,
  },
  {
    title: "Weekly Cleaning",
    description:
      "A thorough top-to-bottom scrub for a spotless living space. We reach the areas often missed during routine cleaning.",
    image: weeklycleaning,
    badge: "Weekly",
    badgeColor: "pink",
  },
  {
    title: "Bi-Weekly Cleaning",
    description:
      "Specialized cleaning for transitions. We ensure your new home is ready for you or your old home is ready for its next residents.",
    image: biweeklycleaning,
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
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 lg:gap-[52px] w-full">
              {cleaningServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>

            {/* Second row - 3 service cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 lg:gap-[52px] w-full">
              {additionalServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="pt-4 pb-8 lg:pt-6 lg:pb-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[72px]">
          <CustomQuoteCard />
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
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 lg:gap-[52px] w-full">
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
