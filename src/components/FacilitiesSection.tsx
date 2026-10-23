import {
  Waves,
  Utensils,
  Wine,
  Trees,
  CalendarDays,
  Shirt,
  Car,
  Clock,
  ArrowRight,
} from "lucide-react";
import { HOTEL_IMAGES, HOTEL_IMAGES_THUMBS, EVENT_PRICING } from "../data/hotelData";

interface FacilitiesSectionProps {
  onOpenBooking: (roomOrEvent?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export function FacilitiesSection({ onOpenBooking, onNavigate }: FacilitiesSectionProps) {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white border-b border-[#E7E8EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#C5A572] mb-2">
            Hotel Amenities & Grounds
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183F35] tracking-tight">
            Facilities & Services
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A572] mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#5C626A]">
            Explore the real facilities at Amanda Garden Hotel in Akwanga — from our open-air
            swimming pool and relaxing garden to on-site dining and evening lounge.
          </p>
        </div>

        {/* Feature Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Swimming Pool */}
          <div className="group bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] overflow-hidden hover:border-[#183F35] transition-all duration-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#25282B]">
                <img
                  src={HOTEL_IMAGES_THUMBS.swimmingPool}
                  alt="Outdoor swimming pool at Amanda Garden Hotel Akwanga"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-[#183F35] text-[#FAF9F6] text-xs font-semibold px-2.5 py-1 rounded-sm flex items-center gap-1.5 shadow">
                  <Waves className="w-3.5 h-3.5 text-[#C5A572]" />
                  <span>Swimming Pool</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#183F35] mb-2">
                  Outdoor Swimming Pool
                </h3>
                <p className="text-xs sm:text-sm text-[#5C626A] leading-relaxed mb-4">
                  A refreshing tiled swimming pool with stainless steel steps, protective blue
                  awning canopy, and poolside lounge seating for hot afternoons and leisurely
                  weekends.
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-[#183F35] bg-[#E7E8EA]/50 p-2.5 rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-[#183F35]" />
                  <span>Pool access open for guests and visitors</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Restaurant */}
          <div
            id="restaurant"
            className="group bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] overflow-hidden hover:border-[#183F35] transition-all duration-300 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#25282B]">
                <img
                  src={HOTEL_IMAGES_THUMBS.restaurant}
                  alt="Amanda Garden Hotel Restaurant and dining room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-[#183F35] text-[#FAF9F6] text-xs font-semibold px-2.5 py-1 rounded-sm flex items-center gap-1.5 shadow">
                  <Utensils className="w-3.5 h-3.5 text-[#C5A572]" />
                  <span>Dining & Meals</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#183F35] mb-2">
                  Amanda Restaurant
                </h3>
                <p className="text-xs sm:text-sm text-[#5C626A] leading-relaxed mb-4">
                  Comfortable on-site dining room featuring dedicated dining tables, padded seating,
                  and a service counter serving freshly prepared Nigerian dishes and daily
                  refreshments.
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-[#183F35] bg-[#E7E8EA]/50 p-2.5 rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-[#183F35]" />
                  <span>Breakfast, lunch, and dinner available</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Lounge */}
          <div className="group bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] overflow-hidden hover:border-[#183F35] transition-all duration-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#25282B]">
                <img
                  src={HOTEL_IMAGES_THUMBS.loungeBar}
                  alt="Amanda Lounge and Bar with leather seating and bar counter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-[#183F35] text-[#FAF9F6] text-xs font-semibold px-2.5 py-1 rounded-sm flex items-center gap-1.5 shadow">
                  <Wine className="w-3.5 h-3.5 text-[#C5A572]" />
                  <span>Lounge & Bar</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#183F35] mb-2">
                  Amanda Lounge & Bar
                </h3>
                <p className="text-xs sm:text-sm text-[#5C626A] leading-relaxed mb-4">
                  Sophisticated indoor lounge space designed with grand black pillars, cushioned
                  leather booth sofas, low tables, and a full drink service counter for unwinding
                  after hours.
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-[#183F35] bg-[#E7E8EA]/50 p-2.5 rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-[#183F35]" />
                  <span>Chilled beverages & social atmosphere</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Garden Grounds */}
          <div className="group bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] overflow-hidden hover:border-[#183F35] transition-all duration-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#25282B]">
                <img
                  src={HOTEL_IMAGES_THUMBS.gardenPavilion}
                  alt="Garden walkway and shaded pavilion at Amanda Garden Hotel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-[#183F35] text-[#FAF9F6] text-xs font-semibold px-2.5 py-1 rounded-sm flex items-center gap-1.5 shadow">
                  <Trees className="w-3.5 h-3.5 text-[#C5A572]" />
                  <span>Garden Space</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#183F35] mb-2">
                  Outdoor Garden Grounds
                </h3>
                <p className="text-xs sm:text-sm text-[#5C626A] leading-relaxed mb-4">
                  Spacious open-air green garden with paved walkways, tree shade, barbecue stations,
                  and fresh breeze — ideal for daytime relaxation and outdoor meetings.
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-[#183F35] bg-[#E7E8EA]/50 p-2.5 rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-[#183F35]" />
                  <span>Available for private garden events</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Event Hall (Verified rate ₦70,000) */}
          <div className="group bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] overflow-hidden hover:border-[#183F35] transition-all duration-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#25282B]">
                <img
                  src={HOTEL_IMAGES_THUMBS.gardenLawn}
                  alt="Event grounds and stage at Amanda Garden Hotel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-[#183F35] text-[#FAF9F6] text-xs font-semibold px-2.5 py-1 rounded-sm flex items-center gap-1.5 shadow">
                  <CalendarDays className="w-3.5 h-3.5 text-[#C5A572]" />
                  <span>{EVENT_PRICING.hall.formattedPrice}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#183F35]">
                    Event Hall Booking
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5C626A] leading-relaxed mb-4">
                  Dedicated hall facility for receptions, community meetings, seminars, and special
                  celebrations in Akwanga at a confirmed flat rate of ₦70,000.
                </p>
                <button
                  onClick={() => onOpenBooking("hall")}
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#183F35] text-[#183F35] hover:bg-[#183F35] hover:text-[#FAF9F6] py-2 px-3 rounded-sm text-xs font-semibold transition-all"
                >
                  <span>Enquire About The Hall</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A572]" />
                </button>
              </div>
            </div>
          </div>

