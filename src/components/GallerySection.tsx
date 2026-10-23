import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, RotateCw, Sparkles } from "lucide-react";
import { GALLERY_PHOTOS, GalleryPhoto } from "../data/hotelData";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [rotationDegrees, setRotationDegrees] = useState<number>(0);

  const categories = [
    { id: "all", name: "All Photographs" },
    { id: "exterior", name: "Exterior & Courtyard" },
    { id: "rooms", name: "Guest Rooms & Bath" },
    { id: "dining", name: "Restaurant & Lounge" },
    { id: "facilities", name: "Swimming Pool" },
    { id: "garden", name: "Garden Grounds" },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  const openLightbox = (photo: GalleryPhoto) => {
    const index = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);
    if (index !== -1) {
      setLightboxIndex(index);
      setRotationDegrees(0);
    }
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setRotationDegrees(0);
  }, []);

  const nextPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex + 1) % GALLERY_PHOTOS.length;
      setLightboxIndex(nextIdx);
      setRotationDegrees(0);
    }
  }, [lightboxIndex]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      const prevIdx = (lightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
      setLightboxIndex(prevIdx);
      setRotationDegrees(0);
    }
  }, [lightboxIndex]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const currentPhoto = lightboxIndex !== null ? GALLERY_PHOTOS[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E7E8EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#E7E8EA] text-[#183F35] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A572]" />
            <span>Authentic Imagery</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183F35] tracking-tight">
            Hotel Photo Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A572] mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#5C626A]">
            Genuine, verified photographs of Amanda Garden Hotel in Akwanga — showcasing our
            courtyard building, guest rooms, pool, dining, and scenic grounds.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#183F35] text-[#FAF9F6] shadow-sm"
                  : "bg-white text-[#25282B] hover:bg-[#E7E8EA] border border-[#E7E8EA]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative bg-[#25282B] rounded-sm overflow-hidden shadow-sm cursor-pointer border border-[#E7E8EA] hover:border-[#C5A572] transition-all aspect-[4/3]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(photo);
                }
              }}
              aria-label={`View photo: ${photo.title}`}
            >
              <img
                src={photo.thumbSrc || photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102C25]/90 via-[#183F35]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-wider text-[#C5A572] font-semibold mb-1">
                  Click to enlarge
                </span>
                <h4 className="font-serif-luxury text-lg font-bold text-[#FAF9F6]">
                  {photo.title}
                </h4>
                <p className="text-xs text-[#E7E8EA]/85 line-clamp-2 mt-1">{photo.caption}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#C5A572] font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#102C25]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.title}
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-[#FAF9F6] border-b border-[#FAF9F6]/10 pb-4 max-w-6xl mx-auto w-full">
            <div>
              <span className="text-xs text-[#C5A572] font-mono">
                Photo {lightboxIndex + 1} of {GALLERY_PHOTOS.length}
              </span>
              <h3 className="font-serif-luxury text-lg sm:text-xl font-bold">
                {currentPhoto.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setRotationDegrees((prev) => (prev + 90) % 360)}
                className="p-2 rounded-sm bg-[#FAF9F6]/10 hover:bg-[#FAF9F6]/20 text-[#FAF9F6] transition-colors"
                title="Rotate image orientation"
                aria-label="Rotate image"
              >
                <RotateCw className="w-5 h-5 text-[#C5A572]" />
              </button>

              <button
                onClick={closeLightbox}
                className="p-2 rounded-sm bg-[#FAF9F6]/10 hover:bg-[#FAF9F6]/20 text-[#FAF9F6] transition-colors"
                title="Close lightbox (Esc)"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image Display */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
            <button
              onClick={prevPhoto}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-[#183F35]/80 hover:bg-[#183F35] text-[#FAF9F6] border border-[#C5A572]/40 transition-all shadow-lg focus:outline-none"
              title="Previous photo (Left arrow)"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[70vh] flex items-center justify-center">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.caption}
                className="max-h-[68vh] max-w-full object-contain rounded-sm shadow-2xl transition-transform duration-300"
                style={{
                  transform: `rotate(${rotationDegrees}deg)`,
                }}
              />
            </div>

            <button
              onClick={nextPhoto}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-[#183F35]/80 hover:bg-[#183F35] text-[#FAF9F6] border border-[#C5A572]/40 transition-all shadow-lg focus:outline-none"
              title="Next photo (Right arrow)"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Caption & Controls */}
          <div className="max-w-3xl mx-auto w-full text-center text-[#E7E8EA] border-t border-[#FAF9F6]/10 pt-4">
            <p className="text-xs sm:text-sm font-light text-[#FAF9F6]/90">
              {currentPhoto.caption}
            </p>
            <div className="mt-2 text-[11px] text-[#C5A572]">
              Amanda Garden Hotel · Akwanga, Nasarawa State, Nigeria
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
