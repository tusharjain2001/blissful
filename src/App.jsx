// Image assets from Figma
const imgs = {
  heroPerson: "https://www.figma.com/api/mcp/asset/08739f6f-0b14-4c8e-961f-12a76bfca771",
  heroEllipse: "https://www.figma.com/api/mcp/asset/cf327157-1702-4c7b-b4c7-22513b611c05",
  heroGroup1: "https://www.figma.com/api/mcp/asset/9b474001-93c6-4fbb-8fb5-0406083fcc4c",
  heroGroup2: "https://www.figma.com/api/mcp/asset/ff0fa1ee-e0f4-4646-b5a5-714d5fd3902e",
  heroGroup3: "https://www.figma.com/api/mcp/asset/a06fe082-53b4-45be-b3aa-4aaeffa9ae20",
  customerAvatars: "https://www.figma.com/api/mcp/asset/476f16d2-be74-4f64-baea-cc2f3c64cb9d",
  stars: "https://www.figma.com/api/mcp/asset/1518d3db-3a7c-4c9e-a597-ad42974795de",
  qualityIcon: "https://www.figma.com/api/mcp/asset/29fa0d90-e871-45fd-8c4e-119cb558afcd",
  familyIcon: "https://www.figma.com/api/mcp/asset/f1e1089f-e192-46e2-8e1c-a3e1ce433df6",
  petIcon: "https://www.figma.com/api/mcp/asset/32aadb4d-b516-4d26-80ad-c4e2cb98d408",
  reliableIcon: "https://www.figma.com/api/mcp/asset/38b0e9e0-bb80-468b-bc68-fe47f4645a48",
  aboutPhoto: "https://www.figma.com/api/mcp/asset/f5e6a1dd-454b-4b59-a508-b79eb10e0b01",
  professionalIcon: "https://www.figma.com/api/mcp/asset/2c61dfb1-81f9-4e3d-b13d-46793911b429",
  ecoIcon: "https://www.figma.com/api/mcp/asset/3c15c970-cf2a-472e-8528-6e573ea6cadf",
  insuredIcon: "https://www.figma.com/api/mcp/asset/4895a35c-2e56-4316-9128-58e985ec2b6c",
  service1: "https://www.figma.com/api/mcp/asset/658e3417-b45c-4ed2-918b-779e65de7249",
  service2: "https://www.figma.com/api/mcp/asset/22a43702-fc6b-48d0-9e99-b5241ba54ad4",
  service3: "https://www.figma.com/api/mcp/asset/e710a382-e163-4ea2-8017-7ad76805a0bc",
  arrowIcon: "https://www.figma.com/api/mcp/asset/26a8b9b6-b379-4ee7-b2c4-af43f8c0546b",
  beforeAfter1: "https://www.figma.com/api/mcp/asset/28ef7fcb-7e4a-4a9d-827f-c51432f5c5e5",
  beforeAfter2: "https://www.figma.com/api/mcp/asset/70446120-bd1b-4f04-bd70-da8b4c36f214",
  beforeAfter3: "https://www.figma.com/api/mcp/asset/a06fa9ae-245d-41ed-b6d6-9c6201ba6179",
  beforeAfter4: "https://www.figma.com/api/mcp/asset/1c196c58-e611-4841-8737-2639c99965cd",
  quoteIcon: "https://www.figma.com/api/mcp/asset/7b423e50-86a3-4492-9e1b-a8584acb91de",
  reviewAvatar: "https://www.figma.com/api/mcp/asset/a67fc4a1-7d62-4346-9f96-ae235df4f443",
  videoBg: "https://www.figma.com/api/mcp/asset/2ebe2794-20d2-4b39-a037-0f7657bf2ec7",
  playBtn: "https://www.figma.com/api/mcp/asset/397ca8b3-f354-4d99-ad0d-0edcc46d1d05",
  epaIcon: "https://www.figma.com/api/mcp/asset/71905eb5-eaaa-4d97-998f-f235d7f2bf7e",
  phoneIcon: "https://www.figma.com/api/mcp/asset/8f2036f5-e7fd-4939-80b4-f7785e05d3cc",
  emailIcon: "https://www.figma.com/api/mcp/asset/74840394-5d1c-454c-b987-50ff3d69bc8a",
  locationIcon: "https://www.figma.com/api/mcp/asset/0da16a84-548b-4df1-b5f1-ac42e440939d",
  fbIcon: "https://www.figma.com/api/mcp/asset/1897ea8b-12e1-4fb9-8024-47deddeec5b2",
  twitterIcon: "https://www.figma.com/api/mcp/asset/cb2569c2-153d-4988-8f44-685ba668a666",
  igIcon: "https://www.figma.com/api/mcp/asset/ec7d0e53-d842-42b5-9e84-f3a0c1be86c2",
  searchIcon: "https://www.figma.com/api/mcp/asset/e58471fc-475f-49b4-992f-0b05e853150b",
  globeIcon: "https://www.figma.com/api/mcp/asset/ca586267-72a5-4d7a-b6c2-8688e6d36c4e",
  chevronIcon: "https://www.figma.com/api/mcp/asset/762df86c-e3a6-4021-8255-af5536427d01",
};

