# COOKIE NOTICE & ANALYTICAL TRACKING POLICY

**Data Controller:** PRO Gadgets (Management / Data Desk)
**Technical Data Processor:** Destin-Wizz Agency
**Location:** Edo Lane, Ekosodin, Benin City, Edo State, Nigeria
**Governing Regulation:** Nigeria Data Protection Act (NDPA) 2023
**Regulatory Body:** Nigeria Data Protection Commission (NDPC)
**Version:** 1.1
**Effective Date:** September 14, 2026
**Last Updated:** September 14, 2026

> This Cookie Notice is part of the same consent framework as our Privacy Policy (v4.0) and Terms of Service (v1.0), and shares their effective date. Material changes to this notice trigger the same active re-prompt banner described in Section 6 below.

---

## 1. Introduction, Scope & Statutory Declaration

This Cookie Notice explains how **PRO Gadgets** ("Store", "we", "us", or "our") and **Destin-Wizz Agency** (the "Technical Data Processor") use cookies, session tokens, and local browser storage technologies (`sessionStorage` and `localStorage`) on our web application and digital storefront.

Our cookie management practices comply with the **Nigeria Data Protection Act (NDPA) 2023** and guidelines issued by the **Nigeria Data Protection Commission (NDPC)**. This policy applies to all visitors, buyers, and students accessing our platform across Ekosodin, UNIBEN, and Benin City.

* **Practical Real-World Implication for Consumers:** When you browse our catalog or add a phone to your cart, you know exactly what digital trackers are running on your phone or laptop. Your browser data is handled transparently under Nigerian law rather than harvested silently.
* **Practical Real-World Implication for Business (PRO Gadgets & Destin-Wizz Agency):** Operating a transparent, NDPA-compliant cookie banner and notice fulfills statutory disclosure obligations under Section 27 of the NDPA 2023, protecting both the merchant and the Technical Data Processor from NDPC compliance inquiries or privacy complaints.

---

## 2. What Are Cookies and Browser Storage Technologies?

* **Cookies:** Small text files placed on your computer, smartphone, or tablet when you visit a website. Cookies allow the platform to recognize your device across visits, remember your shopping preferences, and maintain secure checkout sessions.
* **Session Storage (`sessionStorage`):** Temporary browser memory that holds active data (such as item filters or active tab views) while your browser tab remains open. It is erased automatically as soon as you close the tab.
* **Local Storage (`localStorage`):** Persistent browser memory used to save non-sensitive preferences (such as your shopping cart state or selected installment tenure) so your selections are preserved if you accidentally refresh the page.

We do not currently use web beacons or pixel tags on this storefront; if that changes, this Notice will be updated and the change will be treated as material under Section 6.

* **Practical Real-World Implication for Consumers:** If your internet connection drops or you refresh your browser while selecting an iPhone or MacBook, `localStorage` prevents your cart from resetting to zero.
* **Practical Real-World Implication for Business:** Reduces server load and database overhead on our cloud hosting while delivering an instant-loading user experience.

---

## 3. Legal Basis for Each Category of Cookie (Section 25, NDPA 2023)

Before listing individual trackers, here is the statutory ground each category relies on:

| Category | Legal Basis (NDPA 2023) | Consent Required? |

| A. Essential / Strictly Necessary | Performance of a Contract — Section 25(1)(b)(i); Legitimate Interest (security/fraud prevention) — Section 25(1)(b)(v) | No — cannot be disabled via banner |
| B. Analytics & Performance | Explicit Consent — Section 25(1)(a) & Section 26 | Yes — opt-in only |
| C. Functional & Third-Party Integration (Payment / BNPL) | Performance of a Contract — Section 25(1)(b)(i), triggered only by your own action (initiating checkout or a financing application) | No — but disclosed here for transparency |

---

## 4. Categories of Cookies & Storage Technologies Used

In accordance with the **Data Minimization Principle** (Section 24(1)(c), NDPA 2023), we classify and limit trackers into three operational categories:

