/**
 * Suyash Pharma - Dedicated Corporate Contact Page
 * 
 * Exact Section Sequence & Alternating Flow:
 * 1. HERO SECTION (Solid Dark Green #1B6A3E)
 * 2. GET IN TOUCH - Direct Communications (Solid Light Mint #EBF5EE)
 * 3. MAP SECTION - Large Immersive Map (Solid Dark Green #1B6A3E)
 * 4. ENQUIRY FORM - Send Us Your Requirement (Solid Light Mint #EBF5EE)
 * 5. VISIT SUYASH PHARMA - Dedicated Office (Solid Dark Green #1B6A3E)
 * 6. HOW CAN WE HELP? - Assistance Areas (Solid Light Mint #EBF5EE)
 * 7. REUSED FINAL CTA & GLOBAL CORPORATE FOOTER (Deep Navy)
 * 
 * Features:
 * - Solid colors only: Deep Green, Light Mint, Deep Navy, White
 * - Working COPY buttons with "Copied" toast feedback
 * - Working multi-channel dispatch (WhatsApp & Email) with accurate confirmation states
 * - Enlarged map with custom "SUYASH PHARMA" label and GET DIRECTIONS
 */

import { renderNavbar, initNavbarEvents } from '../../components/Navbar/Navbar.js';
import { renderFooter, initFooter } from '../../components/Footer/Footer.js';

import contactHeroImg from '../../assets/images/contact/contact-hero-support.jpg';
import './ContactPage.css';

