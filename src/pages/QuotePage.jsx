import { useState } from "react";
import CTABanner from "../components/CTABanner";

// ─── Assets ────────────────────────────────────────────────────────────────
const imgs = {
  bondedIcon:    "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293688/blissful-cleaning/d49c588e-8052-4281-99ab-85feca7878f8",
  ecoIcon:       "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293690/blissful-cleaning/67282ccf-24b8-46a5-ba75-c29f37c57a30",
  guaranteeIcon: "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293691/blissful-cleaning/86fef6ab-95a3-4b60-9f69-f187ce58a169",
  chevron:       "https://res.cloudinary.com/dgr33gxhd/raw/upload/v1774293693/blissful-cleaning/aa946a92-2541-4497-9aa5-4f7879ced33d",
};

const trustBadges = [
  { icon: imgs.bondedIcon,    title: "Bonded & Insured",       desc: "Your peace of mind is our priority." },
  { icon: imgs.ecoIcon,       title: "Eco-Friendly",           desc: "Safe for kids and pets." },
  { icon: imgs.guaranteeIcon, title: "Satisfaction Guarantee", desc: "Not happy? We'll re-clean for free." },
];

// ─── Hero ──────────────────────────────────────────────────────────────────
function QuoteHero() {
  return (
    <section
      className="py-10 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(209deg, rgb(255,221,183) 3%, rgb(255,229,200) 45%, rgb(255,255,255) 98%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col items-center text-center gap-2.5">
        <h1 className="font-['Poppins',sans-serif] m-0 text-3xl md:text-4xl lg:text-[48px] lg:leading-[72px]">
          <span className="font-semibold text-[#0f172a]">Book Your </span>
          <span className="font-normal text-[#da1b61]">Cleaning</span>
        </h1>
        <p className="font-['Inter',sans-serif] text-[#616161] m-0 text-sm lg:text-[18px] lg:leading-[26px]">
          Get an instant quote and schedule your sparkle in seconds.
        </p>
      </div>
    </section>
  );
}

