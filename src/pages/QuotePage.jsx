import { useState } from "react";
import CTABanner from "../components/CTABanner";
import bonded from "../assets/bonded.svg";
import satisfaction from "../assets/satisfy.svg";
import friendly from "../assets/friendly.svg";
import addon from "../assets/addon.svg";
import estimated from "../assets/estimated.svg";
import area from "../assets/area.svg";
import downarrow from "../assets/downarrow.svg";

// ─── Assets ────────────────────────────────────────────────────────────────
const imgs = {
  bondedIcon: bonded,
  ecoIcon: friendly,
  guaranteeIcon: satisfaction,
  chevron: downarrow,
};

const pricingImages = {
  estimatedPricing: estimated,
  comparisonTable: area,
  addOnPricing: addon,
};

const trustBadges = [
  {
    icon: imgs.bondedIcon,
    title: "Bonded & Insured",
    desc: "Your peace of mind is our priority.",
  },
  {
    icon: imgs.ecoIcon,
    title: "Eco-Friendly",
    desc: "Safe for kids and pets.",
  },
  {
    icon: imgs.guaranteeIcon,
    title: "Satisfaction Guarantee",
    desc: "Not happy? We'll re-clean for free.",
  },
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

// ─── Form field helpers ────────────────────────────────────────────────────
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

// ─── Custom Rounded Checkbox ───────────────────────────────────────────────
function RoundedCheckbox({ name, checked, onChange }) {
  return (
    <label
      className="relative shrink-0 cursor-pointer"
      style={{ width: 20, height: 20 }}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-5 h-5 border-2 border-[#cbd5e1] rounded-[6px] bg-white peer-checked:bg-[#da1b61] peer-checked:border-[#da1b61] transition-all flex items-center justify-center">
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6L5 8.5L9.5 3.5"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </label>
  );
}

// ─── Progress Bar ──────────────────────────────────────────────────────────
function ProgressBar() {
  return (
    <div className="flex flex-col gap-2 mb-8 lg:mb-10">
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
  );
}

// ─── Left: Quote Form ──────────────────────────────────────────────────────
function QuoteFormLeft() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    serviceType: "",
    propertySize: "",
    date: "",
    time: "",
    addFogging: false,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 lg:gap-10">
      {/* ── Contact Details ── */}
      <div className="flex flex-col gap-5">
        <h2
          className="font-['Poppins',sans-serif] font-medium text-[#032b3a] m-0"
          style={{ fontSize: 20, lineHeight: "21.44px" }}
        >
          Contact details
        </h2>

        <div className="flex flex-col gap-5 lg:gap-6">
          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            <FormField label="Full Name" className="flex-1">
              <TextInput
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
              />
            </FormField>
            <FormField label="Phone Number" className="flex-1">
              <TextInput
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                type="tel"
              />
            </FormField>
          </div>

          <FormField label="Email Address">
            <TextInput
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              type="email"
            />
          </FormField>

          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            <FormField label="Your Address" className="flex-1">
              <TextInput
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="123 Main St"
              />
            </FormField>
            <FormField label="State" className="flex-1">
              <SelectInput
                name="state"
                value={form.state}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="IL">Illinois</option>
                <option value="MA">Massachusetts</option>
                <option value="NY">New York</option>
                <option value="CA">California</option>
              </SelectInput>
            </FormField>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            <FormField label="City" className="flex-1">
              <TextInput
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Chicago"
              />
            </FormField>
            <FormField label="Zip Code" className="flex-1">
              <TextInput
                name="zip"
                value={form.zip}
                onChange={handleChange}
                placeholder="60601"
              />
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
          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            <FormField label="Property Size" className="flex-1">
              <SelectInput
                name="propertySize"
                value={form.propertySize}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4+ BHK</option>
                <option value="villa">Villa / Independent House</option>
              </SelectInput>
            </FormField>
            <FormField label="Service Type" className="flex-1">
              <SelectInput
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="standard">Standard Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="movein">Move In/ Out Cleaning</option>
                <option value="recurring">Recurring Cleaning</option>
                <option value="postconstruction">Post-Construction</option>
                <option value="electrostatic">Electrostatic Cleaning</option>
              </SelectInput>
            </FormField>
          </div>

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
            <FormField label="Preferred Timings" className="flex-1">
              <SelectInput
                name="time"
                value={form.time}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                <option value="evening">Evening (4 PM – 8 PM)</option>
                <option value="night">Night (8 PM – 10 PM)</option>
              </SelectInput>
            </FormField>
          </div>
        </div>
      </div>

      {/* ── Add-ons + Notes ── */}
      <div className="flex flex-col gap-6">
        <label
          className="flex items-center justify-between rounded-[12px] cursor-pointer gap-3"
          style={{
            background: "rgba(182,195,52,0.14)",
            border: "1px solid rgba(218,27,97,0.1)",
            padding: "17px",
          }}
        >
          <div className="flex items-center gap-3 flex-1">
            <RoundedCheckbox
              name="addFogging"
              checked={form.addFogging}
              onChange={handleChange}
            />
            <div>
              <div
                className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1E293B]"
                style={{ fontSize: 14, lineHeight: "20px" }}
              >
                Add Sanitizing Fogging
              </div>
              <div
                className="font-['Plus_Jakarta_Sans',sans-serif] text-[#64748B]"
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
          boxShadow:
            "0px 10px 15px -3px rgba(218,27,97,0.2), 0px 4px 6px -4px rgba(218,27,97,0.2)",
        }}
      >
        Confirm and Get Quote
      </button>
    </form>
  );
}

