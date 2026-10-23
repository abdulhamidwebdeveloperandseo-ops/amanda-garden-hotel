import { MapPin, ArrowRight, PhoneCall, Sparkles, ShieldCheck } from "lucide-react";
import { HOTEL_INFO, HOTEL_IMAGES, ROOM_CATEGORIES } from "../data/hotelData";

interface HeroProps {
  onOpenBooking: (roomType?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export function Hero({ onOpenBooking, onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative bg-[#25282B] text-[#FAF9F6] overflow-hidden">
      {/* Background with real uploaded hotel photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOTEL_IMAGES.heroFacade}
          alt="Amanda Garden Hotel exterior architecture and courtyard in Akwanga"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Subtle, refined dark gradient overlay for crystal clear contrast and brand feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102C25]/92 via-[#183F35]/85 to-[#25282B]/80 backdrop-blur-[0.5px]" />
        {/* Soft decorative bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-28 sm:pb-36">
        <div className="max-w-3xl">
          {/* Location indicator badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6]/10 backdrop-blur-md border border-[#C5A572]/40 text-[#E7E8EA] text-xs sm:text-sm font-medium mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#C5A572] shrink-0" />
            <span>Akwanga, Nasarawa State, Nigeria</span>
            <span className="hidden sm:inline text-[#C5A572]">·</span>
            <span className="hidden sm:inline text-xs text-[#FAF9F6]/80">
              Opposite Specialist Hospital
            </span>
          </div>

          {/* Suggested Headline */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF9F6] leading-[1.08] mb-6 drop-shadow-sm">
            Your Comfort. <br />
            <span className="text-[#C5A572] italic font-normal">Your Escape.</span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#E7E8EA]/90 leading-relaxed max-w-2xl mb-8 font-light">
            Welcome to Amanda Garden Hotel, Akwanga — a welcoming destination for comfortable stays,
            relaxation, dining, and memorable gatherings.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
            <button
              onClick={() => onNavigate("rooms")}
              className="inline-flex items-center justify-center gap-2.5 bg-[#C5A572] hover:bg-[#B3935F] text-[#183F35] font-semibold px-6 py-3.5 rounded-sm text-sm sm:text-base transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
            >
              <span>Explore Our Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 bg-[#FAF9F6]/15 hover:bg-[#FAF9F6]/25 text-[#FAF9F6] border border-[#FAF9F6]/30 px-6 py-3.5 rounded-sm text-sm sm:text-base font-medium transition-all backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A572]" />
              <span>Contact the Hotel</span>
            </button>
          </div>

          {/* Honest Quick Highlights (No exaggerated claims) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#FAF9F6]/15 text-xs text-[#E7E8EA]/85">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A572] shrink-0" />
              <span>Gated Compound</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A572] shrink-0" />
              <span>Outdoor Swimming Pool</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]"></span>
              <span>Restaurant & Lounge</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572]"></span>
              <span>Rooms from ₦10,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Booking Enquiry Floating Banner */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-14 sm:-mt-16">
        <div className="bg-[#FAF9F6] rounded-sm shadow-xl border border-[#E7E8EA] p-4 sm:p-6 text-[#25282B]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="w-full lg:w-auto">
              <div className="text-xs uppercase tracking-wider text-[#C5A572] font-semibold">
                Direct Booking Enquiry
              </div>
              <div className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#183F35]">
                Plan Your Stay in Akwanga
              </div>
              <p className="text-xs text-[#5C626A] mt-0.5">
                Official verified rates from ₦10,000 to ₦20,000 per night
              </p>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <select
                id="hero-room-select"
                defaultValue={ROOM_CATEGORIES[1]?.id}
                className="bg-white border border-[#E7E8EA] rounded-sm px-3.5 py-2.5 text-sm text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                aria-label="Select room category"
              >
                {ROOM_CATEGORIES.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} — {r.formattedPrice}
                  </option>
                ))}
              </select>

              <button
                onClick={() => {
                  const selectEl = document.getElementById(
                    "hero-room-select",
                  ) as HTMLSelectElement | null;
                  const selectedId = selectEl ? selectEl.value : ROOM_CATEGORIES[1]?.id;
                  onOpenBooking(selectedId);
                }}
                className="bg-[#183F35] hover:bg-[#102C25] text-[#FAF9F6] px-6 py-2.5 rounded-sm font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Request Room Reservation</span>
                <ArrowRight className="w-4 h-4 text-[#C5A572]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
