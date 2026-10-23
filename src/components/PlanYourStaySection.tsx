import { Calendar, Compass, ShieldCheck, HeartHandshake, ExternalLink } from "lucide-react";
import { HOTEL_INFO } from "../data/hotelData";

interface PlanYourStaySectionProps {
  onOpenBooking: () => void;
}

export function PlanYourStaySection({ onOpenBooking }: PlanYourStaySectionProps) {
  return (
    <section className="py-20 bg-[#183F35] text-[#FAF9F6] relative overflow-hidden">
      {/* Subtle decorative gold motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A572]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#102C25] rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#FAF9F6]/10 text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#C5A572]/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Visiting Akwanga, Nasarawa State</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF9F6]">
            Plan Your Stay with Confidence
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A572] mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#E7E8EA]/90 leading-relaxed font-light">
            Whether you are visiting Akwanga for official assignments, transit travel, personal
            rest, or attending a local celebration, Amanda Garden Hotel offers peaceful surroundings
            and essential hospitality.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#102C25]/80 p-8 rounded-sm border border-[#C5A572]/20 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-sm bg-[#C5A572]/20 text-[#C5A572] flex items-center justify-center mb-5 font-serif-luxury font-bold text-lg">
              01
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-[#FAF9F6] mb-2">
              Accessible Akwanga Location
            </h3>
            <p className="text-xs sm:text-sm text-[#E7E8EA]/80 leading-relaxed">
              Situated opposite Specialist Hospital along English Baptist Church Road, offering
              convenient transit access while maintaining a quiet, private atmosphere.
            </p>
          </div>

          <div className="bg-[#102C25]/80 p-8 rounded-sm border border-[#C5A572]/20 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-sm bg-[#C5A572]/20 text-[#C5A572] flex items-center justify-center mb-5 font-serif-luxury font-bold text-lg">
              02
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-[#FAF9F6] mb-2">
              Relaxing Amenities On-Site
            </h3>
            <p className="text-xs sm:text-sm text-[#E7E8EA]/80 leading-relaxed">
              Enjoy a swim in our outdoor pool, unwind in our evening lounge booths, or dine on
              freshly prepared meals in the restaurant without leaving the premises.
            </p>
          </div>

          <div className="bg-[#102C25]/80 p-8 rounded-sm border border-[#C5A572]/20 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-sm bg-[#C5A572]/20 text-[#C5A572] flex items-center justify-center mb-5 font-serif-luxury font-bold text-lg">
              03
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-[#FAF9F6] mb-2">
              Transparent, Direct Rates
            </h3>
            <p className="text-xs sm:text-sm text-[#E7E8EA]/80 leading-relaxed">
              No hidden broker fees or inflated online markups. Guest rooms start from ₦10,000 to
              ₦20,000, with dedicated service from our on-ground team.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#FAF9F6] text-[#25282B] p-6 sm:p-8 rounded-sm border border-[#E7E8EA] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#C5A572] font-semibold mb-1">
              Guest Feedback & Hospitality
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#183F35]">
              Ready to Book or Inquire About Availability?
            </h3>
            <p className="text-xs text-[#5C626A] mt-1">
              Contact our front desk directly to check room availability for your desired dates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#183F35] hover:bg-[#102C25] text-[#FAF9F6] px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
            >
              Request Room Booking
            </button>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_INFO.googleMapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#E7E8EA] text-[#25282B] hover:text-[#183F35] hover:border-[#183F35] px-4 py-3 rounded-sm text-xs font-medium transition-colors"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5C626A]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
