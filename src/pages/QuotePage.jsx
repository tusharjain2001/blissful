import { useState, useEffect } from "react";
import CTABanner from "../components/CTABanner";
import SquarePaymentModal from "../components/SquarePaymentModal";
import bonded from "../assets/bonded.svg";
import satisfaction from "../assets/satisfy.svg";
import friendly from "../assets/friendly.svg";
import area from "../assets/area.svg";
import commercialIcon from "../assets/commercial.svg";
import residentialIcon from "../assets/residential.svg";
import downarrow from "../assets/downarrow.svg";

const imgs = {
  bondedIcon: bonded,
  ecoIcon: friendly,
  guaranteeIcon: satisfaction,
  chevron: downarrow,
};

const pricingImages = {
  comparisonTable: area,
};

const pricingTypeImages = {
  commercial: commercialIcon,
  residential: residentialIcon,
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

const initialForm = {
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
  notes: "",
  addFogging: false,
};

const propertySizeOptions = [
  { value: "1bhk", label: "1 BHK" },
  { value: "2bhk", label: "2 BHK" },
  { value: "3bhk", label: "3 BHK" },
  { value: "4bhk", label: "4+ BHK" },
  { value: "villa", label: "Villa / Independent House" },
];

const serviceTypeOptions = [
  { value: "standard", label: "Standard Cleaning" },
  { value: "deep", label: "Deep Cleaning" },
  { value: "movein", label: "Move In/ Out Cleaning" },
  { value: "recurring", label: "Recurring Cleaning" },
  { value: "postconstruction", label: "Post-Construction" },
  { value: "electrostatic", label: "Electrostatic Cleaning" },
];

const timeOptions = [
  { value: "morning", label: "Morning (8am - 12pm)" },
  { value: "afternoon", label: "Afternoon (12 PM - 4 PM)" },
  { value: "evening", label: "Evening (4 PM - 8 PM)" },
  { value: "night", label: "Night (8 PM - 10 PM)" },
];

const propertyPricing = {
  "1bhk": 180,
  "2bhk": 240,
  "3bhk": 320,
  "4bhk": 420,
  villa: 550,
};

const serviceMultipliers = {
  standard: 1,
  deep: 1.35,
  movein: 1.5,
  recurring: 0.9,
  postconstruction: 1.7,
  electrostatic: 1.2,
};

function getOptionLabel(options, value, fallback = "") {
  return options.find((option) => option.value === value)?.label || fallback;
}

function formatDate(date) {
  if (!date) return "dd / mm / yy";

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

function calculateQuote(form) {
  const propertyBase = propertyPricing[form.propertySize] || 0;
  const multiplier = serviceMultipliers[form.serviceType] || 1;
  const serviceAmount = Math.round(propertyBase * multiplier);
  const addOnAmount = form.addFogging ? 99 : 0;

  return {
    serviceAmount,
    addOnAmount,
    totalAmount: serviceAmount + addOnAmount,
  };
}

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

function TextInput({ name, value, onChange, placeholder, type = "text", disabled = false }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full bg-white rounded-[12px] border border-[#e2e8f0] font-['Inter',sans-serif] text-[#6b7280] outline-none disabled:bg-white"
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

function ProgressBar({ step = 1 }) {
  const isPaymentStep = step === 2;

  return (
    <div className="flex flex-col gap-2 mb-8 lg:mb-10">
      <div className="flex items-end justify-between">
        <span
          className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#b6c334] uppercase tracking-[0.35px]"
          style={{ fontSize: 14, lineHeight: "20px" }}
        >
          {isPaymentStep ? "Step 2 of 2: Payment" : "Step 1 of 2: Details"}
        </span>
        <span
          className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#94a3b8]"
          style={{ fontSize: 12, lineHeight: "16px" }}
        >
          {isPaymentStep ? "100% Complete" : "50% Complete"}
        </span>
      </div>
      <div className="bg-white h-2 rounded-full overflow-hidden">
        <div
          className={`bg-[#b6c334] h-full rounded-full transition-all duration-300 ${
            isPaymentStep ? "w-full" : "w-1/2"
          }`}
        />
      </div>
    </div>
  );
}

function RoundedCheckbox({ name, checked, onChange }) {
  return (
    <div
      onClick={() => onChange({ target: { name, type: "checkbox", checked: !checked } })}
      className="shrink-0 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors"
      style={{
        width: 20,
        height: 20,
        borderColor: checked ? "#da1b61" : "#cbd5e1",
        backgroundColor: checked ? "#da1b61" : "white",
      }}
    >
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

function QuoteFormLeft({ form, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 lg:gap-10">
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
              <TextInput name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" />
            </FormField>
            <FormField label="Phone Number" className="flex-1">
              <TextInput
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="(555) 000-0000"
                type="tel"
              />
            </FormField>
          </div>

          <FormField label="Email Address">
            <TextInput
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="jane@example.com"
              type="email"
            />
          </FormField>

          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            <FormField label="Your Address" className="flex-1">
              <TextInput name="address" value={form.address} onChange={onChange} placeholder="123 Main St" />
            </FormField>
            <FormField label="State" className="flex-1">
              <SelectInput name="state" value={form.state} onChange={onChange}>
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
              <TextInput name="city" value={form.city} onChange={onChange} placeholder="Chicago" />
            </FormField>
            <FormField label="Zip Code" className="flex-1">
              <TextInput name="zip" value={form.zip} onChange={onChange} placeholder="60601" />
            </FormField>
          </div>
        </div>
      </div>

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
              <SelectInput name="propertySize" value={form.propertySize} onChange={onChange}>
                <option value="">Select</option>
                {propertySizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectInput>
            </FormField>
            <FormField label="Service Type" className="flex-1">
              <SelectInput name="serviceType" value={form.serviceType} onChange={onChange}>
                <option value="">Select</option>
                {serviceTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectInput>
            </FormField>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            <FormField label="Preferred Date" className="flex-1">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
                className="w-full bg-white rounded-[12px] border border-[#e2e8f0] font-['Plus_Jakarta_Sans',sans-serif] text-[#7c7c7c] outline-none cursor-pointer"
                style={{ fontSize: 16, padding: "13.5px 17px", height: 55 }}
              />
            </FormField>
            <FormField label="Preferred Timings" className="flex-1">
              <SelectInput name="time" value={form.time} onChange={onChange}>
                <option value="">Select</option>
                {timeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectInput>
            </FormField>
          </div>
        </div>
      </div>

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
            <RoundedCheckbox name="addFogging" checked={form.addFogging} onChange={onChange} />
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
            +$99
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
            onChange={onChange}
            placeholder="Tell us about pets, key access, or specific focus areas..."
            rows={4}
            className="w-full bg-white rounded-[12px] border border-[#e2e8f0] font-['Plus_Jakarta_Sans',sans-serif] text-[#6b7280] outline-none resize-none"
            style={{ fontSize: 16, lineHeight: "24px", padding: "17px" }}
          />
        </div>
      </div>

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

function SummaryField({ label, value }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-['Poppins',sans-serif] text-[#334155]"
        style={{ fontSize: 18, lineHeight: "20px" }}
      >
        {label}
      </label>
      <TextInput value={value} disabled />
    </div>
  );
}

function BookingSummaryLeft({ form, onBack }) {
  const serviceType = getOptionLabel(serviceTypeOptions, form.serviceType, "Standard Cleaning");
  const propertySize = getOptionLabel(propertySizeOptions, form.propertySize, "Studio / 1 Bedroom");
  const preferredTime = getOptionLabel(timeOptions, form.time, "Morning (8am - 12pm)");
  const fullAddress = [form.address, form.city, form.state, form.zip].filter(Boolean).join(", ");

  return (
    <div className="flex flex-col gap-7">
      <button
        type="button"
        onClick={onBack}
        className="w-fit flex items-center gap-2 bg-transparent border-0 p-0 cursor-pointer"
      >
        <span className="w-6 h-6 rounded-full border border-[#cbd5e1] flex items-center justify-center text-[#475569]">
          &#8249;
        </span>
        <span
          className="font-['Poppins',sans-serif] font-medium text-[#032b3a]"
          style={{ fontSize: 20, lineHeight: "21.44px" }}
        >
          Booking Summary
        </span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <SummaryField label="Service" value={form.name || "Jane Doe"} />
        <SummaryField label="Date & Time" value={form.phone || "(555) 000-0000"} />
        <div className="md:col-span-2">
          <SummaryField label="Address" value={form.email || fullAddress || "jane@example.com"} />
        </div>
        <SummaryField label="Service Type" value={serviceType} />
        <SummaryField label="Property Size" value={propertySize} />
        <SummaryField label="Preferred Date" value={formatDate(form.date)} />
        <SummaryField label="Preferred Time" value={preferredTime} />
      </div>
    </div>
  );
}

function PricingPanel({ selectedType, onTypeChange }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        {[
          { key: "commercial", label: "Commercial" },
          { key: "residential", label: "Residential" },
        ].map((tab) => {
          const active = selectedType === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onTypeChange(tab.key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-[#da1b61] text-white border border-[#da1b61]"
                  : "bg-white text-[#334155] border border-[#E2E8F0]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <img
        src={pricingTypeImages[selectedType]}
        alt={`${selectedType === "commercial" ? "Commercial" : "Residential"} pricing`}
        className="w-full"
      />

      <img
        src={pricingImages.comparisonTable}
        alt="Area Task comparison - Standard vs Deep Detail"
        className="w-full"
      />

      <div className="bg-white rounded-[10px]" style={{ border: "1px solid #e2e8f0" }}>
        <div
          style={{
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #f1f5f9",
          }}
        >
          <span className="font-['Poppins',sans-serif] text-black font-medium" style={{ fontSize: 18 }}>
            Add on
          </span>
          <span className="font-['Poppins',sans-serif] text-black" style={{ fontSize: 18 }}>
            Pricing
          </span>
        </div>
        <div style={{ padding: "0 24px" }}>
          {[
            "Interior Window Cleaning",
            "Post-Construction Cleanup",
            "Supply Restocking",
            "Pressure Washing",
          ].map((item, i, arr) => (
            <div
              key={item}
              className="flex items-center justify-between"
              style={{
                padding: "18px 0",
                borderBottom: i < arr.length - 1 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <span className="font-['Poppins',sans-serif] text-[#787878]" style={{ fontSize: 14 }}>
                {item}
              </span>
              <span className="font-['Poppins',sans-serif] text-[#787878]" style={{ fontSize: 14 }}>
                By quote
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PaymentSummaryPanel({ form, onPay }) {
  const quote = calculateQuote(form);

  return (
    <div
      className="bg-white rounded-[18px] shadow-sm"
      style={{ border: "1px solid #eadfd5", padding: 18 }}
    >
      <div className="flex flex-col gap-5 min-h-[324px]">
        <h3
          className="font-['Poppins',sans-serif] font-semibold text-[#111827] m-0"
          style={{ fontSize: 18, lineHeight: "24px" }}
        >
          Payment Summary
        </h3>

        <div className="flex flex-col gap-3 text-[#334155] font-['Inter',sans-serif]">
          <div className="flex items-center justify-between" style={{ fontSize: 18, lineHeight: "24px" }}>
            <span>Service Amount</span>
            <span>${quote.serviceAmount}</span>
          </div>
          <div className="flex items-center justify-between" style={{ fontSize: 18, lineHeight: "24px" }}>
            <span>Add on</span>
            <span>{quote.addOnAmount ? `+$${quote.addOnAmount}` : "$0"}</span>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-5">
          <div className="border-t border-[#d7d7d7] pt-5 flex items-center justify-between gap-4">
            <span
              className="font-['Poppins',sans-serif] font-medium text-[#032b3a]"
              style={{ fontSize: 18, lineHeight: "24px" }}
            >
              Total Amount
            </span>
            <span
              className="font-['Poppins',sans-serif] font-semibold text-[#111827]"
              style={{ fontSize: 36, lineHeight: "40px" }}
            >
              ${quote.totalAmount}
            </span>
          </div>

          <button
            type="button"
            onClick={onPay}
            className="w-full bg-[#da1b61] text-white rounded-[10px] font-['Poppins',sans-serif] font-medium hover:bg-[#c01850] transition-colors cursor-pointer"
            style={{ fontSize: 18, lineHeight: "28px", padding: "14px 0" }}
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
}

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

export default function QuotePage() {
  const [pricingType, setPricingType] = useState("commercial");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowToast(true);
    setForm(initialForm);
    setStep(1);
  };

  const quote = calculateQuote(form);

  return (
    <>
      <QuoteHero />

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          <div className="w-full lg:w-[55%] xl:w-[50%]">
            <ProgressBar step={step} />
            {step === 1 ? (
              <QuoteFormLeft form={form} onChange={handleChange} onSubmit={handleQuoteSubmit} />
            ) : (
              <BookingSummaryLeft form={form} onBack={() => setStep(1)} />
            )}
          </div>

          <div className="w-full lg:w-[45%] xl:w-[50%] lg:sticky lg:top-8 lg:self-start">
            {step === 1 ? (
              <PricingPanel selectedType={pricingType} onTypeChange={setPricingType} />
            ) : (
              <PaymentSummaryPanel form={form} onPay={() => setShowPaymentModal(true)} />
            )}
          </div>
        </div>
      </div>

      <TrustBadges />
      <CTABanner />

      {showPaymentModal && (
        <SquarePaymentModal
          amount={quote.totalAmount}
          form={form}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}

      {showToast && (
        <Toast message="Payment Successful!" onDone={() => setShowToast(false)} />
      )}
    </>
  );
}
