import { useState } from "react";
import CTABanner from "../components/CTABanner";

// ─── Assets ────────────────────────────────────────────────────────────────
const imgs = {
  phoneIcon:   "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293620/blissful-cleaning/a8197ef8-2597-4b74-a79a-c8ed8fea82ae",
  emailIcon:   "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293622/blissful-cleaning/81159589-54c5-4766-8d93-00b53cb02b27",
  addressIcon: "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293623/blissful-cleaning/56d9cea9-53b3-4f74-b786-235675189ae1",
  phoneCard:   "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293624/blissful-cleaning/d5aebc76-8949-4fcc-b95a-1a6d1edbdcbd",
  emailCard:   "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293626/blissful-cleaning/42c60d6a-5b3a-44a9-b14f-961db30bace5",
  addressCard: "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293627/blissful-cleaning/30464e7b-5950-4808-9670-5ecafc232930",
  mapImage:    "https://res.cloudinary.com/dgr33gxhd/image/upload/v1774293629/blissful-cleaning/f368aa95-cd04-4963-93ec-3fab51034f13.jpg",
  sendIcon:    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293631/blissful-cleaning/0f28ce28-9f41-43d1-afd7-5ad3b31f6e11",
  mapPin:      "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293632/blissful-cleaning/00a33c19-0a16-4fc9-a0e6-458771262035",
  bullet:      "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293634/blissful-cleaning/217530d5-1d12-4103-b3da-1ce0375100ea",
};

const contactCards = [
  { icon: imgs.phoneCard,   label: "Phone",   value: "(555) 123-4567",            iconW: 42, iconH: 42 },
  { icon: imgs.emailCard,   label: "Email",   value: "hello@blissfulcleaning.com", iconW: 44, iconH: 40 },
  { icon: imgs.addressCard, label: "Address", value: "123 Main St, Chicago, IL",   iconW: 40, iconH: 44 },
];

const serviceAreas = [
  "Downtown", "North Heights", "Oak District",
  "River Valley", "West Gardens", "East Park",
];

// ─── Page-level hero ───────────────────────────────────────────────────────
function ContactHero() {
  return (
    <section
      className="py-10 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(209deg, rgb(255,221,183) 3%, rgb(255,229,200) 45%, rgb(255,255,255) 98%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col items-center text-center gap-2.5">
        <h1 className="font-['Poppins',sans-serif] font-semibold text-[#0f172a] m-0 text-3xl md:text-4xl lg:text-[48px] lg:leading-[72px]">
          We&rsquo;d Love to{" "}
          <span className="font-normal text-[#da1b61]">Hear From You</span>
        </h1>
        <p className="font-['Satoshi',sans-serif] text-black m-0 text-sm lg:text-base lg:leading-[26px]">
          Whether you have a question about our services, pricing, or just want to say
          hello, our team is ready to help you shine.
        </p>
      </div>
    </section>
  );
}

