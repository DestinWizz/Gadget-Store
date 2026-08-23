import { Product, Testimonial, DataBundle } from '../types';

export const STORE_INFO = {
  name: "ProGadget Hub Ltd",
  tagline: "Smart Gadgets. Reliable Services. Maximum Value.",
  slogan: "Pro Gadget, Pro Service, Pro You!",
  subheading: "YOUR ONE STOP TECH SOLUTION IN EKOSODIN",
  address: "Edo Lane off Edo Street, Ekosodin, Benin City, Edo State",
  phoneCall: "07025089711",
  phoneCallDisplay: "07025089711 (Calls Only)",
  phoneWhatsApp: "07055100195",
  phoneWhatsAppInternational: "2347055100195",
  email: "progadgethubekosodin@gmail.com",
  operatingHours: {
    weekdays: "8:00 AM – 8:00 PM",
    sunday: "12:00 PM – 6:00 PM"
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com"
  },
  trustPillars: [
    { title: "100% Genuine Products", desc: "Guaranteed authentic tech with warranty" },
    { title: "Affordable Prices", desc: "Best student-friendly rates in Ekosodin & Benin" },
    { title: "Fast & Reliable Service", desc: "Same-day express repair & instant delivery" },
    { title: "Customer Satisfaction", desc: "Over 3,500+ satisfied customers with 4.9★ rating" }
  ]
};

