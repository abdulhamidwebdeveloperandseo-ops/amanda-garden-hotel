import { useState, useMemo, useEffect } from "react";
import {
  X,
  Calendar,
  User,
  Phone,
  CheckCircle,
  MessageSquare,
  AlertCircle,
  ArrowRight,
  Shield,
} from "lucide-react";
import { ROOM_CATEGORIES, EVENT_PRICING, HOTEL_INFO } from "../data/hotelData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelection?: string;
}

export function BookingModal({ isOpen, onClose, initialSelection }: BookingModalProps) {
  const [selectedType, setSelectedType] = useState<string>(initialSelection || "standard-rooms");
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [guestsCount, setGuestsCount] = useState<number>(1);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [specialNotes, setSpecialNotes] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Sync initial selection when modal opens
  useEffect(() => {
    if (initialSelection) {
      setSelectedType(initialSelection);
    }
  }, [initialSelection, isOpen]);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Determine pricing details based on selection
  const currentItem = useMemo(() => {
    if (selectedType === "hall") {
      return {
        name: EVENT_PRICING.hall.name,
        price: EVENT_PRICING.hall.price,
        formattedPrice: EVENT_PRICING.hall.formattedPrice,
        isEvent: true,
      };
    }
    if (selectedType === "garden") {
      return {
        name: EVENT_PRICING.garden.name,
        price: 0,
        formattedPrice: EVENT_PRICING.garden.formattedPrice,
        isEvent: true,
      };
    }
    const room = ROOM_CATEGORIES.find((r) => r.id === selectedType) || ROOM_CATEGORIES[1];
    return {
      name: room?.name || "Standard Room",
      price: room?.price || 12000,
      formattedPrice: room?.formattedPrice || "₦12,000",
      isEvent: false,
    };
  }, [selectedType]);

  // Calculate nights
  const numberOfNights = useMemo(() => {
    if (!checkInDate || !checkOutDate) return 1;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkInDate, checkOutDate]);

  // Estimated Total
  const estimatedTotal = useMemo(() => {
    if (currentItem.isEvent) {
      return selectedType === "hall" ? "₦70,000" : "Negotiable";
    }
    const total = currentItem.price * numberOfNights;
    return `₦${total.toLocaleString()}`;
  }, [currentItem, numberOfNights, selectedType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!phoneNumber.trim()) {
      setErrorMsg("Please enter your phone number.");
      return;
    }

    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      if (end <= start) {
        setErrorMsg("Check-out date must be after check-in date.");
        return;
      }
    }

    setIsSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello Amanda Garden Hotel,
I would like to submit a Booking Request:
- Selection: ${currentItem.name} (${currentItem.formattedPrice})
- Check-In: ${checkInDate || "To be discussed"}
- Check-Out: ${checkOutDate || "To be discussed"}
- Nights: ${currentItem.isEvent ? "Event booking" : numberOfNights}
- Guests: ${guestsCount}
- Name: ${fullName}
- Phone: ${phoneNumber}
${specialNotes ? `- Notes: ${specialNotes}` : ""}

Please confirm availability and booking details. Thank you!`;

    return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#102C25]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-label="Book a Room Modal"
    >
      {/* Modal Container: Compact, controlled height, sleek design */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF9F6] w-full max-w-lg rounded-sm border border-[#E7E8EA] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Sticky Header with Prominent Close (X) Button */}
        <div className="bg-[#183F35] text-[#FAF9F6] px-5 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between border-b border-[#C5A572]/30 shrink-0">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#C5A572] font-semibold">
              Amanda Garden Hotel
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight">
              Book a Room or Venue
            </h3>
          </div>

          {/* Prominent Cancel (X) Button on top right */}
          <button
            onClick={onClose}
            type="button"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/35 text-white flex items-center justify-center transition-colors border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C5A572]"
            aria-label="Cancel and close"
            title="Cancel and close (Esc)"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Scrollable Form Body with Compact Spacing */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Confirmation Receipt State */
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-[#183F35]/10 text-[#183F35] mx-auto flex items-center justify-center mb-3">
                <CheckCircle className="w-7 h-7 text-[#183F35]" />
              </div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#183F35] mb-1.5">
                Enquiry Submitted!
              </h4>
              <p className="text-xs text-[#5C626A] max-w-sm mx-auto mb-4">
                Thank you, <strong className="text-[#25282B]">{fullName}</strong>. Your request for{" "}
                <strong className="text-[#25282B]">{currentItem.name}</strong> is received. Our desk
                team will reach out at <strong className="text-[#25282B]">{phoneNumber}</strong>.
              </p>

              {/* Receipt Summary Card */}
              <div className="bg-white p-3 rounded-sm border border-[#E7E8EA] text-left text-xs space-y-1.5 mb-4 max-w-sm mx-auto">
                <div className="flex justify-between py-1 border-b border-[#E7E8EA]">
                  <span className="text-[#5C626A]">Selection:</span>
                  <span className="font-semibold text-[#25282B]">{currentItem.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7E8EA]">
                  <span className="text-[#5C626A]">Rate:</span>
                  <span className="font-semibold text-[#183F35]">{currentItem.formattedPrice}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E7E8EA]">
                  <span className="text-[#5C626A]">Stay:</span>
                  <span className="text-[#25282B]">
                    {checkInDate || "Flexible"} → {checkOutDate || "Flexible"}
                    {!currentItem.isEvent &&
                      ` (${numberOfNights} night${numberOfNights > 1 ? "s" : ""})`}
                  </span>
                </div>
                <div className="flex justify-between py-1 pt-1.5">
                  <span className="text-[#5C626A]">Estimated Total:</span>
                  <span className="font-bold text-base text-[#183F35] font-serif-luxury">
                    {estimatedTotal}
                  </span>
                </div>
              </div>

              {/* WhatsApp Fast Confirmation */}
              <div className="space-y-2 max-w-sm mx-auto">
                <a
                  href={constructWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-sm text-xs font-semibold shadow transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  type="button"
                  className="w-full py-2 text-xs text-[#5C626A] hover:text-[#25282B]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Streamlined Compact Form */
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Room or Venue Selection */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#183F35] mb-1">
                  Select Room or Venue
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-white border border-[#E7E8EA] rounded-sm px-3 py-2 text-xs sm:text-sm text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                >
                  <optgroup label="Guest Rooms & Suites">
                    {ROOM_CATEGORIES.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — {r.formattedPrice} / night
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Event Grounds">
                    <option value="hall">Amanda Event Hall — ₦70,000</option>
                    <option value="garden">Outdoor Garden Grounds — Price Negotiable</option>
                  </optgroup>
                </select>
              </div>

              {/* Compact Date Selection: Side-by-side */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#183F35] mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C5A572]" />
                    <span>Check-In</span>
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-white border border-[#E7E8EA] rounded-sm px-2.5 py-1.5 text-xs text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#183F35] mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C5A572]" />
                    <span>Check-Out</span>
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full bg-white border border-[#E7E8EA] rounded-sm px-2.5 py-1.5 text-xs text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                  />
                </div>
              </div>

              {/* Guests Count Selector: Compact Pill Row */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#183F35]">
                    Number of Guests
                  </label>
                  <span className="text-[11px] text-[#5C626A]">
                    {guestsCount} Guest{guestsCount > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setGuestsCount(num)}
                      className={`py-1.5 text-xs font-medium rounded-sm border transition-all ${
                        guestsCount === num
                          ? "bg-[#183F35] text-[#FAF9F6] border-[#183F35] shadow-xs"
                          : "bg-white text-[#25282B] border-[#E7E8EA] hover:border-[#183F35]"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Name & Phone: Side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#183F35] mb-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-[#C5A572]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ibrahim Musa"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-[#E7E8EA] rounded-sm px-3 py-1.5 text-xs text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#183F35] mb-1 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#C5A572]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0801 234 5678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-white border border-[#E7E8EA] rounded-sm px-3 py-1.5 text-xs text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                  />
                </div>
              </div>

              {/* Special Requests (Compact single line) */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#183F35] mb-1">
                  Special Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Estimated arrival time or requests..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-white border border-[#E7E8EA] rounded-sm px-3 py-1.5 text-xs text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                />
              </div>

              {/* Rate & Estimated Total Bar */}
              <div className="bg-white px-3 py-2 rounded-sm border border-[#E7E8EA] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#5C626A]">Rate: </span>
                  <span className="font-semibold text-[#183F35]">{currentItem.formattedPrice}</span>
                  {!currentItem.isEvent && (
                    <span className="text-[#5C626A] ml-1">
                      × {numberOfNights} night{numberOfNights > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
                <div>
                  <span className="text-[#5C626A] mr-1.5">Est. Total:</span>
                  <span className="font-serif-luxury font-bold text-base text-[#183F35]">
                    {estimatedTotal}
                  </span>
                </div>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="p-2 rounded-sm bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Micro Disclaimer */}
              <div className="text-[10px] text-[#5C626A] leading-tight">
                * Booking request only. Confirmation is completed directly by front desk upon
                arrival.
              </div>

              {/* Action Buttons: Clear and Compact */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#183F35] hover:bg-[#102C25] active:bg-[#0b1f1a] text-[#FAF9F6] py-2.5 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-1.5"
                >
                  <span>Submit Request</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A572]" />
                </button>

                <a
                  href={constructWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 border border-[#E7E8EA] hover:border-[#25D366] text-[#25282B] hover:text-[#25D366] py-2.5 px-3 rounded-sm text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
