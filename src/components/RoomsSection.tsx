import { useState } from "react";
import { ArrowRight, Check, BedDouble, Bath, Shield, Info } from "lucide-react";
import {
  ROOM_CATEGORIES,
  HOTEL_IMAGES,
  HOTEL_IMAGES_THUMBS,
  RoomCategory,
} from "../data/hotelData";

interface RoomsSectionProps {
  onOpenBooking: (roomId?: string) => void;
  onOpenGalleryWithPhoto?: (photoId: string) => void;
}

export function RoomsSection({ onOpenBooking, onOpenGalleryWithPhoto }: RoomsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredRooms =
    selectedCategory === "all"
      ? ROOM_CATEGORIES
      : ROOM_CATEGORIES.filter((r) => r.id === selectedCategory);

  return (
    <section id="rooms" className="py-20 sm:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E7E8EA] pb-6 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#C5A572] mb-2">
              Verified Rates & Accommodation
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183F35] tracking-tight">
              Rooms & Accommodation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C626A] max-w-xl">
              Clean and peaceful guest rooms in Akwanga. Rates are centrally verified and
              transparent with no hidden booking charges.
            </p>
          </div>

          {/* Quick filter pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E7E8EA]/60 rounded-sm self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all ${
                selectedCategory === "all"
                  ? "bg-[#183F35] text-[#FAF9F6] shadow-sm"
                  : "text-[#25282B] hover:text-[#183F35]"
              }`}
            >
              All Categories (4)
            </button>
            {ROOM_CATEGORIES.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedCategory(room.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-all ${
                  selectedCategory === room.id
                    ? "bg-[#183F35] text-[#FAF9F6] shadow-sm"
                    : "text-[#25282B] hover:text-[#183F35]"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {filteredRooms.map((room: RoomCategory) => (
            <div
              key={room.id}
              className="group bg-white rounded-sm border border-[#E7E8EA] overflow-hidden flex flex-col justify-between hover:border-[#C5A572] transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Real Room Photograph */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#25282B]">
                  <img
                    src={room.thumbImage || room.image}
                    alt={room.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 bg-[#183F35]/90 backdrop-blur-sm text-[#FAF9F6] text-[11px] font-medium px-2.5 py-1 rounded-sm border border-[#C5A572]/30">
                    {room.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#FAF9F6]/95 backdrop-blur-sm text-[#183F35] font-serif-luxury font-bold text-lg px-3 py-1 rounded-sm shadow-sm border border-[#E7E8EA]">
                    {room.formattedPrice}
                    <span className="text-[10px] font-sans font-normal text-[#5C626A] ml-1">
                      / night
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif-luxury text-xl font-bold text-[#183F35] group-hover:text-[#102C25] transition-colors">
                      {room.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5C626A] leading-relaxed mb-4 line-clamp-3">
                    {room.description}
                  </p>

                  {/* Confirmed Amenities List */}
                  <div className="pt-3 border-t border-[#E7E8EA] space-y-1.5 mb-2">
                    <div className="text-[10px] uppercase font-semibold text-[#C5A572] tracking-wider mb-2">
                      Confirmed Features
                    </div>
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#25282B]">
                        <Check className="w-3.5 h-3.5 text-[#183F35] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0 mt-2">
                <button
                  onClick={() => onOpenBooking(room.id)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#183F35] hover:bg-[#102C25] text-[#FAF9F6] py-2.5 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-[0.99]"
                >
                  <span>Enquire About This Room</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A572]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bathroom & Hospitality Assurance Note using real bathroom photo */}
        <div className="mt-12 bg-white rounded-sm border border-[#E7E8EA] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-full md:w-48 lg:w-56 shrink-0 aspect-square rounded-sm overflow-hidden border border-[#E7E8EA] bg-[#25282B] relative group">
            {/* Real bathroom photo natively upright and optimized */}
            <img
              src={HOTEL_IMAGES_THUMBS.bathroom || HOTEL_IMAGES.bathroom}
              alt="En-suite tiled bathroom at Amanda Garden Hotel"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-2 left-2 bg-[#183F35]/90 text-[#FAF9F6] text-[10px] px-2 py-0.5 rounded-sm">
              En-suite Bathroom
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A572] font-semibold mb-1">
              <Bath className="w-4 h-4 text-[#183F35]" />
              <span>Private Guest Sanitation</span>
            </div>
            <h4 className="font-serif-luxury text-2xl font-bold text-[#183F35] mb-2">
              Clean, Tiled En-suite Facilities
            </h4>
            <p className="text-sm text-[#5C626A] leading-relaxed mb-4">
              Each guest accommodation at Amanda Garden Hotel is serviced by private, fully-tiled
              en-suite bathrooms equipped with sanitary ware, ceramic tiled walls, and water heating
              units.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#25282B]">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#183F35]" />
                <span>Dedicated en-suite privacy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#183F35]" />
                <span>Water heater installed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#183F35]" />
                <span>Cleaned and prepared before arrival</span>
              </div>
            </div>
          </div>
        </div>

        {/* Central Pricing Assurance Note */}
        <div className="mt-6 flex items-start gap-2.5 text-xs text-[#5C626A] bg-[#E7E8EA]/40 p-3.5 rounded-sm border border-[#E7E8EA]">
          <Info className="w-4 h-4 text-[#183F35] shrink-0 mt-0.5" />
          <div>
            <strong>Verified Room Pricing:</strong> Back Rooms (₦10,000), Standard Rooms (₦12,000),
            Executive Rooms (₦15,000), Double Rooms (₦20,000). Prices are centrally managed and
            non-speculative. Check-in and room assignment are handled directly by the reception desk
            in Akwanga.
          </div>
        </div>
      </div>
    </section>
  );
}
