import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { RoomsSection } from "../components/RoomsSection";
import { FacilitiesSection } from "../components/FacilitiesSection";
import { EventsSection } from "../components/EventsSection";
import { LaundrySection } from "../components/LaundrySection";
import { GallerySection } from "../components/GallerySection";
import { PlanYourStaySection } from "../components/PlanYourStaySection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { BookingModal } from "../components/BookingModal";
import { HOTEL_INFO } from "../data/hotelData";
import { MessageSquare, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amanda Garden Hotel | Accommodation, Pool, Dining & Events in Akwanga" },
      {
        name: "description",
        content:
          "Official website for Amanda Garden Hotel, Akwanga, Nasarawa State, Nigeria. Quality rooms from ₦10,000, swimming pool, restaurant, lounge, event hall (₦70,000), and garden venue.",
      },
      { property: "og:title", content: "Amanda Garden Hotel — Akwanga, Nasarawa State" },
      {
        property: "og:description",
        content:
          "Your Comfort. Your Escape. Welcoming hotel destination in Akwanga for comfortable stays, relaxation, dining, and memorable gatherings.",
      },
      { property: "og:image", content: "/assets/photos/P1020372_2beb1570.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Amanda Garden Hotel",
          image: "/assets/photos/P1020372_2beb1570.jpg",
          telephone: "+2348035900685",
          priceRange: "₦10,000 - ₦20,000",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Opposite Specialist Hospital, along English Baptist Church Road",
            addressLocality: "Akwanga",
            addressRegion: "Nasarawa State",
            addressCountry: "NG",
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
            { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
            { "@type": "LocationFeatureSpecification", name: "Lounge Bar", value: true },
            { "@type": "LocationFeatureSpecification", name: "Event Hall", value: true },
            { "@type": "LocationFeatureSpecification", name: "Garden Grounds", value: true },
            { "@type": "LocationFeatureSpecification", name: "Laundry Service", value: true },
          ],
        }),
      },
    ],
  }),
  component: AmandaGardenHotelWebsite,
});

function AmandaGardenHotelWebsite() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState<string>("standard-rooms");

  const handleOpenBooking = (itemType?: string) => {
    if (itemType) {
      setSelectedBookingItem(itemType);
    }
    setBookingModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#25282B] flex flex-col font-sans selection:bg-[#183F35] selection:text-[#FAF9F6]">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />

        {/* 2. About */}
        <AboutSection onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Rooms & Accommodation */}
        <RoomsSection onOpenBooking={handleOpenBooking} />

        {/* 4. Facilities & Services */}
        <FacilitiesSection onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />

        {/* 5. Hall and Garden Bookings */}
        <EventsSection onOpenBooking={handleOpenBooking} />

        {/* 6. Laundry Services */}
        <LaundrySection />

        {/* 7. Real Photo Gallery */}
        <GallerySection />

        {/* 8. Plan Your Stay (Replacing unverified reviews) */}
        <PlanYourStaySection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Contact & Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />

      {/* Interactive Booking Enquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialSelection={selectedBookingItem}
      />

      {/* Floating Action Button for WhatsApp Fast Help */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
        <a
          href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Amanda%20Garden%20Hotel,%20I%20would%20like%20to%20make%20an%20enquiry.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-xs font-semibold"
          title="Direct WhatsApp with Amanda Garden Hotel"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Front Desk</span>
        </a>
      </div>
    </div>
  );
}
