/**
 * Central Configuration and Data Store for Amanda Garden Hotel
 * Located in Akwanga, Nasarawa State, Nigeria.
 *
 * All prices and verified hotel information are centralized here
 * so they can be easily maintained and updated in one place.
 *
 * Images are served in lightweight modern WebP format with JPG fallbacks
 * (reduced by >95% from 41MB to ~1.8MB for blazing fast loading).
 */

export interface RoomCategory {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  image: string;
  fallbackImage: string;
  thumbImage?: string;
  alt: string;
  tag: string;
  features: string[];
}

export interface LaundryItem {
  item: string;
  price: number;
  formattedPrice: string;
  category: "Everyday" | "Traditional" | "Formal";
}

export interface GalleryPhoto {
  id: string;
  src: string;
  fallbackSrc: string;
  thumbSrc: string;
  title: string;
  caption: string;
  category: "exterior" | "rooms" | "facilities" | "dining" | "garden";
  aspect?: string;
  isBathroom?: boolean;
}

export const HOTEL_INFO = {
  name: "Amanda Garden Hotel",
  shortName: "Amanda Garden",
  tagline: "Your Comfort. Your Escape.",
  subtitle:
    "A welcoming destination in Akwanga for comfortable stays, relaxation, dining, and memorable gatherings.",
  address: {
    line1: "Opposite Specialist Hospital",
    line2: "Along English Baptist Church Road",
    city: "Akwanga",
    state: "Nasarawa State",
    country: "Nigeria",
    full: "Opposite Specialist Hospital, along English Baptist Church Road, Akwanga, Nasarawa State, Nigeria",
  },
  phone: "08035900685",
  formattedPhone: "+234 803 590 0685",
  whatsappNumber: "2348035900685",
  email: "info@amandagardenhotel.com",
  checkInTime: "12:00 PM (Flexible upon inquiry)",
  checkOutTime: "11:00 AM",
  operatingHours: "Desk assistance available for guest arrivals and inquiries",
  googleMapsQuery:
    "Specialist Hospital Akwanga, English Baptist Church Road, Akwanga, Nasarawa State, Nigeria",
};

/**
 * 10 Real Uploaded Photographs of Amanda Garden Hotel
 * High-performance optimized WebP versions with JPG fallbacks
 */
export const HOTEL_IMAGES = {
  heroFacade: "/assets/photos/P1020372_2beb1570.webp",
  heroFacadeJpg: "/assets/photos/P1020372_2beb1570.jpg",
  entranceGate: "/assets/photos/P1020370_978d6dae.webp",
  entranceGateJpg: "/assets/photos/P1020370_978d6dae.jpg",
  swimmingPool: "/assets/photos/P1020348_29db3fd0.webp",
  swimmingPoolJpg: "/assets/photos/P1020348_29db3fd0.jpg",
  loungeBar: "/assets/photos/P1020367_7a6a735c.webp",
  loungeBarJpg: "/assets/photos/P1020367_7a6a735c.jpg",
  restaurant: "/assets/photos/P1020362_84456953.webp",
  restaurantJpg: "/assets/photos/P1020362_84456953.jpg",
  gardenLawn: "/assets/photos/P1020364_8e0c93b2.webp",
  gardenLawnJpg: "/assets/photos/P1020364_8e0c93b2.jpg",
  gardenPavilion: "/assets/photos/P1020363_ba21389f.webp",
  gardenPavilionJpg: "/assets/photos/P1020363_ba21389f.jpg",
  roomExecutive: "/assets/photos/P1020354_5211f4ae.webp",
  roomExecutiveJpg: "/assets/photos/P1020354_5211f4ae.jpg",
  roomStandard: "/assets/photos/P1020351_79468784.webp",
  roomStandardJpg: "/assets/photos/P1020351_79468784.jpg",
  bathroom: "/assets/photos/P1020358_f156675a.webp",
  bathroomJpg: "/assets/photos/P1020358_f156675a.jpg",
};

/**
 * Super lightweight thumbnails (18-36KB each) for fast card loading
 */
