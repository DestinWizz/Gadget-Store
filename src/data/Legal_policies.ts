import { Legal } from "../type/legal";

export interface PolicyData{
    title: string;
    lastUpdated: string;
    content: string;
}

export const LEGAL_POLICIES: Record<Legal, PolicyData> = {
    terms: {
        title: "Terms of Service",
        lastUpdated: "September 2026",
        content: `# Pro Gadget Hub — Terms of Service

Version: 2.0
Effective Date: September 14, 2026
Last Updated: September 14, 2026

> Version 2.0 supersedes Version 1.0. Return, refund, and warranty terms, and Pay Small Small (BNPL) terms, have been moved out of these Terms into two standalone documents — the Return & Refund Policy (Version 1.0) and the Pay Small Small / BNPL Policy (Version 1.0) — both incorporated into these Terms by reference under Section 1.5. New sections have also been added covering user accounts, intellectual property, order cancellation due to system or network glitches, and a revised dispute resolution process in Section 10 built around direct resolution, mediation, and binding arbitration in place of court litigation.

---

## 1. Acceptance of Terms, Privacy, Eligibility & Incorporation by Reference

1.1. By accessing, browsing, placing orders, or utilizing services on this platform (including via web checkout, web applications, or connected messaging channels such as WhatsApp), you agree to be bound by these Terms of Service.

1.2. Users must be at least 18 years of age or accessing the platform under the active supervision and authorization of a parent or legal guardian. Where a minor accesses the platform under such supervision, processing of the minor's personal data is subject to the verifiable parental/guardian consent requirements set out in Section 9 of our Privacy Policy, in accordance with Section 31 of the Nigeria Data Protection Act (NDPA) 2023.

1.3. Accessing the storefront or using any service from Nigeria constitutes an agreement governed by the applicable laws of the Federal Republic of Nigeria.

1.4. Privacy & Data Protection: Personal data collected or verified during ordering and pickup (including identity verification credentials) is processed in compliance with the NDPA 2023. Please refer to our standalone Privacy Policy (Version 4.0) for full details on data retention, cross-border transfers, customer rights, and data handling practices.

1.5. Incorporation by Reference: These Terms of Service incorporate by reference, and are to be read together with, our Return & Refund Policy (Version 1.0) and our Pay Small Small / BNPL Policy (Version 1.0), each published on our website and each effective September 14, 2026. Both documents are fully and legally binding parts of the agreement between you and Pro Gadget Hub. Where these Terms provide only a summary of return, warranty, or financing rules, the Return & Refund Policy and the BNPL Policy respectively govern in full, and control in the event of any inconsistency on those specific topics.

---

## 2. User Accounts

2.1. Certain features — including order tracking and saved delivery details — may require you to create an account or verify your identity via your phone number or WhatsApp number.

2.2. You are responsible for the accuracy of the name, phone number, and delivery address you provide. Pro Gadget Hub is not liable for delivery delays, misdirected orders, or failed pickups arising from inaccurate information you supplied.

2.3. You are responsible for keeping access to your phone number, WhatsApp account, and any store account secure. If you suspect unauthorized use of your account or order history, notify us immediately via our Privacy Support Desk or WhatsApp Support Line.

2.4. Pro Gadget Hub may suspend or close an account it reasonably believes is being used for fraudulent orders, abuse of the return or Pay Small Small process, or any other violation of these Terms.

---

## 3. Orders, Pricing & Inventory Availability

3.1. Order Formation: Selecting an item and submitting an order request (via WhatsApp or web checkout) generates a pending order query. A binding agreement of sale occurs only when Pro Gadget Hub verifies stock availability, confirms pricing, and accepts payment or issues a confirmed invoice.

3.2. FX & Market Price Adjustments: Gadget prices in Nigerian Naira (NGN) are tied to real-time market foreign exchange rates and are subject to change without prior notice prior to payment confirmation. However, once Pro Gadget Hub accepts payment for an order, the agreed price is locked and will not be retroactively adjusted due to subsequent FX fluctuations.

3.3. Limitation of Pricing Errors & Refunds: Display of products on the platform does not constitute a legally binding offer. If an item is listed at an incorrect price due to a system, pricing engine, or clerical error, Pro Gadget Hub reserves the right to cancel or decline the order prior to fulfillment. Any funds already paid will be promptly refunded in full. This refund remedy does not exclude, limit, or prejudice any statutory right or remedy available to the customer under the Federal Competition and Consumer Protection Act (FCCPA) 2018 that cannot lawfully be excluded by agreement.

---

## 4. Payments & Financing

4.1. Payment Methods: Orders may be paid for by debit/credit card or bank transfer via our PCI-DSS certified payment partner, Paystack, or through a Pay Small Small (BNPL) installment plan.

4.2. Pay Small Small (BNPL): Installment financing is governed in full by our separate Pay Small Small / BNPL Policy (Version 1.0), incorporated by reference under Section 1.5. In summary: financing is provided exclusively by licensed third-party lenders (e.g., EasyBuy, CredPal, Klump), not by Pro Gadget Hub or Destin-Wizz Agency, and default on an installment plan may result in remote device locking as described in full in that Policy.

4.3. No Direct Lending: Neither Pro Gadget Hub nor Destin-Wizz Agency acts as a direct financial lender, credit broker, or credit provider under any payment method offered on this platform.

---

## 5. Physical Pickup & Delivery Protocols

5.1. In-Store Pickup: For orders selected for local pickup at the physical store (Edo Lane, Ekosodin, Benin City), the customer must present valid identification (UNIBEN Student ID, National Identification Number [NIN], or Voter's Card) matching the order name.

5.2. Visual Verification & Data Security: Store personnel will visually inspect identity credentials solely as a necessary condition to fulfill the pickup contract and prevent identity fraud. Personnel are strictly prohibited from photographing, scanning, or storing digital copies of identity cards on mobile devices or instant messaging folders. Staff training and compliance-audit measures supporting this protocol are set out in Section 3A of our Privacy Policy.

5.3. Third-Party Logistics, Transit Risk & Insurance: Deliveries outside of direct in-store pickup are fulfilled via independent third-party logistics, courier, or transport services ("Third-Party Logistics Providers"). Pro Gadget Hub ensures that all items are securely packaged, inspected, and documented (including pre-dispatch photo/video evidence) prior to handover to the carrier.

Courier insurance is offered as an optional add-on selectable by the customer at checkout for an additional fee, unless Pro Gadget Hub designates it mandatory for a specific high-value item category, in which case this is clearly disclosed and itemized before payment. Once dispatch is handed over to a confirmed Third-Party Logistics Provider:

(a) if the customer selected courier insurance, Pro Gadget Hub will actively assist the customer in filing and pursuing a claim with the courier's insurer, and will provide proof of dispatch, waybill receipts, and rider documentation to support that claim;

(b) if the customer declined optional courier insurance where it was offered, the customer assumes full risk of loss, theft, or damage in transit, though Pro Gadget Hub will still provide dispatch and waybill documentation to assist the customer's own direct inquiries with the carrier.

In all cases, neither Pro Gadget Hub nor Destin-Wizz Agency is held directly liable for transit delays, physical damage, theft, or parcel loss caused by Third-Party Logistics Providers.

---

## 6. Returns, Refunds & Warranties

6.1. All returns, refunds, and device warranty claims are governed in full by our Return & Refund Policy (Version 1.0), incorporated by reference under Section 1.5. In summary: cosmetic defects, missing accessories, or wrong orders must be reported within 48 hours of actual receipt, and factory/hardware defects within 7 days of receipt or the applicable warranty period, whichever is longer. "Change of mind" returns are not accepted. Please consult the Return & Refund Policy for full eligibility conditions, packaging and seal requirements, and warranty terms for new versus used/refurbished devices.

---

## 7. Intellectual Property

7.1. All content on this platform — including product photography, descriptions, logos, the "Pro Gadget Hub" name and mark, and the underlying website design and software — is owned by or licensed to Pro Gadget Hub and/or Destin-Wizz Agency and is protected under applicable Nigerian copyright and trademark law.

7.2. You may not copy, reproduce, republish, or otherwise use our product images, descriptions, or branding for commercial purposes — including for resale listings on other platforms — without our prior written consent.

7.3. Nothing in these Terms transfers any intellectual property rights to you. You are granted only a limited, non-exclusive, revocable right to view and use the platform for your own personal shopping purposes.

---

## 8. Order Cancellation Due to System or Network Glitches

8.1. Because the platform relies on internet connectivity, the WhatsApp Business API, and third-party payment and hosting infrastructure, occasional system or network glitches may result in a duplicate order, a briefly incorrect price being displayed, or an order being generated that cannot in fact be fulfilled.

8.2. Where Pro Gadget Hub identifies that an order was generated or confirmed as a result of a verifiable system or network glitch, Pro Gadget Hub may cancel the affected order and will promptly refund, in full, any amount already paid, as the sole remedy for such cancellation.

8.3. Neither Pro Gadget Hub nor Destin-Wizz Agency shall be liable for indirect, incidental, or consequential loss arising from an order cancelled under this Section, without prejudice to any non-excludable statutory right available to the customer under the FCCPA 2018.

---

## 9. Technical Limitations, Indemnification & Separation of Liability

9.1. Developer & Platform Separation:
Destin-Wizz Agency (the "Technical Data Processor," as defined in our Privacy Policy) operates strictly as an independent software developer and technical system integrator for Pro Gadget Hub. Destin-Wizz Agency does not own inventory, manage physical store operations, collect funds directly, or dispatch products. Users agree that Destin-Wizz Agency is not a party to, nor liable for, any commercial transactions, product defects, delivery failures, or warranty claims between the customer and Pro Gadget Hub.

9.2. Third-Party Outages & Integrations:
Neither Pro Gadget Hub nor Destin-Wizz Agency shall be held liable for temporary system interruptions, server maintenance, or failures caused by third-party services, including payment gateways (e.g., Paystack), messaging networks (e.g., WhatsApp), cloud hosting providers, or BNPL financing partners.

9.3. Exclusion of Indirect Damages:
To the maximum extent permitted by Nigerian law, neither Pro Gadget Hub nor Destin-Wizz Agency shall be liable for any indirect, special, or consequential damages resulting from platform use. Destin-Wizz Agency's aggregate liability for direct damages is further limited as set out in Section 9.5.

9.4. Third-Party Hyperlinks & Integrations: Links to external platforms, financial gateways, or BNPL services do not imply ownership or endorsement. We carry no responsibility for third-party site contents, policies, security vulnerabilities, or technical service failures.

9.5. Limitation of Destin-Wizz Agency's Liability: To the maximum extent permitted by applicable law, the aggregate liability of Destin-Wizz Agency arising out of or relating to the development, maintenance, or technical operation of this platform — whether in contract, tort, or otherwise — shall not exceed the total fees actually received by Destin-Wizz Agency for platform development and technical integration services in the twelve (12) months immediately preceding the event giving rise to the claim. This limitation does not apply to liability arising from Destin-Wizz Agency's fraud, willful misconduct, or gross negligence, or to any statutory obligations that cannot lawfully be excluded or limited under the NDPA 2023.

---

## 10. Governance, Dispute Resolution & Jurisdiction
10.1. Our Commitment to Resolving Things Peacefully:

Neither Pro Gadget Hub nor Destin-Wizz Agency desires to engage in litigation with customers, nor do we wish for customers to resort to litigation against us. All parties commit to resolving every complaint, technical issue, warranty claim, or delivery matter directly, fairly, and in good faith, first, every time.

10.2. Direct Resolution First:

If you have any complaint, warranty claim, or issue with a purchase, physical service, or technical platform operation, you agree to contact Pro Gadget Hub management directly via store phone, WhatsApp, or by visiting our physical shop in Ekosodin, Benin City, before taking any external action. We will evaluate your request and work with you in good faith to reach a satisfactory solution within 7 to 14 business days.

10.3. Informal Mediation:

If a matter is not resolved under Section 10.2, you, Pro Gadget Hub, and (where technical software or platform issues are concerned) Destin-Wizz Agency agree to first attempt to resolve the matter in good faith through informal mediation before a mutually agreed local mediator in Benin City, Edo State, for a period of up to fourteen (14) days from when mediation is requested.

10.4. Binding Arbitration Instead of Court Litigation:

If a matter remains unresolved after Section 10.3, the parties agree that the dispute shall be finally resolved by binding arbitration, conducted by a single arbitrator seated in Benin City, Edo State, under the Arbitration and Mediation Act 2023, rather than by filing a lawsuit in court. The arbitrator's award shall be final and binding on all involved parties. This means that, for practically every dispute covered by this Section, arbitration — not a courtroom trial — is how the matter will actually be decided.

10.5. Scope & Role Distinction in Disputes:

For the avoidance of doubt, Destin-Wizz Agency’s involvement in any dispute resolution, mediation, or arbitration under this Section is strictly limited to issues directly concerning platform development, technical system operations, or data processing. Destin-Wizz Agency shall not be made a party to arbitrations concerning physical product defects, merchant sales, in-store inventory, or courier delivery failures attributable solely to Pro Gadget Hub.

10.6. The Narrow Limits the Law Places on This Clause:

To be fully transparent: Nigerian law does not allow any private agreement to remove a person's statutory rights altogether, so this Section cannot make litigation legally impossible in every conceivable circumstance. In practice, this means:

(a) A court may still be asked, in narrow circumstances, to enforce an arbitral award or to set one aside on the limited statutory grounds available under the Arbitration and Mediation Act 2023 (such as fraud or fundamental breach of fair process) — this is administrative in nature and is not a re-litigation of your dispute; and

(b) This Section does not limit, waive, or delay your right to lodge a regulatory query with the Nigeria Data Protection Commission (NDPC) or the Federal Competition and Consumer Protection Commission (FCCPC) at any time, or either party's right to seek urgent emergency relief where delay would cause serious harm.

Outside of these narrow, legally-required exceptions, all parties agree to resolve disputes exclusively through Sections 10.2–10.4 above.

10.7. Consequence of Skipping This Process:

If any party files a court lawsuit on a matter covered by this Section without first completing the process in Sections 10.2–10.4, the other party may apply to the court to stay or dismiss that action in favor of arbitration, and may recover reasonable legal costs caused by the premature filing, to the extent permitted by Nigerian law.

10.8. Applicable Law & Seat:

These Terms and all incorporated policies are governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria. The official seat of any arbitration under this Section is Benin City, Edo State, Nigeria.`
    },
    privacy:{
        title: "Privacy Policy",
        lastUpdated: "September 2026",
        content: `# PRIVACY POLICY \& DATA PROTECTION NOTICE

Data Controller: Pro Gadget Hub (Management / Data Desk)
Technical Data Processor: Destin-Wizz Agency
Location: Edo Lane, Ekosodin, Benin City, Edo State, Nigeria
Governing Regulation: Nigeria Data Protection Act (NDPA) 2023
Regulatory Authority: Nigeria Data Protection Commission (NDPC)
Version: 4.0
Effective Date: September 14, 2026
Last Updated: September 14, 2026

> \*\*Summary of changes from Version 3.0:\*\* New Cross-Border Data Transfer provisions (Section 6); updated 30-day order-data retention schedule (Section 8); new Children's Data \& Parental Consent provisions (Section 9); added staff accountability commitments (Section 3A) and NIN/BVN non-retention commitment (Section 3B). As these are material changes, continued use of the platform requires active acknowledgment via our re-consent banner, per Section 1 below.

\---

## 1\. About This Privacy Policy \& Legal Scope

This Privacy Policy outlines how Pro Gadget Hub ("Store", "we", "us", or "our") and Destin-Wizz Agency ("Technical Data Processor") collect, use, store, share, and protect your personal data when you visit our web application, browse our product catalog, initiate device purchases, request automated Airtime/Data (VTU) top-ups, or apply for third-party Buy Now, Pay Later ("Pay Small Small") installment plans.

Our data processing operations are governed by the Nigeria Data Protection Act (NDPA) 2023 and overseen by the Nigeria Data Protection Commission (NDPC). This policy applies to all visitors, buyers, and students around Ekosodin, UNIBEN, and Benin City accessing our storefront platform.

### Active Re-Consent \& Policy Update Protocol

We reserve the right to modify or update this Privacy Policy to reflect operational, technological, or regulatory updates. In compliance with Section 26(3) of the NDPA 2023, which dictates that silence or inactivity does not constitute consent, any material or substantive changes to how personal data is collected, processed, or shared will trigger an active re-prompt banner on the storefront. Users will be required to actively acknowledge and grant consent before further browsing or transaction routing.

* Practical Real-World Implication for Consumers: You know exactly who is handling your personal information when you order a phone or airtime online. Your phone number and personal details are protected by federal Nigerian law, not treated as unregulated private data.
* Practical Real-World Implication for Business (Pro Gadget Hub): Operating with a transparent, NDPA-compliant privacy policy satisfies statutory requirements under Section 27 of the NDPA 2023, legally insulating the storefront from regulatory enforcement or consumer privacy claims.

\---

## 2\. Who We Are: Data Controller vs. Technical Data Processor Roles

Under Section 65 of the NDPA 2023:

* Data Controller: Pro Gadget Hub (Management / Data Desk), located at Edo Lane, Ekosodin, Benin City. Pro Gadget Hub determines the primary commercial purposes and means of processing personal data (fulfilling gadget orders, verifying physical pickups, managing customer relationships, and directing transaction workflows).
* Technical Data Processor: Destin-Wizz Agency, operating strictly as the software development and technical integrator. Destin-Wizz Agency maintains the web application codebase, database schema, and payment API connections strictly on behalf of and under the written instruction of Pro Gadget Hub. Destin-Wizz Agency maintains no direct commercial relationship with end-consumers and processes no customer data for its own independent purposes.

### Binding Data Processing Agreement (DPA)

Pursuant to Section 29(2) of the NDPA 2023, the operational separation of roles between Pro Gadget Hub and Destin-Wizz Agency is formally governed by a binding written Data Processing Agreement (DPA). This contract dictates that Destin-Wizz Agency acts solely on documented instructions from Pro Gadget Hub and deploys technical security measures. Under the DPA, Pro Gadget Hub indemnifies Destin-Wizz Agency, as between the two parties, against physical inventory disputes, customer credit defaults, or data breaches caused by shop personnel or shop mobile devices. This contractual indemnity allocates loss between Pro Gadget Hub and Destin-Wizz Agency privately; it does not limit either party's direct statutory obligations to the NDPC or to data subjects under the NDPA 2023, including Destin-Wizz Agency's obligations as Technical Data Processor under Section 29.

* Practical Real-World Implication for Consumers: If you have questions about your physical gadget order, pickup verification, or contact records, Pro Gadget Hub handles your requests directly.
* Practical Real-World Implication for Destin-Wizz Agency: Establishes a contractual allocation of loss under Section 29 for merchant-caused incidents, while Destin-Wizz Agency remains independently responsible for its own statutory processor duties.

\---

## 3\. Personal Data Collected \& Inspection Safeguards

In compliance with the Data Minimization Principle under Section 24(1)(c) of the NDPA 2023, we collect only the minimum personal data necessary to execute your requests:

### A. Information You Provide Directly \& WhatsApp Order Routing

* Contact \& Order Communications: Your name, WhatsApp phone number, selected device model, storage configuration, color choice, and fulfillment preference (e.g., In-Store Pickup at Edo Lane, Ekosodin).
* Order Payload Transmission: Clicking "Order via WhatsApp" generates a pre-filled transaction payload containing item specifications and contact details, routed directly to Pro Gadget Hub' business WhatsApp line.
* Physical Identity Verification Safeguards: Student ID, National Identification Number (NIN), or Voter's Card details presented during physical in-store pickups at Edo Lane for high-value devices or Pay Small Small verification are subject to visual inspection only by shop staff. Shop personnel are strictly prohibited from taking photographs, creating unencrypted digital scans, or storing identity card images in mobile device photo galleries or WhatsApp media folders.
* Staff Accountability \& Compliance Audits: All shop personnel involved in physical identity verification receive mandatory training on this visual-inspection-only protocol at onboarding and at least annually thereafter. Pro Gadget Hub conducts periodic internal compliance spot-checks of staff devices and messaging folders to confirm no identity images have been retained. Any violation is treated as a disciplinary matter and, where applicable, handled in accordance with our breach-notification obligations under Section 7 (Section 40, NDPA 2023).

### B. Automatically Collected Data \& Financial Processing

* Technical \& Session Data: Basic device parameters, IP address, browser type, and shopping cart state tokens managed via essential session cookies.
* Analytics Cookies (Google Analytics GA4): Aggregated traffic and page usage metrics collected via GA4 with IP anonymization enabled, requiring your explicit consent via our Cookie Banner before activation.
* Payment Credentials: All debit/credit card processing is handled directly by our PCI-DSS certified payment partner, Paystack. Neither Pro Gadget Hub nor Destin-Wizz Agency stores or views your raw credit/debit card numbers or PINs.
* Financing \& Credit Data: When you select "Pay Small Small" (installment financing), your identity verification (BVN/NIN) and credit checks are processed securely and directly by licensed third-party financing gateways (e.g., CredPal, EasyBuy). Once your NIN/BVN or other financing-related identity data has been securely transmitted to a licensed BNPL/financing partner for underwriting purposes, neither Pro Gadget Hub nor Destin-Wizz Agency retains a copy of that data on our own systems. Any further handling, storage, or retention of that data is governed solely by the relevant financing partner's own privacy policy, as an independent data controller for that processing activity.
* Practical Real-World Implication for Consumers: Your sensitive NIN or Student ID cards will never sit in unencrypted mobile phone photo galleries, and your BVN/NIN is not kept on our servers once your financing application is submitted. Bank card numbers are handled securely by Paystack, not stored on shop servers.
* Practical Real-World Implication for Business: Minimizes cyber risk exposure and maintains strict compliance with NDPA sensitive data rules.

\---

## 4\. Lawful Bases for Processing Personal Data

Under Section 25(1) of the NDPA 2023, personal data is processed exclusively under valid statutory grounds:

1. Performance of a Contract (Section 25(1)(b)(i)): Processing your name, WhatsApp phone number, and selected device details is necessary to generate your order payload, route your WhatsApp quote, process Paystack payments, or deliver your gadget at Edo Lane.
2. Explicit Consent (Section 25(1)(a) \& Section 26): Required before sending promotional WhatsApp broadcast messages, marketing newsletters, or firing non-essential analytics cookies. Under Section 26(3), silence or pre-checked boxes do not constitute consent.
3. Compliance with Legal Obligations (Section 25(1)(b)(ii)): Retaining sales invoices and financial logs to satisfy Nigerian tax, accounting, and commercial record-keeping laws.
4. Legitimate Business Interests (Section 25(1)(b)(v)): Preventing fraudulent transactions, verifying returns and warranty claims within the reporting windows set out in our Terms of Service, maintaining web application security, and optimizing storefront performance, provided these interests do not override your fundamental privacy rights.
* Practical Real-World Implication for Consumers: The store cannot add your WhatsApp number to unsolicited marketing lists without asking for your active, un-checked consent first.
* Practical Real-World Implication for Business: Mapping every data stream to an explicit lawful basis protects Pro Gadget Hub during official NDPC regulatory audits.

\---

## 5\. How We Share Your Personal Data

We do not sell, rent, or trade your personal information to third-party ad brokers. We share your data strictly with necessary operational partners:

* Merchant Order Fulfillment: Order specifications and phone numbers are received by Pro Gadget Hub representatives at Edo Lane to prepare items for pickup or local delivery.
* Payment Processors (Paystack): Transaction details are transmitted securely via API to Paystack to complete card or bank transfer payments.
* Third-Party BNPL Lenders (CredPal / EasyBuy): If you apply for installment financing, your identity details (NIN/BVN) are transmitted directly to licensed credit institutions for underwriting and loan approval. As noted in Section 3B, we do not retain a copy of this data once transmitted.
* Law Enforcement \& Legal Duty: We may disclose customer details only if required by a valid court order, law enforcement investigation, or statutory regulation under Nigerian law.

\---

## 6\. Cross-Border Data Transfers

Certain categories of your personal data are processed or stored using third-party service providers whose servers or processing infrastructure may be located outside Nigeria, including but not limited to: WhatsApp/Meta Platforms, Inc. (order communication routing), Paystack (payment processing), our cloud hosting and content delivery provider (Netlify), Google Analytics (GA4, analytics), and licensed BNPL/financing partners (e.g., CredPal, EasyBuy).

Pursuant to Sections 41–43 of the NDPA 2023, any transfer of your personal data outside Nigeria is carried out only where at least one of the following lawful transfer mechanisms applies:

* (a) Adequacy: the recipient jurisdiction or organization is subject to a data protection framework recognized by the NDPC as offering an adequate level of protection; or
* (b) Appropriate Safeguards: the transfer is subject to standard contractual clauses, binding corporate rules, or another appropriate safeguard mechanism recognized under the NDPA 2023; or
* (c) Necessity for Contract Performance: the transfer is objectively necessary for the performance of a contract between you and Pro Gadget Hub, or for pre-contractual steps taken at your request (e.g., transmitting your order and contact details to complete a WhatsApp-routed purchase, or your NIN/BVN to a financing partner solely to complete BNPL underwriting you requested); or
* (d) Explicit Consent: your explicit, informed consent has been obtained for the specific transfer where none of the foregoing bases apply.

We do not transfer personal data internationally for our own independent commercial gain, and we require our third-party processors and partners to maintain data protection standards consistent with the NDPA 2023.

* Practical Real-World Implication for Consumers: Even though some of the tools we use (like WhatsApp) run on servers outside Nigeria, your data isn't sent abroad without a lawful basis for doing so.
* Practical Real-World Implication for Business: Documents Pro Gadget Hub' and Destin-Wizz Agency's compliance with NDPA's cross-border transfer rules ahead of any NDPC inquiry.

\---

## 7\. Data Security, Disclaimers \& Statutory Compliance

In accordance with Section 39 of the NDPA 2023, we deploy technical and organizational measures (including HTTPS SSL encryption, environment variable protection, and secure Content Delivery Network hosting) to safeguard personal data against unauthorized access, loss, or theft.

### Liability Disclaimer

While commercially reasonable physical, technical, and administrative safeguards are maintained in alignment with NDPA requirements, no web application, electronic transmission, or mobile messaging network can be guaranteed as 100% immune to unauthorized third-party interference.

### Statutory Enforcement \& 72-Hour Breach Reporting (Section 40)

Our data protection practices strictly adhere to the enforcement provisions and statutory penalty standards mandated under the NDPA 2023. In the event of a personal data security breach:

* Regulatory Notice: If a security incident poses a risk to user rights, we will notify the Nigeria Data Protection Commission (NDPC) within 72 hours of becoming aware of the breach \[Section 40(2)].
* Consumer Notice: If the breach poses a high risk to user rights (e.g., exposed identity records), we will immediately notify affected consumers directly in clear, plain language with protective recommendations \[Section 40(3)].

\---

## 8\. Data Retention, WhatsApp Chat Clearing \& Erasure Schedule

In line with Section 24(1)(d) (Storage Limitation) and Section 34(1)(d) (Right to Erasure) of the NDPA 2023:

* Order Communications \& Verification Window: Personal data, phone numbers, and chat logs received via WhatsApp during order inquiries are processed strictly for transaction fulfillment and customer support. To support the return, wrong-order, and warranty reporting windows set out in Section 5.1 of our Terms of Service, as well as fraud-prevention and dispute-resolution needs (Section 4(4)), active order-related chat logs and order data are retained for thirty (30) calendar days following successful delivery or in-store pickup confirmation. Where a return, warranty claim, or legal hold remains open at the end of this 30-day window, retention continues only until that matter is resolved, after which the data is purged or subject to automated disappearing-message settings.
* Statutory Accounting Records: Financial transaction receipts, Paystack payment IDs, and tax compliance logs are retained securely for up to 6 years to satisfy Nigerian commercial and statutory tax audit laws.
* Data Purging: Once personal data is no longer required for legal, tax, or operational fulfillment purposes, it is permanently deleted or securely anonymized.

\---

## 9\. Children's Data \& Parental/Guardian Consent

Our platform and services are intended for use by individuals aged 18 and above. Where a person under 18 accesses or uses the platform under the active supervision of a parent or legal guardian (as contemplated by Section 1.2 of our Terms of Service), any personal data relating to that minor will only be processed where the parent or legal guardian has provided verifiable, explicit consent to that processing — separate and distinct from their general supervision of the purchase transaction — in accordance with Section 31 of the NDPA 2023.

Where we become aware that personal data of a minor has been collected without such verifiable parental or guardian consent, we will take reasonable steps to delete that data promptly, save where retention is required to comply with a legal obligation.

\---

## 10\. Enforceable Statutory Rights of Data Subjects

Under Part VI (Sections 34–38) of the NDPA 2023, users possess enforceable legal rights:

1. Right of Access (Section 34(1)(a)): Request confirmation and a free electronic copy of personal data held about you.
2. Right to Rectification (Section 34(1)(c)): Request immediate correction of inaccurate or incomplete records.
3. Right to Erasure / "Right to be Forgotten" (Section 34(1)(d)): Request complete deletion of personal data when no longer necessary or when consent is withdrawn.
4. Right to Restrict or Object to Processing (Sections 34(1)(e) \& 36): Pause or object to data processing for marketing purposes at any time.
5. Right to Withdraw Consent (Section 35): Withdraw consent easily at any time.
6. Right to Lodge a Complaint (Section 34(1)(a)(vi) \& Section 46): Lodge a formal complaint directly with the Nigeria Data Protection Commission (NDPC) at [ndpc.gov.ng](https://ndpc.gov.ng).

\---

## 11\. Cookies \& Analytical Trackers

Our storefront utilizes two categories of cookies:

* Essential Cookies: Required for core shopping cart state, secure checkout routing, and basic session performance.
* Analytics Cookies (Google Analytics GA4): Used to evaluate aggregate traffic patterns around Ekosodin and UNIBEN. Analytics cookies fire strictly through active user consent via our Cookie Banner (supporting Google Consent Mode v2), and choices may be adjusted or revoked at any time via browser settings.

\---

## 12\. Data Protection Contact \& Exercise of Rights

To exercise any statutory data rights, request contact deletion, or lodge a privacy query, please reach out to the Data Controller's Privacy Support Desk:

* Data Controller: Pro Gadget Hub (Management / Data Desk)
* Physical Address: Pro Gadget Hub, Edo Lane, Ekosodin, Benin City, Edo State, Nigeria
* Privacy Support Desk Email: 'privacy@progadgets.ng'
* WhatsApp Support Line: '+2349061586271'
* Regulatory Authority: Nigeria Data Protection Commission (NDPC) — [ndpc.gov.ng](https://ndpc.gov.ng)

`
    },
    bnpl:{
        title: "Pay Small Small",
        lastUpdated: "September 2026",
        content: `# Pro Gadget Hub — Pay Small Small (BNPL) Policy

Version: 1.0
Effective Date: September 14, 2026
Last Updated: September 14, 2026

This Pay Small Small / Buy Now, Pay Later ("BNPL") Policy is incorporated by reference into, and forms a legally binding part of, our Terms of Service (Version 2.0). It governs how installment financing works when you choose to purchase a device through Pro Gadget Hub using a third-party financing partner.

---

## 1. Third-Party Financing — Not a Direct Loan From Pro Gadget Hub

1.1. "Pay Small Small" installment plans are provided, underwritten, and managed exclusively by licensed third-party fintech lenders, including but not limited to EasyBuy, CredPal, and Klump (each, the "Lender").

1.2. Neither Pro Gadget Hub nor Destin-Wizz Agency is a lender, credit broker, or financial institution. When you apply for Pay Small Small, you enter into a separate, binding loan or installment agreement directly with the Lender.

1.3. The interest rate, repayment schedule, late-payment fees, default penalties, and any other financial terms of your plan are set entirely by the Lender and governed by the Lender's own terms and conditions, which you must review and accept directly with the Lender before your plan is activated.

1.4. Pro Gadget Hub' role is limited to facilitating the purchase transaction with the Lender you select, and to delivering or releasing the device once the Lender confirms approval and any required initial payment.

---

## 2. Device Locking Clause

2.1. As a condition of receiving a device under a Pay Small Small plan, you agree that device management or security software (such as Knox-based enterprise device management, or an equivalent lock/tracking system) will be activated on the device by the Lender or its technical partner before release.

2.2. If you default on, or fall behind on, an installment payment under your agreement with the Lender, the device may be remotely locked, restricted, or rendered partially or fully unusable by the Lender's device management software until the outstanding balance is brought current or paid in full.

2.3. Device locking and unlocking are controlled entirely by the Lender or its technology partner. Pro Gadget Hub store personnel have no ability to unlock, override, or otherwise interfere with a locked device, and cannot expedite unlocking on the Lender's behalf.

2.4. The device management software may, for the purpose of loan security and device recovery, collect limited technical data such as device lock status and location. This data is processed by the Lender (or its technology partner) as an independent data controller for that purpose, under the Lender's own privacy notice, and is not accessible to or stored by Pro Gadget Hub or Destin-Wizz Agency.

2.5. By activating a Pay Small Small plan, you confirm that you have read and understood this Device Locking Clause and consent to the activation of this software as a condition of financing.

---

## 3. BNPL Refund Rule

3.1. If you purchased a device through a Pay Small Small plan and the device is eligible for a return or refund under our Return & Refund Policy (Version 1.0) — for example, due to a verified factory defect — any refund due is paid to the Lender, to reduce, offset, or fully credit your outstanding loan balance. Refunds are not paid in cash directly to you while a loan balance remains outstanding.

3.2. If the refund amount exceeds your outstanding balance with the Lender — for example, because you had already repaid most or all of the installment plan before the return was approved — any surplus is handled in accordance with the Lender's own refund process. Pro Gadget Hub will notify the Lender of the approved refund and provide supporting documentation, but disbursement of any surplus to you is the Lender's responsibility, not Pro Gadget Hub'.

3.3. Non-refundable financing or processing fees charged by the Lender may be deducted from the amount credited or refunded, in accordance with the Lender's own policies.

---

## 4. Data Privacy: NIN/BVN Validation

4.1. To apply for a Pay Small Small plan, the Lender requires identity and credit verification, which may include your National Identification Number (NIN) and/or Bank Verification Number (BVN).

4.2. This information is submitted directly and securely to the Lender's own systems for underwriting purposes. Neither Pro Gadget Hub nor Destin-Wizz Agency stores, views, or retains a copy of your NIN or BVN on our local servers or databases at any point.

4.3. Any further handling, storage, or retention of your NIN/BVN is governed solely by the Lender's own privacy policy, as an independent data controller for that specific processing activity, consistent with our Privacy Policy, Section 3B and Section 6 (Cross-Border Data Transfers), where applicable.

---

## 5. Eligibility, Underwriting & Merchant Discretion

5.1. Approval for a Pay Small Small plan is solely at the Lender's discretion, based on the Lender's own underwriting checks.

5.2. If you do not meet the Lender's underwriting requirements, Pro Gadget Hub may cancel your order or require full upfront payment by an alternative method (e.g., card or bank transfer via Paystack) before the device is released.

---

## Governing Terms

This Policy is governed by, and should be read together with, our Terms of Service (Version 2.0), our Return & Refund Policy (Version 1.0), and our Privacy Policy (Version 4.0), and by the laws of the Federal Republic of Nigeria, including the Federal Competition and Consumer Protection Act (FCCPA) 2018, the Nigeria Data Protection Act (NDPA) 2023, and applicable Central Bank of Nigeria consumer protection guidelines governing licensed digital lending and BNPL operators.
`
    },
    returns:{
        title: "Return Policy",
        lastUpdated: "September 2026",
        content: `# Pro Gadget Hub — Return & Refund Policy

Version: 1.0
Effective Date: September 14, 2026
Last Updated: September 14, 2026

This Return & Refund Policy is incorporated by reference into, and forms a legally binding part of, our Terms of Service (Version 2.0). It governs all returns, refunds, and device warranty claims for purchases made through Pro Gadget Hub, whether via web checkout, WhatsApp ordering, or in-store purchase at Edo Lane, Ekosodin, Benin City. It should be read together with our Terms of Service and our Privacy Policy (Version 4.0).

---

## Section A: Return Eligibility

A.1 Reporting Windows (measured from receipt, not dispatch)

* Cosmetic defects, missing accessories, or the wrong item delivered: must be reported within 48 hours of actual receipt — meaning delivery to you, or in-person pickup at Edo Lane, whichever applies.
* Factory or hardware defects: must be reported within 7 days of actual receipt, or within the applicable manufacturer or store warranty period described in Section B, whichever is longer.
* Reports made outside these windows will not be eligible for return under this Policy, unless the applicable device warranty independently provides a longer claim period under Section B.

A.2 Required Condition for Return

* The device must be returned in its original packaging, with all accessories, manuals, and free items included.
* For new (not pre-owned or refurbished) Apple and Samsung devices, the factory seal must remain unbroken — unless the defect is internal (for example, the device does not power on, or has a manufacturing fault that is not visible externally) and genuinely cannot be identified without opening the packaging. If you believe your device is internally faulty, please contact us before breaking the seal yourself, so we can guide you or arrange an inspection; this protects your eligibility for a return.
* Devices showing signs of physical damage, liquid damage, or unauthorized repair after receipt are not eligible for return under this Policy (see Section B for warranty exclusions on used/refurbished devices).

A.3 Change of Mind

Pro Gadget Hub does not accept returns, exchanges, or refunds based on a change of mind — including a change in preferred color or storage size, or a decision not to proceed with a purchase after receiving it. Please review your order carefully, including the exact model, storage configuration, and color, before confirming payment.

A.4 How to Request a Return

Contact our WhatsApp Support Line or Privacy/Customer Support Desk within the applicable window in A.1, quoting your order reference and describing the issue (photos or a short video help us resolve it faster). We will confirm next steps, which may include an in-store inspection or an arranged courier pickup.

---

## Section B: Device Warranties

B.1 Brand-New Devices — Manufacturer Warranty

Brand-new devices are covered by the original manufacturer's warranty — for example, Carlcare for Tecno, Infinix, and itel devices; Apple's standard warranty or AppleCare for Apple devices; and Samsung's official service centers for Samsung devices — administered directly through the manufacturer's authorized service network, not by Pro Gadget Hub.

Pro Gadget Hub will assist you in initiating a manufacturer warranty claim and will provide your proof of purchase, but the manufacturer's own warranty terms, timelines, and repair-or-replace decisions govern the outcome.

B.2 Used, Refurbished, or Pre-Owned Devices — Store Warranty

Used, refurbished, or pre-owned devices sold by Pro Gadget Hub carry a store-provided warranty. The applicable warranty period is stated on the product listing and on your invoice at the time of purchase.

The store warranty covers hardware faults present at the time of sale that are not attributable to misuse — for example, a battery that does not hold its stated charge, or a screen defect not caused by impact.

The store warranty does not cover: physical or liquid damage occurring after receipt; damage caused by unauthorized repair or software modification (including unofficial rooting or unlocking); normal wear and tear; or cosmetic issues that were disclosed to you at the time of sale.

B.3 Warranty Claims Process

Warranty claims must be presented at our physical store at Edo Lane (or dispatched via an approved courier) together with your original proof of purchase, within the applicable warranty period.

---

## Section C: Data Privacy During Return & Warranty Audits

C.1 In connection with a return or warranty claim, Pro Gadget Hub may review data including your order details, proof of purchase, device serial/IMEI number, and any related communication records (including WhatsApp messages).

C.2 This data is retained for the duration of the return or warranty audit, and for thirty (30) calendar days following its resolution, after which it is deleted or securely anonymized, consistent with our Privacy Policy, Section 8 (Data Retention).

C.3 Where an identity document was visually inspected in connection with your original purchase or pickup, no photograph or scan of that document is created or retained as part of a return or warranty audit, consistent with our Privacy Policy, Section 3A.

---

## Governing Terms

This Policy is governed by, and should be read together with, our Terms of Service (Version 2.0) and our Privacy Policy (Version 4.0), and by the laws of the Federal Republic of Nigeria, including the Federal Competition and Consumer Protection Act (FCCPA) 2018 and the Nigeria Data Protection Act (NDPA) 2023.
`
    },
    cookies: {
    title: "Cookie Policy",
    lastUpdated: "September 2026",
    content: `# COOKIE NOTICE & ANALYTICAL TRACKING POLICY

Data Controller: Pro Gadget Hub (Management / Data Desk)
Technical Data Processor: Destin-Wizz Agency
Location: Edo Lane, Ekosodin, Benin City, Edo State, Nigeria
Governing Regulation: Nigeria Data Protection Act (NDPA) 2023
Regulatory Body: Nigeria Data Protection Commission (NDPC)
Version: 1.1
Effective Date: September 14, 2026
Last Updated: September 14, 2026

> This Cookie Notice is part of the same consent framework as our Privacy Policy (v4.0) and Terms of Service (v1.0), and shares their effective date. Material changes to this notice trigger the same active re-prompt banner described in Section 6 below.

---

1. Introduction, Scope & Statutory Declaration

This Cookie Notice explains how Pro Gadget Hub ("Store", "we", "us", or "our") and Destin-Wizz Agency (the "Technical Data Processor") use cookies, session tokens, and local browser storage technologies (\`sessionStorage\` and \`localStorage\`) on our web application and digital storefront.

Our cookie management practices comply with the Nigeria Data Protection Act (NDPA) 2023 and guidelines issued by the Nigeria Data Protection Commission (NDPC). This policy applies to all visitors, buyers, and students accessing our platform across Ekosodin, UNIBEN, and Benin City.

Practical Real-World Implication for Consumers: When you browse our catalog or add a phone to your cart, you know exactly what digital trackers are running on your phone or laptop. Your browser data is handled transparently under Nigerian law rather than harvested silently.
Practical Real-World Implication for Business (Pro Gadget Hub & Destin-Wizz Agency): Operating a transparent, NDPA-compliant cookie banner and notice fulfills statutory disclosure obligations under Section 27 of the NDPA 2023, protecting both the merchant and the Technical Data Processor from NDPC compliance inquiries or privacy complaints.

---

## 2. What Are Cookies and Browser Storage Technologies?

* Cookies: Small text files placed on your computer, smartphone, or tablet when you visit a website. Cookies allow the platform to recognize your device across visits, remember your shopping preferences, and maintain secure checkout sessions.
* Session Storage (\`sessionStorage\`): Temporary browser memory that holds active data (such as item filters or active tab views) while your browser tab remains open. It is erased automatically as soon as you close the tab.
* Local Storage (\`localStorage\`): Persistent browser memory used to save non-sensitive preferences (such as your shopping cart state or selected installment tenure) so your selections are preserved if you accidentally refresh the page.

We do not currently use web beacons or pixel tags on this storefront; if that changes, this Notice will be updated and the change will be treated as material under Section 6.

Practical Real-World Implication for Consumers: If your internet connection drops or you refresh your browser while selecting an iPhone or MacBook, \`localStorage\` prevents your cart from resetting to zero.
Practical Real-World Implication for Business: Reduces server load and database overhead on our cloud hosting while delivering an instant-loading user experience.

---

## 3. Legal Basis for Each Category of Cookie (Section 25, NDPA 2023)

Before listing individual trackers, here is the statutory ground each category relies on:

| Category | Legal Basis (NDPA 2023) | Consent Required? |

| A. Essential / Strictly Necessary | Performance of a Contract — Section 25(1)(b)(i); Legitimate Interest (security/fraud prevention) — Section 25(1)(b)(v) | No — cannot be disabled via banner |
| B. Analytics & Performance | Explicit Consent — Section 25(1)(a) & Section 26 | Yes — opt-in only |
| C. Functional & Third-Party Integration (Payment / BNPL) | Performance of a Contract — Section 25(1)(b)(i), triggered only by your own action (initiating checkout or a financing application) | No — but disclosed here for transparency |

---

4. Categories of Cookies & Storage Technologies Used

In accordance with the Data Minimization Principle (Section 24(1)(c), NDPA 2023), we classify and limit trackers into three operational categories:

### A. Essential / Strictly Necessary Cookies (Always Active)

These cookies and storage tokens are technically essential for core storefront operation, security, and order checkout routing. They rely on the legal bases in Section 3 above, do not require prior consent, and cannot be disabled in our Cookie Banner.

| Cookie / Token Name | Provider | Storage Type & Lifespan | Technical Purpose |

| \`pg_cart_state\` | Pro Gadget Hub (1st Party) | \`localStorage\` (30 Days) | Stores selected gadget model, storage size, color choice, and quantity. |
| \`pg_session_id\` | Destin-Wizz Agency, on behalf of Pro Gadget Hub | \`sessionStorage\` (Session) | Maintains secure session state during WhatsApp order payload generation. Once you are redirected to WhatsApp itself, further messaging is governed by WhatsApp/Meta's own privacy terms, not this Notice. |
| \`__cf_bm\` / \`__cfruid\` | Hosting / CDN security provider | Cookie (30 Minutes) | Bot protection, DDoS mitigation, and SSL web application security. |

Practical Real-World Implication for Consumers: Ensures your items stay safely in your cart while you navigate between phone categories and checkout options.
Practical Real-World Implication for Business: Prevents malicious bot attacks from spamming order generation scripts or crashing the server.

### B. Analytics & Performance Cookies (Optional / Consent-Based)

These trackers gather aggregated, anonymized usage statistics to help us analyze site speed, traffic volume, and popular product categories around UNIBEN and Ekosodin. They fire only after active consent.

| Cookie Name | Provider | Storage Type & Lifespan | Technical Purpose |

| \`_ga\` | Google Analytics (GA4) | Persistent Cookie (2 Years) | Distinguishes unique visitors anonymously with IP anonymization enabled. |
| \`_ga_<container-id>\` | Google Analytics (GA4) | Persistent Cookie (2 Years) | Maintains session state and counts aggregate page views across product pages. |

Cookieless Consent Signals: We use Google Consent Mode v2. If you reject or have not yet responded to Analytics cookies, no \`_ga\` cookie is set — but Google may still receive anonymous, cookieless "consent mode" pings (no device identifier, no personal data) used only to model aggregate traffic. These pings are not personal data processing and do not require separate consent, but we disclose them here for full transparency.

* Practical Real-World Implication for Consumers: Your specific personal identity (NIN, phone number, name) is never attached to traffic stats; Google Analytics sees only aggregate visitor counts.
* Practical Real-World Implication for Business: Provides insights on which gadgets (e.g., iPhone 13 vs. Samsung S23) receive the highest student interest, enabling better local inventory planning at Edo Lane.

### C. Functional & Third-Party Integration Identifiers

When you initiate an online payment or apply for installment financing, third-party integration scripts process session tokens strictly to execute the transaction you requested. These fire automatically as part of that action and are not gated by the Cookie Banner, per the legal basis in Section 3.

| Integration Partner | Technical Role | Storage Identifier | Functional Purpose |

| Paystack | PCI-DSS Payment Gateway | \`pstk_device_id\` (Session) | Secures card or bank transfer checkout and prevents transaction fraud. |
| CredPal / EasyBuy | Licensed BNPL Lender | \`bnpl_session_token\` (Session) | Handshake token transferring financing inquiries securely to lender underwriting portals. |

* Practical Real-World Implication for Consumers: Card details and credit checks are handled entirely by licensed financial institutions, never stored by Pro Gadget Hub or Destin-Wizz Agency.
* Practical Real-World Implication for Business: Offloads payment security and credit underwriting liabilities onto certified financial partners.

---

## 5. Third-Party Data Handoffs, Cross-Border Transfers & Zero Ad-Broker Sales

Google Analytics, Paystack, and our BNPL partners (CredPal/EasyBuy) may set cookies or receive session identifiers when their services are actively triggered by your actions. Some of this data may be processed on infrastructure located outside Nigeria; the lawful transfer mechanisms that apply are set out in Privacy Policy, Section 6 (Cross-Border Data Transfers).

Zero Ad-Broker Sales: Neither Pro Gadget Hub nor Destin-Wizz Agency sells, rents, trades, or monetizes cookie data, browsing logs, or customer lists to third-party ad brokers or telemarketers.
Instruction Limits: Third-Party financial partners process transaction data strictly in accordance with their own regulatory duties and your user-initiated actions.

Practical Real-World Implication for Consumers: You will never receive spam calls or unsolicited SMS ads from third-party brokers as a result of browsing our storefront.
Practical Real-World Implication for Business: Ensures compliance with Section 29 of the NDPA 2023 regarding third-party processor instructions and data protection standards.

---

6. User Control, Preference Management & Right to Withdraw

In compliance with Section 26(3) of the NDPA 2023, silence or inactivity does not constitute consent, and non-essential cookies fire only upon your affirmative opt-in.

Withdrawal is free and frictionless. Per Section 35 of the NDPA 2023, withdrawing consent is exactly as easy as giving it, carries no fee, and takes effect immediately. Withdrawing Analytics consent will never affect your ability to browse, order, or check out — only Essential cookies are required for those functions.

### A. Managing Preferences via Our Storefront Banner

When you first visit the storefront, an interactive Cookie Consent Banner appears. You have the right to:

1. Accept All Cookies — enables both Essential and Analytics cookies for an optimized browsing experience.
2. Reject Non-Essential Cookies — disables all optional analytics cookies while keeping Essential Cookies active for shopping cart and checkout functionality.
3. Customize Preferences — toggle specific cookie categories on or off at any time via the "Cookie Preferences" link in the website footer, free of charge, with immediate effect.

### B. Managing Cookies via Browser Settings

You can also block, filter, or delete cookies directly through your browser settings:

Google Chrome: Settings → Privacy and security → Third-party cookies.
Apple Safari: Preferences → Privacy → Block all cookies.
Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data.
Microsoft Edge: Settings → Cookies and site permissions.

C. Warning Regarding Disabling Essential Cookies

Functional Impact: If you use browser settings to block Essential / Strictly Necessary Cookies, core website functions will fail. Your shopping cart items will reset upon page navigation, and you will be unable to generate WhatsApp order payloads or complete online checkouts.

---

7. Persistence Lifespan & Policy Versioning

Session Cookies: Automatically deleted when you close your web browser tab.
Persistent Cookies: Remain stored on your device for a specified duration (e.g., 30 days for shopping cart memory, up to 2 years for Google Analytics GA4) or until manually cleared via browser settings.

### Policy Update & Active Re-Prompt Protocol

We reserve the right to modify this Cookie Notice to reflect technical or legal updates. In accordance with Section 26(3) of the NDPA 2023, if material changes are made to how trackers operate, the storefront will trigger an active banner prompt upon your next visit rather than relying on passive policy changes.

---

## 8. Contact & Data Protection Handles

If you have questions regarding our cookie practices, wish to update your consent preferences, or wish to exercise your statutory data subject rights under Part VI of the NDPA 2023, please reach out to our Privacy Support Desk:

* Data Controller: Pro Gadget Hub (Management / Data Desk)
* Physical Address: Pro Gadget Hub, Edo Lane, Ekosodin, Benin City, Edo State, Nigeria
* Privacy Support Email: \`privacy@progadgets.ng\` (or \`dpo@progadgets.ng\`)
* WhatsApp Support Line: \`+2349061586271\`
* Technical Data Processor: Destin-Wizz Agency (\`destinwizzagency@gmail.com\`)
* Regulatory Authority: Nigeria Data Protection Commission (NDPC) — [ndpc.gov.ng](https://ndpc.gov.ng)`
  },

};