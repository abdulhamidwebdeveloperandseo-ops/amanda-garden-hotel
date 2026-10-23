import { MapPin, CheckCircle2, Waves, UtensilsCrossed, Sparkles } from "lucide-react";
import { HOTEL_INFO, HOTEL_IMAGES } from "../data/hotelData";

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export function AboutSection({ onNavigate, onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E7E8EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image presentation using real uploaded photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-lg border border-[#E7E8EA] bg-[#E7E8EA]">
              <img
                src={HOTEL_IMAGES.entranceGate}
                alt="Amanda Garden Hotel entrance gate and compound in Akwanga"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183F35]/60 via-transparent to-transparent pointer-events-none" />

              {/* Badge overlay on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F6]/95 backdrop-blur-md p-4 rounded-sm border border-[#E7E8EA] flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#C5A572] font-semibold">
                    Akwanga Hospitality
                  </div>
                  <div className="font-serif-luxury font-bold text-[#183F35] text-base sm:text-lg">
                    Gated Grounds & Courtyard
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-[#5C626A]">Direct Line</div>
                  <div className="font-mono text-xs font-semibold text-[#183F35]">
                    {HOTEL_INFO.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative subtle border frame */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-40 h-40 border-2 border-[#C5A572]/40 rounded-sm -z-10" />
          </div>

          {/* Text and information */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#E7E8EA] text-[#183F35] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A572]" />
              <span>About Our Hotel</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183F35] tracking-tight mb-6 leading-tight">
              Welcome to Amanda Garden Hotel
            </h2>

            {/* Verified prompt copy */}
            <p className="text-base sm:text-lg text-[#25282B]/85 leading-relaxed mb-6 font-normal">
              Located in Akwanga, Nasarawa State, Amanda Garden Hotel offers accommodation alongside
              spaces for dining, relaxation, and gatherings. Whether you are planning a stay or
              enquiring about an event, our team is ready to help you explore the available
              services.
            </p>

            {/* Key Verified Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-white border border-[#E7E8EA]">
                <div className="p-2 rounded-sm bg-[#183F35]/10 text-[#183F35]">
                  <Waves className="w-5 h-5 text-[#183F35]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#183F35]">Swimming Pool</h4>
                  <p className="text-xs text-[#5C626A] mt-0.5">
                    Clean open-air pool for refreshment and leisure
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-white border border-[#E7E8EA]">
                <div className="p-2 rounded-sm bg-[#183F35]/10 text-[#183F35]">
                  <UtensilsCrossed className="w-5 h-5 text-[#183F35]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#183F35]">Dining & Bar Lounge</h4>
                  <p className="text-xs text-[#5C626A] mt-0.5">
                    On-site restaurant meals and evening lounge space
                  </p>
                </div>
              </div>
            </div>

            {/* Address callout */}
            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#5C626A] p-4 rounded-sm bg-[#E7E8EA]/50 border border-[#E7E8EA] mb-8">
              <MapPin className="w-4 h-4 text-[#C5A572] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#25282B] font-semibold">Location:</strong> Opposite
                Specialist Hospital, along English Baptist Church Road, Akwanga, Nasarawa State.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#183F35] hover:bg-[#102C25] text-[#FAF9F6] px-6 py-3 rounded-sm text-sm font-medium transition-all shadow-sm"
              >
                Book Your Stay
              </button>
              <button
                onClick={() => onNavigate("facilities")}
                className="border border-[#183F35] text-[#183F35] hover:bg-[#183F35] hover:text-[#FAF9F6] px-6 py-3 rounded-sm text-sm font-medium transition-colors"
              >
                View Facilities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