// ─── Form field ────────────────────────────────────────────────────────────
function FormField({ label, children, className = "" }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        className="font-['Poppins',sans-serif] text-[#334155]"
        style={{ fontSize: 18, lineHeight: "20px" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function TextInput({ name, value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-white rounded-[12px] border border-[#e2e8f0] font-['Inter',sans-serif] text-[#6b7280] outline-none"
      style={{ fontSize: 16, padding: "13.5px 17px", height: 55 }}
    />
  );
}

function SelectInput({ name, value, onChange, children }) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white rounded-[12px] border border-[#e2e8f0] font-['Inter',sans-serif] text-[#7c7c7c] outline-none appearance-none cursor-pointer"
        style={{ fontSize: 16, padding: "13.5px 17px", height: 55 }}
      >
        {children}
      </select>
      <img
        src={imgs.chevron}
        alt=""
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
        style={{ width: 24, height: 24 }}
      />
    </div>
  );
}

// ─── Main form ─────────────────────────────────────────────────────────────
function QuoteForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    address: "", state: "", city: "", zip: "",
    serviceType: "", propertySize: "", date: "", time: "",
    addFogging: false, notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submit
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-8 lg:py-12">
      {/* Progress bar */}
      <div
        className="flex flex-col gap-2 rounded-[10px] mb-8 lg:mb-10"
        style={{ padding: "24px 20px 16px" }}
      >
        <div className="flex items-end justify-between">
          <span
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#b6c334] uppercase tracking-[0.35px]"
            style={{ fontSize: 14, lineHeight: "20px" }}
          >
            Step 1 of 2: Details
          </span>
          <span
            className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#94a3b8]"
            style={{ fontSize: 12, lineHeight: "16px" }}
          >
            50% Complete
          </span>
        </div>
        <div className="bg-white h-2 rounded-full overflow-hidden">
          <div className="bg-[#b6c334] h-full w-1/2 rounded-full" />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 lg:gap-10 max-w-[872px] mx-auto"
      >
        {/* ── Contact Details ── */}
        <div className="flex flex-col gap-5">
          <h2
            className="font-['Poppins',sans-serif] font-medium text-[#032b3a] m-0"
            style={{ fontSize: 20, lineHeight: "21.44px" }}
          >
            Contact details
          </h2>

          <div className="flex flex-col gap-5 lg:gap-6">
            {/* Name + Phone — stacked on mobile, side by side on md+ */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-8">
              <FormField label="Full Name" className="flex-1">
                <TextInput name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" />
              </FormField>
              <FormField label="Phone Number" className="flex-1">
                <TextInput name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" type="tel" />
              </FormField>
            </div>

            {/* Email */}
            <FormField label="Email Address">
              <TextInput name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" type="email" />
            </FormField>

            {/* Address + State — stacked on mobile */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-8">
              <FormField label="Your Address" className="flex-1">
                <TextInput name="address" value={form.address} onChange={handleChange} placeholder="123 Main St" />
              </FormField>
              <FormField label="State" className="flex-1">
                <SelectInput name="state" value={form.state} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="IL">Illinois</option>
                  <option value="MA">Massachusetts</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                </SelectInput>
              </FormField>
            </div>

            {/* City + Zip — stacked on mobile */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-8">
              <FormField label="City" className="flex-1">
                <TextInput name="city" value={form.city} onChange={handleChange} placeholder="Chicago" />
              </FormField>
              <FormField label="Zip Code" className="flex-1">
                <TextInput name="zip" value={form.zip} onChange={handleChange} placeholder="60601" />
              </FormField>
            </div>
          </div>
        </div>

        {/* ── Service Details ── */}
        <div className="flex flex-col gap-5">
          <h2
            className="font-['Poppins',sans-serif] font-medium text-[#032b3a] m-0"
            style={{ fontSize: 20, lineHeight: "21.44px" }}
          >
            Service Details
          </h2>

          <div className="flex flex-col gap-5 lg:gap-6">
            {/* Service Type + Property Size — stacked on mobile */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-8">
              <FormField label="Service Type" className="flex-1">
                <SelectInput name="serviceType" value={form.serviceType} onChange={handleChange}>
                  <option value="">Standard Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="movein">Move In/Out Cleaning</option>
                  <option value="office">Office Cleaning</option>
                  <option value="airbnb">Airbnb Cleaning</option>
                </SelectInput>
              </FormField>
              <FormField label="Property Size" className="flex-1">
                <SelectInput name="propertySize" value={form.propertySize} onChange={handleChange}>
                  <option value="">Studio / 1 Bedroom</option>
                  <option value="2bed">2 Bedrooms</option>
                  <option value="3bed">3 Bedrooms</option>
                  <option value="4bed">4+ Bedrooms</option>
                </SelectInput>
              </FormField>
            </div>

            {/* Preferred Date + Time — stacked on mobile */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-8">
              <FormField label="Preferred Date" className="flex-1">
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full bg-white rounded-[12px] border border-[#e2e8f0] font-['Plus_Jakarta_Sans',sans-serif] text-[#7c7c7c] outline-none cursor-pointer"
                  style={{ fontSize: 16, padding: "13.5px 17px", height: 55 }}
                />
              </FormField>
              <FormField label="Preferred Time" className="flex-1">
                <SelectInput name="time" value={form.time} onChange={handleChange}>
                  <option value="">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="evening">Evening (4pm - 8pm)</option>
                </SelectInput>
              </FormField>
            </div>
          </div>
        </div>

        {/* ── Add-ons + Notes ── */}
        <div className="flex flex-col gap-6">
          {/* Add Sanitizing Fogging */}
          <label
            className="flex items-center justify-between rounded-[12px] cursor-pointer gap-3"
            style={{
              background: "rgba(182,195,52,0.14)",
              border: "1px solid rgba(218,27,97,0.1)",
              padding: "17px",
            }}
          >
            <div className="flex items-center gap-3 flex-1">
              <input
                type="checkbox"
                name="addFogging"
                checked={form.addFogging}
                onChange={handleChange}
                className="w-5 h-5 rounded-lg border border-[#cbd5e1] cursor-pointer accent-[#da1b61] shrink-0"
              />
              <div>
                <div
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#1e293b]"
                  style={{ fontSize: 14, lineHeight: "20px" }}
                >
                  Add Sanitizing Fogging
                </div>
                <div
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[#64748b]"
                  style={{ fontSize: 12, lineHeight: "16px" }}
                >
                  Hospital-grade disinfection for your entire home.
                </div>
              </div>
            </div>
            <span
              className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#da1b61] shrink-0"
              style={{ fontSize: 16, lineHeight: "24px" }}
            >
              +$199
            </span>
          </label>

          {/* Additional Notes */}
          <div className="flex flex-col gap-2">
            <label
              className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#334155]"
              style={{ fontSize: 14, lineHeight: "20px" }}
            >
              Additional Notes
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Tell us about pets, key access, or specific focus areas..."
              rows={4}
              className="w-full bg-white rounded-[12px] border border-[#e2e8f0] font-['Plus_Jakarta_Sans',sans-serif] text-[#6b7280] outline-none resize-none"
              style={{ fontSize: 16, lineHeight: "24px", padding: "17px" }}
            />
          </div>
        </div>

        {/* ── Submit ── */}
        <button
          type="submit"
          className="w-full bg-[#da1b61] text-white rounded-[10px] font-['Poppins',sans-serif] font-medium hover:bg-[#c01850] transition-colors cursor-pointer"
          style={{
            fontSize: 18,
            lineHeight: "28px",
            padding: "14px 0",
            boxShadow: "0px 10px 15px -3px rgba(218,27,97,0.2), 0px 4px 6px -4px rgba(218,27,97,0.2)",
          }}
        >
          Confirm and Get Quote
        </button>
      </form>
    </div>
  );
}

// ─── Trust Badges ──────────────────────────────────────────────────────────
function TrustBadges() {
  return (
    <section className="py-8 lg:py-12 bg-[#fbfbfb]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-28 flex-wrap">
        {trustBadges.map((badge) => (
          <div key={badge.title} className="flex flex-col items-center gap-1.5 w-full sm:w-auto" style={{ maxWidth: 269 }}>
            <div
              className="bg-[#b6c334] flex items-center justify-center rounded-[10px] shrink-0"
              style={{ width: 40, height: 40 }}
            >
              <img src={badge.icon} alt="" style={{ width: 16, height: 20, objectFit: "contain" }} />
            </div>
            <p
              className="font-['Poppins',sans-serif] font-medium text-[#0f172a] m-0 text-center"
              style={{ fontSize: 18, lineHeight: "24px" }}
            >
              {badge.title}
            </p>
            <p
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[#475569] m-0 text-center"
              style={{ fontSize: 14, lineHeight: "20px" }}
            >
              {badge.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function QuotePage() {
  return (
    <>
      <QuoteHero />
      <QuoteForm />
      <TrustBadges />
      <CTABanner />
    </>
  );
}