// ─── Contact form ──────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    name: "", phone: "", subject: "", message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submit
  };

  return (
    <div
      className="bg-white rounded-[10px] flex flex-col w-full lg:flex-[0_0_648px]"
      style={{
        border: "1px solid rgba(182,195,52,0.42)",
        padding: "32px 24px",
        gap: 32,
      }}
    >
      {/* Heading */}
      <h2
        className="font-['Poppins',sans-serif] font-medium text-[#032b3a] m-0"
        style={{ fontSize: 20, lineHeight: "21.44px" }}
      >
        Send us a message
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 28 }}>
        {/* Row: Name + Phone — stacked on mobile, side by side on md+ */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-8">
          <FormField label="Full Name" className="flex-1">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full font-['Inter',sans-serif] text-[#6b7280] outline-none bg-transparent"
              style={{ fontSize: 14 }}
            />
          </FormField>
          <FormField label="Phone Number" className="flex-1">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(555) 000-0000"
              className="w-full font-['Inter',sans-serif] text-[#6b7280] outline-none bg-transparent"
              style={{ fontSize: 14 }}
            />
          </FormField>
        </div>

        {/* Subject */}
        <FormField label="Subject">
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Booking Inquiry"
            className="w-full font-['Inter',sans-serif] text-[#0f172a] outline-none bg-transparent"
            style={{ fontSize: 16 }}
          />
        </FormField>

        {/* Message */}
        <div className="flex flex-col" style={{ gap: 14 }}>
          <label
            className="font-['Poppins',sans-serif] text-[#334155]"
            style={{ fontSize: 18, lineHeight: "20px" }}
          >
            Message
          </label>
          <div
            className="bg-white rounded-[10px] overflow-hidden"
            style={{ border: "1px solid #e2e8f0", padding: "13px" }}
          >
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              rows={5}
              className="w-full font-['Inter',sans-serif] text-[#6b7280] outline-none bg-transparent resize-none"
              style={{ fontSize: 14, lineHeight: "24px" }}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-[#da1b61] text-white rounded-[10px] hover:bg-[#c01850] transition-colors cursor-pointer w-full md:w-auto"
          style={{
            padding: "16px 0",
            fontSize: 18,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            lineHeight: "24px",
            boxShadow: "0px 10px 15px -3px rgba(218,27,97,0.2), 0px 4px 6px -4px rgba(218,27,97,0.2)",
            maxWidth: 351,
          }}
        >
          Send Message
          <img src={imgs.sendIcon} alt="" style={{ width: 19, height: 16 }} />
        </button>
      </form>
    </div>
  );
}

function FormField({ label, children, className = "" }) {
  return (
    <div className={`flex flex-col ${className}`} style={{ gap: 8 }}>
      <label
        className="font-['Poppins',sans-serif] text-[#334155]"
        style={{ fontSize: 18, lineHeight: "20px" }}
      >
        {label}
      </label>
      <div
        className="bg-white rounded-[10px] overflow-hidden"
        style={{ border: "1px solid #e2e8f0", padding: "13.5px 17px", minHeight: 47 }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Right panel: contact cards + map + service areas ─────────────────────
function ContactInfo() {
  return (
    <div className="flex flex-col flex-1" style={{ gap: 16 }}>
      {/* Contact detail cards */}
      {contactCards.map((card) => (
        <div
          key={card.label}
          className="rounded-[10px] flex items-center"
          style={{
            background: "#fff3e6",
            border: "1px solid #ffe3c3",
            padding: 17,
            gap: 16,
            height: 82,
          }}
        >
          <div className="shrink-0 flex items-center justify-center" style={{ width: 42, height: 42 }}>
            <img src={card.icon} alt={card.label} style={{ width: card.iconW, height: card.iconH, objectFit: "contain" }} />
          </div>
          <div>
            <p
              className="font-['Poppins',sans-serif] font-medium text-[#0f172a] m-0"
              style={{ fontSize: 18, lineHeight: "24px" }}
            >
              {card.label}
            </p>
            <p
              className="font-['Inter',sans-serif] text-[#475569] m-0"
              style={{ fontSize: 16, lineHeight: "24px" }}
            >
              {card.value}
            </p>
          </div>
        </div>
      ))}

      {/* Map image */}
      <div className="rounded-[10px] overflow-hidden" style={{ height: 223 }}>
        <img
          src={imgs.mapImage}
          alt="Service area map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Service areas card */}
      <div
        className="bg-white rounded-[10px]"
        style={{
          border: "1px solid rgba(182,195,52,0.42)",
          padding: "20px 24px",
          gap: 16,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          className="font-['Poppins',sans-serif] font-medium text-[#032b3a] m-0"
          style={{ fontSize: 20, lineHeight: "21.44px" }}
        >
          Service Areas
        </h3>
        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: "12px 12px" }}
        >
          {serviceAreas.map((area) => (
            <div key={area} className="flex items-center" style={{ gap: 8 }}>
              <img src={imgs.bullet} alt="" style={{ width: 8.33, height: 8.33, flexShrink: 0 }} />
              <span
                className="font-['Inter',sans-serif] text-black/60"
                style={{ fontSize: 16, lineHeight: "20px" }}
              >
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main two-column layout ────────────────────────────────────────────────
function ContactContent() {
  return (
    <section className="bg-[#fbfbfb] py-8 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
      <CTABanner />
    </>
  );
}
