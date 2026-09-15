import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings, X, Cookie } from 'lucide-react';
import { Legal } from '../type/legal';

interface CookieBannerProps {
  onOpenLegalModal: (tab: Legal) => void;
}

type ConsentStatus = 'granted' | 'denied' | null;

const readConsentStatus = (): ConsentStatus => {
  const currentConsent = localStorage.getItem('cookie_consent');
  if (currentConsent === 'granted' || currentConsent === 'denied') {
    return currentConsent;
  }

  const legacyConsent = localStorage.getItem('pg_cookie_consent');
  if (!legacyConsent) return null;

  try {
    const parsed = JSON.parse(legacyConsent) as { analytics?: boolean };
    return parsed.analytics === true ? 'granted' : 'denied';
  } catch {
    return null;
  }
};

export const openCookieSettings = () => {
    localStorage.removeItem('cookie_consent');
    localStorage.removeItem('pg_cookie_consent');
    window.location.reload();
};

const applyConsentUpdate = (analyticsAllowed: boolean, adAllowed: boolean = false) => {
  if (typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    'analytics_storage': analyticsAllowed ? 'granted' : 'denied',
    'ad_storage': adAllowed ? 'granted' : 'denied',
    'ad_user_data': adAllowed ? 'granted' : 'denied',
    'ad_personalization': adAllowed ? 'granted' : 'denied'
  });
};

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenLegalModal }) => {
  const [isVisible, setIsVisible] = useState(() => readConsentStatus() === null);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const consentStatus = readConsentStatus();
    const bannerVisible = consentStatus === null;
    console.log('[Cookie Banner] State:', {
      visible: bannerVisible,
      consentValue: consentStatus
    });
    console.log('[Consent Audit]', {
      event: 'initialized',
      status: consentStatus ?? 'unset',
      bannerVisible
    });

    if (consentStatus === null) {
      setIsVisible(true);
      setAnalyticsConsent(false);
      return;
    }

    const hasGranted = consentStatus === 'granted';
    setAnalyticsConsent(hasGranted);

    if (hasGranted) {
      applyConsentUpdate(true, true);
    } else {
      applyConsentUpdate(false, false);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie_consent', 'granted');
    localStorage.removeItem('pg_cookie_consent');
    applyConsentUpdate(true, true);
    console.log('[Consent Audit]', { event: 'accept_all', status: 'granted' });
    setAnalyticsConsent(true);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleRejectOptional = () => {
    localStorage.setItem('cookie_consent', 'denied');
    localStorage.removeItem('pg_cookie_consent');
    applyConsentUpdate(false, false);
    console.log('[Consent Audit]', { event: 'reject_optional', status: 'denied' });
    setAnalyticsConsent(false);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSaveCustom = () => {
    const consentState = analyticsConsent ? 'granted' : 'denied';
    localStorage.setItem('cookie_consent', consentState);
    localStorage.removeItem('pg_cookie_consent');
    applyConsentUpdate(analyticsConsent, false);
    console.log('[Consent Audit]', {
      event: 'save_preferences',
      status: consentState,
      analytics: analyticsConsent
    });
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div data-consent-banner="true" className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#111111]/95 backdrop-blur-md border-t border-white/10 shadow-2xl p-4 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-2xl sm:border text-white font-sans">
      {!showPreferences ? (
        /* Main Banner View */
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-[#FFC700]">
              <Cookie className="w-5 h-5 shrink-0" />
              <h4 className="font-bold text-sm tracking-wide uppercase font-['Outfit',sans-serif]">
                Cookie & Privacy Notice
              </h4>
            </div>
            <button
              onClick={handleRejectOptional}
              className="text-slate-400 hover:text-white p-1 transition-colors"
              title="Close and reject optional"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            We use essential cookies to power your cart and order checkout. We also use optional analytics cookies under the NDPA 2023 to improve site speed and catalog performance.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <button
              onClick={() => onOpenLegalModal('cookies')}
              className="text-[#FFC700] underline hover:text-[#e6b300] font-medium"
            >
              Read Policy
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => setShowPreferences(true)}
              className="text-slate-300 hover:text-white flex items-center gap-1 font-medium"
            >
              <Settings className="w-3.5 h-3.5" /> Customize
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={handleRejectOptional}
              className="px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-3 py-2 rounded-lg bg-[#FFC700] hover:bg-[#e6b300] text-black text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      ) : (
        /* Preference Customizer View */
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wide">
              Cookie Preferences
            </h4>
            <button
              onClick={() => setShowPreferences(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Back
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {/* Essential Category */}
            <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <span>Essential Trackers</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  Required for cart state, session routing, and SSL security.
                </p>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold uppercase">
                Always Active
              </span>
            </div>

            {/* Analytics Category */}
            <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start justify-between gap-3">
              <div>
                <div className="font-bold text-white">Analytics Cookies (GA4)</div>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  Anonymized aggregated site traffic statistics.
                </p>
              </div>
              <input
                type="checkbox"
                checked={analyticsConsent}
                onChange={(e) => setAnalyticsConsent(e.target.checked)}
                className="w-4 h-4 accent-[#FFC700] cursor-pointer mt-1"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={handleSaveCustom}
              className="w-full py-2 rounded-lg bg-[#FFC700] hover:bg-[#e6b300] text-black text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
};