export function renderContactPage() {
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=SHOP+NO.+A%2F02%2C03+GROUND+FLOOR%2C+MAX+AVENUE+CHS+LTD%2C+OSTWAL+NAGARI%2C+NALLASOPARA+EAST%2C+401209";

  return `
    <div class="sp-contact-page-wrapper">
      <!-- 1. Corporate Sticky Navbar (Contact Active) -->
      ${renderNavbar('contact')}

      <main class="sp-contact-main-content">
        <!-- ================================================================
             1. HERO SECTION (SOLID DARK GREEN #1B6A3E)
             ================================================================ -->
        <section class="sp-contact-hero-section" id="contact-hero" aria-labelledby="contactHeroHeading">
          <div class="sp-contact-watermark" aria-hidden="true">CONTACT</div>

          <div class="sp-contact-hero-container">
            <div class="sp-contact-hero-grid">
              
              <!-- Left Content Column -->
              <div class="sp-contact-hero-content sp-contact-reveal is-in-view">
                <div class="sp-contact-badge-row">
                  <span class="sp-contact-hero-marker">01 / CONTACT</span>
                  <span class="sp-contact-hero-eyebrow">CONTACT SUYASH PHARMA</span>
                </div>

                <h1 class="sp-contact-hero-title" id="contactHeroHeading">
                  LET'S CONNECT<br/>
                  WITH SUYASH PHARMA.
                </h1>

                <p class="sp-contact-hero-desc">
                  Have a product enquiry, partnership requirement or need more information about our pharmaceutical portfolio? Get in touch with our team and we’ll be happy to assist you.
                </p>

                <div class="sp-contact-hero-actions">
                  <a href="#contact-form" class="sp-contact-btn sp-contact-btn-white" id="heroGetInTouchBtn">
                    <span>GET IN TOUCH</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a href="/products" class="sp-contact-btn sp-contact-btn-outline" id="heroExploreProductsBtn">
                    <span>EXPLORE PRODUCTS</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div class="sp-hero-support-indicator">
                  <span class="sp-indicator-dot" aria-hidden="true"></span>
                  <span class="sp-indicator-text">OUR TEAM IS HERE TO HELP</span>
                </div>
              </div>

              <!-- Right Visual Column: Authentic Indian Corporate Support Photography -->
              <div class="sp-contact-hero-visual sp-contact-reveal is-in-view">
                <div class="sp-contact-hero-image-wrapper">
                  <div class="sp-contact-hero-offset-bg" aria-hidden="true"></div>
                  
                  <div class="sp-contact-hero-img-box">
                    <img 
                      src="${contactHeroImg}" 
                      alt="Suyash Pharma medical relations and customer support specialist assisting clients in an Indian corporate office" 
                      class="sp-contact-hero-img"
                      loading="eager"
                      width="600"
                      height="480"
                    />
                  </div>

                  <div class="sp-contact-hero-badge">
                    <span class="sp-contact-badge-tag">CLIENT RELATIONS</span>
                    <span class="sp-contact-badge-title">Dedicated Corporate Assistance</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ================================================================
             2. GET IN TOUCH (SOLID LIGHT GREEN #EBF5EE)
             ================================================================ -->
        <section class="sp-contact-info-section" id="contact-info" aria-labelledby="contactInfoHeading">
          <div class="sp-contact-info-container">
            
            <header class="sp-contact-section-header sp-contact-header-light sp-contact-reveal">
              <div class="sp-contact-eyebrow-wrap">
                <span class="sp-contact-eyebrow-line" aria-hidden="true"></span>
                <span class="sp-contact-eyebrow">DIRECT COMMUNICATIONS</span>
                <span class="sp-contact-eyebrow-line" aria-hidden="true"></span>
              </div>
              <h2 class="sp-contact-section-title" id="contactInfoHeading">
                GET IN TOUCH
              </h2>
              <p class="sp-contact-section-desc">
                Connect with Suyash Pharma for product enquiries, business discussions and general information.
              </p>
            </header>

            <!-- 3 Main Information Cards -->
            <div class="sp-contact-cards-grid">
              
              <!-- Card 01: PHONE -->
              <article class="sp-info-card sp-contact-reveal" aria-labelledby="cardPhoneTitle">
                <div class="sp-info-card-header">
                  <div class="sp-info-card-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <span class="sp-info-card-num">01 — CALL US</span>
                </div>

                <h3 class="sp-info-card-heading" id="cardPhoneTitle">PHONE</h3>

                <div class="sp-contact-value-list">
                  <!-- Phone 1 -->
                  <div class="sp-contact-value-row">
                    <a href="tel:8928252638" class="sp-contact-num-link" aria-label="Call Suyash Pharma at 8928252638">
                      8928252638
                    </a>
                    <button 
                      type="button" 
                      class="sp-copy-btn" 
                      data-copy-target="8928252638" 
                      data-feedback-text="Copied"
                      aria-label="Copy phone number 8928252638"
                      title="Copy phone number"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      <span class="sp-copy-feedback" role="status">Copied</span>
                    </button>
                  </div>

                  <!-- Phone 2 -->
                  <div class="sp-contact-value-row">
                    <a href="tel:7798917108" class="sp-contact-num-link" aria-label="Call Suyash Pharma at 7798917108">
                      7798917108
                    </a>
                    <button 
                      type="button" 
                      class="sp-copy-btn" 
                      data-copy-target="7798917108" 
                      data-feedback-text="Copied"
                      aria-label="Copy phone number 7798917108"
                      title="Copy phone number"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      <span class="sp-copy-feedback" role="status">Copied</span>
                    </button>
                  </div>
                </div>

                <div class="sp-info-card-footer">
                  <a href="tel:8928252638" class="sp-card-action-btn" aria-label="Call Suyash Pharma primary phone line">
                    <span>CALL DIRECTLY</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>

              <!-- Card 02: EMAIL -->
              <article class="sp-info-card sp-contact-reveal" aria-labelledby="cardEmailTitle">
                <div class="sp-info-card-header">
                  <div class="sp-info-card-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <span class="sp-info-card-num">02 — EMAIL US</span>
                </div>

                <h3 class="sp-info-card-heading" id="cardEmailTitle">EMAIL</h3>

                <div class="sp-contact-value-list">
                  <div class="sp-contact-value-row">
                    <a href="mailto:suyashpharma1@gmail.com" class="sp-contact-email-link" aria-label="Email suyashpharma1@gmail.com">
                      suyashpharma1@gmail.com
                    </a>
                    <button 
                      type="button" 
                      class="sp-copy-btn" 
                      data-copy-target="suyashpharma1@gmail.com" 
                      data-feedback-text="Copied"
                      aria-label="Copy email address"
                      title="Copy email"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      <span class="sp-copy-feedback" role="status">Copied</span>
                    </button>
                  </div>
                </div>

                <div class="sp-info-card-footer">
                  <a href="mailto:suyashpharma1@gmail.com" class="sp-card-action-btn" aria-label="Send email to Suyash Pharma">
                    <span>COMPOSE EMAIL</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>

              <!-- Card 03: ADDRESS -->
              <article class="sp-info-card sp-contact-reveal" aria-labelledby="cardAddressTitle">
                <div class="sp-info-card-header">
                  <div class="sp-info-card-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span class="sp-info-card-num">03 — VISIT US</span>
                </div>

                <h3 class="sp-info-card-heading" id="cardAddressTitle">ADDRESS</h3>

                <address class="sp-info-address-text">
                  SHOP NO. A/02,03 GROUND FLOOR,<br/>
                  MAX AVENUE CHS LTD, OSTWAL NAGARI,<br/>
                  NALLASOPARA EAST, 401209,<br/>
                  MAHARASHTRA, INDIA
                </address>

                <div class="sp-info-card-footer">
                  <a href="#location-map" class="sp-card-action-btn" aria-label="Scroll to map section to view location">
                    <span>VIEW ON MAP</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>

            </div>
          </div>
        </section>

        <!-- ================================================================
             3. MAP PAGE - MAJOR MAP SECTION (SOLID DARK GREEN #1B6A3E)
             Large immersive map layout with custom "SUYASH PHARMA" identifier
             ================================================================ -->
        <section class="sp-location-map-section" id="location-map" aria-labelledby="ourLocationHeading">
          <div class="sp-location-map-container">
            
            <header class="sp-contact-section-header sp-contact-header-dark sp-contact-reveal">
              <div class="sp-map-prominent-eyebrow" id="ourLocationHeading">
                OUR LOCATION
              </div>
              <h2 class="sp-map-main-heading">
                FIND US
              </h2>
              <p class="sp-contact-section-desc">
                Visit Suyash Pharma at our location in Nallasopara East, Maharashtra.
              </p>
            </header>

            <!-- Large Immersive Google Maps Container -->
            <div class="sp-large-map-wrapper sp-contact-reveal">
              <iframe 
                class="sp-large-map-iframe"
                title="Suyash Pharma Google Maps Location in Nallasopara East"
                src="https://maps.google.com/maps?q=MAX+AVENUE+CHS+LTD,+OSTWAL+NAGARI,+NALLASOPARA+EAST,+401209&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowfullscreen
              ></iframe>

              <!-- Sleek Floating Overlay Card directly positioned on the Map -->
              <div class="sp-map-overlay-card" aria-label="Suyash Pharma Location Details">
                <div class="sp-overlay-header">
                  <div class="sp-overlay-pin-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="sp-overlay-title">SUYASH PHARMA</h3>
                    <span class="sp-overlay-subtitle">Nallasopara East, Maharashtra</span>
                  </div>
                </div>

                <p class="sp-overlay-address">
                  SHOP NO. A/02,03 GROUND FLOOR, MAX AVENUE CHS LTD, OSTWAL NAGARI, 401209
                </p>

                <a 
                  href="${googleMapsDirectionsUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="sp-overlay-directions-btn"
                  aria-label="Open Google Maps directions to Suyash Pharma"
                >
                  <span>GET DIRECTIONS</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        <!-- ================================================================
             4. ENQUIRY FORM PAGE (SOLID LIGHT GREEN #EBF5EE)
             ================================================================ -->
        <section class="sp-contact-form-section" id="contact-form" aria-labelledby="formSectionHeading">
          <div class="sp-contact-form-container">
            
            <header class="sp-contact-section-header sp-contact-header-light sp-contact-reveal">
              <div class="sp-contact-eyebrow-wrap">
                <span class="sp-contact-eyebrow-line" aria-hidden="true"></span>
                <span class="sp-contact-eyebrow">ENQUIRY FORM</span>
                <span class="sp-contact-eyebrow-line" aria-hidden="true"></span>
              </div>
              <h2 class="sp-contact-section-title" id="formSectionHeading">
                SEND US YOUR REQUIREMENT
              </h2>
              <p class="sp-contact-section-desc">
                Share your requirement with us and choose how you would like to connect with our team.
              </p>
            </header>

            <div class="sp-form-card-container sp-contact-reveal">
              <form class="sp-enquiry-form" id="contactEnquiryForm" novalidate>
                <div class="sp-form-grid-2col">
                  <!-- Full Name -->
                  <div class="sp-form-group">
                    <label for="contactFullName" class="sp-form-label">
                      FULL NAME <span class="sp-form-req">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="contactFullName" 
                      name="fullName" 
                      class="sp-form-input" 
                      placeholder="e.g. Dr. Rajesh Sharma" 
                      required
                    />
                    <span class="sp-form-error" id="errorFullName"></span>
                  </div>

                  <!-- Company Name -->
                  <div class="sp-form-group">
                    <label for="contactCompany" class="sp-form-label">
                      COMPANY NAME
                    </label>
                    <input 
                      type="text" 
                      id="contactCompany" 
                      name="company" 
                      class="sp-form-input" 
                      placeholder="e.g. Apex Hospital / Healthcare Ltd." 
                    />
                    <span class="sp-form-error" id="errorCompany"></span>
                  </div>

                  <!-- Email Address -->
                  <div class="sp-form-group">
                    <label for="contactEmail" class="sp-form-label">
                      EMAIL ADDRESS <span class="sp-form-req">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="contactEmail" 
                      name="email" 
                      class="sp-form-input" 
                      placeholder="e.g. rajesh@apexhealth.in" 
                      required
                    />
                    <span class="sp-form-error" id="errorEmail"></span>
                  </div>

                  <!-- Phone Number -->
                  <div class="sp-form-group">
                    <label for="contactPhone" class="sp-form-label">
                      PHONE NUMBER <span class="sp-form-req">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="contactPhone" 
                      name="phone" 
                      class="sp-form-input" 
                      placeholder="e.g. 9876543210" 
                      required
                    />
                    <span class="sp-form-error" id="errorPhone"></span>
                  </div>
                </div>

                <!-- Subject / Requirement -->
                <div class="sp-form-group">
                  <label for="contactRequirement" class="sp-form-label">
                    SUBJECT / REQUIREMENT <span class="sp-form-req">*</span>
                  </label>
                  <select id="contactRequirement" name="requirement" class="sp-form-select" required>
                    <option value="">Select your requirement type</option>
                    <option value="Product Enquiry">Product Enquiry (Pharmaceutical Portfolio)</option>
                    <option value="Business Enquiry">Business Enquiry (Partnership & Institutional Supply)</option>
                    <option value="General Support">General Support (Client Assistance & General Information)</option>
                  </select>
                  <span class="sp-form-error" id="errorRequirement"></span>
                </div>

                <!-- Message -->
                <div class="sp-form-group">
                  <label for="contactMessage" class="sp-form-label">
                    MESSAGE <span class="sp-form-req">*</span>
                  </label>
                  <textarea 
                    id="contactMessage" 
                    name="message" 
                    class="sp-form-textarea" 
                    rows="4" 
                    placeholder="Provide details about your requirement, product interest or query..."
                    required
                  ></textarea>
                  <span class="sp-form-error" id="errorMessage"></span>
                </div>

                <!-- Submit Row -->
                <div class="sp-form-submit-row">
                  <button type="submit" class="sp-submit-enquiry-btn" id="submitEnquiryBtn">
                    <span>SUBMIT ENQUIRY</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

        <!-- ================================================================
             5. VISIT SUYASH PHARMA / OFFICE (SOLID DARK GREEN #1B6A3E)
             ================================================================ -->
        <section class="sp-visit-office-section" id="visit-us" aria-labelledby="visitOfficeHeading">
          <div class="sp-visit-office-container">
            <div class="sp-visit-office-grid sp-contact-reveal">
              
              <!-- Left: Office Address Details -->
              <div class="sp-visit-content-col">
                <span class="sp-visit-eyebrow">CORPORATE PRESENCE</span>
                <h2 class="sp-visit-title" id="visitOfficeHeading">VISIT SUYASH PHARMA</h2>
                <p class="sp-visit-desc">
                  Find us at our Nallasopara East location and connect with our team for business and product enquiries.
                </p>

                <div class="sp-visit-address-block">
                  <div class="sp-visit-address-name">SUYASH PHARMA</div>
                  <address class="sp-visit-address-lines">
                    SHOP NO. A/02,03 GROUND FLOOR, MAX AVENUE CHS LTD,<br/>
                    OSTWAL NAGARI, NALLASOPARA EAST, 401209,<br/>
                    MAHARASHTRA, INDIA
                  </address>
                </div>

                <div class="sp-visit-contacts-row">
                  <div class="sp-visit-contact-item">
                    <span class="sp-visit-contact-label">PHONE:</span>
                    <a href="tel:8928252638" class="sp-visit-contact-val">8928252638</a>
                    <span class="sp-visit-sep">•</span>
                    <a href="tel:7798917108" class="sp-visit-contact-val">7798917108</a>
                  </div>
                  <div class="sp-visit-contact-item">
                    <span class="sp-visit-contact-label">EMAIL:</span>
                    <a href="mailto:suyashpharma1@gmail.com" class="sp-visit-contact-val">suyashpharma1@gmail.com</a>
                  </div>
                </div>
              </div>

              <!-- Right: Clean Call-to-Action for Google Maps Directions -->
              <div class="sp-visit-action-col">
                <div class="sp-visit-action-box">
                  <div class="sp-visit-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                  </div>
                  <h3 class="sp-visit-action-heading">Plan Your Visit</h3>
                  <p class="sp-visit-action-sub">Get real-time driving or transit directions straight to our office.</p>
                  
                  <a 
                    href="${googleMapsDirectionsUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="sp-visit-directions-btn"
                    aria-label="Get Google Maps navigation directions to Suyash Pharma"
                  >
                    <span>GET DIRECTIONS</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ================================================================
             6. HOW CAN WE HELP? (SOLID LIGHT GREEN #EBF5EE)
             ================================================================ -->
        <section class="sp-help-section" id="how-can-we-help" aria-labelledby="helpHeading">
          <div class="sp-help-container">
            
            <header class="sp-contact-section-header sp-contact-header-light sp-contact-reveal">
              <div class="sp-contact-eyebrow-wrap">
                <span class="sp-contact-eyebrow-line" aria-hidden="true"></span>
                <span class="sp-contact-eyebrow">ASSISTANCE AREAS</span>
                <span class="sp-contact-eyebrow-line" aria-hidden="true"></span>
              </div>
              <h2 class="sp-contact-section-title" id="helpHeading">
                HOW CAN WE HELP?
              </h2>
              <p class="sp-contact-section-desc">
                Connect with Suyash Pharma for product enquiries, business conversations and general information.
              </p>
            </header>

            <div class="sp-help-cards-grid sp-contact-reveal">
              
              <!-- Card 1: Product Enquiry -->
              <a href="#contact-form" class="sp-help-card-item" data-select-type="Product Enquiry" aria-label="Start Product Enquiry">
                <div class="sp-help-card-num">01</div>
                <h3 class="sp-help-card-title">PRODUCT ENQUIRY</h3>
                <p class="sp-help-card-desc">For questions about our pharmaceutical products.</p>
                <div class="sp-help-card-action">
                  <span>EXPLORE</span>
                  <span class="sp-card-arrow" aria-hidden="true">→</span>
                </div>
              </a>

              <!-- Card 2: Business Enquiry -->
              <a href="#contact-form" class="sp-help-card-item" data-select-type="Business Enquiry" aria-label="Start Business Enquiry">
                <div class="sp-help-card-num">02</div>
                <h3 class="sp-help-card-title">BUSINESS ENQUIRY</h3>
                <p class="sp-help-card-desc">For partnerships and business discussions.</p>
                <div class="sp-help-card-action">
                  <span>EXPLORE</span>
                  <span class="sp-card-arrow" aria-hidden="true">→</span>
                </div>
              </a>

              <!-- Card 3: General Support -->
              <a href="#contact-form" class="sp-help-card-item" data-select-type="General Support" aria-label="Start General Support Enquiry">
                <div class="sp-help-card-num">03</div>
                <h3 class="sp-help-card-title">GENERAL SUPPORT</h3>
                <p class="sp-help-card-desc">For general questions and information.</p>
                <div class="sp-help-card-action">
                  <span>EXPLORE</span>
                  <span class="sp-card-arrow" aria-hidden="true">→</span>
                </div>
              </a>

            </div>

          </div>
        </section>
      </main>

      <!-- 7. REUSED FINAL CTA & CORPORATE FOOTER -->
      ${renderFooter()}

      <!-- Action Confirmation Modal (WhatsApp or Email Choice) -->
      <div class="sp-enquiry-modal-backdrop" id="enquiryModal" role="dialog" aria-modal="true" aria-labelledby="modalChoiceHeading" aria-hidden="true">
        <div class="sp-enquiry-modal-box">
          <button type="button" class="sp-modal-close-btn" id="closeEnquiryModalBtn" aria-label="Close enquiry modal">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <span class="sp-modal-tag">ENQUIRY PREPARED</span>
          <h3 class="sp-modal-title" id="modalChoiceHeading">HOW WOULD YOU LIKE TO SEND YOUR ENQUIRY?</h3>
          <p class="sp-modal-desc">
            Your requirement is validated and ready. Select your preferred communication channel to send directly to Suyash Pharma.
          </p>

          <div class="sp-modal-choice-grid">
            <!-- Option 1: WhatsApp -->
            <a href="#" target="_blank" rel="noopener noreferrer" class="sp-modal-send-btn sp-modal-btn-wa" id="dispatchWhatsAppBtn">
              <div class="sp-modal-btn-content">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>SEND VIA WHATSAPP</span>
              </div>
              <span aria-hidden="true">→</span>
            </a>

            <!-- Option 2: Email -->
            <a href="#" class="sp-modal-send-btn sp-modal-btn-email" id="dispatchEmailBtn">
              <div class="sp-modal-btn-content">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>SEND VIA EMAIL</span>
              </div>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <!-- Dynamic Status Confirmation Notification -->
          <div class="sp-modal-status-badge" id="modalStatusBadge">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span id="modalStatusText">YOUR REQUIREMENT IS READY TO SEND.</span>
          </div>
        </div>
      </div>

    </div>
  `;
}

