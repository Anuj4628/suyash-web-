/**
 * Suyash Pharma - Dedicated "Therapeutic Segments" Page
 * 
 * Flow:
 * 1. Corporate Sticky Navbar
 * 2. Therapeutic Hero (Solid Deep Green #165331) with jump anchors
 * 3. Segment 01: Broad-Spectrum Antibiotics & Combination Therapy (Hospital Critical Care)
 * 4. Segment 02: Gastrointestinal Support (Parenteral Proton Pump Inhibitor)
 * 5. Segment 03: Supportive & Adjunctive Therapy (Antioxidant / Metabolic Protection)
 * 6. Therapeutic FAQ Section (Natural, medically accurate, non-promotional)
 * 7. Pre-Footer Corporate CTA + Global Corporate Footer
 */

import { renderNavbar, initNavbarEvents } from '../../components/Navbar/Navbar.js';
import { renderFooter, initFooter } from '../../components/Footer/Footer.js';
import { products } from '../../data/products.js';
import './TherapeuticSegmentsPage.css';

export function renderTherapeuticSegmentsPage() {
  // Segment 1: Broad-Spectrum Antibiotics & Combination Therapy
  const antiInfectiveProducts = products.filter(p => 
    p.category.toLowerCase().includes('anti-infective') ||
    p.category.toLowerCase().includes('carbapenem') ||
    p.category.toLowerCase().includes('cephalosporin') ||
    p.category.toLowerCase().includes('glycylcycline') ||
    p.category.toLowerCase().includes('inhibitor')
  );

  // Segment 2: Gastrointestinal Support
  const giProducts = products.filter(p => 
    p.slug === 'yspan-40mg' || p.category.toLowerCase().includes('gastro')
  );

  // Segment 3: Supportive & Adjunctive Therapy
  const supportiveProducts = products.filter(p => 
    p.slug === 'gtvita-sp' || p.category.toLowerCase().includes('supportive') || p.category.toLowerCase().includes('antioxidant')
  );

  const renderProductCards = (productList) => {
    return productList.map(p => `
      <a href="#/products/${p.slug}" class="sp-tseg-card" aria-label="${p.name} - ${p.generic}">
        <div class="sp-tseg-card-img-wrap">
          <img 
            src="${p.image}" 
            alt="${p.name} packaging carton - ${p.generic} by Suyash Pharma" 
            class="sp-tseg-card-img" 
            loading="lazy" 
          />
        </div>
        <span class="sp-tseg-card-tag">${p.therapeuticSegment}</span>
        <h3 class="sp-tseg-card-name">${p.name}</h3>
        <p class="sp-tseg-card-generic">${p.generic}</p>
        <span class="sp-tseg-card-strength">${p.strength}</span>
        <div class="sp-tseg-card-action">
          <span>VIEW SPECIFICATIONS</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </a>
    `).join('');
  };

  return `
    <div class="sp-therapeutic-page-wrapper">
      <!-- 1. Corporate Navbar -->
      ${renderNavbar('therapeutic-segments')}

      <main class="sp-therapeutic-main-content">
        <!-- ================================================================
             1. HERO SECTION (SOLID DEEP GREEN #165331)
             ================================================================ -->
        <section class="sp-tseg-hero-section" id="tseg-hero" aria-labelledby="tsegHeroHeading">
          <div class="sp-tseg-watermark" aria-hidden="true">SEGMENTS</div>

          <div class="sp-tseg-container">
            <div class="sp-tseg-hero-content">
              <div class="sp-tseg-badge-row">
                <span class="sp-tseg-hero-marker">PORTFOLIO // THERAPEUTIC FOCUS</span>
                <span class="sp-tseg-hero-eyebrow">SUYASH PHARMA HEALTHCARE PORTFOLIO</span>
              </div>

              <h1 class="sp-tseg-hero-title" id="tsegHeroHeading">
                THERAPEUTIC SEGMENTS & CLINICAL FORMULATIONS
              </h1>

              <p class="sp-tseg-hero-desc">
                Suyash Pharma delivers a structured pharmaceutical portfolio focused on critical care hospital anti-infectives, targeted carbapenem combinations, parenteral gastrointestinal therapies, and evidence-backed supportive care formulations.
              </p>

              <div class="sp-tseg-jump-links">
                <a href="#anti-infective" class="sp-tseg-jump-btn">
                  <span>01. Anti-Infective & Carbapenems</span>
                  <span aria-hidden="true">↓</span>
                </a>
                <a href="#gastrointestinal" class="sp-tseg-jump-btn">
                  <span>02. Gastrointestinal Support</span>
                  <span aria-hidden="true">↓</span>
                </a>
                <a href="#supportive" class="sp-tseg-jump-btn">
                  <span>03. Supportive & Adjunctive</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================
             2. CHAPTER 01: BROAD-SPECTRUM ANTIBIOTICS & COMBINATION THERAPY
             ================================================================ -->
        <section class="sp-tseg-chapter" id="anti-infective" aria-labelledby="antiInfectiveHeading">
          <div class="sp-tseg-container">
            <header class="sp-tseg-chapter-header">
              <span class="sp-tseg-chapter-badge">THERAPEUTIC SEGMENT 01 // CRITICAL CARE</span>
              <h2 class="sp-tseg-chapter-title" id="antiInfectiveHeading">
                BROAD-SPECTRUM ANTIBIOTICS & COMBINATION THERAPY
              </h2>
              <p class="sp-tseg-chapter-desc">
                Covering high-potency carbapenems (Meropenem), synergistic beta-lactamase inhibitor combinations (Sulbactam, Tazobactam), 3rd and 4th generation cephalosporins (Ceftazidime, Ceftizoxime, Cefpirome, Cefoperazone), and glycylcyclines (Tigecycline) formulated for intensive care management.
              </p>
            </header>

            <div class="sp-tseg-products-grid">
              ${renderProductCards(antiInfectiveProducts)}
            </div>
          </div>
        </section>

        <!-- ================================================================
             3. CHAPTER 02: GASTROINTESTINAL SUPPORT
             ================================================================ -->
        <section class="sp-tseg-chapter sp-tseg-chapter-alt" id="gastrointestinal" aria-labelledby="giHeading">
          <div class="sp-tseg-container">
            <header class="sp-tseg-chapter-header">
              <span class="sp-tseg-chapter-badge">THERAPEUTIC SEGMENT 02 // GASTROENTEROLOGY</span>
              <h2 class="sp-tseg-chapter-title" id="giHeading">
                GASTROINTESTINAL HEALTHCARE SUPPORT
              </h2>
              <p class="sp-tseg-chapter-desc">
                Targeted parenteral proton pump inhibitor formulation delivering rapid acid suppression, mucosal healing support, and stress ulcer prophylaxis for inpatients unable to take oral medications.
              </p>
            </header>

            <div class="sp-tseg-products-grid">
              ${renderProductCards(giProducts)}
            </div>
          </div>
        </section>

        <!-- ================================================================
             4. CHAPTER 03: SUPPORTIVE & ADJUNCTIVE THERAPY
             ================================================================ -->
        <section class="sp-tseg-chapter" id="supportive" aria-labelledby="supportiveHeading">
          <div class="sp-tseg-container">
            <header class="sp-tseg-chapter-header">
              <span class="sp-tseg-chapter-badge">THERAPEUTIC SEGMENT 03 // NUTRACEUTICAL & ADJUNCTIVE</span>
              <h2 class="sp-tseg-chapter-title" id="supportiveHeading">
                SUPPORTIVE & ADJUNCTIVE THERAPY
              </h2>
              <p class="sp-tseg-chapter-desc">
                Specialized supportive formulations structured to counteract cellular oxidative stress, assist hepatic metabolic recovery, and complement comprehensive patient care.
              </p>
            </header>

            <div class="sp-tseg-products-grid">
              ${renderProductCards(supportiveProducts)}
            </div>
          </div>
        </section>

        <!-- ================================================================
             5. THERAPEUTIC FAQ SECTION
             ================================================================ -->
        <section class="sp-tseg-faq-section" id="therapeutic-faqs" aria-labelledby="faqHeading">
          <div class="sp-tseg-container">
            <header class="sp-tseg-faq-header">
              <h2 class="sp-tseg-faq-title" id="faqHeading">THERAPEUTIC PORTFOLIO FAQ</h2>
              <p class="sp-tseg-faq-desc">Common questions regarding Suyash Pharma's therapeutic formulations and hospital supply.</p>
            </header>

            <div class="sp-tseg-faq-list">
              <article class="sp-tseg-faq-item">
                <h3 class="sp-tseg-faq-q">What are the primary antibiotic formulations manufactured and supplied by Suyash Pharma?</h3>
                <p class="sp-tseg-faq-a">Suyash Pharma focuses on hospital-grade injectable antibiotics including Meropenem 2.0 gm (SPNEM™), Meropenem with Sulbactam (SPNEM-SB), Meropenem with Tazobactam (SPNEM-TZ), Ceftazidime with Tobramycin (CEFFTOB™), Cefoperazone with Sulbactam (SPARAZONE-3GM), Ceftizoxime 1.5gm (SPTIK™-1.5GM), Tigecycline 100mg (TIGRIXA-100), and Cefpirome 2000mg (Sfrome-2gm).</p>
              </article>

              <article class="sp-tseg-faq-item">
                <h3 class="sp-tseg-faq-q">How are Suyash Pharma therapeutic injectables stored and transported?</h3>
                <p class="sp-tseg-faq-a">All sterile dry powder and lyophilized injection vials are packaged in tamper-evident glass vials with protective cartons and must be stored below 25°C, protected from direct light and moisture, in compliance with standard pharmaceutical storage guidelines.</p>
              </article>

              <article class="sp-tseg-faq-item">
                <h3 class="sp-tseg-faq-q">How can hospitals or distributors acquire Suyash Pharma therapeutic products?</h3>
                <p class="sp-tseg-faq-a">Hospitals, clinical institutions, and authorized pharmaceutical distributors can submit commercial inquiries directly via our contact form, email at suyashpharma1@gmail.com, or phone support at +91 8928252638 / +91 7798917108.</p>
              </article>
            </div>
          </div>
        </section>

      </main>

      <!-- 6. Pre-Footer Corporate CTA + Global Corporate Footer -->
      ${renderFooter()}
    </div>
  `;
}

export function initTherapeuticSegmentsPage(routerInstance) {
  initNavbarEvents();
  initFooter();
}