export const HOTEL_IMAGES_THUMBS = {
  heroFacade: "/assets/photos/thumbs/P1020372_2beb1570.webp",
  entranceGate: "/assets/photos/thumbs/P1020370_978d6dae.webp",
  swimmingPool: "/assets/photos/thumbs/P1020348_29db3fd0.webp",
  loungeBar: "/assets/photos/thumbs/P1020367_7a6a735c.webp",
  restaurant: "/assets/photos/thumbs/P1020362_84456953.webp",
  gardenLawn: "/assets/photos/thumbs/P1020364_8e0c93b2.webp",
  gardenPavilion: "/assets/photos/thumbs/P1020363_ba21389f.webp",
  roomExecutive: "/assets/photos/thumbs/P1020354_5211f4ae.webp",
  roomStandard: "/assets/photos/thumbs/P1020351_79468784.webp",
  bathroom: "/assets/photos/thumbs/P1020358_f156675a.webp",
};

/**
 * Verified Room Categories and Exact Rates (Centralized)
 */
export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "back-rooms",
    name: "Back Rooms",
    price: 10000,
    formattedPrice: "₦10,000",
    description:
      "A peaceful and practical accommodation option set away from main activity areas, ideal for quiet rest and overnight stays.",
    image: HOTEL_IMAGES.roomStandard,
    fallbackImage: HOTEL_IMAGES.roomStandardJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.roomStandard,
    alt: "Amanda Garden Hotel comfortable guest room interior",
    tag: "Budget Friendly",
    features: [
      "Comfortable bed setup",
      "Wardrobe storage",
      "En-suite bathroom access",
      "Peaceful surroundings",
    ],
  },
  {
    id: "standard-rooms",
    name: "Standard Rooms",
    price: 12000,
    formattedPrice: "₦12,000",
    description:
      "Well-appointed guest room with warm interior styling, comfortable double bed, wardrobe, television, and private en-suite bathroom.",
    image: HOTEL_IMAGES.roomStandard,
    fallbackImage: HOTEL_IMAGES.roomStandardJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.roomStandard,
    alt: "Amanda Garden Hotel Standard guest room with bed, wardrobe and television",
    tag: "Most Popular",
    features: [
      "Double bed with fresh linens",
      "Air cooling / fan setup",
      "Television",
      "Wardrobe & side table",
      "En-suite bathroom",
    ],
  },
  {
    id: "executive-rooms",
    name: "Executive Rooms",
    price: 15000,
    formattedPrice: "₦15,000",
    description:
      "Spacious accommodation offering an integrated seating area with an armchair and coffee table, television, desk, and added privacy.",
    image: HOTEL_IMAGES.roomExecutive,
    fallbackImage: HOTEL_IMAGES.roomExecutiveJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.roomExecutive,
    alt: "Amanda Garden Hotel Executive Room featuring sitting area with armchair and coffee table",
    tag: "Spacious Comfort",
    features: [
      "Dedicated lounge armchair & coffee table",
      "Spacious bed & furnishings",
      "Television & desk",
      "Compact refrigerator",
      "Private bathroom",
    ],
  },
  {
    id: "double-rooms",
    name: "Double Rooms",
    price: 20000,
    formattedPrice: "₦20,000",
    description:
      "Generously proportioned room featuring prime placement within the hotel wings, generous roominess, and relaxed living space.",
    image: HOTEL_IMAGES.roomExecutive,
    fallbackImage: HOTEL_IMAGES.roomExecutiveJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.roomExecutive,
    alt: "Amanda Garden Hotel Double Room layout with sitting arrangement and amenities",
    tag: "Premium Space",
    features: [
      "Maximum space & comfort",
      "Lounge armchair seating",
      "Television & work area",
      "Full en-suite bathroom",
      "Courtyard accessibility",
    ],
  },
];

/**
 * Verified Event & Venue Pricing
 */
