import { MapPin, Phone, MessageSquare, ArrowUp, Calendar, Mail, Shield } from "lucide-react";
import { HOTEL_INFO, ROOM_CATEGORIES, EVENT_PRICING, LAUNDRY_PRICES } from "../data/hotelData";

interface FooterProps {
  onOpenBooking: (roomOrEvent?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onOpenBooking, onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#102C25] text-[#FAF9F6] border-t border-[#C5A572]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#FAF9F6]/10">
          {/* Brand info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#183F35] text-[#FAF9F6] flex flex-col items-center justify-center border border-[#C5A572]/40 shadow-sm">
                <span className="font-serif-luxury text-lg font-bold tracking-tight text-[#FAF9F6] leading-none">
                  AG
                </span>
                <span className="text-[7px] tracking-widest text-[#C5A572] uppercase font-semibold">
                  Hotel
                </span>
              </div>
              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-tight text-[#FAF9F6]">
                  Amanda Garden Hotel
                </span>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#C5A572]">
                  Akwanga, Nasarawa State
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E7E8EA]/80 leading-relaxed font-light">
              A welcoming destination in Akwanga offering comfortable accommodation, outdoor
              swimming pool, restaurant dining, relaxed evening lounge, and event grounds.
            </p>

            <div className="pt-2 text-xs text-[#E7E8EA]/70 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A572] shrink-0" />
                <span>Opposite Specialist Hospital, along English Baptist Church Road</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A572] shrink-0" />
                <span>Direct Line: {HOTEL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E7E8EA]/80">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("rooms")}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Rooms & Rates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("facilities")}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("restaurant")}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Restaurant & Lounge
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("events")}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Hall & Garden Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("gallery")}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Rooms & Rates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
              Verified Rates
            </h4>
            <div className="space-y-2 text-xs">
              {ROOM_CATEGORIES.map((room) => (
                <div
                  key={room.id}
                  className="flex items-center justify-between py-1 border-b border-[#FAF9F6]/5"
                >
                  <span className="text-[#E7E8EA]/80">{room.name}</span>
                  <span className="font-semibold text-[#C5A572] font-mono">
                    {room.formattedPrice}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between py-1 border-b border-[#FAF9F6]/5">
                <span className="text-[#E7E8EA]/80">Event Hall</span>
                <span className="font-semibold text-[#C5A572] font-mono">₦70,000</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-[#E7E8EA]/80">Garden Grounds</span>
                <span className="text-[#E7E8EA]/60 italic">Negotiable</span>
              </div>
            </div>
          </div>

          {/* Booking & Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
              Reservations
            </h4>
            <p className="text-xs text-[#E7E8EA]/80 leading-relaxed font-light">
              Advance booking requests and availability checks are managed directly with our
              reception.
            </p>
            <div className="space-y-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full bg-[#C5A572] hover:bg-[#B3935F] text-[#183F35] font-semibold py-2.5 px-4 rounded-sm text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Room</span>
              </button>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Amanda%20Garden%20Hotel,%20I%20would%20like%20to%20make%20a%20booking%20enquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#FAF9F6] py-2 px-4 rounded-sm text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back-to-top and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E7E8EA]/60">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} Amanda Garden Hotel. All rights reserved. Akwanga, Nasarawa
            State, Nigeria.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#C5A572]">
              Opposite Specialist Hospital, Akwanga
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[#FAF9F6]/10 hover:bg-[#FAF9F6]/20 text-[#FAF9F6] transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span className="text-[11px]">Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A572]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