export const PRODUCTS: Product[] = [
  // --- PHONES ---
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max (Titanium)",
    category: "phones",
    condition: "UK Used",
    price: 1180000,
    originalPrice: 1250000,
    rating: 5.0,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    description: "Flawless Grade A+ UK Used iPhone 15 Pro Max with 96%+ Battery Health. Factory unlocked, supports all Nigerian networks (MTN, Airtel, Glo, 9mobile). Includes original fast charge adapter and 30-day warranty.",
    specs: {
      "Display": "6.7-inch Super Retina XDR OLED, 120Hz ProMotion",
      "Chip": "A17 Pro (3nm)",
      "Camera": "48MP Main + 5x Telephoto Optical Zoom",
      "Battery Health": "95% - 99% Original",
      "Condition": "Grade A+ (No scratches / No dents)",
      "SIM": "Physical SIM + eSIM"
    },
    features: [
      "Grade A+ Pristine UK Used Condition",
      "Action Button & Titanium Frame",
      "Free Privacy Screen Guard & Clear Case",
      "Pay Small Small eligible with 30% down payment"
    ],
    inStock: true,
    stockCount: 4,
    isBestSeller: true,
    isFeatured: true,
    paySmallSmallEligible: true,
    minDownPaymentPercent: 30,
    storageOptions: ["256GB", "512GB", "1TB"],
    colorOptions: ["Natural Titanium", "Black Titanium", "Blue Titanium", "White Titanium"],
    warranty: "30-Day Testing Warranty + Receipt"
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro (Deep Purple)",
    category: "phones",
    condition: "UK Used",
    price: 790000,
    originalPrice: 850000,
    rating: 4.9,
    reviewsCount: 56,
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=800&q=80",
    description: "Clean UK Used iPhone 14 Pro with Dynamic Island, 48MP Pro camera system, and all-day battery life. Tested 100% functional with FaceID active and TrueTone verified.",
    specs: {
      "Display": "6.1-inch Always-On Dynamic Island OLED",
      "Chip": "A16 Bionic",
      "Camera": "48MP Quad-pixel Main Camera",
      "Battery Health": "91% - 97%",
      "Face ID / TrueTone": "100% Tested & Verified"
    },
    features: [
      "Dynamic Island Experience",
      "ProRes Video & Cinematic 4K",
      "30-Day Replacement Guarantee",
      "Pay Small Small from ₦49,500/week"
    ],
    inStock: true,
    stockCount: 6,
    isBestSeller: true,
    isFeatured: true,
    paySmallSmallEligible: true,
    minDownPaymentPercent: 30,
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Deep Purple", "Space Black", "Gold", "Silver"],
    warranty: "30-Day Store Warranty"
  },
  {
    id: "iphone-13-128gb",
    name: "iPhone 13 128GB (Midnight)",
    category: "phones",
    condition: "UK Used",
    price: 495000,
    originalPrice: 530000,
    rating: 4.9,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    description: "Most popular budget flagship for UNIBEN students! Pristine UK Used iPhone 13 with cinematic mode, incredible battery endurance, and superfast A15 Bionic performance.",
    specs: {
      "Display": "6.1-inch Super Retina XDR",
      "Chip": "A15 Bionic",
      "Battery Health": "88% - 94%",
      "Network": "5G / 4G LTE Unlocked"
    },
    features: [
      "Cinematic Mode 1080p 30fps",
      "Long-lasting All-Day Battery",
      "Free 20W Fast Charger Adapter",
      "Pay Small Small starting at ₦31,000/week"
    ],
    inStock: true,
    stockCount: 8,
    isBestSeller: true,
    isFeatured: false,
    paySmallSmallEligible: true,
    minDownPaymentPercent: 30,
    storageOptions: ["128GB", "256GB"],
    colorOptions: ["Midnight Black", "Starlight White", "Blue", "Pink", "Green"],
    warranty: "30-Day Warranty"
  },
  {
    id: "iphone-12-pro-max",
    name: "iPhone 12 Pro Max (Pacific Blue)",
    category: "phones",
    condition: "UK Used",
    price: 480000,
    originalPrice: 510000,
    rating: 4.8,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
    description: "Large 6.7-inch screen flagship with Triple Camera, LiDAR Scanner, and premium surgical grade stainless steel body. Perfect for photography, content creation, and gaming.",
    specs: {
      "Display": "6.7-inch Super Retina XDR",
      "Storage": "128GB / 256GB",
      "Battery Health": "87% - 92%",
      "Camera": "Triple 12MP with LiDAR & Night Mode Portrait"
    },
    features: [
      "Massive 6.7-inch OLED Screen",
      "Night mode portraits with LiDAR",
      "Clean UK Direct Import",
      "Pay Small Small Available"
    ],
    inStock: true,
    stockCount: 5,
    isBestSeller: false,
    isFeatured: true,
    paySmallSmallEligible: true,
    minDownPaymentPercent: 30,
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Pacific Blue", "Graphite", "Gold", "Silver"],
    warranty: "30-Day Warranty"
  },
  {
    id: "iphone-11-pro-max",
    name: "iPhone 11 Pro Max 64GB / 256GB",
    category: "phones",
    condition: "UK Used",
    price: 365000,
    originalPrice: 395000,
    rating: 4.8,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80",
    description: "The classic value king! Huge battery, triple 4K cameras, and frosted matte glass back. Tested and certified 100% operational.",
    specs: {
      "Display": "6.5-inch Super Retina XDR",
      "Chip": "A13 Bionic",
      "Battery Health": "85% - 92%",
      "Camera": "Ultra-Wide + Wide + Telephoto"
    },
    features: [
      "Top-tier battery life",
      "Student favorite in Ekosodin",
      "Comes with charging cable + case"
    ],
    inStock: true,
    stockCount: 9,
    isBestSeller: true,
    isFeatured: false,
    paySmallSmallEligible: true,
    minDownPaymentPercent: 30,
    storageOptions: ["64GB", "256GB"],
    colorOptions: ["Midnight Green", "Space Gray", "Gold", "Silver"],
    warranty: "30-Day Warranty"
  },
  {
    id: "samsung-s23-ultra",
    name: "Samsung Galaxy S23 Ultra 5G (Phantom Black)",
    category: "phones",
    condition: "Brand New",
    price: 1090000,
    originalPrice: 1150000,
    rating: 5.0,
    reviewsCount: 31,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    description: "Brand New Sealed Samsung Galaxy S23 Ultra with built-in S-Pen, 200MP camera, 100x Space Zoom, and Snapdragon 8 Gen 2 for Galaxy.",
    specs: {
      "Display": "6.8-inch Dynamic AMOLED 2X 120Hz",
      "Camera": "200MP Main + 100x Space Zoom",
      "Battery": "5,000mAh with 45W Fast Charging",
      "S-Pen": "Integrated with Air Actions"
    },
    features: [
      "Brand New Sealed with 1 Year Warranty",
      "Best low-light Nightography camera",
      "Pay Small Small eligible"
    ],
    inStock: true,
    stockCount: 3,
    isBestSeller: false,
    isFeatured: true,
    paySmallSmallEligible: true,
    minDownPaymentPercent: 35,
    storageOptions: ["256GB (12GB RAM)", "512GB (12GB RAM)"],
    colorOptions: ["Phantom Black", "Cream", "Green", "Lavender"],
    warranty: "1 Year Official Warranty"
  },

  // --- ACCESSORIES & AUDIO ---
  {
    id: "airpods-pro-2",
    name: "Apple AirPods Pro (2nd Gen) USB-C",
    category: "accessories",
    condition: "Brand New",
    price: 85000,
    originalPrice: 95000,
    rating: 4.9,
    reviewsCount: 74,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    description: "Up to 2x more Active Noise Cancellation with Adaptive Audio, Transparency Mode, and Personalized Spatial Audio with dynamic head tracking. MagSafe Charging Case (USB-C) with speaker and lanyard loop.",
    specs: {
      "Type": "Active Noise Cancelling TWS",
      "Battery": "Up to 6 hours listening (30 hrs with case)",
      "Connector": "USB-C & MagSafe Wireless",
      "Compatibility": "iOS, Android, Windows, Mac"
    },
    features: [
      "2x Stronger Active Noise Cancellation",
      "Sweat and water resistant (IP54)",
      "Touch control for volume swipe",
      "Pop-up animation on iPhone"
    ],
    inStock: true,
    stockCount: 14,
    isBestSeller: true,
    isFeatured: true,
    paySmallSmallEligible: true,
    warranty: "3 Months Warranty"
  },
  {
    id: "jbl-charge-5",
    name: "JBL Charge 5 Portable Waterproof Speaker",
    category: "accessories",
    condition: "Brand New",
    price: 135000,
    originalPrice: 150000,
    rating: 5.0,
    reviewsCount: 39,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    description: "Take the party anywhere in Ekosodin! Bold JBL Original Pro Sound with long excursion driver, separate tweeter, and dual pumping JBL bass radiators. Built-in powerbank charges your phones on the go.",
    specs: {
      "Playtime": "20 Hours",
      "Waterproof Rating": "IP67 Waterproof and Dustproof",
      "Feature": "Built-in Powerbank Function",
      "PartyBoost": "Pair multiple JBL speakers"
    },
    features: [
      "Massive room-filling bass",
      "Charges phone while playing",
      "100% Genuine JBL Product"
    ],
    inStock: true,
    stockCount: 7,
    isBestSeller: true,
    isFeatured: true,
    paySmallSmallEligible: true,
    warranty: "6 Months Warranty"
  },
  {
    id: "apple-20w-fast-charger",
    name: "Original 20W Apple Fast Charger + Braided USB-C Cable",
    category: "accessories",
    condition: "Brand New",
    price: 18000,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    description: "100% Genuine Original 20W USB-C Power Adapter. Charges iPhone 8 to iPhone 15/16 from 0 to 50% in just 30 minutes safely without overheating battery health.",
    specs: {
      "Wattage": "20W Power Delivery 3.0",
      "Port": "USB-C Output",
      "Cable": "1M Braided Lightning or Type-C to Type-C included",
      "Safety": "Overcharge & Surge Protection"
    },
    features: [
      "Zero battery health degradation",
      "Heavy duty 3-pin UK plug",
      "Original Apple Serial number"
    ],
    inStock: true,
    stockCount: 35,
    isBestSeller: true,
    isFeatured: false,
    paySmallSmallEligible: false,
    warranty: "60-Day Replacement Guarantee"
  },
  {
    id: "anker-powercore-20000",
    name: "Anker PowerCore 20,000mAh PD Fast Charging Powerbank",
    category: "accessories",
    condition: "Brand New",
    price: 38000,
    originalPrice: 45000,
    rating: 4.9,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1609592424364-533cfabce8eb?auto=format&fit=crop&w=800&q=80",
    description: "Never run out of power during Ekosodin light outages. Real capacity 20,000mAh charges iPhone 13/14 up to 4.5 times with 22.5W high-speed USB-C Power Delivery.",
    specs: {
      "Capacity": "20,000mAh (74Wh)",
      "Output": "USB-C 20W/22.5W + Dual USB-A 18W",
      "Digital Display": "LED Battery Level Indicator",
      "Recharge Time": "Fast 4.5 hours with PD adapter"
    },
    features: [
      "Powers 3 devices simultaneously",
      "Airplane travel approved",
      "MultiProtect 11-point safety system"
    ],
    inStock: true,
    stockCount: 18,
    isBestSeller: true,
    isFeatured: true,
    paySmallSmallEligible: false,
    warranty: "6 Months Anker Warranty"
  },
  {
    id: "magsafe-clear-case-glass",
    name: "9D Ceramic Privacy Glass + MagSafe Armor Case Combo",
    category: "accessories",
    condition: "Brand New",
    price: 7500,
    originalPrice: 10000,
    rating: 4.8,
    reviewsCount: 180,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    description: "The ultimate protection bundle for iPhone models. Unbreakable flexible 9D Ceramic anti-peep privacy tempered glass plus strong magnetic MagSafe shockproof case with raised camera lips.",
    specs: {
      "Glass Type": "Full Coverage 9D Privacy Ceramic (Anti-Crack)",
      "Case Type": "Anti-Yellowing MagSafe Shockproof Hybrid",
      "Models": "Available for iPhone X through 16 Pro Max"
    },
    features: [
      "Prevents side-view spying in class/buses",
      "Drop tested military-grade shock corners",
      "Free in-store installation at Edo Lane"
    ],
    inStock: true,
    stockCount: 50,
    isBestSeller: false,
    isFeatured: false,
    paySmallSmallEligible: false,
    warranty: "Instant Replacement if defective"
  },
  {
    id: "apple-watch-ultra-clone",
    name: "Apple Watch Series 9 / Ultra 2 Smartwatch (AMOLED)",
    category: "accessories",
    condition: "Brand New",
    price: 32000,
    originalPrice: 40000,
    rating: 4.7,
    reviewsCount: 68,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    description: "Stunning HD AMOLED screen, Bluetooth calling with loud speaker, heart rate, blood oxygen, sleep tracking, and customizable watch faces. Comes with 2 extra straps and wireless charger.",
    specs: {
      "Screen": "2.02-inch High-Res AMOLED",
      "Functions": "Call Receiving, WhatsApp Notifications, Sports Modes",
      "Battery": "3 - 5 Days normal use",
      "Straps": "Includes Ocean Loop + Alpine Band"
    },
    features: [
      "Direct phone calls & Siri voice assistant",
      "Full iOS & Android synchronization",
      "IP68 Waterproof rating"
    ],
    inStock: true,
    stockCount: 12,
    isBestSeller: false,
    isFeatured: false,
    paySmallSmallEligible: false,
    warranty: "30-Day Warranty"
  },

  // --- EXPERT REPAIRS ---
  {
    id: "repair-screen-replacement",
    name: "Original Screen & OLED Glass Replacement",
    category: "repairs",
    condition: "Repair Service",
    price: 25000,
    originalPrice: 30000,
    rating: 5.0,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?auto=format&fit=crop&w=800&q=80",
    description: "Cracked or bleeding screen? Get factory original OLED and LCD screen replacements for iPhone, Samsung, Tecno, Infinix, and iPads. 100% TrueTone transfer and touch responsiveness preserved.",
    specs: {
      "Turnaround Time": "Same-Day (30 - 60 Minutes)",
      "Warranty": "90-Day Touch & Display Warranty",
      "Includes": "TrueTone Restoration + Free 9D Glass",
      "Location": "In-Store at Edo Lane, Ekosodin"
    },
    features: [
      "Express 45-minute repair while you wait",
      "Original Vibrant Colors & 120Hz smooth scrolling",
      "Tested before pickup"
    ],
    inStock: true,
    isBestSeller: true,
    isFeatured: true,
    paySmallSmallEligible: true,
    warranty: "90-Day Guarantee"
  },
  {
    id: "repair-battery-health",
    name: "100% Original Battery Replacement (Zero Cycle)",
    category: "repairs",
    condition: "Repair Service",
    price: 18000,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 116,
    image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80532e?auto=format&fit=crop&w=800&q=80",
    description: "Is your iPhone or Android draining rapidly or shutting down at 20%? Replace with an OEM high-density zero-cycle battery for full 100% maximum capacity and all-day endurance.",
    specs: {
      "Turnaround Time": "30 Minutes Express",
      "Warranty": "6 Months No-Swelling Guarantee",
      "Compatibility": "iPhone 7 to 15 Series, Samsung, Redmi"
    },
    features: [
      "Restores 100% Battery Health reading",
      "High temperature protection circuit",
      "Includes new waterproof adhesive seal"
    ],
    inStock: true,
    isBestSeller: true,
    isFeatured: false,
    paySmallSmallEligible: false,
    warranty: "6 Months Warranty"
  },
  {
    id: "repair-ic-board-faceid",
    name: "Motherboard IC Repair, Face ID & Camera Fix",
    category: "repairs",
    condition: "Repair Service",
    price: 35000,
    originalPrice: 45000,
    rating: 4.9,
    reviewsCount: 67,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    description: "Advanced micro-soldering solutions for dead phones, Baseband 'No Service' errors, Audio IC glitches, Face ID 'Move phone a little lower', and Charging IC/Tristar repairs.",
    specs: {
      "Specialty": "Micro-soldering & Component Diagnostics",
      "Equipment": "Thermal Camera & Digital Microscope",
      "Turnaround": "24 - 48 Hours with full status updates"
    },
    features: [
      "No Data Loss repair protocol",
      "Master technician with 8+ years experience",
      "Free diagnostic check in store"
    ],
    inStock: true,
    isBestSeller: false,
    isFeatured: true,
    paySmallSmallEligible: true,
    warranty: "60-Day Warranty"
  },

  // --- DATA, AIRTIME & POS SERVICES ---
  {
    id: "service-data-vtu",
    name: "Fast SME Data Bundles (MTN / Airtel / Glo / 9mobile)",
    category: "data-pos",
    condition: "Digital Service",
    price: 1500,
    originalPrice: 2000,
    rating: 5.0,
    reviewsCount: 380,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    description: "Get cheap and lightning-fast SME/Gifting data subscriptions delivered to your phone in under 60 seconds! No network delay in Ekosodin.",
    specs: {
      "MTN SME": "1GB (₦350) | 2GB (₦700) | 5GB (₦1,700) | 10GB (₦3,400)",
      "Airtel CG": "1GB (₦400) | 2GB (₦800) | 5GB (₦1,900) | 10GB (₦3,800)",
      "Validity": "30 Days Full Access"
    },
    features: [
      "Instant automated recharge 24/7",
      "Cheapest rates for UNIBEN students",
      "Direct WhatsApp / POS counter top-up"
    ],
    inStock: true,
    isBestSeller: true,
    isFeatured: false,
    paySmallSmallEligible: false,
    warranty: "Instant Delivery Guarantee"
  },
  {
    id: "service-pos-agency",
    name: "POS Cash Withdrawal & Instant Transfer Agent",
    category: "data-pos",
    condition: "Digital Service",
    price: 100,
    originalPrice: 100,
    rating: 5.0,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=800&q=80",
    description: "Reliable POS Terminal Agency located at Edo Lane. We always have crisp cash available, lowest withdrawal charges, instant transfer confirmation, and zero failed network debits.",
    specs: {
      "Services": "Cash Withdrawal, Interbank Transfer, Utility Bills",
      "Network Uptime": "Dual SIM POS with 99.8% Success Rate",
      "Charges": "Affordable student rates from ₦100"
    },
    features: [
      "Always loaded with mint cash",
      "Receipt printed on every transaction",
      "Friendly attendants & secure premises"
    ],
    inStock: true,
    isBestSeller: true,
    isFeatured: true,
    paySmallSmallEligible: false,
    warranty: "Instant Receipt Issued"
  }
];

