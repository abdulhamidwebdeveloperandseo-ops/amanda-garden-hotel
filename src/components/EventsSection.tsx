import { CalendarCheck, Trees, MessageSquare, Phone, ArrowRight } from "lucide-react";
import { EVENT_PRICING, HOTEL_IMAGES, HOTEL_INFO } from "../data/hotelData";

interface EventsSectionProps {
  onOpenBooking: (type: "hall" | "garden") => void;
}

export function EventsSection({ onOpenBooking }: EventsSectionProps) {
  return (
    <section id="events" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E7E8EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#C5A572] mb-2">
            Gatherings & Celebrations
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183F35] tracking-tight mb-4">
            Hall & Garden Bookings
          </h2>
          <p className="text-sm sm:text-base text-[#5C626A] leading-relaxed">
            Planning a private reception, seminar, family celebration, or outdoor event in Akwanga?
            Amanda Garden Hotel provides both indoor hall facilities and expansive open-air garden
            grounds. Contact our team to enquire about dates, arrangements, and availability.
          </p>
        </div>

        {/* Two Dedicated Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* 1. Indoor Event Hall */}
          <div className="bg-white rounded-sm border border-[#E7E8EA] overflow-hidden shadow-sm hover:border-[#183F35] transition-all flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#25282B]">
                <img
                  src={EVENT_PRICING.hall.thumbImage || HOTEL_IMAGES.gardenLawn}
                  alt="Amanda Garden Hotel Event Hall and Grounds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-[#183F35] text-[#FAF9F6] text-xs font-semibold px-3 py-1.5 rounded-sm shadow border border-[#C5A572]/40">
                  Indoor Venue
                </div>
                <div className="absolute bottom-4 right-4 bg-[#FAF9F6]/95 backdrop-blur-sm text-[#183F35] font-serif-luxury font-bold text-xl px-4 py-1.5 rounded-sm shadow-sm border border-[#E7E8EA]">
                  {EVENT_PRICING.hall.formattedPrice}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A572] font-semibold mb-2">
                  <CalendarCheck className="w-4 h-4 text-[#183F35]" />
                  <span>Official Venue Rate</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#183F35] mb-3">
                  Amanda Event Hall
                </h3>

                <p className="text-sm text-[#5C626A] leading-relaxed mb-6">
                  {EVENT_PRICING.hall.description} Available at a flat verified rate of ₦70,000.
                  Contact our management directly to verify your target dates and finalize details.
                </p>

                <div className="space-y-2 pt-4 border-t border-[#E7E8EA] text-xs text-[#25282B] mb-6">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#5C626A]">Official Rate:</span>
                    <span className="font-semibold text-base text-[#183F35] font-serif-luxury">
                      {EVENT_PRICING.hall.formattedPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#5C626A]">Location:</span>
                    <span className="font-medium">On-site compound, Akwanga</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#5C626A]">Arrangements:</span>
                    <span className="font-medium">Contact management for date booking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenBooking("hall")}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#183F35] hover:bg-[#102C25] text-[#FAF9F6] py-3 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>Enquire About the Hall</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A572]" />
                </button>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Amanda%20Garden%20Hotel,%20I%20would%20like%20to%20enquire%20about%20booking%20the%20Event%20Hall%20(₦70,000).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#E7E8EA] hover:border-[#183F35] text-[#25282B] hover:text-[#183F35] py-3 px-4 rounded-sm text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#183F35]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2. Outdoor Garden Grounds */}
          <div className="bg-white rounded-sm border border-[#E7E8EA] overflow-hidden shadow-sm hover:border-[#183F35] transition-all flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#25282B]">
                <img
                  src={EVENT_PRICING.garden.thumbImage || HOTEL_IMAGES.gardenPavilion}
                  alt="Amanda Garden Hotel Outdoor Garden and Pavilion Grounds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-[#183F35] text-[#FAF9F6] text-xs font-semibold px-3 py-1.5 rounded-sm shadow border border-[#C5A572]/40">
                  Open-Air Grounds
                </div>
                <div className="absolute bottom-4 right-4 bg-[#FAF9F6]/95 backdrop-blur-sm text-[#183F35] font-serif-luxury font-bold text-xl px-4 py-1.5 rounded-sm shadow-sm border border-[#E7E8EA]">
                  {EVENT_PRICING.garden.formattedPrice}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A572] font-semibold mb-2">
                  <Trees className="w-4 h-4 text-[#183F35]" />
                  <span>Flexible Terms</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#183F35] mb-3">
                  Amanda Garden Grounds
                </h3>

                <p className="text-sm text-[#5C626A] leading-relaxed mb-6">
                  {EVENT_PRICING.garden.description} Pricing is negotiable depending on duration and
                  type of event. Get in touch with our staff to discuss your gathering requirements.
                </p>

                <div className="space-y-2 pt-4 border-t border-[#E7E8EA] text-xs text-[#25282B] mb-6">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#5C626A]">Garden Rate:</span>
                    <span className="font-semibold text-base text-[#183F35] font-serif-luxury">
                      Price Negotiable
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#5C626A]">Space:</span>
                    <span className="font-medium">Open lawn & shaded pavilion walkway</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#5C626A]">Arrangements:</span>
                    <span className="font-medium">Direct discussion with hotel management</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenBooking("garden")}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#183F35] hover:bg-[#102C25] text-[#FAF9F6] py-3 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>Enquire About the Garden</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A572]" />
                </button>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Amanda%20Garden%20Hotel,%20I%20would%20like%20to%20enquire%20about%20booking%20the%20Outdoor%20Garden%20Grounds.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#E7E8EA] hover:border-[#183F35] text-[#25282B] hover:text-[#183F35] py-3 px-4 rounded-sm text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#183F35]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact note */}
        <div className="mt-8 text-center text-xs text-[#5C626A]">
          Have questions regarding event dates or custom setups? Call the hotel directly at{" "}
          <a href={`tel:${HOTEL_INFO.phone}`} className="font-semibold text-[#183F35] underline">
            {HOTEL_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