          {/* 6. Laundry & Guest Services */}
          <div className="group bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] overflow-hidden hover:border-[#183F35] transition-all duration-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#25282B]">
                <img
                  src={HOTEL_IMAGES_THUMBS.roomExecutive}
                  alt="Guest accommodation and services at Amanda Garden Hotel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-[#183F35] text-[#FAF9F6] text-xs font-semibold px-2.5 py-1 rounded-sm flex items-center gap-1.5 shadow">
                  <Shirt className="w-3.5 h-3.5 text-[#C5A572]" />
                  <span>Laundry Service</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#183F35] mb-2">
                  Laundry & Wardrobe Care
                </h3>
                <p className="text-xs sm:text-sm text-[#5C626A] leading-relaxed mb-4">
                  Fast and affordable garment pressing and washing for hotel guests. T-shirts &
                  trousers at ₦500; Agbada, native wear, and suits at ₦1,000.
                </p>
                <button
                  onClick={() => onNavigate("laundry")}
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#183F35] text-[#183F35] hover:bg-[#183F35] hover:text-[#FAF9F6] py-2 px-3 rounded-sm text-xs font-semibold transition-all"
                >
                  <span>View Full Laundry Price List</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A572]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Verification transparency banner regarding Parking, AC, and Reception */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#5C626A]">
          <div className="p-4 bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] flex items-start gap-3">
            <Car className="w-4 h-4 text-[#C5A572] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#25282B] block mb-0.5">On-site Parking:</strong>
              Compound space is available for lodging guests. Please confirm any specific vehicle
              requirements with our reception upon arrival.
            </div>
          </div>

          <div className="p-4 bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#C5A572] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#25282B] block mb-0.5">Front Desk Assistance:</strong>
              Our team is on-site to facilitate guest check-ins, room access, inquiries, and booking
              confirmations.
            </div>
          </div>

          <div className="p-4 bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] flex items-start gap-3">
            <span className="w-4 h-4 text-[#C5A572] font-serif font-bold text-sm shrink-0">❄</span>
            <div>
              <strong className="text-[#25282B] block mb-0.5">Air Conditioning:</strong>
              Equipped in select guest room categories (Standard, Executive, Double). Fans and
              ventilation provided across room types.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
