export type ProductCategory = 'all' | 'phones' | 'accessories' | 'repairs' | 'data-pos';

export type ProductCondition = 'UK Used' | 'Brand New' | 'Certified Refurbished' | 'Repair Service' | 'Digital Service';

export interface Product {
  id: string;
  name: string;
  category: 'phones' | 'accessories' | 'repairs' | 'data-pos';
  condition: ProductCondition;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  specs: { [key: string]: string };
  features: string[];
  inStock: boolean;
  stockCount?: number;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  paySmallSmallEligible: boolean;
  minDownPaymentPercent?: number; // e.g. 30
  storageOptions?: string[];
  colorOptions?: string[];
  warranty: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedStorage?: string;
  selectedColor?: string;
  isPaySmallSmall: boolean;
  customNotes?: string;
}

export interface RepairEstimateRequest {
  deviceType: string;
  deviceModel: string;
  issue: string;
  urgency: 'express' | 'standard';
  customerName: string;
  customerPhone: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  verifiedItem: string;
  date: string;
}

export interface DataBundle {
  id: string;
  network: 'MTN' | 'AIRTEL' | 'GLO' | '9MOBILE';
  name: string;
  dataAmount: string;
  price: number;
  validity: string;
  popular?: boolean;
}
