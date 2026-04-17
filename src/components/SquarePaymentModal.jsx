import { useEffect, useRef, useState } from "react";

const SQUARE_APP_ID = import.meta.env.VITE_SQUARE_APP_ID;
const SQUARE_LOCATION_ID = import.meta.env.VITE_SQUARE_LOCATION_ID;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export default function SquarePaymentModal({ amount, form, onClose, onSuccess }) {
  const cardRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [cardReady, setCardReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!window.Square) {
        setError("Payment system failed to load. Please refresh.");
        return;
      }
      try {
        const payments = window.Square.payments(SQUARE_APP_ID, SQUARE_LOCATION_ID);
        const card = await payments.card();
        if (cancelled) {
          card.destroy().catch(() => {});
          return;
        }
        await card.attach("#sq-card-container");
        cardRef.current = card;
        setCardReady(true);
      } catch (e) {
        if (!cancelled) {
          setError("Could not load card form. Please try again.");
          console.error(e);
        }
      }
    }

    init();

    return () => {
      cancelled = true;
      if (cardRef.current) {
        cardRef.current.destroy().catch(() => {});
        cardRef.current = null;
      }
    };
  }, []);

  const handlePay = async () => {
    if (!cardRef.current || loading) return;
    setError("");
    setLoading(true);

    try {
      const result = await cardRef.current.tokenize();

      if (result.status !== "OK") {
        setError(result.errors?.[0]?.message || "Invalid card details.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${BACKEND_URL}/api/create-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceId: result.token,
          amount,
          customerInfo: {
            name: form.name,
            serviceType: form.serviceType,
            address: [form.address, form.city, form.state, form.zip]
              .filter(Boolean)
              .join(", "),
          },
        }),
      });

      const data = await res.json();

      if (data.success) {
        onSuccess();
      } else {
        setError(data.error || "Payment failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    }

    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-md flex flex-col gap-5" style={{ padding: 24 }}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2
            className="font-['Poppins',sans-serif] font-semibold text-[#111827] m-0"
            style={{ fontSize: 20 }}
          >
            Complete Payment
          </h2>
          <button
            onClick={onClose}
            className="bg-transparent border-0 cursor-pointer text-[#6b7280] hover:text-[#111827] flex items-center justify-center"
            style={{ fontSize: 24, lineHeight: 1, padding: 4 }}
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Amount */}
        <div
          className="flex items-center justify-between rounded-xl"
          style={{ background: "#fdf2f7", padding: "14px 18px" }}
        >
          <span className="font-['Poppins',sans-serif] text-[#334155]" style={{ fontSize: 16 }}>
            Total Due
          </span>
          <span
            className="font-['Poppins',sans-serif] font-bold text-[#da1b61]"
            style={{ fontSize: 24 }}
          >
            ${amount}
          </span>
        </div>

        {/* Square card form */}
        <div className="flex flex-col gap-2">
          <label
            className="font-['Poppins',sans-serif] text-[#334155]"
            style={{ fontSize: 15 }}
          >
            Card Details
          </label>
          <div
            id="sq-card-container"
            style={{ minHeight: 90 }}
          />
          {!cardReady && !error && (
            <p className="font-['Inter',sans-serif] text-[#9ca3af]" style={{ fontSize: 13 }}>
              Loading card form...
            </p>
          )}
        </div>

        {/* Error */}
        {error && (
          <p
            className="font-['Inter',sans-serif] text-red-600 m-0"
            style={{ fontSize: 14 }}
          >
            {error}
          </p>
        )}

        {/* Pay button */}
        <button
          type="button"
          onClick={handlePay}
          disabled={loading || !cardReady}
          className="w-full bg-[#da1b61] text-white rounded-[10px] font-['Poppins',sans-serif] font-medium hover:bg-[#c01850] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ fontSize: 18, lineHeight: "28px", padding: "14px 0" }}
        >
          {loading ? "Processing..." : `Pay $${amount}`}
        </button>

        <p
          className="text-center font-['Inter',sans-serif] text-[#9ca3af] m-0"
          style={{ fontSize: 12 }}
        >
          Secured by Square
        </p>
      </div>
    </div>
  );
}
