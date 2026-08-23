import { CartItem, Product, RepairEstimateRequest } from '../types';
import { STORE_INFO } from '../data/products';

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(amount).replace('NGN', '₦');
}

export function calculateInstallment(
  totalPrice: number,
  downPaymentPercent: number = 30,
  durationMonths: number = 3
) {
  const downPayment = Math.round((totalPrice * downPaymentPercent) / 100);
  const remainingBalance = totalPrice - downPayment;
  // Modest financing charge (5% for flexible tenure in Ekosodin student financing)
  const interestRate = durationMonths === 1 ? 0.03 : durationMonths === 3 ? 0.07 : 0.12;
  const financedTotal = remainingBalance * (1 + interestRate);
  const monthlyPayment = Math.round(financedTotal / durationMonths);
  const weeklyPayment = Math.round(financedTotal / (durationMonths * 4));

  return {
    downPayment,
    remainingBalance,
    financedTotal,
    monthlyPayment,
    weeklyPayment,
    totalPayable: downPayment + financedTotal
  };
}

/**
 * Builds direct WhatsApp URL with pre-filled message for an individual product order
 */
export function buildProductWhatsAppUrl(
  product: Product,
  options?: {
    storage?: string;
    color?: string;
    isPaySmallSmall?: boolean;
    downPaymentPercent?: number;
    durationMonths?: number;
    deliveryMethod?: string;
  }
): string {
  const isPSS = options?.isPaySmallSmall || false;
  const storage = options?.storage ? ` • Storage: ${options.storage}` : '';
  const color = options?.color ? ` • Color: ${options.color}` : '';
  const delivery = options?.deliveryMethod || 'In-Store Pickup (Edo Lane, Ekosodin)';

  let message = `Hello ProGadget Hub Ltd! 🚀\n\nI want to order from your official catalog:\n`;
  message += `📦 *Item*: ${product.name}\n`;
  message += `🏷️ *Category/Condition*: ${product.condition} (${product.category.toUpperCase()})\n`;
  message += `💰 *Price*: ${formatNaira(product.price)}${storage}${color}\n`;
  message += `📍 *Delivery/Pickup*: ${delivery}\n\n`;

  if (isPSS) {
    const calc = calculateInstallment(
      product.price,
      options?.downPaymentPercent || 30,
      options?.durationMonths || 3
    );
    message += `💳 *PLAN: Pay Small Small Financing*\n`;
    message += `- Initial Down Payment (${options?.downPaymentPercent || 30}%): ${formatNaira(calc.downPayment)}\n`;
    message += `- Duration: ${options?.durationMonths || 3} Month(s)\n`;
    message += `- Est. Weekly Payment: ${formatNaira(calc.weeklyPayment)} / week\n`;
    message += `- Est. Monthly Payment: ${formatNaira(calc.monthlyPayment)} / month\n\n`;
    message += `Please verify availability and the financing requirements for Ekosodin pickup!`;
  } else {
    message += `💳 *PLAN*: Outright Full Payment\n`;
    message += `Please confirm if this item is ready for inspection/pickup at Edo Lane off Edo Street, Ekosodin!`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${STORE_INFO.phoneWhatsAppInternational}?text=${encodedMessage}`;
}

/**
 * Builds direct WhatsApp URL for Cart checkout with multiple items
 */
export function buildCartWhatsAppUrl(
  items: CartItem[],
  totalAmount: number,
  deliveryMethod: string,
  customerName?: string,
  customerAddress?: string,
  hasDiscount?: boolean
): string {
  let message = `Hello ProGadget Hub Ltd! 🛒\n\nI want to place an order for the following items:\n\n`;

  items.forEach((item, index) => {
    const storage = item.selectedStorage ? ` [${item.selectedStorage}]` : '';
    const color = item.selectedColor ? ` [${item.selectedColor}]` : '';
    const plan = item.isPaySmallSmall ? ' (Pay Small Small)' : '';
    message += `${index + 1}. *${item.product.name}* ${storage}${color}\n`;
    message += `   Qty: ${item.quantity} × ${formatNaira(item.product.price)} = ${formatNaira(item.product.price * item.quantity)}${plan}\n\n`;
  });

  if (hasDiscount) {
    message += `🎟️ *Student/Promo Discount Applied*: 5% OFF\n`;
  }

  message += `💰 *TOTAL ESTIMATE*: ${formatNaira(totalAmount)}\n`;
  message += `🚚 *Delivery Option*: ${deliveryMethod}\n`;
  if (customerName) message += `👤 *Customer Name*: ${customerName}\n`;
  if (customerAddress) message += `📍 *Delivery Location*: ${customerAddress}\n`;

  message += `\nPlease confirm order status and account details for payment/pickup!`;

  return `https://wa.me/${STORE_INFO.phoneWhatsAppInternational}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds direct WhatsApp URL for repair service inquiry
 */
export function buildRepairWhatsAppUrl(req: RepairEstimateRequest): string {
  let message = `Hello ProGadget Hub Ltd Repair Team! 🔧\n\nI need an expert repair for my device:\n\n`;
  message += `📱 *Device*: ${req.deviceType} - ${req.deviceModel}\n`;
  message += `⚠️ *Issue Reported*: ${req.issue}\n`;
  message += `⚡ *Service Speed*: ${req.urgency === 'express' ? 'Same-Day Express (Under 60 Mins)' : 'Standard Diagnostic'}\n`;
  if (req.customerName) message += `👤 *Name*: ${req.customerName}\n`;
  if (req.customerPhone) message += `📞 *Phone*: ${req.customerPhone}\n`;
  if (req.notes) message += `📝 *Additional Notes*: ${req.notes}\n`;

  message += `\nPlease give me an estimated cost and let me know when I can bring it to your workshop at Edo Lane off Edo Street, Ekosodin!`;

  return `https://wa.me/${STORE_INFO.phoneWhatsAppInternational}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds direct WhatsApp URL for Data / Airtime Top-Up
 */
export function buildDataTopUpWhatsAppUrl(network: string, plan: string, phone: string, price: number): string {
  let message = `Hello ProGadget Hub VTU Desk! ⚡\n\nI want to subscribe for Data/Airtime:\n`;
  message += `📶 *Network*: ${network}\n`;
  message += `📦 *Plan*: ${plan}\n`;
  message += `📱 *Beneficiary Phone*: ${phone}\n`;
  message += `💰 *Amount*: ${formatNaira(price)}\n\n`;
  message += `Please provide payment account details for instant top-up!`;

  return `https://wa.me/${STORE_INFO.phoneWhatsAppInternational}?text=${encodeURIComponent(message)}`;
}
