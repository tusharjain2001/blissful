import { useState } from "react";
import CTABanner from "../components/CTABanner";
import search from "../assets/search.svg";
import pinkuparrow from "../assets/pinkuparrow.svg";

// ─── Assets ────────────────────────────────────────────────────────────────
const imgs = {
  searchIcon: search,
  accordionBtn: pinkuparrow,
};

// ─── FAQ data ───────────────────────────────────────────────────────────────
const categories = [
  "General",
  "Services",
  "Pricing & Booking",
  "Pet Friendly",
  "Safety",
];

const faqs = [
  {
    category: "General",
    question: "What is included in a standard clean?",
    answer:
      "Our standard clean covers all the essentials: dusting all accessible surfaces, vacuuming and mopping floors, cleaning mirrors and glass, sanitizing bathroom fixtures, and a detailed kitchen surface wipe-down including the exterior of appliances.",
  },
  {
    category: "General",
    question: "Are your cleaning products safe for pets?",
    answer:
      "Yes, our cleaning methods are safe for both your family and your pets. We take extra care to use products and techniques that ensure a clean and comfortable environment for everyone in your home.",
  },
  {
    category: "General",
    question: "Do I need to be home during the cleaning?",
    answer:
      "No, you don’t need to be home during the cleaning. Many of our clients provide access instructions in advance, and our team handles the rest with care and professionalism.",
  },
  {
    category: "General",
    question: "How do I change or cancel my booking?",
    answer:
      "If you need to reschedule or cancel your booking, simply contact us as soon as possible via phone or email. We’ll be happy to assist you with any changes.",
  },
  {
    category: "General",
    question: "What is your 100% satisfaction guarantee?",
    answer:
      "Your satisfaction is our top priority. If you’re not completely happy with the service, let us know, and we’ll make it right by addressing your concerns promptly.",
  },
];

// ─── Accordion item ─────────────────────────────────────────────────────────
function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="bg-white rounded-[10px] overflow-hidden"
      style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 lg:p-6 cursor-pointer bg-transparent border-0 text-left gap-3"
      >
        <span className="font-['Poppins',sans-serif] font-medium text-[#0f172a] text-base lg:text-[20px] lg:leading-[28px]">
          {question}
        </span>
        <img
          src={imgs.accordionBtn}
          alt=""
          style={{
            width: 28,
            height: 28,
            flexShrink: 0,
            transform: isOpen ? "scaleY(-1)" : "none",
            transition: "transform 0.2s ease",
          }}
        />
      </button>

      {isOpen && (
        <div className="px-4 lg:px-6 pb-4 lg:pb-6">
          <p
            className="font-['Inter',sans-serif] text-[#7c7c7c] m-0"
            style={{ fontSize: 16, lineHeight: "26px" }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function FAQHero({ search, onSearch, activeCategory, onCategory }) {
  return (
    <section
      className="py-10 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(219deg, rgb(255,221,183) 3%, rgb(255,229,200) 45%, rgb(255,255,255) 98%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h1 className="font-['Poppins',sans-serif] m-0 text-3xl md:text-4xl lg:text-[48px] lg:leading-[72px]">
            <span className="font-semibold text-[#0f172a]">
              Frequently Asked{" "}
            </span>
            <span className="font-normal text-[#da1b61]">Questions</span>
          </h1>
          <p className="font-['Satoshi',sans-serif] text-black m-0 text-sm lg:text-base lg:leading-[26px]">
            Find answers to everything you need to know about our blissful
            cleaning services.
          </p>
        </div>

        {/* Search bar */}
        <div
          className="bg-white flex items-center gap-2 rounded-[14px] w-full"
          style={{
            maxWidth: 703,
            padding: "16px 20px",
            boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src={imgs.searchIcon}
            alt=""
            style={{ width: 24, height: 24, flexShrink: 0 }}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for a question..."
            className="flex-1 outline-none bg-transparent font-['Inter',sans-serif] text-[#7c7c7c] placeholder:text-[#7c7c7c]"
            style={{ fontSize: 16 }}
          />
        </div>

        {/* Category tabs — scrollable on mobile */}
        <div className="flex items-center gap-2 lg:gap-3 pt-2 flex-wrap justify-center w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategory(cat)}
              className="font-['Inter',sans-serif] rounded-[10px] cursor-pointer border-0 transition-colors text-sm lg:text-base whitespace-nowrap"
              style={{
                lineHeight: "24px",
                padding: "8px 16px",
                background: activeCategory === cat ? "#b6c334" : "#ffffff",
                color: activeCategory === cat ? "#ffffff" : "#7c7c7c",
                boxShadow:
                  activeCategory === cat
                    ? "0px 1px 2px 0px rgba(0,0,0,0.05)"
                    : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("General");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((faq) => {
    const matchesCategory = faq.category === activeCategory;
    const matchesSearch =
      search.trim() === "" ||
      faq.question.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setOpenIndex(0);
  };

  return (
    <>
      <FAQHero
        search={search}
        onSearch={setSearch}
        activeCategory={activeCategory}
        onCategory={handleCategory}
      />

      {/* Accordion list */}
      <section className="bg-[#fbfbfb] py-10 lg:py-16">
        <div className="max-w-[950px] mx-auto px-4 lg:px-6 flex flex-col gap-4">
          {filtered.length > 0 ? (
            filtered.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))
          ) : (
            <p
              className="text-center font-['Inter',sans-serif] text-[#7c7c7c]"
              style={{ fontSize: 16 }}
            >
              No questions found. Try a different search or category.
            </p>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