export const EVENT_PRICING = {
  hall: {
    name: "Amanda Event Hall",
    price: 70000,
    formattedPrice: "₦70,000",
    description:
      "A dedicated indoor hall space suitable for meetings, milestone receptions, seminars, and social gatherings.",
    image: HOTEL_IMAGES.gardenLawn,
    fallbackImage: HOTEL_IMAGES.gardenLawnJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.gardenLawn,
    alt: "Amanda Garden Hotel event grounds and hall area",
  },
  garden: {
    name: "Amanda Outdoor Garden Grounds",
    price: "Negotiable",
    formattedPrice: "Price Negotiable",
    description:
      "Expansive open-air green garden and shaded pavilion grounds ideal for outdoor celebrations, parties, picnics, and community events.",
    image: HOTEL_IMAGES.gardenPavilion,
    fallbackImage: HOTEL_IMAGES.gardenPavilionJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.gardenPavilion,
    alt: "Amanda Garden Hotel outdoor garden, pavilion walkway and recreation area",
  },
};

/**
 * Verified Laundry Price List
 */
export const LAUNDRY_PRICES: LaundryItem[] = [
  { item: "T-shirt", price: 500, formattedPrice: "₦500", category: "Everyday" },
  { item: "Trouser", price: 500, formattedPrice: "₦500", category: "Everyday" },
  { item: "Agbada", price: 1000, formattedPrice: "₦1,000", category: "Traditional" },
  { item: "Native Wear", price: 1000, formattedPrice: "₦1,000", category: "Traditional" },
  { item: "Suit", price: 1000, formattedPrice: "₦1,000", category: "Formal" },
];

/**
 * Complete Real Photo Gallery Registry (10 Photos)
 */
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "exterior-facade",
    src: HOTEL_IMAGES.heroFacade,
    fallbackSrc: HOTEL_IMAGES.heroFacadeJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.heroFacade,
    title: "Hotel Facade & Courtyard",
    caption:
      "The central courtyard and dual-wing architecture of Amanda Garden Hotel with main entrance portico.",
    category: "exterior",
  },
  {
    id: "entrance-gate",
    src: HOTEL_IMAGES.entranceGate,
    fallbackSrc: HOTEL_IMAGES.entranceGateJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.entranceGate,
    title: "Hotel Entrance & Secure Gate",
    caption:
      "Main entrance gate, compound grounds, and perimeter wall along English Baptist Church Road, Akwanga.",
    category: "exterior",
  },
  {
    id: "swimming-pool",
    src: HOTEL_IMAGES.swimmingPool,
    fallbackSrc: HOTEL_IMAGES.swimmingPoolJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.swimmingPool,
    title: "Outdoor Swimming Pool",
    caption:
      "Tiled outdoor swimming pool with stainless steel steps, poolside sofa, and shaded shelter.",
    category: "facilities",
  },
  {
    id: "lounge-club",
    src: HOTEL_IMAGES.loungeBar,
    fallbackSrc: HOTEL_IMAGES.loungeBarJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.loungeBar,
    title: "Amanda Lounge & Club Bar",
    caption:
      "Modern evening lounge featuring leather booth seating, stylish pillars, bar counter, and drink selections.",
    category: "dining",
  },
  {
    id: "restaurant-dining",
    src: HOTEL_IMAGES.restaurant,
    fallbackSrc: HOTEL_IMAGES.restaurantJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.restaurant,
    title: "Hotel Restaurant & Dining Hall",
    caption:
      "Welcoming dining space with tables, cushioned chairs, and service counter for freshly prepared meals.",
    category: "dining",
  },
  {
    id: "garden-lawn",
    src: HOTEL_IMAGES.gardenLawn,
    fallbackSrc: HOTEL_IMAGES.gardenLawnJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.gardenLawn,
    title: "Garden Grounds & Event Stage",
    caption:
      "Spacious outdoor green lawn, tree shade, stage pavilion, and event huts for social functions.",
    category: "garden",
  },
  {
    id: "garden-pavilion",
    src: HOTEL_IMAGES.gardenPavilion,
    fallbackSrc: HOTEL_IMAGES.gardenPavilionJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.gardenPavilion,
    title: "Garden Walkway & Pavilion",
    caption:
      "Paved path leading through the garden recreation grounds with barbecue area and outdoor mural.",
    category: "garden",
  },
  {
    id: "guest-room-executive",
    src: HOTEL_IMAGES.roomExecutive,
    fallbackSrc: HOTEL_IMAGES.roomExecutiveJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.roomExecutive,
    title: "Guest Room with Lounge Seating",
    caption:
      "Comfortable bedroom setup featuring private armchair, coffee table, wall television, and cooling.",
    category: "rooms",
  },
  {
    id: "guest-room-standard",
    src: HOTEL_IMAGES.roomStandard,
    fallbackSrc: HOTEL_IMAGES.roomStandardJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.roomStandard,
    title: "Guest Room with Double Bed",
    caption:
      "Clean, restful room arrangement with double bed, side storage wardrobe, television, and drapery.",
    category: "rooms",
  },
  {
    id: "en-suite-bathroom",
    src: HOTEL_IMAGES.bathroom,
    fallbackSrc: HOTEL_IMAGES.bathroomJpg,
    thumbSrc: HOTEL_IMAGES_THUMBS.bathroom,
    title: "En-suite Tiled Bathroom",
    caption:
      "Private guest bathroom featuring ceramic wall tiling, sanitary basin, toilet, and water heating unit.",
    category: "rooms",
    isBathroom: true,
  },
];