// ─── Right: Pricing Panel ─────────────────────────────────────────────────
function PricingPanel() {
  return (
    <div className="flex flex-col gap-6">
      {/* ── Legend Chips (static, non-interactive) ── */}
      <div className="flex items-center gap-4">
        <div
          className="flex items-center gap-3 border border-[#E2E8F0] bg-white rounded-[12px]"
          style={{
            padding: "14px 24px",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          <span
            className="shrink-0 rounded-full"
            style={{ width: 14, height: 14, backgroundColor: "#b6c334" }}
          />
          <span
            className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#B6C334] whitespace-nowrap"
            style={{ fontSize: 15, lineHeight: "22px" }}
          >
            Standard Office/Retail
          </span>
        </div>

        <div
          className="flex items-center gap-3 border border-[#E2E8F0] bg-white rounded-[12px]"
          style={{
            padding: "14px 24px",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          <span
            className="shrink-0 rounded-full"
            style={{ width: 14, height: 14, backgroundColor: "#da1b61" }}
          />
          <span
            className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#da1b61] whitespace-nowrap"
            style={{ fontSize: 15, lineHeight: "22px" }}
          >
            Deep/Detail Cleaning
          </span>
        </div>
      </div>

      {/* ── Image 1: Estimated Commercial Pricing card ── */}
      <img
        src={pricingImages.estimatedPricing}
        alt="Estimated Commercial Pricing per sq ft"
        className="w-full "
      />

      {/* ── Image 2: Comparison Table ── */}
      <img
        src={pricingImages.comparisonTable}
        alt="Area Task comparison - Standard vs Deep Detail"
        className="w-full "
      />

      {/* ── Image 3: Add-on Pricing ── */}
      <img
        src={pricingImages.addOnPricing}
        alt="Add-on services and pricing"
        className="w-full "
      />
    </div>
  );
}

// ─── Trust Badges ──────────────────────────────────────────────────────────
function TrustBadges() {
  return (
    <section className="py-8 lg:py-12 bg-[#fbfbfb]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-28 flex-wrap">
        {trustBadges.map((badge) => (
          <div
            key={badge.title}
            className="flex flex-col items-center gap-1.5 w-full sm:w-auto"
            style={{ maxWidth: 269 }}
          >
            <div
              className="bg-[#b6c334] flex items-center justify-center rounded-[10px] shrink-0"
              style={{ width: 40, height: 40 }}
            >
              <img
                src={badge.icon}
                alt=""
                style={{ width: 16, height: 20, objectFit: "contain" }}
              />
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

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          {/* ── Left column: Progress + Form ── */}
          <div className="w-full lg:w-[55%] xl:w-[50%]">
            <ProgressBar />
            <QuoteFormLeft />
          </div>

          {/* ── Right column: Pricing panel (sticky on scroll) ── */}
          <div className="w-full lg:w-[45%] xl:w-[50%] lg:sticky lg:top-8 lg:self-start">
            <PricingPanel />
          </div>
        </div>
      </div>

      <TrustBadges />
      <CTABanner />
    </>
  );
}
