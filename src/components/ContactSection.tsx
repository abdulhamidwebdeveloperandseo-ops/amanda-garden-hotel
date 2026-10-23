import { useState } from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Send,
  CheckCircle2,
  Navigation,
  AlertCircle,
} from "lucide-react";
import { HOTEL_INFO } from "../data/hotelData";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("General Stay Inquiry");
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please provide your name.");
      return;
    }
    if (!phone.trim()) {
      setErrorMsg("Please provide your telephone number.");
      return;
    }
    if (!message.trim()) {
      setErrorMsg("Please write your message or enquiry.");
      return;
    }

    setIsSent(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Amanda%20Garden%20Hotel,%20I%20have%20an%20enquiry:%20${encodeURIComponent(subject)}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#C5A572] mb-2">
            Location & Inquiries
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183F35] tracking-tight mb-4">
            Contact Amanda Garden Hotel
          </h2>
          <p className="text-sm sm:text-base text-[#5C626A] leading-relaxed">
            Reach out directly to enquire about room reservations, event bookings, directions, or
            special stay requests. Our team in Akwanga is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-sm border border-[#E7E8EA] p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#183F35] mb-6">
                Hotel Address & Direct Contacts
              </h3>

              <div className="space-y-6">
                {/* Physical Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-sm bg-[#183F35]/10 text-[#183F35] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                      Physical Location
                    </h4>
                    <p className="text-sm font-medium text-[#25282B] mt-1 leading-snug">
                      Amanda Garden Hotel
                    </p>
                    <p className="text-xs text-[#5C626A] mt-0.5 leading-relaxed">
                      Opposite Specialist Hospital, along English Baptist Church Road, Akwanga,
                      Nasarawa State, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-sm bg-[#183F35]/10 text-[#183F35] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                      Telephone (Verified)
                    </h4>
                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="text-base font-semibold text-[#183F35] hover:underline font-mono mt-0.5 block"
                    >
                      {HOTEL_INFO.formattedPhone} ({HOTEL_INFO.phone})
                    </a>
                    <p className="text-[11px] text-[#5C626A] mt-0.5">
                      Front desk assistance for check-ins and inquiries
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-sm bg-[#25D366]/10 text-[#25D366] shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A572]">
                      WhatsApp Direct Chat
                    </h4>
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#183F35] hover:text-[#25D366] transition-colors mt-0.5 block"
                    >
                      Chat on WhatsApp (+234 803 590 0685)
                    </a>
                    <p className="text-[11px] text-[#5C626A] mt-0.5">
                      Fast response for room availability & inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Link */}
              <div className="mt-8 pt-6 border-t border-[#E7E8EA]">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_INFO.googleMapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E7E8EA] hover:bg-[#D1D3D7] text-[#183F35] py-2.5 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#C5A572]" />
                  <span>Get Driving Directions to Hotel</span>
                </a>
              </div>
            </div>

            {/* Embedded Map Representation */}
            <div className="bg-white rounded-sm border border-[#E7E8EA] overflow-hidden shadow-sm">
              <div className="p-3 bg-[#183F35] text-[#FAF9F6] text-xs font-medium flex items-center justify-between">
                <span>Map Location: Akwanga, Nasarawa State</span>
                <span className="text-[#C5A572]">Specialist Hospital Area</span>
              </div>
              <div className="aspect-[16/9] w-full bg-[#E7E8EA] relative">
                <iframe
                  title="Amanda Garden Hotel Location Map in Akwanga"
                  src="https://maps.google.com/maps?q=Specialist+Hospital+Akwanga+Nasarawa+State+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  aria-label="Google Map showing Specialist Hospital area, Akwanga, Nasarawa State"
                />
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-sm border border-[#E7E8EA] p-6 sm:p-10 shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#C5A572] font-semibold mb-1">
                  Online Contact Form
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#183F35] mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#5C626A] mb-8">
                  Have a specific question about facilities, catering, or event dates? Send your
                  inquiry below and our team will get back to you promptly.
                </p>

                {isSent ? (
                  <div className="bg-[#FAF9F6] border border-[#183F35]/20 p-8 rounded-sm text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#183F35] mx-auto mb-3" />
                    <h4 className="font-serif-luxury text-2xl font-bold text-[#183F35] mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-[#5C626A] max-w-md mx-auto mb-6">
                      Thank you for contacting Amanda Garden Hotel. Our staff will review your
                      message and reach out via <strong className="text-[#25282B]">{phone}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setIsSent(false);
                        setMessage("");
                      }}
                      className="bg-[#183F35] text-[#FAF9F6] px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#183F35] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full bg-[#FAF9F6] border border-[#E7E8EA] rounded-sm px-3.5 py-2.5 text-sm text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#183F35] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Your phone number"
                          className="w-full bg-[#FAF9F6] border border-[#E7E8EA] rounded-sm px-3.5 py-2.5 text-sm text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183F35] mb-1.5">
                        Subject / Topic of Enquiry
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#FAF9F6] border border-[#E7E8EA] rounded-sm px-3.5 py-2.5 text-sm text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                      >
                        <option value="General Stay Inquiry">General Stay Inquiry</option>
                        <option value="Room Booking (Back, Standard, Executive, Double)">
                          Room Booking (Back, Standard, Executive, Double)
                        </option>
                        <option value="Hall Booking (₦70,000)">Event Hall Booking (₦70,000)</option>
                        <option value="Garden Grounds Booking (Negotiable)">
                          Garden Grounds Booking (Negotiable)
                        </option>
                        <option value="Swimming Pool Inquiries">Swimming Pool Inquiries</option>
                        <option value="Restaurant / Dining Group Inquiries">
                          Restaurant / Dining Group Inquiries
                        </option>
                        <option value="Laundry Services">Laundry Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183F35] mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe how we can assist you..."
                        className="w-full bg-[#FAF9F6] border border-[#E7E8EA] rounded-sm px-3.5 py-2.5 text-sm text-[#25282B] focus:outline-none focus:ring-1 focus:ring-[#183F35]"
                      />
                    </div>

                    {errorMsg && (
                      <div className="p-3 rounded-sm bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        className="bg-[#183F35] hover:bg-[#102C25] text-[#FAF9F6] py-3 px-6 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5 text-[#C5A572]" />
                        <span>Send Message</span>
                      </button>

                      <a
                        href={whatsappInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-[#E7E8EA] hover:border-[#25D366] text-[#25282B] hover:text-[#25D366] py-3 px-4 rounded-sm text-xs font-medium transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Or message directly on WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E7E8EA] text-xs text-[#5C626A] flex items-center justify-between">
                <span>
                  Direct inquiries: <strong>{HOTEL_INFO.phone}</strong>
                </span>
                <span className="text-[#183F35] font-medium">Akwanga, Nasarawa State</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