/**
 * Verified Hotel Facilities & Services
 */
export const HOTEL_FACILITIES = [
  {
    title: "Swimming Pool",
    desc: "A clean, private outdoor pool for cooling off, leisure, and weekend relaxation under the Akwanga sun.",
    image: HOTEL_IMAGES.swimmingPool,
    fallbackImage: HOTEL_IMAGES.swimmingPoolJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.swimmingPool,
    tag: "Recreation",
    badge: "Verified Facility",
  },
  {
    title: "Restaurant & Dining",
    desc: "Delicious local dishes and everyday favorites served in a comfortable indoor dining hall.",
    image: HOTEL_IMAGES.restaurant,
    fallbackImage: HOTEL_IMAGES.restaurantJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.restaurant,
    tag: "Dining",
    badge: "On-site Dining",
  },
  {
    title: "Amanda Lounge & Bar",
    desc: "Relax after hours with refreshing cold beverages, comfortable leather seating, and sociable ambience.",
    image: HOTEL_IMAGES.loungeBar,
    fallbackImage: HOTEL_IMAGES.loungeBarJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.loungeBar,
    tag: "Nightlife & Leisure",
    badge: "Evening Lounge",
  },
  {
    title: "Garden Grounds",
    desc: "Serene open-air green grounds with lawn areas and trees for open-air relaxation, meetings, and gatherings.",
    image: HOTEL_IMAGES.gardenPavilion,
    fallbackImage: HOTEL_IMAGES.gardenPavilionJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.gardenPavilion,
    tag: "Outdoor Grounds",
    badge: "Outdoor Space",
  },
  {
    title: "Event Hall Bookings",
    desc: "Available indoor hall suitable for milestone celebrations, seminars, and meetings at ₦70,000.",
    image: HOTEL_IMAGES.gardenLawn,
    fallbackImage: HOTEL_IMAGES.gardenLawnJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.gardenLawn,
    tag: "Events & Meetings",
    badge: "₦70,000 Hall Rate",
  },
  {
    title: "Laundry Service",
    desc: "Affordable on-site pressing and laundry care for your everyday and traditional attire starting from ₦500.",
    image: HOTEL_IMAGES.roomExecutive,
    fallbackImage: HOTEL_IMAGES.roomExecutiveJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.roomExecutive,
    tag: "Guest Care",
    badge: "From ₦500",
  },
  {
    title: "Compound Parking",
    desc: "Gated compound with on-site vehicle parking space for lodging guests and event visitors.",
    image: HOTEL_IMAGES.entranceGate,
    fallbackImage: HOTEL_IMAGES.entranceGateJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.entranceGate,
    tag: "Convenience",
    badge: "Gated Compound",
  },
  {
    title: "Guest Reception Assistance",
    desc: "Friendly on-site staff available to welcome guests, assist with room keys, and attend to service requests.",
    image: HOTEL_IMAGES.heroFacade,
    fallbackImage: HOTEL_IMAGES.heroFacadeJpg,
    thumbImage: HOTEL_IMAGES_THUMBS.heroFacade,
    tag: "Hospitality",
    badge: "Front Desk Assistance",
  },
];
