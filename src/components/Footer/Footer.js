/**
 * Suyash Pharma - Final CTA + Corporate Footer Component
 * 
 * Includes:
 * 1. Full-Width Final Call-To-Action (CTA) Section
 * 2. 4-Column Deep Suyash Navy Corporate Footer:
 *    - Col 1: Original Brand Logo (Clickable back to Hero), Statement & Trust badges
 *    - Col 2: Quick Links (Home, About Us, Products, Why Choose Us, Therapeutic Segments, Contact)
 *    - Col 3: Our Focus (Antibiotics & Combination, GI Support, Supportive Therapy)
 *    - Col 4: Verified Contact Info (2 Clickable Phones, Email, Formatted Address, WhatsApp link)
 * 3. Bottom Bar: Copyright 2026 & "Design and SEO by Sunmarg India"
 * 4. Persistent Floating Contact Utilities (WhatsApp & Phone) with safe-area spacing
 */

import logoUrl from '../../assets/images/logo/suyash-pharma-logo.png';
import './Footer.css';

export function renderFooter() {
  return `
    <!-- ====================================================================
         1. FINAL PRE-FOOTER CTA SECTION
         ==================================================================== -->
    <section class="sp-final-cta-section" id="cta" aria-labelledby="ctaHeading">
      <div class="sp-cta-container">
        <!-- Subtle Clinical Line Accent Watermark on right -->
        <svg class="sp-cta-watermark" viewBox="0 0 240 240" fill="none" aria-hidden="true">
          <circle cx="120" cy="120" r="100" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>
          <circle cx="120" cy="120" r="60" stroke="rgba(30,130,76,0.12)" stroke-width="2"/>
          <line x1="20" y1="120" x2="220" y2="120" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" stroke-dasharray="4 4"/>
          <line x1="120" y1="20" x2="120" y2="220" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" stroke-dasharray="4 4"/>
        </svg>

        <div class="sp-cta-content-grid">
          <!-- Left: Strong Editorial Heading & Supporting Text -->
          <div class="sp-cta-text-block">
            <div class="sp-cta-eyebrow-wrap">
              <span class="sp-cta-eyebrow-line" aria-hidden="true"></span>
              <span class="sp-cta-eyebrow">PARTNER WITH SUYASH PHARMA</span>
            </div>

            <h2 class="sp-cta-title" id="ctaHeading">
              LET'S BUILD BETTER<br/>
              HEALTHCARE CONNECTIONS.
            </h2>

            <p class="sp-cta-description">
              Have a product enquiry or want to connect with Suyash Pharma? Our team is ready to hear from you.
            </p>
          </div>

          <!-- Right: Two Primary Dual CTA Buttons -->
          <div class="sp-cta-actions">
            <a href="#/contact" class="sp-cta-btn sp-cta-btn-primary" id="ctaGetInTouchBtn">
              <span>GET IN TOUCH</span>
              <svg class="sp-btn-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M4.167 10h11.666m-5-5l5 5-5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>

            <a href="#/products" class="sp-cta-btn sp-cta-btn-secondary" id="ctaExploreProductsBtn">
              <span>EXPLORE PRODUCTS</span>
              <svg class="sp-btn-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M4.167 10h11.666m-5-5l5 5-5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         2. MAIN CORPORATE PHARMACEUTICAL FOOTER
         ==================================================================== -->
    <footer class="sp-main-footer" id="contact" role="contentinfo">
      <div class="sp-footer-container">
        <!-- 4-Column Grid -->
        <div class="sp-footer-grid">
          
          <!-- COLUMN 1: Brand Logo, Statement & Value Badges -->
          <div class="sp-footer-col sp-footer-col-brand">
            <a href="#/" class="sp-footer-logo-link" id="footerLogoLink" aria-label="Suyash Pharma - Scroll back to top">
              <div class="sp-footer-logo-plate">
                <img 
                  src="${logoUrl}" 
                  alt="Suyash Pharma - Your Health, Our Priority" 
                  class="sp-footer-logo-img"
                  width="145"
                  height="94"
                  loading="lazy"
                />
              </div>
            </a>

            <p class="sp-footer-statement">
              Focused on delivering quality pharmaceutical solutions with reliability, responsibility and a commitment to better healthcare.
            </p>

            <div class="sp-footer-trust-pills">
              <span>QUALITY</span>
              <span class="sp-trust-sep" aria-hidden="true">•</span>
              <span>RELIABILITY</span>
              <span class="sp-trust-sep" aria-hidden="true">•</span>
              <span>RESPONSIBILITY</span>
            </div>
          </div>

          <!-- COLUMN 2: Quick Navigation Links -->
          <div class="sp-footer-col sp-footer-col-links">
            <h3 class="sp-footer-heading">QUICK LINKS</h3>
            <ul class="sp-footer-nav-list" role="list">
              <li><a href="#/" class="sp-footer-nav-item">Home</a></li>
              <li><a href="#/about" class="sp-footer-nav-item">About Us</a></li>
              <li><a href="#/products" class="sp-footer-nav-item">Products</a></li>
              <li><a href="#/quality" class="sp-footer-nav-item">Why Choose Us</a></li>
              <li><a href="#/contact" class="sp-footer-nav-item">Contact</a></li>
            </ul>
          </div>

          <!-- COLUMN 3: Our Therapeutic Focus -->
          <div class="sp-footer-col sp-footer-col-focus">
            <h3 class="sp-footer-heading">OUR FOCUS</h3>
            <ul class="sp-footer-focus-list" role="list">
              <li>
                <a href="#therapeutic-segments" class="sp-footer-focus-item">
                  <span class="sp-focus-title">Broad-Spectrum Antibiotics & Combination Therapy</span>
                  <span class="sp-focus-tag">Hospital Critical Care</span>
                </a>
              </li>
              <li>
                <a href="#therapeutic-segments" class="sp-footer-focus-item">
                  <span class="sp-focus-title">Gastrointestinal Support</span>
                  <span class="sp-focus-tag">Gastroenterology</span>
                </a>
              </li>
              <li>
                <a href="#therapeutic-segments" class="sp-footer-focus-item">
                  <span class="sp-focus-title">Supportive & Adjunctive Therapy</span>
                  <span class="sp-focus-tag">Nutraceutical Care</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- COLUMN 4: Verified Client Contact Information -->
          <div class="sp-footer-col sp-footer-col-contact">
            <h3 class="sp-footer-heading">CONTACT US</h3>
            
            <div class="sp-contact-items-wrap">
              <!-- Clickable Phone Numbers -->
              <div class="sp-contact-entry">
                <div class="sp-contact-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div class="sp-contact-text-group">
                  <span class="sp-contact-label">Phone Support</span>
                  <a href="tel:+918928252638" class="sp-contact-link" aria-label="Call Suyash Pharma at 8928252638">8928252638</a>
                  <a href="tel:+917798917108" class="sp-contact-link" aria-label="Call Suyash Pharma at 7798917108">7798917108</a>
                </div>
              </div>

              <!-- Clickable Email -->
              <div class="sp-contact-entry">
                <div class="sp-contact-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="sp-contact-text-group">
                  <span class="sp-contact-label">Email Enquiries</span>
                  <a href="mailto:suyashpharma1@gmail.com" class="sp-contact-link sp-email-link" aria-label="Email Suyash Pharma at suyashpharma1@gmail.com">suyashpharma1@gmail.com</a>
                </div>
              </div>

              <!-- Registered Address -->
              <div class="sp-contact-entry">
                <div class="sp-contact-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="sp-contact-text-group">
                  <span class="sp-contact-label">Corporate Address</span>
                  <address class="sp-contact-address">
                    SHOP NO. A/02,03, GROUND FLOOR,<br/>
                    MAX AVENUE CHS LTD, OSTWAL NAGARI,<br/>
                    NALLASOPARA EAST, 401209
                  </address>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=SHOP+NO.+A%2F02%2C03+GROUND+FLOOR%2C+MAX+AVENUE+CHS+LTD%2C+OSTWAL+NAGARI%2C+NALLASOPARA+EAST%2C+401209" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="sp-footer-directions-btn"
                    aria-label="Get Google Maps directions to Suyash Pharma"
                  >
                    <span>GET DIRECTIONS</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <!-- WhatsApp Quick Action -->
              <div class="sp-contact-whatsapp-row">
                <a 
                  href="https://wa.me/918928252638?text=Hello%20Suyash%20Pharma%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="sp-footer-whatsapp-btn"
                  aria-label="Chat with Suyash Pharma on WhatsApp"
                >
                  <svg class="sp-wa-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- ------------------------------------------------------------------
             FOOTER BOTTOM BAR
             ------------------------------------------------------------------ -->
        <div class="sp-footer-bottom-bar">
          <p class="sp-copyright-text">
            © 2026 Suyash Pharma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

    <!-- ====================================================================
         3. PERSISTENT FLOATING CONTACT SYSTEM (WhatsApp & Phone)
         Remains fixed on bottom-right throughout the entire website.
         ==================================================================== -->
    <aside class="sp-floating-contact" aria-label="Quick Contact Actions">
      <!-- Floating WhatsApp Button -->
      <a 
        href="https://wa.me/918928252638?text=Hello%20Suyash%20Pharma%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." 
        target="_blank" 
        rel="noopener noreferrer" 
        class="sp-float-btn sp-float-wa" 
        aria-label="Contact Suyash Pharma on WhatsApp"
        data-tooltip="WhatsApp"
      >
        <svg class="sp-float-icon" viewBox="0 0 24 24" width="26" height="26" fill="#FFFFFF" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span class="sp-float-tooltip">WhatsApp</span>
      </a>

      <!-- Floating Phone Call Button -->
      <a 
        href="tel:+918928252638" 
        class="sp-float-btn sp-float-phone" 
        aria-label="Call Suyash Pharma at 8928252638"
        data-tooltip="Call Us"
      >
        <svg class="sp-float-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
        <span class="sp-float-tooltip">Call Us</span>
      </a>
    </aside>
  `;
}

/**
 * Initializes smooth scrolling for CTA links, Footer logo top-scroll, and section links.
 */
export function initFooter() {
  // 1. Logo Click: Smoothly scroll all the way back to the TOP of the homepage (Hero)
  const logoLink = document.getElementById('footerLogoLink');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Smooth scrolling for internal anchor links within CTA and Footer
  const anchorLinks = document.querySelectorAll('.sp-final-cta-section a[href^="#"], .sp-main-footer a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}
