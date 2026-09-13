import React, { useState } from 'react';
import { 
  X, 
  Wrench, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  Smartphone,
  Cpu,
  BatteryCharging,
  Eye,
  Droplet
} from 'lucide-react';
import { buildRepairWhatsAppUrl } from '../utils/helpers';
import { STORE_INFO } from '../data/products';

interface RepairBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RepairBookingModal: React.FC<RepairBookingModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [deviceType, setDeviceType] = useState('iPhone');
  const [deviceModel, setDeviceModel] = useState('');
  const [issue, setIssue] = useState('Cracked Screen / OLED Bleeding');
  const [urgency, setUrgency] = useState<'express' | 'standard'>('express');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  const commonIssues = [
    { label: 'Cracked Screen / OLED Bleeding', icon: Smartphone },
    { label: 'Battery Drain / Battery Health Low', icon: BatteryCharging },
    { label: 'Charging Port & Tristar IC Issue', icon: Cpu },
    { label: 'Face ID / Front Camera Problem', icon: Eye },
    { label: 'Water Damage / No Power Diagnostic', icon: Droplet },
    { label: 'Baseband / No Service / Audio IC', icon: Wrench },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildRepairWhatsAppUrl({
      deviceType,
      deviceModel: deviceModel || 'Not Specified',
      issue,
      urgency,
      customerName,
      customerPhone,
      notes
    });
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#FFC700]/40 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161616] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-[#FFC700] text-black">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
                Book Expert Repair Desk
              </h2>
              <p className="text-xs text-gray-400 font-medium">
                Edo Lane off Edo Street, Ekosodin • Same-Day Service
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-gray-400 hover:text-white bg-[#1A1A1A] hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleBooking} className="p-6 sm:p-8 space-y-5">
          
          {/* Quick Perks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-bold uppercase tracking-wider text-[11px]">
            <div className="p-2.5 rounded-lg bg-[#161616] border border-white/10 flex items-center gap-2 text-gray-300">
              <Clock className="w-4 h-4 text-[#FFC700] shrink-0" />
              <span>30-60 Min Fix</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#161616] border border-white/10 flex items-center gap-2 text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>90-Day Warranty</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#161616] border border-white/10 flex items-center gap-2 text-gray-300 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#FFC700] shrink-0" />
              <span>Free TrueTone</span>
            </div>
          </div>

          {/* Device Brand & Model Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-black text-gray-300 uppercase tracking-wider block mb-1.5">
                Device Brand:
              </label>
              <select
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                className="w-full bg-[#181818] border border-white/15 rounded-md py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#FFC700] font-medium"
              >
                <option value="iPhone (Apple)">Apple iPhone</option>
                <option value="iPad / Tablet">Apple iPad / Tablet</option>
                <option value="Samsung Galaxy">Samsung Galaxy</option>
                <option value="Google Pixel">Google Pixel</option>
                <option value="Tecno / Infinix / Redmi">Tecno / Infinix / Redmi</option>
                <option value="MacBook / Laptop">MacBook / Laptop</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-black text-gray-300 uppercase tracking-wider block mb-1.5">
                Model Name:
              </label>
              <input
                type="text"
                required
                value={deviceModel}
                onChange={(e) => setDeviceModel(e.target.value)}
                placeholder="E.G. IPHONE 13 PRO / SAMSUNG S22"
                className="w-full bg-[#181818] border border-white/15 rounded-md py-2.5 px-3 text-xs text-white placeholder-gray-500 uppercase focus:outline-none focus:border-[#FFC700] font-bold"
              />
            </div>
          </div>

          {/* Fault / Issue Selector */}
          <div>
            <label className="text-xs font-black text-gray-300 uppercase tracking-wider block mb-2">
              Select Device Fault / Issue:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {commonIssues.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setIssue(item.label)}
                  className={`p-3 rounded-lg text-left text-xs uppercase tracking-wider font-black border transition-all flex items-center gap-2.5 cursor-pointer ${
                    issue === item.label
                      ? 'bg-[#FFC700] text-black border-[#FFC700]'
                      : 'bg-[#181818] text-gray-300 border-white/10 hover:border-white/20'
                  }`}
                >
                  <item.icon className={`w-4 h-4 shrink-0 ${issue === item.label ? 'text-black' : 'text-[#FFC700]'}`} />
                  <span className="truncate text-[11px]">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label className="text-xs font-black text-gray-300 uppercase tracking-wider block mb-1.5">
              Service Urgency:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUrgency('express')}
                className={`p-2.5 rounded-md text-xs font-black uppercase tracking-wider border transition-colors cursor-pointer ${
                  urgency === 'express'
                    ? 'bg-[#25D366]/20 border-[#25D366] text-[#25D366]'
                    : 'bg-[#181818] border-white/10 text-gray-400'
                }`}
              >
                ⚡ Express (30 - 60 Mins)
              </button>
              <button
                type="button"
                onClick={() => setUrgency('standard')}
                className={`p-2.5 rounded-md text-xs font-black uppercase tracking-wider border transition-colors cursor-pointer ${
                  urgency === 'standard'
                    ? 'bg-[#FFC700]/20 border-[#FFC700] text-[#FFC700]'
                    : 'bg-[#181818] border-white/10 text-gray-400'
                }`}
              >
                🛠️ Standard Diagnostic
              </button>
            </div>
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-black text-gray-300 uppercase tracking-wider block mb-1.5">
                Your Name:
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-[#181818] border border-white/15 rounded-md py-2 px-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC700]"
              />
            </div>

            <div>
              <label className="text-xs font-black text-gray-300 uppercase tracking-wider block mb-1.5">
                Phone Number (Optional):
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="e.g. 08123456789"
                className="w-full bg-[#181818] border border-white/15 rounded-md py-2 px-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC700]"
              />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3.5 px-6 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Get Quote on WhatsApp</span>
            </button>

            <a
              href={`tel:${STORE_INFO.phoneCall}`}
              className="w-full sm:w-auto py-3.5 px-5 rounded-md bg-[#181818] hover:bg-white/10 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FFC700]" />
              <span>Call: {STORE_INFO.phoneCall}</span>
            </a>
          </div>

        </form>

      </div>

    </div>
  );
};