### A. Essential / Strictly Necessary Cookies (Always Active)

These cookies and storage tokens are technically essential for core storefront operation, security, and order checkout routing. They rely on the legal bases in Section 3 above, do not require prior consent, and cannot be disabled in our Cookie Banner.

| Cookie / Token Name | Provider | Storage Type & Lifespan | Technical Purpose |

| `pg_cart_state` | PRO Gadgets (1st Party) | `localStorage` (30 Days) | Stores selected gadget model, storage size, color choice, and quantity. |
| `pg_session_id` | Destin-Wizz Agency, on behalf of PRO Gadgets | `sessionStorage` (Session) | Maintains secure session state during WhatsApp order payload generation. Once you are redirected to WhatsApp itself, further messaging is governed by WhatsApp/Meta's own privacy terms, not this Notice. |
| `__cf_bm` / `__cfruid` | Hosting / CDN security provider | Cookie (30 Minutes) | Bot protection, DDoS mitigation, and SSL web application security. |

* **Practical Real-World Implication for Consumers:** Ensures your items stay safely in your cart while you navigate between phone categories and checkout options.
* **Practical Real-World Implication for Business:** Prevents malicious bot attacks from spamming order generation scripts or crashing the server.

### B. Analytics & Performance Cookies (Optional / Consent-Based)

These trackers gather aggregated, anonymized usage statistics to help us analyze site speed, traffic volume, and popular product categories around UNIBEN and Ekosodin. They fire **only after active consent**.

| Cookie Name | Provider | Storage Type & Lifespan | Technical Purpose |

| `_ga` | Google Analytics (GA4) | Persistent Cookie (2 Years) | Distinguishes unique visitors anonymously with IP anonymization enabled. |
| `_ga_<container-id>` | Google Analytics (GA4) | Persistent Cookie (2 Years) | Maintains session state and counts aggregate page views across product pages. |

**Cookieless Consent Signals:** We use Google Consent Mode v2. If you reject or have not yet responded to Analytics cookies, no `_ga` cookie is set — but Google may still receive anonymous, cookieless "consent mode" pings (no device identifier, no personal data) used only to model aggregate traffic. These pings are not personal data processing and do not require separate consent, but we disclose them here for full transparency.

* **Practical Real-World Implication for Consumers:** Your specific personal identity (NIN, phone number, name) is never attached to traffic stats; Google Analytics sees only aggregate visitor counts.
* **Practical Real-World Implication for Business:** Provides insights on which gadgets (e.g., iPhone 13 vs. Samsung S23) receive the highest student interest, enabling better local inventory planning at Edo Lane.

### C. Functional & Third-Party Integration Identifiers

When you initiate an online payment or apply for installment financing, third-party integration scripts process session tokens strictly to execute the transaction you requested. These fire automatically as part of that action and are not gated by the Cookie Banner, per the legal basis in Section 3.

| Integration Partner | Technical Role | Storage Identifier | Functional Purpose |

| **Paystack** | PCI-DSS Payment Gateway | `pstk_device_id` (Session) | Secures card or bank transfer checkout and prevents transaction fraud. |
| **CredPal / EasyBuy** | Licensed BNPL Lender | `bnpl_session_token` (Session) | Handshake token transferring financing inquiries securely to lender underwriting portals. |

* **Practical Real-World Implication for Consumers:** Card details and credit checks are handled entirely by licensed financial institutions, never stored by PRO Gadgets or Destin-Wizz Agency.
* **Practical Real-World Implication for Business:** Offloads payment security and credit underwriting liabilities onto certified financial partners.

---

## 5. Third-Party Data Handoffs, Cross-Border Transfers & Zero Ad-Broker Sales

Google Analytics, Paystack, and our BNPL partners (CredPal/EasyBuy) may set cookies or receive session identifiers when their services are actively triggered by your actions. Some of this data may be processed on infrastructure located outside Nigeria; the lawful transfer mechanisms that apply are set out in **Privacy Policy, Section 6 (Cross-Border Data Transfers)**.