/**
 * Initializes interactive features for the dedicated Contact page:
 * - One-click clipboard copy with "Copied" feedback toast
 * - Form validation and multi-channel dispatch (WhatsApp & Email)
 * - Smooth anchor scrolling
 * - Scroll reveal animations
 */
export function initContactPage(router) {
  // 1. Initialize Navbar and Footer handlers
  initNavbarEvents();
  initFooter();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.sp-contact-page-wrapper .sp-contact-reveal');

  // 2. Scroll entrance reveal
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in-view'));
  }

  // 3. One-Click Copy Buttons (Phone & Email) with "Copied" feedback
  const copyButtons = document.querySelectorAll('.sp-contact-page-wrapper .sp-copy-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy-target');
      const feedbackEl = btn.querySelector('.sp-copy-feedback');

      if (!textToCopy) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          const tempInput = document.createElement('textarea');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        if (feedbackEl) {
          feedbackEl.classList.add('is-visible');
          setTimeout(() => {
            feedbackEl.classList.remove('is-visible');
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });

  // 4. "How Can We Help?" Cards: Pre-fill Subject/Requirement & smooth scroll to form
  const helpCards = document.querySelectorAll('.sp-help-card-item[data-select-type]');
  const requirementSelect = document.getElementById('contactRequirement');
  const contactFormSection = document.getElementById('contact-form');

  helpCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      const type = card.getAttribute('data-select-type');
      if (requirementSelect && type) {
        requirementSelect.value = type;
      }
      if (contactFormSection) {
        e.preventDefault();
        contactFormSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 5. Enquiry Form Validation & Multi-Channel Action Panel
  const form = document.getElementById('contactEnquiryForm');
  const modal = document.getElementById('enquiryModal');
  const closeModalBtn = document.getElementById('closeEnquiryModalBtn');
  const dispatchWhatsAppBtn = document.getElementById('dispatchWhatsAppBtn');
  const dispatchEmailBtn = document.getElementById('dispatchEmailBtn');
  const modalStatusBadge = document.getElementById('modalStatusBadge');
  const modalStatusText = document.getElementById('modalStatusText');

  if (form && modal) {
    const fields = {
      fullName: document.getElementById('contactFullName'),
      company: document.getElementById('contactCompany'),
      email: document.getElementById('contactEmail'),
      phone: document.getElementById('contactPhone'),
      requirement: document.getElementById('contactRequirement'),
      message: document.getElementById('contactMessage')
    };

    const errors = {
      fullName: document.getElementById('errorFullName'),
      company: document.getElementById('errorCompany'),
      email: document.getElementById('errorEmail'),
      phone: document.getElementById('errorPhone'),
      requirement: document.getElementById('errorRequirement'),
      message: document.getElementById('errorMessage')
    };

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }

    function validatePhone(val) {
      return /^[\d\s\+\-\(\)]{7,15}$/.test(val.trim());
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset error states
      Object.keys(errors).forEach((key) => {
        if (errors[key]) errors[key].textContent = '';
      });
      Object.keys(fields).forEach((key) => {
        if (fields[key]) fields[key].classList.remove('is-invalid');
      });

      // 1. Full Name
      const nameVal = fields.fullName.value.trim();
      if (!nameVal) {
        errors.fullName.textContent = 'Please enter your full name.';
        fields.fullName.classList.add('is-invalid');
        isValid = false;
      }

      // 2. Email Address
      const emailVal = fields.email.value.trim();
      if (!emailVal) {
        errors.email.textContent = 'Please enter your email address.';
        fields.email.classList.add('is-invalid');
        isValid = false;
      } else if (!validateEmail(emailVal)) {
        errors.email.textContent = 'Please enter a valid email address.';
        fields.email.classList.add('is-invalid');
        isValid = false;
      }

      // 3. Phone Number
      const phoneVal = fields.phone.value.trim();
      if (!phoneVal) {
        errors.phone.textContent = 'Please enter your phone number.';
        fields.phone.classList.add('is-invalid');
        isValid = false;
      } else if (!validatePhone(phoneVal)) {
        errors.phone.textContent = 'Please enter a valid phone number.';
        fields.phone.classList.add('is-invalid');
        isValid = false;
      }

      // 4. Subject / Requirement
      const reqVal = fields.requirement.value;
      if (!reqVal) {
        errors.requirement.textContent = 'Please select your requirement type.';
        fields.requirement.classList.add('is-invalid');
        isValid = false;
      }

      // 5. Message
      const messageVal = fields.message.value.trim();
      if (!messageVal) {
        errors.message.textContent = 'Please enter your message.';
        fields.message.classList.add('is-invalid');
        isValid = false;
      } else if (messageVal.length < 5) {
        errors.message.textContent = 'Message must be at least 5 characters long.';
        fields.message.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) return;

      const companyVal = fields.company.value.trim() || 'N/A';

      // 1. WhatsApp Action
      const waMessageText = `Hello Suyash Pharma,\n\nName: ${nameVal}\nCompany: ${companyVal}\nEmail: ${emailVal}\nPhone: ${phoneVal}\nRequirement: ${reqVal}\nMessage: ${messageVal}\n\nI would like to connect regarding the above requirement.`;
      const waUrl = `https://wa.me/918928252638?text=${encodeURIComponent(waMessageText)}`;
      if (dispatchWhatsAppBtn) {
        dispatchWhatsAppBtn.href = waUrl;
        dispatchWhatsAppBtn.onclick = () => {
          if (modalStatusBadge && modalStatusText) {
            modalStatusText.textContent = "YOUR REQUIREMENT IS SENT SUCCESSFULLY.";
            modalStatusBadge.classList.add('is-active-state');
          }
        };
      }

      // 2. Email Action
      const emailSubject = `Suyash Pharma – New Product / Business Enquiry`;
      const emailBody = `Hello Suyash Pharma,\n\nName: ${nameVal}\nCompany: ${companyVal}\nEmail: ${emailVal}\nPhone: ${phoneVal}\nRequirement: ${reqVal}\nMessage: ${messageVal}\n\nI would like to connect regarding the above enquiry.`;
      const emailUrl = `mailto:suyashpharma1@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      if (dispatchEmailBtn) {
        dispatchEmailBtn.href = emailUrl;
        dispatchEmailBtn.onclick = () => {
          if (modalStatusBadge && modalStatusText) {
            modalStatusText.textContent = "YOUR REQUIREMENT IS SENT SUCCESSFULLY.";
            modalStatusBadge.classList.add('is-active-state');
          }
        };
      }

      // Reset modal status message to initial ready state
      if (modalStatusBadge && modalStatusText) {
        modalStatusText.textContent = "YOUR REQUIREMENT IS READY TO SEND.";
        modalStatusBadge.classList.remove('is-active-state');
      }

      // Open Modal
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
    });

    // Close Modal
    function closeModal() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeModal();
      }
    });
  }

  // 6. Smooth scroll for internal links
  const internalLinks = document.querySelectorAll('.sp-contact-page-wrapper a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#/')) return;

      if (href && href.startsWith('#') && href.length > 1) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}
