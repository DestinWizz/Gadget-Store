import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  MessageCircle, 
  Check, 
  Smartphone, 
  Sparkles,
  Wifi
} from 'lucide-react';
import { DATA_BUNDLES, STORE_INFO } from '../data/products';
import { formatNaira, buildDataTopUpWhatsAppUrl } from '../utils/helpers';

interface DataTopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataTopUpModal: React.FC<DataTopUpModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [selectedNetwork, setSelectedNetwork] = useState<'MTN' | 'AIRTEL' | 'GLO' | '9MOBILE'>('MTN');
  const [selectedBundleId, setSelectedBundleId] = useState<string>('mtn-2gb');
  const [phoneNumber, setPhoneNumber] = useState('');

  const networkBundles = DATA_BUNDLES.filter(b => b.network === selectedNetwork);
  const currentBundle = DATA_BUNDLES.find(b => b.id === selectedBundleId) || networkBundles[0];

  const handleTopUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentBundle) return;
    const url = buildDataTopUpWhatsAppUrl(
      selectedNetwork,
      `${currentBundle.name} (${currentBundle.validity})`,
      phoneNumber || 'To be specified',
      currentBundle.price
    );
    window.open(url, '_blank');
    onClose();
  };

  const networks = [
    { id: 'MTN', color: '#FFCC00', textColor: '#000000', label: 'MTN SME' },
    { id: 'AIRTEL', color: '#FF0000', textColor: '#FFFFFF', label: 'Airtel CG' },
    { id: 'GLO', color: '#00B050', textColor: '#FFFFFF', label: 'Glo Gifting' },
    { id: '9MOBILE', color: '#006600', textColor: '#FFFFFF', label: '9mobile' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#111111] border border-[#25D366]/40 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161616] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-[#25D366] text-black">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
                Instant SME Data & Airtime
              </h2>
              <p className="text-xs text-gray-400 font-medium">
                Cheapest VTU Rates in Ekosodin • 60-Second Automated Delivery
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

        {/* Body */}
        <form onSubmit={handleTopUp} className="p-6 sm:p-8 space-y-6">
          
          {/* Network Selector Tabs */}
          <div>
            <label className="text-xs font-black text-gray-300 uppercase tracking-wider block mb-2">
              Select Telecom Network:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {networks.map((net) => (
                <button
                  key={net.id}
                  type="button"
                  onClick={() => {
                    setSelectedNetwork(net.id as any);
                    const first = DATA_BUNDLES.find(b => b.network === net.id);
                    if (first) setSelectedBundleId(first.id);
                  }}
                  className={`py-2.5 px-2 rounded-md text-xs font-black uppercase tracking-wider border transition-all text-center cursor-pointer ${
                    selectedNetwork === net.id
                      ? 'bg-white text-black border-white shadow-lg'
                      : 'bg-[#181818] text-gray-400 border-white/10 hover:border-white/20'
                  }`}
                >
                  {net.id}
                </button>
              ))}
            </div>
          </div>

          {/* Bundle Selection Grid */}
          <div>
            <label className="text-xs font-black text-gray-300 uppercase tracking-wider block mb-2">
              Choose {selectedNetwork} Data Plan:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {networkBundles.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBundleId(b.id)}
                  className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    selectedBundleId === b.id
                      ? 'bg-[#25D366]/15 border-[#25D366] ring-1 ring-[#25D366]'
                      : 'bg-[#181818] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-tight text-white">{b.name}</span>
                    {b.popular && (
                      <span className="text-[9px] font-black uppercase bg-[#FFC700] text-black px-1.5 py-0.5 rounded">
                        HOT
                      </span>
                    )}
                  </div>
                  <div className="text-base font-black text-[#25D366] font-['Outfit',sans-serif] mt-1">
                    {formatNaira(b.price)}
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block mt-0.5">Validity: {b.validity}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="text-xs font-black text-gray-300 uppercase tracking-wider block mb-1.5">
              Target Phone Number for Recharge:
            </label>
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 08012345678"
              className="w-full bg-[#181818] border border-white/15 rounded-md py-2.5 px-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366]"
            />
          </div>

          {/* Order Summary & Submit Button */}
          <div className="pt-2 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs text-gray-300 font-bold uppercase tracking-wider">
              <span>Total Recharge Cost:</span>
              <span className="text-lg font-black text-white font-['Outfit',sans-serif]">
                {currentBundle ? formatNaira(currentBundle.price) : '₦0'}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Instant Top-Up via WhatsApp</span>
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};