export const DATA_BUNDLES: DataBundle[] = [
  { id: "mtn-1gb", network: "MTN", name: "1GB SME Data", dataAmount: "1 GB", price: 350, validity: "30 Days", popular: false },
  { id: "mtn-2gb", network: "MTN", name: "2GB SME Data", dataAmount: "2 GB", price: 700, validity: "30 Days", popular: true },
  { id: "mtn-5gb", network: "MTN", name: "5GB SME Data", dataAmount: "5 GB", price: 1700, validity: "30 Days", popular: true },
  { id: "mtn-10gb", network: "MTN", name: "10GB SME Data", dataAmount: "10 GB", price: 3400, validity: "30 Days", popular: false },
  
  { id: "airtel-1gb", network: "AIRTEL", name: "1GB Corporate Data", dataAmount: "1 GB", price: 400, validity: "30 Days", popular: false },
  { id: "airtel-2gb", network: "AIRTEL", name: "2GB Corporate Data", dataAmount: "2 GB", price: 800, validity: "30 Days", popular: true },
  { id: "airtel-5gb", network: "AIRTEL", name: "5GB Corporate Data", dataAmount: "5 GB", price: 1900, validity: "30 Days", popular: true },
  
  { id: "glo-2gb", network: "GLO", name: "2.5GB Data", dataAmount: "2.5 GB", price: 950, validity: "30 Days", popular: false },
  { id: "glo-5gb", network: "GLO", name: "5.8GB Data", dataAmount: "5.8 GB", price: 1900, validity: "30 Days", popular: true },

  { id: "9mob-2gb", network: "9MOBILE", name: "2GB SME Data", dataAmount: "2 GB", price: 900, validity: "30 Days", popular: false }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Osasere Ighodaro",
    role: "UNIBEN Engineering Student, Ekosodin",
    comment: "Bought my UK Used iPhone 13 from ProGadget Hub on Edo Lane with their Pay Small Small plan. The phone is literally 100% spotless, battery is 93%, and they even gave me a free 20W charger adapter! Best tech store in Ekosodin.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    verifiedItem: "iPhone 13 128GB UK Used",
    date: "2 days ago"
  },
  {
    id: "test-2",
    name: "Emmanuel Chukwu",
    role: "Content Creator & Photographer",
    comment: "My iPhone 14 Pro screen smashed completely last week. I took it to ProGadget Hub and within 40 minutes they fixed it with an original OLED screen and restored TrueTone. Very honest pricing compared to Ring Road shops.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    verifiedItem: "OLED Screen Replacement Service",
    date: "1 week ago"
  },
  {
    id: "test-3",
    name: "Blessing Aigbokhan",
    role: "Ekosodin Resident & Entrepreneur",
    comment: "I always withdraw cash and do transfers at their POS spot, plus I bought my JBL Charge 5 here. The speaker is 100% original and shakes my entire apartment. Their customer service on WhatsApp is super fast.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    verifiedItem: "JBL Charge 5 Speaker",
    date: "3 weeks ago"
  },
  {
    id: "test-4",
    name: "Kevin Orobosa",
    role: "Computer Science Dept, UNIBEN",
    comment: "ProGadget Hub is the only place in Ekosodin where you don't have to worry about fake accessories. Their Apple fast chargers and Anker powerbanks are genuine. I recommend them to all students.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    verifiedItem: "Anker 20,000mAh Powerbank",
    date: "1 month ago"
  }
];