* **Zero Ad-Broker Sales:** Neither PRO Gadgets nor Destin-Wizz Agency sells, rents, trades, or monetizes cookie data, browsing logs, or customer lists to third-party ad brokers or telemarketers.
* **Instruction Limits:** Third-party financial partners process transaction data strictly in accordance with their own regulatory duties and your user-initiated actions.

* **Practical Real-World Implication for Consumers:** You will never receive spam calls or unsolicited SMS ads from third-party brokers as a result of browsing our storefront.
* **Practical Real-World Implication for Business:** Ensures compliance with Section 29 of the NDPA 2023 regarding third-party processor instructions and data protection standards.

---

## 6. User Control, Preference Management & Right to Withdraw

In compliance with Section 26(3) of the NDPA 2023, **silence or inactivity does not constitute consent**, and non-essential cookies fire only upon your affirmative opt-in.

**Withdrawal is free and frictionless.** Per Section 35 of the NDPA 2023, withdrawing consent is exactly as easy as giving it, carries no fee, and takes effect immediately. Withdrawing Analytics consent will never affect your ability to browse, order, or check out — only Essential cookies are required for those functions.

### A. Managing Preferences via Our Storefront Banner

When you first visit the storefront, an interactive **Cookie Consent Banner** appears. You have the right to:

1. **Accept All Cookies** — enables both Essential and Analytics cookies for an optimized browsing experience.
2. **Reject Non-Essential Cookies** — disables all optional analytics cookies while keeping Essential Cookies active for shopping cart and checkout functionality.
3. **Customize Preferences** — toggle specific cookie categories on or off at any time via the "Cookie Preferences" link in the website footer, free of charge, with immediate effect.

### B. Managing Cookies via Browser Settings

You can also block, filter, or delete cookies directly through your browser settings:

* **Google Chrome:** Settings → Privacy and security → Third-party cookies.
* **Apple Safari:** Preferences → Privacy → Block all cookies.
* **Mozilla Firefox:** Settings → Privacy & Security → Cookies and Site Data.
* **Microsoft Edge:** Settings → Cookies and site permissions.

### C. Warning Regarding Disabling Essential Cookies

**Functional Impact:** If you use browser settings to block **Essential / Strictly Necessary Cookies**, core website functions will fail. Your shopping cart items will reset upon page navigation, and you will be unable to generate WhatsApp order payloads or complete online checkouts.

---

## 7. Persistence Lifespan & Policy Versioning

* **Session Cookies:** Automatically deleted when you close your web browser tab.
* **Persistent Cookies:** Remain stored on your device for a specified duration (e.g., 30 days for shopping cart memory, up to 2 years for Google Analytics GA4) or until manually cleared via browser settings.

### Policy Update & Active Re-Prompt Protocol

We reserve the right to modify this Cookie Notice to reflect technical or legal updates. In accordance with Section 26(3) of the NDPA 2023, if material changes are made to how trackers operate, the storefront will trigger an active banner prompt upon your next visit rather than relying on passive policy changes.

---

## 8. Contact & Data Protection Handles

If you have questions regarding our cookie practices, wish to update your consent preferences, or wish to exercise your statutory data subject rights under Part VI of the NDPA 2023, please reach out to our Privacy Support Desk:

* **Data Controller:** PRO Gadgets (Management / Data Desk)
* **Physical Address:** PRO Gadgets, Edo Lane, Ekosodin, Benin City, Edo State, Nigeria
* **Privacy Support Email:** `privacy@progadgets.ng` (or `dpo@progadgets.ng`)
* **WhatsApp Support Line:** `+2349061586271`
* **Technical Data Processor:** Destin-Wizz Agency (`destinwizz@gmail.com`)
* **Regulatory Authority:** Nigeria Data Protection Commission (NDPC) — [ndpc.gov.ng](https://ndpc.gov.ng)
