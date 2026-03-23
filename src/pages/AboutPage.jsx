import CTABanner from "../components/CTABanner";

const imgs = {
  // Hero
  heroPeople: "https://www.figma.com/api/mcp/asset/41054871-5c64-4bb8-a1d7-856312fae02e",
  heroEllipse: "https://www.figma.com/api/mcp/asset/d7ed772f-89f7-43de-ab5b-547e9c6b1da0",
  // Customer avatars (stats card)
  avatarGroup: "https://www.figma.com/api/mcp/asset/05737b7d-3578-4eef-99bb-ae0c187cb946",
  // Story section - team photo
  teamPhoto: "https://www.figma.com/api/mcp/asset/8276e1d6-36c1-4dfd-a813-f4bb47fbcbb3",
  // Quote marks
  quoteOpen: "https://www.figma.com/api/mcp/asset/9dba6a55-c1dd-4f0f-b2ad-193b165a84ae",
  quoteClose: "https://www.figma.com/api/mcp/asset/71c5836a-90ef-47b0-a9a4-180d97734645",
  // Team members
  member1: "https://www.figma.com/api/mcp/asset/9e48fc72-ef07-417c-94fc-ae7477e7ac62",
  member2: "https://www.figma.com/api/mcp/asset/4b235cd4-874e-415d-a6f6-f7190e1e92cd",
  member3: "https://www.figma.com/api/mcp/asset/339370c8-34c4-47e3-9707-1db32f35bbb6",
  member4: "https://www.figma.com/api/mcp/asset/3767a8d3-fe01-4556-8780-4393ca6bbcbe",
};

const teamMembers = [
  { name: "Elza Rodrigues-Calandrello", role: "Owner & Head Cleaner", image: imgs.member1 },
  { name: "Matthew Calandrello", role: "Projects Supervisor", image: imgs.member2 },
  { name: "Rhayane Telles", role: "Cleaner", image: imgs.member3 },
  { name: "Lauany Telles", role: "Cleaner", image: imgs.member4 },
];

function AboutHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[841px]"
      style={{
        background: "linear-gradient(231deg, rgb(255,221,183) 3%, rgb(255,229,200) 45%, rgb(255,255,255) 98%)",
      }}
    >
      {/* Decorative ellipse */}
      <img
        src={imgs.heroEllipse}
        alt=""
        className="absolute right-[-100px] bottom-[-200px] w-[811px] h-[811px] object-contain opacity-40 pointer-events-none select-none"
      />

      <div className="max-w-[1440px] mx-auto px-20 flex items-center min-h-[841px] relative">
        {/* Left content */}
        <div className="flex flex-col gap-7 max-w-[622px] py-20 relative z-10">
          {/* Headline */}
          <h1 className="font-['Poppins',sans-serif] text-[60px] leading-[85px]">
            <span className="font-semibold text-[#0f172a]">Built on Family,</span>
            <br />
            <span className="font-normal text-[#da1b61]">Driven by Care.</span>
          </h1>

          {/* Subtext */}
          <p className="font-['Satoshi',sans-serif] text-black text-[24px] leading-[35px]">
            We aren&rsquo;t just a cleaning company. We are a family that
            understands the peace a clean home brings to yours. Every corner we
            scrub is handled with the same love we give our own home.
          </p>

          {/* Stats card */}
          <div className="bg-white rounded-[10px] px-6 py-6 flex items-center gap-8 w-fit shadow-sm">
            {/* Avatars */}
            <div className="flex items-center">
              <img src={imgs.avatarGroup} alt="Happy customers" className="h-[50px] object-contain" />
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-gray-200" />

            {/* Stat 1 */}
            <div>
              <div className="font-['Inter',sans-serif] font-bold text-black text-base">50k+</div>
              <div className="font-['Inter',sans-serif] text-black/65 text-sm">More Customers</div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-gray-200" />

            {/* Stat 2 */}
            <div>
              <div className="font-['Inter',sans-serif] font-bold text-black text-base">12+</div>
              <div className="font-['Inter',sans-serif] text-black/65 text-sm">Years of Experience</div>
            </div>
          </div>
        </div>

        {/* Right — team photo */}
        <div className="absolute right-0 top-0 h-full w-[55%] hidden lg:block pointer-events-none select-none">
          <img
            src={imgs.heroPeople}
            alt="Blissful Cleaning team"
            className="absolute right-0 bottom-0 h-[95%] object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

function StoryQuote() {
  return (
    <section className="py-20 bg-[#fbfbfb]">
      <div className="max-w-[1440px] mx-auto px-20 flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left — team photo */}
        <div className="flex-1 max-w-[640px] w-full rounded-[10px] overflow-hidden min-h-[420px]">
          <img
            src={imgs.teamPhoto}
            alt="Blissful Cleaning team at work"
            className="w-full h-full object-cover min-h-[420px] rounded-[10px]"
          />
        </div>

        {/* Right — quote card */}
        <div className="flex-1 flex items-center">
          <div className="bg-[rgba(241,243,223,0.79)] rounded-[10px] px-12 py-14 relative w-full">
            {/* Opening quote mark */}
            <img
              src={imgs.quoteOpen}
              alt=""
              className="w-11 h-11 mb-4 rotate-180 scale-y-[-1]"
            />

            {/* Quote text */}
            <blockquote className="font-['Poppins',sans-serif] font-semibold italic text-[24px] text-black leading-[40px]">
              &ldquo;At Blissful Cleaning, we don&rsquo;t just clean homes we care for them like they&rsquo;re our own.&rdquo;
            </blockquote>

            {/* Closing quote mark */}
            <img
              src={imgs.quoteClose}
              alt=""
              className="w-11 h-11 mt-4 ml-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-16 bg-[#fbfbfb]">
      <div className="max-w-[1440px] mx-auto px-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[36px] text-[#0f172a]">
            Meet{" "}
            <span className="font-normal text-[#da1b61]">our Team</span>
          </h2>
          <p className="font-['Satoshi',sans-serif] text-black text-base mt-2">
            The smiling faces behind your spotless home.
          </p>
        </div>

        {/* Team grid */}
        <div className="flex flex-wrap justify-center gap-[66px]">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ name, role, image }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-[250px] h-[250px] rounded-[10px] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-['Poppins',sans-serif] font-medium text-[#0f172a] text-xl mt-2 text-center">
        {name}
      </h3>
      <span className="font-['Inter',sans-serif] font-medium text-[#da1b61] text-sm tracking-[0.35px] uppercase">
        {role}
      </span>
    </div>
  );
}

function LegacySection() {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(230deg, rgb(255,255,255) 1%, rgb(255,222,185) 164%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-[123px]">
        <div className="flex flex-col gap-6 max-w-[1197px]">
          <h2 className="font-['Poppins',sans-serif] font-medium text-[32px]">
            <span className="text-[#da1b61]">A Legacy of </span>
            <span className="text-[#b6c334]">Sparkle</span>
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#475569] text-[18px] leading-[29px]">
            Starting in a small garage in 2012, Blissful Cleaning began with a simple mop and a big dream. Our founder, Maria, started this journey to provide for her children while helping neighbors find time for what matters most. Today, we&rsquo;ve grown into a full team, but our core remains unchanged. We treat every employee like family and every client like a guest of honor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StoryQuote />
      <TeamSection />
      <LegacySection />
      <CTABanner />
    </>
  );
}
