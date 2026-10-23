import { useState } from "react";

interface HotelImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
}

export function HotelImage({
  src,
  fallbackSrc,
  alt,
  className = "",
  priority = false,
}: HotelImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <div className={`relative overflow-hidden bg-[#25282B]/10 ${className}`}>
      {/* Subtle shimmer skeleton until loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#E7E8EA] animate-pulse pointer-events-none" />
      )}

      <img
        src={currentSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