function Navbar() {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-10 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="font-['Poppins',sans-serif] font-bold text-2xl shrink-0">
          <span className="text-[#da1b61]">Blissful</span>{" "}
          <span className="text-[#b6c334] font-normal">cleaning</span>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {["Home", "Services", "About Us", "Contact Us", "FAQ"].map((item, i) => (
            <a
              key={item}
              href="#"
              className={`font-['Inter',sans-serif] text-base text-black/65 hover:text-[#da1b61] transition-colors whitespace-nowrap ${i === 0 ? "border-b-2 border-black pb-0.5 text-black" : ""}`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 shrink-0">
          <img src={imgs.searchIcon} alt="search" className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100" />
          <div className="hidden md:flex items-center gap-1 border border-black/15 rounded-[10px] px-2 py-1">
            <img src={imgs.globeIcon} alt="globe" className="w-4 h-4" />
            <span className="font-['Inter',sans-serif] text-sm text-black/65">English</span>
            <img src={imgs.chevronIcon} alt="" className="w-4 h-4" />
          </div>
          <button className="bg-[#da1b61] text-white font-['Poppins',sans-serif] text-sm px-4 py-2 rounded-[10px] hover:bg-[#c01850] transition-colors whitespace-nowrap">
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[calc(100vh-72px)]"
      style={{
        background: "linear-gradient(236deg, rgb(255,221,183) 3%, rgb(255,229,200) 45%, rgb(255,255,255) 97%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-10 flex items-center min-h-[calc(100vh-72px)] relative">
        {/* Left content */}
        <div className="flex flex-col gap-7 max-w-[600px] py-20 relative z-10">
          <div>
            <h1 className="font-['Poppins',sans-serif] text-[64px] leading-tight font-bold">
              <span className="text-[#0f172a]">Blissful </span>
              <span className="text-[#da1b61] font-normal">cleaning</span>
            </h1>
            <h2 className="font-['Poppins',sans-serif] text-[44px] font-medium text-black mt-1">&ldquo;Home Clean Home&rdquo;</h2>
          </div>
          <p className="font-['Inter',sans-serif] text-[18px] text-black/80 leading-[1.6]">
            Home Clean Home. We bring professional care and a sparkling touch to every corner of your residence.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#da1b61] text-white font-['Poppins',sans-serif] text-base font-medium px-8 py-4 rounded-[10px] hover:bg-[#c01850] transition-colors">
              Book an Appointment
            </button>
            <button className="border-2 border-[#da1b61] text-[#da1b61] font-['Poppins',sans-serif] text-base font-medium px-6 py-4 rounded-[10px] hover:bg-[#da1b61]/5 transition-colors">
              Contact us (774-388-6228)
            </button>
          </div>

          {/* Rating badge */}
          <div className="flex flex-col gap-1 mt-2">
            <span className="font-['Poppins',sans-serif] font-semibold text-[#0f172a] text-lg">Excellent</span>
            <div className="flex items-center gap-2">
              <img src={imgs.stars} alt="4/5 stars" className="h-5" />
              <span className="font-['Poppins',sans-serif] font-semibold text-[#0f172a] text-lg">4/5</span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="absolute right-0 top-0 h-full w-[55%] hidden lg:block pointer-events-none select-none">
          {/* Background ellipse */}
          <img
            src={imgs.heroEllipse}
            alt=""
            className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] object-contain"
          />
          {/* Cleaning person */}
          <img
            src={imgs.heroPerson}
            alt="Blissful cleaning professional"
            className="absolute right-0 bottom-0 h-[95%] object-contain object-bottom"
          />
          {/* Customer count card */}
          <div className="absolute left-4 bottom-24 bg-white rounded-[10px] px-4 py-3 shadow-md">
            <div className="font-['Inter',sans-serif] font-bold text-black text-base">50k+</div>
            <div className="font-['Inter',sans-serif] text-black/65 text-sm">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesBar() {
  const features = [
    {
      icon: imgs.qualityIcon,
      title: "High-Quality",
      desc: "Meticulous attention to detail in every single room.",
      iconBg: "bg-transparent",
      isImg: true,
    },
    {
      icon: imgs.familyIcon,
      title: "Family-Owned",
      desc: "Trusted local service with personal values at our core.",
      iconBg: "bg-[#b6c334]",
      isImg: true,
    },
    {
      icon: imgs.petIcon,
      title: "Pet-Friendly",
      desc: "Safe cleaning products for your furry family members.",
      iconBg: "bg-[#b6c334]",
      isImg: true,
    },
    {
      icon: imgs.reliableIcon,
      title: "Reliable",
      desc: "Meticulous attention to detail in every single room.",
      iconBg: "bg-[#b6c334]",
      isImg: true,
    },
  ];

  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="flex flex-wrap justify-between gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-5 flex-1 min-w-[200px]">
              <div className={`rounded-[10px] w-[70px] h-[70px] shrink-0 flex items-center justify-center ${f.iconBg}`}>
                <img src={f.icon} alt={f.title} className="w-9 h-9 object-contain" />
              </div>
              <div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-black text-xl">{f.title}</h3>
                <p className="font-['Inter',sans-serif] text-[#64748b] text-sm mt-0.5 max-w-[200px]">{f.desc}</p>
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
      icon: imgs.professionalIcon,
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
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left photo */}
        <div className="flex-1 rounded-[10px] overflow-hidden min-h-[500px] max-w-[640px] w-full">
          <img src={imgs.aboutPhoto} alt="Cleaning professional at work" className="w-full h-full object-cover rounded-[10px]" style={{ minHeight: 500 }} />
        </div>

        {/* Right content */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <div className="bg-[#f4f5cd] rounded-[10px] px-4 h-10 inline-flex items-center mb-4">
              <span className="font-['Poppins',sans-serif] text-[#0f172a] text-sm">Why Choose Blissful Cleaning</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] text-[42px] font-semibold text-[#0f172a] leading-tight">
              Cleaning with Care,{" "}
              <span className="font-normal text-[#da1b61]">Like Family</span>
            </h2>
            <p className="font-['Inter',sans-serif] text-black text-base mt-4 leading-relaxed">
              We believe true cleanliness is in the details. From high-touch surfaces to hard-to-reach areas, our team ensures your home is thoroughly cleaned and refreshed.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-10">
                <div className="bg-[rgba(218,27,97,0.1)] rounded-[16px] w-[50px] h-[50px] shrink-0 flex items-center justify-center">
                  <img src={b.icon} alt={b.title} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0f172a] text-lg">{b.title}</h4>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#475569] text-sm mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 bg-[#da1b61] text-white font-['Poppins',sans-serif] text-base px-8 py-4 rounded-[10px] w-fit hover:bg-[#c01850] transition-colors">
            Know More
            <img src={imgs.arrowIcon} alt="" className="w-5 h-5 rotate-90" />
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
      image: imgs.service1,
      badge: "Popular",
    },
    {
      title: "Deep Cleaning",
      desc: "A thorough top-to-bottom scrub for a spotless living space. We reach the areas often missed during routine cleaning.",
      image: imgs.service2,
    },
    {
      title: "Move In/Out Cleaning",
      desc: "Specialized cleaning for transitions. We ensure your new home is ready for you or your old home is ready for its next residents.",
      image: imgs.service3,
    },
  ];

  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(131deg, rgb(255,222,185) 14%, rgb(255,239,220) 66%, rgb(255,255,255) 141%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-white rounded-[10px] px-6 h-9 inline-flex items-center mb-3">
            <span className="font-['Poppins',sans-serif] text-[#0f172a] text-base">our services</span>
          </div>
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[32px] text-[#0f172a]">
            Explore our{" "}
            <span className="text-[#da1b61]">cleaning Services</span>
          </h2>
          <button className="flex items-center gap-1 border-b border-black text-black/65 font-['Poppins',sans-serif] text-sm mt-2 pb-0.5 hover:text-[#da1b61] hover:border-[#da1b61] transition-colors">
            Know More
            <img src={imgs.arrowIcon} alt="" className="w-4 h-4 rotate-90" />
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-[rgba(218,27,97,0.05)] rounded-[10px] overflow-hidden w-[340px] flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="px-7 pt-7 pb-4">
                <h3 className="font-['Poppins',sans-serif] font-medium text-[#da1b61] text-xl mb-2">{s.title}</h3>
                <p className="font-['Inter',sans-serif] text-[#475569] text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="relative bg-[#e5e7a5] flex-1">
                <img src={s.image} alt={s.title} className="w-full h-[200px] object-cover" />
                {s.badge && (
                  <div className="absolute top-3 right-4 backdrop-blur-sm bg-white/90 text-[#da1b61] text-xs font-bold px-3 py-0.5 rounded-full shadow-sm">
                    {s.badge}
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-white rounded-[10px] w-9 h-9 flex items-center justify-center shadow-sm cursor-pointer hover:bg-[#da1b61] group transition-colors">
                  <img src={imgs.arrowIcon} alt="" className="w-5 h-5 rotate-[135deg] group-hover:invert" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const pairs = [
    { img: imgs.beforeAfter1, wide: true },
    { img: imgs.beforeAfter2, wide: false },
    { img: imgs.beforeAfter3, wide: false },
    { img: imgs.beforeAfter4, wide: true },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="bg-[#f4f5cd] rounded-[10px] px-6 h-9 inline-flex items-center mb-3">
            <span className="font-['Poppins',sans-serif] text-[#0f172a] text-base">See the Difference</span>
          </div>
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[32px] text-[#0f172a]">
            See the{" "}
            <span className="text-[#da1b61]">Blissful Difference</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-[#0f172a] text-base mt-2 max-w-[600px] leading-relaxed">
            From everyday mess to a spotless, refreshed space — see how Blissful Cleaning transforms homes with care and precision.
          </p>
        </div>

        {/* Photo grid */}
        <div className="flex flex-wrap gap-8 justify-center">
          {pairs.map((p, i) => (
            <div key={i} className="relative rounded-[10px] overflow-hidden group" style={{ flex: p.wide ? "2 1 580px" : "1 1 420px", minHeight: 320 }}>
              <img src={p.img} alt={`Before and after ${i + 1}`} className="w-full h-full object-cover min-h-[320px]" />
              {/* Labels */}
              <div className="absolute top-4 left-5 bg-white border border-[#da1b61] text-[#da1b61] font-['Poppins',sans-serif] text-sm px-4 h-8 flex items-center rounded-[10px]">
                Before
              </div>
              <div className="absolute top-4 right-5 bg-[#da1b61] text-white font-['Poppins',sans-serif] text-sm px-4 h-8 flex items-center rounded-[10px]">
                After
              </div>
            </div>
          ))}
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
      location: "Evanston, IL",
    },
    {
      text: '"The recurring service is a lifesaver for our busy family. They are so careful around our pets and everything smells so fresh."',
      name: "Michael Ross",
      location: "Evanston, IL",
    },
    {
      text: '"Professional, punctual, and very thorough. The deep cleaning service reached places I didn\'t even think to check."',
      name: "Elena Rodriguez",
      location: "Oak Park, IL",
    },
  ];

  return (
    <section className="py-20 bg-[#fbfbfb]">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-[#f4f5cd] rounded-[10px] px-6 h-9 inline-flex items-center mb-3">
            <span className="font-['Poppins',sans-serif] text-[#0f172a] text-base">Customer Reviews</span>
          </div>
          <h2 className="font-['Poppins',sans-serif] text-[32px] text-[#0f172a] mb-2">
            <span>Happy </span>
            <span className="text-[#da1b61]">Home owners</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-['Inter',sans-serif] font-bold text-[#0f172a] text-sm">4.9/5 based on 2k+ reviews</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#e5e7a5] rounded-[10px] p-7 flex flex-col gap-4 w-[380px]">
              <img src={imgs.quoteIcon} alt="" className="w-7 h-5" />
              <p className="font-['Inter',sans-serif] text-[#0f172a] text-sm text-center leading-relaxed">{r.text}</p>
              <div className="flex flex-col items-center gap-1 mt-2">
                <div className="w-12 h-12 rounded-full bg-[#b6c334] overflow-hidden">
                  <img src={imgs.reviewAvatar} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-['Inter',sans-serif] font-bold text-[#0f172a] text-sm">{r.name}</span>
                <span className="font-['Inter',sans-serif] text-[#64748b] text-xs">{r.location}</span>
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
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col gap-12">
        {/* Video thumbnail */}
        <div className="relative rounded-[10px] overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
          <img src={imgs.videoBg} alt="Advanced Viral Disinfection" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full w-20 h-20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <img src={imgs.playBtn} alt="Play" className="w-4 h-5 ml-1" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#b6c334] flex items-center gap-2 px-3 py-1 rounded-[10px] w-fit">
            <img src={imgs.epaIcon} alt="EPA" className="w-3 h-3" />
            <span className="font-['Inter',sans-serif] font-medium text-white text-sm">EPA APPROVED</span>
          </div>
          <h2 className="font-['Poppins',sans-serif] text-[32px] text-[#0f172a] leading-tight">Advanced Viral Disinfection</h2>
          <p className="font-['Inter',sans-serif] text-black/65 text-lg leading-relaxed max-w-4xl">
            Protect your family with our hospital-grade electrostatic spraying technology. Kills 99.9% of bacteria and viruses on all surfaces.
          </p>

          {/* Add-on card */}
          <div className="bg-[rgba(229,231,165,0.22)] border border-white/10 rounded-[28px] flex items-center justify-between px-6 py-6 mt-2">
            <div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#94a3b8] text-sm">Add to any service</div>
              <div className="font-['Poppins',sans-serif] font-bold text-[#0f172a] text-2xl mt-1">SafeHome+ Add-on</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#da1b61] text-3xl">+$199</div>
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

function CTA() {
  return (
    <section className="relative bg-[#da1b61] overflow-hidden py-20">
      <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between relative z-10">
        {/* Left content */}
        <div className="flex flex-col gap-6 max-w-[520px]">
          <h2 className="font-['Poppins',sans-serif] font-bold text-[42px] text-white leading-tight">
            Make your home{" "}
            <span className="font-normal text-[#e2e8f0]">blissful today</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/80 text-lg leading-relaxed">
            Join over 5,000+ happy households who trust our blissful touch.
          </p>
          <button className="bg-white text-[#da1b61] font-['Poppins',sans-serif] font-medium text-xl px-14 py-4 rounded-[10px] w-fit hover:bg-gray-50 transition-colors shadow-lg">
            Book Your Appointment
          </button>
        </div>

        {/* Right decorative image */}
        <div className="hidden lg:block relative h-[400px] w-[420px] shrink-0">
          <img
            src={imgs.heroEllipse}
            alt=""
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] object-contain opacity-30"
          />
          <img
            src={imgs.heroPerson}
            alt="Cleaning professional"
            className="absolute right-0 bottom-0 h-[420px] object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-16"
      style={{
        background: "linear-gradient(76deg, rgb(255,255,255) 4%, rgb(255,243,229) 59%, rgb(255,230,202) 122%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="font-['Poppins',sans-serif] font-bold text-2xl">
              <span className="text-[#da1b61]">Blissful</span>{" "}
              <span className="text-[#b6c334] font-normal">cleaning</span>
            </div>
            <p className="font-['Inter',sans-serif] text-black/65 text-sm leading-relaxed">
              Metro West (home base), Boston North Shore, Boston South Shore, Northern Rhode Island
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Inter',sans-serif] font-semibold text-[#0f172a] text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {["Home", "Our Story", "Services", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-['Inter',sans-serif] text-black/65 text-sm hover:text-[#da1b61] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Inter',sans-serif] font-semibold text-[#0f172a] text-sm">Service Areas</h4>
            <ul className="flex flex-col gap-4">
              {["Chicago Loop", "Evanston", "Oak Park", "Lincoln Park"].map((area) => (
                <li key={area}>
                  <a href="#" className="font-['Inter',sans-serif] text-black/65 text-sm hover:text-[#da1b61] transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Inter',sans-serif] font-semibold text-[#0f172a] text-sm">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <img src={imgs.phoneIcon} alt="" className="w-4 h-4 shrink-0" />
                <span className="font-['Inter',sans-serif] text-black/65 text-sm">774-388-6228</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={imgs.emailIcon} alt="" className="w-5 h-4 shrink-0" />
                <span className="font-['Inter',sans-serif] text-black/65 text-sm">blissfulcleaningma@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={imgs.locationIcon} alt="" className="w-4 h-5 shrink-0" />
                <span className="font-['Inter',sans-serif] text-black/65 text-sm">Natick, Massachusetts 01760</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#f1f5f9] pt-8 flex items-center justify-between flex-wrap gap-4">
          <span className="font-['Inter',sans-serif] text-black/65 text-xs">© 2024 Blissful Cleaning. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              <img src={imgs.fbIcon} alt="Facebook" className="w-4 h-4" />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              <img src={imgs.twitterIcon} alt="Twitter" className="w-4 h-4" />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              <img src={imgs.igIcon} alt="Instagram" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#fbfbfb] min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesBar />
      <WhyChooseUs />
      <Services />
      <BeforeAfter />
      <Reviews />
      <Disinfection />
      <CTA />
      <Footer />
    </div>
  );
}
