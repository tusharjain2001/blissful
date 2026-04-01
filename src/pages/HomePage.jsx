// Image assets from Figma
import heroRight from "../assets/hero-right.svg";
import heroEx from "../assets/hero-excellent.svg";
import pet from "../assets/pet.svg";
import reliable from "../assets/reliable.svg";
import familyowned from "../assets/familyowned.svg";
import highquality from "../assets/highquality.svg";
import blackarrow from "../assets/blackarrow.svg";
import standardCleaningPhoto from "../assets/standard-cleaning-photo.jpg";
import deepCleaningPhoto from "../assets/deep-cleaning-photo.jpg";
import moveInOutPhoto from "../assets/moveinout-cleaning-photo.jpg";
import difference from "../assets/difference.svg";
import reviewss from "../assets/reviews.svg";
import elena from "../assets/elena.svg";
import quote from "../assets/quote.svg";
import sarah from "../assets/sarah.svg";
import michael from "../assets/michael.svg";
import approved from "../assets/approved.svg";
import professional from "../assets/professional.svg";
import whitearrow from "../assets/white-arrow.svg";
import cleanwithgroup from "../assets/cleanwithgroup.svg";
import manclean from "../assets/manclean.svg";

const imgs = {
  heroPerson:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293639/blissful-cleaning/08739f6f-0b14-4c8e-961f-12a76bfca771.png",
  heroEllipse:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293641/blissful-cleaning/cf327157-1702-4c7b-b4c7-22513b611c05",
  heroGroup1:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293642/blissful-cleaning/9b474001-93c6-4fbb-8fb5-0406083fcc4c",
  heroGroup2:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293644/blissful-cleaning/ff0fa1ee-e0f4-4646-b5a5-714d5fd3902e",
  heroGroup3:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293646/blissful-cleaning/a06fe082-53b4-45be-b3aa-4aaeffa9ae20",
  customerAvatars:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293647/blissful-cleaning/476f16d2-be74-4f64-baea-cc2f3c64cb9d.png",
  stars:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293649/blissful-cleaning/1518d3db-3a7c-4c9e-a597-ad42974795de",
  qualityIcon:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293651/blissful-cleaning/29fa0d90-e871-45fd-8c4e-119cb558afcd",
  familyIcon:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293653/blissful-cleaning/f1e1089f-e192-46e2-8e1c-a3e1ce433df6",
  petIcon:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293654/blissful-cleaning/32aadb4d-b516-4d26-80ad-c4e2cb98d408",
  reliableIcon:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293655/blissful-cleaning/38b0e9e0-bb80-468b-bc68-fe47f4645a48",
  aboutPhoto:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293659/blissful-cleaning/f5e6a1dd-454b-4b59-a508-b79eb10e0b01.png",
  professionalIcon:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293660/blissful-cleaning/2c61dfb1-81f9-4e3d-b13d-46793911b429",
  ecoIcon:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293662/blissful-cleaning/3c15c970-cf2a-472e-8528-6e573ea6cadf.png",
  insuredIcon:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293663/blissful-cleaning/4895a35c-2e56-4316-9128-58e985ec2b6c.png",
  service1:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293665/blissful-cleaning/658e3417-b45c-4ed2-918b-779e65de7249.png",
  service2:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293667/blissful-cleaning/22a43702-fc6b-48d0-9e99-b5241ba54ad4.png",
  service3:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293669/blissful-cleaning/e710a382-e163-4ea2-8017-7ad76805a0bc.png",
  arrowIcon:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293671/blissful-cleaning/26a8b9b6-b379-4ee7-b2c4-af43f8c0546b",
  beforeAfter1:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293673/blissful-cleaning/28ef7fcb-7e4a-4a9d-827f-c51432f5c5e5.jpg",
  beforeAfter2:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293675/blissful-cleaning/70446120-bd1b-4f04-bd70-da8b4c36f214.jpg",
  beforeAfter3:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293676/blissful-cleaning/a06fa9ae-245d-41ed-b6d6-9c6201ba6179.jpg",
  beforeAfter4:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293678/blissful-cleaning/1c196c58-e611-4841-8737-2639c99965cd.jpg",
  quoteIcon:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293680/blissful-cleaning/7b423e50-86a3-4492-9e1b-a8584acb91de",
  reviewAvatar:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293682/blissful-cleaning/a67fc4a1-7d62-4346-9f96-ae235df4f443",
  videoBg:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293684/blissful-cleaning/2ebe2794-20d2-4b39-a037-0f7657bf2ec7.png",
  playBtn:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293685/blissful-cleaning/397ca8b3-f354-4d99-ad0d-0edcc46d1d05",
  epaIcon:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293687/blissful-cleaning/71905eb5-eaaa-4d97-998f-f235d7f2bf7e",
};

