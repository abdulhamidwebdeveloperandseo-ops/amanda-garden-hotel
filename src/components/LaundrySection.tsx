import { Shirt, Sparkles, CheckCircle2, Clock } from "lucide-react";
import { LAUNDRY_PRICES, HOTEL_INFO } from "../data/hotelData";

export function LaundrySection() {
  return (
    <section id="laundry" className="py-20 sm:py-28 bg-white border-b border-[#E7E8EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#E7E8EA] text-[#183F35] text-xs font-semibold uppercase tracking-wider mb-4">
              <Shirt className="w-3.5 h-3.5 text-[#C5A572]" />
              <span>Guest Convenience</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183F35] tracking-tight mb-4 leading-tight">
              Laundry Services & Pricing
            </h2>

            <p className="text-sm sm:text-base text-[#5C626A] leading-relaxed mb-6">
              Keep your clothes fresh and neatly pressed during your stay in Akwanga. We provide
              dependable on-site washing and ironing services with clear, verified pricing.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#25282B]">
                <CheckCircle2 className="w-4 h-4 text-[#183F35] shrink-0" />
                <span>Careful washing & crisp ironing for casual and formal wear</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#25282B]">
                <CheckCircle2 className="w-4 h-4 text-[#183F35] shrink-0" />
                <span>Specialized care for native wear and traditional Agbada</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#25282B]">
                <Clock className="w-4 h-4 text-[#C5A572] shrink-0" />
                <span>Prompt service turnaround for hotel guests</span>
              </div>
            </div>

            <div className="p-4 bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] text-xs text-[#5C626A]">
              Drop off your items at the front desk or request collection through room service staff
              upon check-in.
            </div>
          </div>

          {/* Right Column: Modern Pricing Table */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F6] rounded-sm border border-[#E7E8EA] shadow-sm overflow-hidden">
              <div className="bg-[#183F35] text-[#FAF9F6] p-5 sm:p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight">
                    Official Laundry Price List
                  </h3>
                  <p className="text-xs text-[#C5A572] mt-0.5">Verified rates per garment</p>
                </div>
                <div className="hidden sm:block text-right text-xs text-[#E7E8EA]/80 font-mono">
                  Amanda Garden Hotel
                </div>
              </div>

              {/* Table */}
              <div className="divide-y divide-[#E7E8EA]">
                {LAUNDRY_PRICES.map((item, index) => (
                  <div
                    key={item.item}
                    className="p-4 sm:p-5 flex items-center justify-between hover:bg-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#E7E8EA] text-[#183F35] flex items-center justify-center text-xs font-semibold">
                        {index + 1}
                      </span>
                      <div>
                        <div className="text-sm sm:text-base font-semibold text-[#25282B]">
                          {item.item}
                        </div>
                        <div className="text-[11px] text-[#5C626A]">{item.category} Attire</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#183F35]">
                        {item.formattedPrice}
                      </div>
                      <div className="text-[10px] text-[#5C626A]">per piece</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Footer */}
              <div className="p-4 bg-[#FAF9F6] border-t border-[#E7E8EA] flex flex-col sm:flex-row items-center justify-between text-xs text-[#5C626A] gap-2">
                <span>Prices verified in central system.</span>
                <span className="font-semibold text-[#183F35]">
                  Enquire via reception: {HOTEL_INFO.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
