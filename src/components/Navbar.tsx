import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, Calendar, ChevronRight } from "lucide-react";
import { HOTEL_INFO } from "../data/hotelData";

interface NavbarProps {
  onOpenBooking: (roomType?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "about",
        "rooms",
        "facilities",
        "restaurant",
        "events",
        "laundry",
        "gallery",
        "contact",
      ];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Rooms & Rates", href: "#rooms", id: "rooms" },
    { name: "Facilities", href: "#facilities", id: "facilities" },
    { name: "Restaurant", href: "#restaurant", id: "restaurant" },
    { name: "Events", href: "#events", id: "events" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#102C25] text-[#E7E8EA] text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C5A572] animate-pulse"></span>
            <span>Akwanga, Nasarawa State, Nigeria · Opposite Specialist Hospital</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="hover:text-[#C5A572] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A572]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <span className="text-[#3D4146]">|</span>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Amanda%20Garden%20Hotel,%20I%20would%20like%20to%20make%20an%20enquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A572] transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A572]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E7E8EA] py-3.5"
            : "bg-[#FAF9F6] border-b border-[#E7E8EA]/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Hotel Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-sm bg-[#183F35] text-[#FAF9F6] flex flex-col items-center justify-center border border-[#C5A572]/40 shadow-sm transition-transform group-hover:scale-105">
              <span className="font-serif-luxury text-lg font-bold tracking-tight text-[#FAF9F6] leading-none">
                AG
              </span>
              <span className="text-[7px] tracking-widest text-[#C5A572] uppercase font-semibold">
                Hotel
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#183F35] tracking-tight group-hover:text-[#102C25] transition-colors leading-tight">
                Amanda Garden
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A572] font-medium">
                Hotel · Akwanga
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                    isActive
                      ? "text-[#183F35] bg-[#E7E8EA]/60 font-semibold"
                      : "text-[#25282B] hover:text-[#183F35] hover:bg-[#FAF9F6]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Amanda%20Garden%20Hotel,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20stay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-sm border border-[#E7E8EA] text-[#25282B] hover:text-[#183F35] hover:border-[#C5A572] transition-colors"
              title="Chat with Amanda Garden Hotel on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#183F35]" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#183F35] hover:bg-[#102C25] text-[#FAF9F6] px-4 py-2.5 rounded-sm text-sm font-medium transition-all shadow-sm hover:shadow active:scale-[0.99] border border-[#183F35]"
            >
              <Calendar className="w-4 h-4 text-[#C5A572]" />
              <span>Book a Room</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#183F35] text-[#FAF9F6] px-3 py-1.5 rounded-sm text-xs font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#25282B] hover:bg-[#E7E8EA] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#25282B]/60 backdrop-blur-sm lg:hidden">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF9F6] shadow-xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E7E8EA]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-sm bg-[#183F35] text-[#FAF9F6] flex items-center justify-center font-serif-luxury font-bold text-sm">
                    AG
                  </div>
                  <div>
                    <div className="font-serif-luxury font-bold text-[#183F35] text-base leading-none">
                      Amanda Garden
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-[#C5A572]">
                      Akwanga, Nasarawa
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-sm text-[#5C626A] hover:bg-[#E7E8EA]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-[#25282B] hover:text-[#183F35] hover:bg-[#E7E8EA]/60 rounded-sm"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#5C626A]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#E7E8EA] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#183F35] text-[#FAF9F6] py-3 rounded-sm font-medium text-sm shadow"
              >
                <Calendar className="w-4 h-4 text-[#C5A572]" />
                <span>Book a Room</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 border border-[#E7E8EA] text-[#25282B] py-2.5 rounded-sm font-medium text-sm hover:bg-[#E7E8EA]"
              >
                <Phone className="w-4 h-4 text-[#183F35]" />
                <span>Call {HOTEL_INFO.phone}</span>
              </a>

              <p className="text-center text-[11px] text-[#5C626A] pt-2">
                Opposite Specialist Hospital, Akwanga
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