import CTABanner from "../components/CTABanner";

function Hero() {
  return (
    <section
      className="overflow-hidden"
      style={{
        background:
          "linear-gradient(236deg, rgb(255,221,183) 3%, rgb(255,229,200) 45%, rgb(255,255,255) 97%)",
      }}
    >
      {/* Mobile layout */}
      <div className="relative lg:hidden px-5 pt-8 pb-12 min-h-[620px]">
        <div className="relative z-10 max-w-[240px]">
          <h1 className="font-['Poppins',sans-serif] text-[34px] leading-[1.1] font-bold whitespace-nowrap">
            <span className="text-[#0f172a]">Blissful </span>
            <span className="text-[#da1b61] font-normal">cleaning</span>
          </h1>

          <h2 className="font-['Poppins',sans-serif] text-[22px] leading-[1.2] font-medium text-black mt-2 whitespace-nowrap">
            &ldquo;Home Clean Home&rdquo;
          </h2>

          <p className="font-['Inter',sans-serif] text-[18px] text-black/80 leading-[1.5] mt-6">
            Home Clean Home. We bring professional care and a sparkling touch to
            every corner of your residence.
          </p>

          <div className="mt-8 flex flex-col gap-3 max-w-[230px]">
            <button className="border-2 border-[#da1b61] text-[#da1b61] font-['Poppins',sans-serif] text-[16px] font-medium px-4 py-3 rounded-[10px] bg-transparent text-left hover:bg-[#da1b61]/5 transition-colors cursor-pointer">
              Contact us (774-388-6228)
            </button>

            <button className="bg-[#da1b61] text-white font-['Poppins',sans-serif] text-[16px] font-medium px-4 py-3 rounded-[10px] hover:bg-[#c01850] transition-colors cursor-pointer text-left">
              Book an Appointment
            </button>
          </div>

          <div className="flex w-fit rounded-[10px] gap-1 mt-4 p-3 bg-white shadow-sm">
            <img src={heroEx} alt="reviews" className="h-auto w-[180px]" />
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="absolute bottom-0 right-[-70px] w-[310px] pointer-events-none select-none">
          <img src={heroRight} alt="Cleaning lady" className="w-full h-auto" />
        </div>
      </div>

      {/* Desktop layout — unchanged */}
      <div className="hidden lg:flex px-4 md:px-10 items-center justify-between">
        <div className="flex flex-col gap-5 lg:gap-7 w-full py-10 lg:py-20 z-10">
          <div>
            <h1 className="font-['Poppins',sans-serif] text-[40px] md:text-[56px] lg:text-[64px] leading-tight font-bold">
              <span className="text-[#0f172a]">Blissful </span>
              <span className="text-[#da1b61] font-normal">cleaning</span>
            </h1>
            <h2 className="font-['Poppins',sans-serif] text-[26px] md:text-[36px] lg:text-[44px] font-medium text-black mt-1">
              &ldquo;Home Clean Home&rdquo;
            </h2>
          </div>

          <p className="font-['Inter',sans-serif] text-base lg:text-[18px] text-black/80 leading-[1.6]">
            Home Clean Home. We bring professional care and a sparkling touch to
            every corner of your residence.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4">
            <button className="bg-[#da1b61] text-white font-['Poppins',sans-serif] text-base font-medium px-8 py-4 rounded-[10px] hover:bg-[#c01850] transition-colors cursor-pointer">
              Book an Appointment
            </button>
            <button className="border-2 border-[#da1b61] text-[#da1b61] font-['Poppins',sans-serif] text-base font-medium px-6 py-4 rounded-[10px] hover:bg-[#da1b61]/5 transition-colors cursor-pointer">
              Contact us (774-388-6228)
            </button>
          </div>

          <div className="flex w-fit rounded-[10px] gap-1 mt-2 p-4 bg-white">
            <img src={heroEx} alt="reviews" />
          </div>
        </div>

        <div className="hidden lg:block pointer-events-none select-none">
          <img src={heroRight} alt="Cleaning lady" />
        </div>
      </div>
    </section>
  );
}
function FeaturesBar() {
  const features = [
    {
      icon: highquality,
      title: "High-Quality",
      desc: "Meticulous attention to detail in every single room.",
      iconBg: "bg-transparent",
    },
    {
      icon: familyowned,
      title: "Family-Owned",
      desc: "Trusted local service with personal values at our core.",
      iconBg: "bg-[#b6c334]",
    },
    {
      icon: pet,
      title: "Pet-Friendly",
      desc: "Safe cleaning products for your furry family members.",
      iconBg: "bg-[#b6c334]",
    },
    {
      icon: reliable,
      title: "Reliable",
      desc: "Meticulous attention to detail in every single room.",
      iconBg: "bg-[#b6c334]",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="px-4 md:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3 lg:gap-5">
              <div
                className={`rounded-[10px] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] shrink-0 flex items-center justify-center ${f.iconBg}`}
              >
                <img src={f.icon} alt={f.title} className="" />
              </div>
              <div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-black text-base lg:text-xl">
                  {f.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-[#64748b] text-xs lg:text-sm mt-0.5 max-w-[200px]">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const benefits = [
    {
      icon: professional,
      title: "Professional Staff",
      desc: "Background-checked and highly trained cleaning experts.",
    },
    {
      icon: imgs.ecoIcon,
      title: "Eco-Friendly",
      desc: "Non-toxic products that are safe for your family and pets.",
    },
    {
      icon: imgs.insuredIcon,
      title: "Insured & Bonded",
      desc: "Complete peace of mind with our fully insured services.",
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-white min-h-[70vh]">
      <div className="px-4 md:px-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        <div className="flex-1 rounded-[10px] overflow-hidden w-full">
          <img
            src={cleanwithgroup}
            alt="Cleaning professional at work"
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-6 lg:gap-8">
          <div>
            <div className="bg-[#f4f5cd] rounded-[10px] px-4 h-10 inline-flex items-center mb-4">
              <span className="font-['Poppins',sans-serif] text-[#0f172a] text-sm">
                Why Choose Blissful Cleaning
              </span>
            </div>
            <h2 className="font-['Poppins',sans-serif] text-2xl md:text-3xl lg:text-[42px] font-semibold text-[#0f172a] leading-tight">
              Cleaning with Care,<br></br>
              <span className="font-normal text-[#da1b61]">Like Family</span>
            </h2>
            <p className="font-['Inter',sans-serif] text-black text-base mt-4 leading-relaxed">
              We believe true cleanliness is in the details. From high-touch
              surfaces to hard-to-reach areas, our team ensures your home is
              thoroughly cleaned and refreshed.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-5 lg:gap-10">
                <div className="bg-[rgba(218,27,97,0.1)] rounded-[16px] w-[50px] h-[50px] shrink-0 flex items-center justify-center">
                  <img
                    src={b.icon}
                    alt={b.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0f172a] text-lg">
                    {b.title}
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#475569] text-sm mt-1">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-[#da1b61] text-white font-['Poppins',sans-serif] text-base px-8 py-4 rounded-[10px] w-fit hover:bg-[#c01850] transition-colors cursor-pointer">
            Know More
            <img src={whitearrow} alt="" className="w-3 h-3 " />
          </button>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Standard Cleaning",
      desc: "Perfect for maintaining a tidy home on a regular basis. Includes dusting, vacuuming, mopping, and surface sanitization.",
      image: standardCleaningPhoto,
      badge: "Popular",
    },
    {
      title: "Deep Cleaning",
      desc: "A thorough top-to-bottom scrub for a spotless living space. We reach the areas often missed during routine cleaning.",
      image: deepCleaningPhoto,
    },
    {
      title: "Move In/Out Cleaning",
      desc: "Specialized cleaning for transitions. We ensure your new home is ready for you or your old home is ready for its next residents.",
      image: moveInOutPhoto,
    },
  ];

  return (
    <section
      className="py-10 lg:py-16"
      style={{
        background:
          "linear-gradient(131deg, rgb(255,222,185) 14%, rgb(255,239,220) 66%, rgb(255,255,255) 141%)",
      }}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col items-center text-center mb-8 lg:mb-12">
          <div className="bg-white rounded-[10px] px-12 h-9 inline-flex items-center mb-3">
            <span className="font-['Poppins',sans-serif] text-[#0F172A] text-[20px]">
              our services
            </span>
          </div>
          <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl md:text-[36px] text-[#0f172a]">
            Explore our{" "}
            <span className="text-[#da1b61]">cleaning Services</span>
          </h2>
          <button className="flex items-center gap-1 border-b border-black text-[#000000A6] font-['Poppins',sans-serif] text-[16px] mt-2 pb-0.5 cursor-pointer">
            Know More
            <img src={blackarrow} alt="" className="w-4 h-4 " />
          </button>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-[rgba(218,27,97,0.05)] rounded-[10px] overflow-hidden w-full md:w-[300px] lg:w-[340px] flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="px-5 lg:px-7 pt-5 lg:pt-7 pb-4">
                <h3 className="font-['Poppins',sans-serif] font-medium text-[#da1b61] text-xl mb-2">
                  {s.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-[#475569] text-[16px] leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-[226px] object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center text-center mb-8 lg:mb-14">
          <div className="bg-[#f4f5cd] rounded-[10px] px-12 h-9 inline-flex items-center mb-3">
            <span className="font-['Poppins',sans-serif] text-[#0f172a] text-[20px]">
              See the Difference
            </span>
          </div>
          <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl md:text-[32px] text-[#0f172a]">
            See the <span className="text-[#da1b61]">Blissful Difference</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-[#0f172a] text-base mt-2 max-w-[600px] leading-relaxed">
            From everyday mess to a spotless, refreshed space — see how Blissful
            Cleaning transforms homes with care and precision.
          </p>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row gap-6 lg:gap-8 justify-center">
          <img src={difference} />
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      text: '"Blissful Cleaning transformed my apartment before I moved out. It looked better than when I first moved in! Highly recommend."',
      name: "Sarah Jenkins",
      location: "Boston Ma",
      imagee: sarah,
    },
    {
      text: '"The recurring service is a lifesaver for our busy family. They are so careful around our pets and everything smells so fresh."',
      name: "Michael Ross",
      location: "Westford Ma",
      imagee: michael,
    },
    {
      text: '"Professional, punctual, and very thorough. The deep cleaning service reached places I didn\'t even think to check."',
      name: "Elena Rodriguez",
      location: "Natck Ma",
      imagee: elena,
    },
  ];

  return (
    <section className="py-10 lg:py-20">
      <div className="px-4 md:px-10">
        <div className="flex flex-col items-center text-center mb-8 lg:mb-12">
          <div className="bg-[#f4f5cd] rounded-[10px] px-12 h-9 inline-flex items-center mb-3">
            <span className="font-['Poppins',sans-serif] text-[#0f172a] text-[20px]">
              Customer Reviews
            </span>
          </div>
          <h2 className="font-['Poppins',sans-serif] text-2xl md:text-[36px] text-[#0f172a] mb-2">
            <span>Happy </span>
            <span className="text-[#da1b61]">Home owners</span>
          </h2>
          <div className="flex items-center gap-2">
            <img src={reviewss} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#e5e7a5] rounded-[10px] p-6 lg:p-7 flex flex-col items-center  gap-4 w-full md:w-[400px]"
            >
              <img src={quote} alt="" className="w-7 h-5" />
              <p className="font-['Inter',sans-serif] text-[#0f172a] text-[16px] text-center leading-relaxed">
                {r.text}
              </p>
              <div className="flex flex-col items-center gap-1 mt-2">
                <div className="w-12 h-12 rounded-[10px]">
                  <img
                    src={r.imagee}
                    alt={r.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-['Inter',sans-serif] font-bold text-[#0f172a] text-sm">
                  {r.name}
                </span>
                <span className="font-['Inter',sans-serif] text-[#64748b] text-xs">
                  {r.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Disinfection() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col gap-8 lg:gap-12">
        <div
          className="relative rounded-[10px] overflow-hidden w-full"
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={manclean}
            alt="Advanced Viral Disinfection"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#b6c334] flex items-center gap-2 px-3 py-1 rounded-[10px] w-fit">
            <img src={approved} alt="EPA" className="" />
            <span className="font-['Inter',sans-serif] font-medium text-white text-sm">
              EPA APPROVED
            </span>
          </div>
          <h2 className="font-['Poppins',sans-serif] text-2xl md:text-[36px] text-[#0f172a] leading-tight">
            Advanced Viral Disinfection
          </h2>
          <p className="font-['Inter',sans-serif] text-black/65 text-base md:text-[20px] leading-relaxed">
            Protect your family with our hospital-grade electrostatic spraying
            technology. Kills 99.9% of bacteria and viruses on all surfaces.
          </p>
          <div className="bg-[rgba(229,231,165,0.22)] border border-white/10 rounded-[28px] flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 lg:px-6 py-5 lg:py-6 mt-2 gap-4 sm:gap-0">
            <div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#94a3b8] text-sm">
                Add to any service
              </div>
              <div className="font-['Poppins',sans-serif] font-bold text-[#0f172a] text-xl lg:text-2xl mt-1">
                SafeHome+ Add-on
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#da1b61] text-2xl lg:text-3xl">
                +$99
              </div>
              <div className="bg-[rgba(218,27,97,0.1)] rounded-full w-14 h-8 flex items-end justify-end p-1">
                <div className="bg-[#da1b61] rounded-full w-6 h-6 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <WhyChooseUs />
      <Services />
      <BeforeAfter />
      <Reviews />
      <Disinfection />
      <CTABanner />
    </>
  );
}
