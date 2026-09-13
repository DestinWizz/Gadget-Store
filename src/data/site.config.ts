export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  condition: 'Grade A+ Pristine' | 'Grade A Clean' | 'Grade B Fair' | 'Brand New';
  batteryHealth?: number;
  lciPassed: boolean;
  image: string;
}

export interface SiteConfig {
  business: {
    name: string;
    tagLine: string;
    phone: string;
    whatsappNumber: string;
    physicalAddress: string;
    landmarks: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
  };
  trustAnchors: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const siteConfig: SiteConfig = {
  business: {
    name: "Pro Gadgets Benin",
    tagLine: "Certified UK-Used & Factory Sealed Tech in Benin City",
    phone: "+2348000000000",
    whatsappNumber: "2348000000000",
    physicalAddress: "Shop 12, Commercial Complex, Opposite Ring Road",
    landmarks: "Ring Road / Mission Road, Benin City, Edo State"
  },
  hero: {
    headline: "100% Original Tech. Zero Counterfeits. Verified Warranties Delivered Across Benin City.",
    subheadline: "Shop certified brand new and factory-tested UK-used iPhones, Samsungs, and Laptops. Transparent battery grading, instant trade-ins, and doorstep inspection anywhere in Benin City.",
    primaryCtaText: "Shop Certified Devices",
    secondaryCtaText: "WhatsApp Live Inspection"
  },
  trustAnchors: [
    {
      title: "Physical Store Verification",
      description: "Visit our verified store at Ring Road, Benin City to test devices in person."
    },
    {
      title: "Grade A+ OEM Genuine",
      description: "Tested for 100% original screens, functional biometrics, and verified LCI fluid sensors."
    },
    {
      title: "Hybrid Pay-on-Delivery",
      description: "Pay a minimal transit fee upfront, inspect your device at home, and pay the balance."
    }
  ],
  faqs: [
    {
      question: "How do I know your UK-Used devices are genuine?",
      answer: "Every device passes a 20-point diagnostic test verifying clean IMEI, internal liquid contact indicators (LCI), original display screens, and functional biometrics."
    },
    {
      question: "Can I inspect the device physically before making full payment in Benin City?",
      answer: "Yes! Visit our store near Ring Road, or pay a small doorstep commitment fee to inspect the unit at your home/office before paying the final balance."
    },
    {
      question: "Do you offer doorstep delivery to locations like Uselu, GRA, or Airport Road?",
      answer: "Yes, we offer same-day doorstep dispatch across central Benin City including GRA, Airport Road, Uselu, Ekenwan Road, and Akpakpava."
    }
  ]
};