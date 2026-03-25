import CTABanner from "../components/CTABanner";
import second from "../assets/about/secondsection.svg";
import left from "../assets/about/hero-left.svg";
import right from "../assets/about/hero-right.svg";
import ellipse from "../assets/about/ellipse.svg";

// ─── Fresh asset URLs from Figma ───────────────────────────────────────────
const imgs = {
  heroPeople:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293596/blissful-cleaning/42fa429d-b184-445a-8b1f-b26b0ed88f95.png",
  heroEllipse:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293573/blissful-cleaning/3b0a1247-9ba7-4daa-ad69-453c9e629b1a",
  avatarFaces:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293600/blissful-cleaning/4f781f65-7376-45d1-bb10-0d7836e1c330.png",
  avatarMask:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293601/blissful-cleaning/3f78a5ba-2547-4deb-9593-b780cd52fe40",
  storyPhoto:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293603/blissful-cleaning/3891d8cc-7208-4dea-b681-e5c36ec317b2.png",
  quoteOpen:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293606/blissful-cleaning/2d18b44f-853b-400f-b3b1-2e370e833f68",
  quoteClose:
    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293607/blissful-cleaning/3e87b74f-6a58-432f-a647-6aa657ae3ea5",
  member1:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293609/blissful-cleaning/00f81d94-e5d1-416c-9214-cb9895d1e2cb.jpg",
  member2:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293612/blissful-cleaning/70d6e66c-966e-46b8-9a28-df2f27288c78.png",
  member3:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293615/blissful-cleaning/5defd2e1-199b-4e90-b795-bd2192780150.png",
  member4:
    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293618/blissful-cleaning/68b8ab96-c865-4655-947b-61053b326ec1.png",
};

const teamMembers = [
  {
    name: "Elza Rodrigues-Calandrello",
    role: "Owner & Head Cleaner",
    image: imgs.member1,
  },
  {
    name: "Matthew Calandrello",
    role: "Projects Supervisor",
    image: imgs.member2,
  },
  { name: "Rhayane Telles", role: "Cleaner", image: imgs.member3 },
  { name: "Lauany Telles", role: "Cleaner", image: imgs.member4 },
];

// ─── Hero ──────────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: 480,
        backgroundImage:
          "linear-gradient(231deg, rgb(255,221,183) 3%, rgb(255,229,200) 45%, rgb(255,255,255) 98%)",
      }}
    >
      {/* Decorative background ellipse */}
      <img
        src={ellipse}
        alt=""
        className="absolute pointer-events-none select-none hidden lg:block"
        style={{
          width: 811,
          height: 811,
          right: "calc(50% - 811px)",
          bottom: -280,
          opacity: 0.45,
        }}
      />

      <div
        className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 relative"
        style={{ minHeight: 480 }}
      >
        {/* ── Left text column ── */}
        <div className="flex flex-col gap-5 lg:gap-7 relative z-10 pt-10 lg:pt-[143px] pb-10 lg:pb-16 max-w-full lg:max-w-[622px]">
          {/* Heading */}
          <h1 className="font-['Poppins',sans-serif] m-0 text-3xl md:text-5xl lg:text-[60px] lg:leading-[85px]">
            <span className="font-semibold text-[#0f172a]">
              Built on Family,
            </span>
            <br />
            <span className="font-normal text-[#da1b61]">Driven by Care.</span>
          </h1>

          {/* Subtext */}
          <p className="font-['Satoshi',sans-serif] text-black m-0 text-base lg:text-[24px] lg:leading-[35px]">
            We aren&rsquo;t just a cleaning company. We are a family that
            understands the peace a clean home brings to yours. Every corner we
            scrub is handled with the same love we give our own home.
          </p>

          <div>
            <img src={left} />
          </div>
        </div>

        {/* ── Right team photo — desktop only ── */}
        <div
          className="absolute top-0 right-0 h-full hidden lg:block pointer-events-none select-none"
          style={{ width: "55%" }}
        >
          <img
            src={right}
            alt="Blissful Cleaning team"
            className="absolute bottom-0 right-0 object-contain object-bottom"
            style={{ height: "92%" }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Story + Quote ─────────────────────────────────────────────────────────
function StoryQuote() {
  return (
    <section className="flex justify-center bg-[#fbfbfb] py-10 lg:py-20">
      <img src={second} />
    </section>
  );
}

// ─── Meet Our Team ─────────────────────────────────────────────────────────
function TeamSection() {
  return (
    <section className="bg-[#fbfbfb] py-10 lg:py-16">
      <div className="px-4 md:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-12">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[#0f172a] m-0 text-2xl md:text-3xl lg:text-[36px] lg:leading-[72px]">
            Meet&nbsp;&nbsp;
            <span className="font-normal text-[#da1b61]">our Team</span>
          </h2>
          <p
            className="font-['Satoshi',sans-serif] text-black m-0 text-base"
            style={{ lineHeight: "26px" }}
          >
            The smiling faces behind your spotless home.
          </p>
        </div>

        {/* Cards — 2 columns on mobile, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[66px] justify-items-center">
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
    <div className="flex flex-col items-center gap-1.5 w-full max-w-[250px]">
      {/* Photo */}
      <div
        className="rounded-[10px] overflow-hidden shrink-0 w-full"
        style={{ aspectRatio: "1 / 1" }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h3 className="font-['Poppins',sans-serif] font-medium text-[#0f172a] text-center m-0 mt-2 text-sm lg:text-[16px] lg:leading-[28px]">
        {name}
      </h3>

      {/* Role */}
      <span className="font-['Inter',sans-serif] font-medium text-[#da1b61] uppercase tracking-[0.35px] text-xs lg:text-[12px] lg:leading-[20px] text-center">
        {role}
      </span>
    </div>
  );
}

// ─── A Legacy of Sparkle ───────────────────────────────────────────────────
function LegacySection() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(229.77deg, rgb(255,255,255) 0.6%, rgb(255,222,185) 164%)",
      }}
      className="py-10 lg:py-[60px] mb-20"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[123px]">
        <div className="flex flex-col gap-4 lg:gap-[23px] max-w-[1197px]">
          {/* Heading */}
          <div className="font-['Poppins',sans-serif] self-center font-medium m-0 text-2xl md:text-3xl lg:text-[32px] lg:leading-[72px]">
            <span className="text-[#da1b61]">A Legacy of </span>
            <span className="text-[#b6c334]">Sparkle</span>
          </div>

          {/* Body */}
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#475569] m-0 text-base lg:text-[18px] lg:leading-[29.25px]">
            Starting in a small garage in 2012, Blissful Cleaning began with a
            simple mop and a big dream. Our founder, Maria, started this journey
            to provide for her children while helping neighbors find time for
            what matters most. Today, we&rsquo;ve grown into a full team, but
            our core remains unchanged. We treat every employee like family and
            every client like a guest of honor.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
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
