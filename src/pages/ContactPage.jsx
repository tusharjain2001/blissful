import { useState, useEffect } from "react";
import CTABanner from "../components/CTABanner";

// ─── Assets ────────────────────────────────────────────────────────────────
import phoneIcon from "../assets/contact-phone-icon.svg";
import emailIcon from "../assets/contact-email-icon.svg";
import addressIcon from "../assets/contact-address-icon.svg";
import sendIcon from "../assets/contact-send-icon.svg";
import mapImage from "../assets/contact-map.jpg";
import locationPin from "../assets/location.svg";
import calendarImage from "../assets/contact-calendar.png";
import bulletIcon from "../assets/contact-bullet.svg";

const contactCards = [
  { icon: phoneIcon,   label: "Phone",   value: "774-388-6228" },
  { icon: emailIcon,   label: "Email",   value: "blissfulcleaningma@gmail.com" },
  { icon: addressIcon, label: "Address", value: "Natick, Massachusetts 01760" },
];

const serviceAreas = [
  "Boston",
  "Boston North",
  "Boston South",
  "Metro West",
  "Northern Rhode Island",
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

// ─── Contact form (left panel) ─────────────────────────────────────────────
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

function Toast({ message, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 5000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className="fixed top-6 left-1/2 z-50 flex items-center gap-3 bg-[#111827] text-white rounded-xl shadow-lg"
      style={{ transform: "translateX(-50%)", padding: "14px 24px", minWidth: 260 }}
    >
      <span
        className="flex items-center justify-center rounded-full bg-[#22c55e] shrink-0"
        style={{ width: 24, height: 24, fontSize: 14 }}
      >
        ✓
      </span>
      <span className="font-['Poppins',sans-serif]" style={{ fontSize: 15 }}>
        {message}
      </span>
      <button
        onClick={onDone}
        className="ml-auto bg-transparent border-0 text-white/60 hover:text-white cursor-pointer"
        style={{ fontSize: 18, lineHeight: 1 }}
      >
        &times;
      </button>
    </div>
  );
}

function ContactForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "", phone: "", subject: "", message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setForm({ name: "", phone: "", subject: "", message: "" });
        setStatus("idle");
        onSuccess();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="bg-white rounded-[10px] flex flex-col w-full lg:flex-[0_0_648px]"
      style={{ border: "1px solid rgba(182,195,52,0.42)", gap: 0 }}
    >
      {/* ── Form fields ── */}
      <div style={{ padding: "32px 24px 28px", display: "flex", flexDirection: "column", gap: 28 }}>
        <h2
          className="font-['Poppins',sans-serif] font-medium text-[#032b3a] m-0"
          style={{ fontSize: 20, lineHeight: "21.44px" }}
        >
          Send us a message
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 28 }}>
          {/* Row: Name + Phone */}
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

          {/* Status messages */}
          {status === "error" && (
            <p className="font-['Inter',sans-serif] text-red-600" style={{ fontSize: 14 }}>
              Something went wrong. Please try again.
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center gap-2 bg-[#da1b61] text-white rounded-[10px] hover:bg-[#c01850] transition-colors cursor-pointer w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              padding: "16px 0",
              fontSize: 20,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              lineHeight: "24px",
              boxShadow: "0px 10px 15px -3px rgba(218,27,97,0.2), 0px 4px 6px -4px rgba(218,27,97,0.2)",
              maxWidth: 351,
            }}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
            {status !== "loading" && <img src={sendIcon} alt="" style={{ width: 19, height: 16 }} />}
          </button>
        </form>
      </div>

      {/* ── Contact detail cards ── */}
      <div style={{ padding: "0 24px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
        {contactCards.map((card) => (
          <div
            key={card.label}
            className="rounded-[10px] flex items-center"
            style={{
              background: "#fff3e6",
              border: "1px solid #ffe3c3",
              padding: 17,
              gap: 16,
              height: 88,
            }}
          >
            <div className="shrink-0 flex items-center justify-center" style={{ width: 44, height: 44 }}>
              <img src={card.icon} alt={card.label} className="w-full h-full object-contain" />
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
      </div>
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

// ─── Right panel: calendar + map + service areas ───────────────────────────
function ContactInfo() {
  return (
    <div className="flex flex-col flex-1" style={{ gap: 16 }}>
      {/* Calendar image */}
      <div
        className="rounded-[10px] overflow-hidden"
        style={{ border: "1px solid #e2e8f0" }}
      >
        <img
          src={calendarImage}
          alt="Select a date and time"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Map image */}
      <div className="rounded-[10px] overflow-hidden relative" style={{ height: 185 }}>
        <img
          src={mapImage}
          alt="Service area map"
          className="w-full h-full object-cover"
        />
        <img
          src={locationPin}
          alt="Location"
          className="absolute"
          style={{ width: 34, height: 34, left: "50%", top: "45%", transform: "translate(-50%, -100%)" }}
        />
      </div>

      {/* Service areas card */}
      <div
        className="bg-white rounded-[10px]"
        style={{
          border: "1px solid rgba(182,195,52,0.42)",
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
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
              <img src={bulletIcon} alt="" style={{ width: 8.33, height: 8.33, flexShrink: 0 }} />
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

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <ContactHero />
      <section className="bg-[#fbfbfb] py-8 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          <ContactForm onSuccess={() => setShowToast(true)} />
          <ContactInfo />
        </div>
      </section>
      <CTABanner />
      {showToast && (
        <Toast message="Message submitted successfully!" onDone={() => setShowToast(false)} />
      )}
    </>
  );
}
