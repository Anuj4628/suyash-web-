/**
 * Suyash Pharma - Dedicated "Quality" Corporate Page
 * 
 * Alternating Solid Color Sequence:
 * - SECTION 01: QUALITY HERO (Solid Deep Suyash Green #165331)
 * - SECTION 02: OUR QUALITY APPROACH (Solid Light Mint Green #EBF5EE)
 * - SECTION 03: QUALITY PROCESS / FROM MATERIAL TO PRODUCT (Solid Deep Suyash Green #165331)
 * - SECTION 04: QUALITY, PRODUCTS & CONTINUOUS IMPROVEMENT (Solid Light Mint Green #EBF5EE)
 * - SECTION 05: Reused Pre-Footer CTA + Corporate Footer + Floating WhatsApp & Phone Utilities
 * 
 * Strict Brand Rules:
 * - ZERO GRADIENTS. Solid, deep, trustworthy pharmaceutical corporate color palette.
 * - Authentic Indian pharmaceutical corporate photography (QC laboratory, materials review, packaging inspection, QA review).
 * - No fake claims, no unverified certifications, no artificial HUDs or sci-fi elements.
 * - Connected directly to the authentic Suyash Pharma product system.
 */

import { renderNavbar, initNavbarEvents } from '../../components/Navbar/Navbar.js';
import { renderFooter, initFooter } from '../../components/Footer/Footer.js';
import { products, formatBrandName } from '../../data/products.js';

import heroQcImg from '../../assets/images/quality/quality-hero-qc.jpg';
import materialsImg from '../../assets/images/quality/quality-materials-review.jpg';
import docTeamImg from '../../assets/images/quality/quality-documentation-team.jpg';
import packagingImg from '../../assets/images/quality/quality-packaging-inspection.jpg';
import teamCollabImg from '../../assets/images/quality/quality-team-collaboration.jpg';

import './QualityPage.css';

export function renderQualityPage() {
  // Select authentic featured products from the verified catalogue
  const featuredPortfolio = products.filter(p => 
    ['cefftob', 'spnem', 'tigrixa-100', 'gtvita-sp'].includes(p.slug)
  );

  return `
    <div class="sp-quality-page-wrapper">
      <!-- Corporate Sticky Navbar with 'Quality' Active -->
      ${renderNavbar('quality')}

      <main class="sp-quality-main-content">
        
        <!-- ================================================================
             SECTION 1: QUALITY HERO (SOLID DEEP GREEN #165331)
             ================================================================ -->
        <section class="sp-quality-hero-section" id="quality-hero" aria-labelledby="qualityHeroHeading">
          <div class="sp-quality-watermark" aria-hidden="true">QUALITY</div>

          <div class="sp-quality-container">
            <div class="sp-quality-hero-grid">
              
              <!-- Left Content Column -->
              <div class="sp-quality-hero-content sp-reveal-item is-in-view">
                <div class="sp-quality-badge-row">
                  <span class="sp-quality-hero-marker">01 / QUALITY</span>
                  <span class="sp-quality-hero-eyebrow">QUALITY ASSURANCE</span>
                </div>

                <h1 class="sp-quality-hero-title" id="qualityHeroHeading">
                  <span class="sp-hero-title-line">QUALITY</span>
                  <span class="sp-hero-title-line">AT EVERY</span>
                  <span class="sp-hero-title-line">STAGE.</span>
                </h1>

                <p class="sp-quality-hero-desc">
                  From product-focused processes to careful quality considerations, our approach is built around consistency, responsibility and dependable pharmaceutical solutions.
                </p>

                <div class="sp-quality-hero-actions">
                  <a href="#quality-approach" class="sp-quality-btn sp-quality-btn-white" id="heroExploreApproachBtn">
                    <span>EXPLORE OUR QUALITY APPROACH</span>
                    <span class="sp-btn-arrow" aria-hidden="true">→</span>
                  </a>
                  <a href="/products" class="sp-quality-btn sp-quality-btn-outline" id="heroViewProductsBtn">
                    <span>VIEW OUR PRODUCTS</span>
                    <span class="sp-btn-arrow" aria-hidden="true">→</span>
                  </a>
                </div>

                <!-- Editorial Accent Spec Line -->
                <div class="sp-quality-hero-metrics">
                  <div class="sp-hero-metric-item">
                    <span class="sp-metric-accent-bar" aria-hidden="true"></span>
                    <div class="sp-metric-text">
                      <span class="sp-metric-title">Process Discipline</span>
                      <span class="sp-metric-sub">Rigorous checks at relevant milestones</span>
                    </div>
                  </div>
                  <div class="sp-hero-metric-item">
                    <span class="sp-metric-accent-bar" aria-hidden="true"></span>
                    <div class="sp-metric-text">
                      <span class="sp-metric-title">Product Integrity</span>
                      <span class="sp-metric-sub">Careful formulation presentation</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Visual Column: Realistic Indian Pharma QC Scientist -->
              <div class="sp-quality-hero-visual sp-reveal-item is-in-view">
                <div class="sp-quality-hero-image-wrapper">
                  <div class="sp-quality-hero-offset-bg" aria-hidden="true"></div>
                  
                  <div class="sp-quality-hero-img-box">
                    <img 
                      src="${heroQcImg}" 
                      alt="Indian pharmaceutical quality control chemist inspecting sterile glass vial in a laboratory" 
                      class="sp-quality-hero-img"
                      loading="eager"
                      width="600"
                      height="450"
                    />
                  </div>

                  <!-- Editorial Trust Badge -->
                  <div class="sp-quality-hero-badge">
                    <span class="sp-badge-tag">ASSURANCE & INTEGRITY</span>
                    <span class="sp-badge-title">Indian Pharmaceutical Quality Focus</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        <!-- ================================================================
             SECTION 2: OUR QUALITY APPROACH (SOLID LIGHT MINT #EBF5EE)
             ================================================================ -->
        <section class="sp-quality-approach-section" id="quality-approach" aria-labelledby="qualityApproachHeading">
          <div class="sp-quality-container">
            
            <!-- Centered Editorial Header -->
            <div class="sp-quality-section-header sp-quality-header-light sp-reveal-item">
              <div class="sp-quality-eyebrow-wrap">
                <span class="sp-quality-eyebrow-line" aria-hidden="true"></span>
                <span class="sp-quality-eyebrow">OUR QUALITY APPROACH</span>
                <span class="sp-quality-eyebrow-line" aria-hidden="true"></span>
              </div>
              
              <h2 class="sp-quality-approach-title" id="qualityApproachHeading">
                QUALITY IS BUILT<br/>
                INTO THE WAY WE WORK.
              </h2>
              
              <p class="sp-quality-approach-desc">
                We believe dependable healthcare outcomes start with structured thinking, disciplined workflow oversight, and an enduring responsibility toward patient wellness.
              </p>
            </div>

            <!-- Two-Column Editorial Layout -->
            <div class="sp-quality-approach-grid">
              
              <!-- Left Visual: Realistic Pharma Materials Review -->
              <div class="sp-quality-approach-visual sp-reveal-item">
                <div class="sp-approach-image-card">
                  <div class="sp-approach-img-wrapper">
                    <img 
                      src="${materialsImg}" 
                      alt="Indian pharmaceutical scientists reviewing materials under microscope at quality testing station" 
                      class="sp-approach-img"
                      loading="lazy"
                      width="580"
                      height="435"
                    />
                  </div>
                  
                  <div class="sp-approach-caption-card">
                    <div class="sp-caption-tag">DISCIPLINED OVERSIGHT</div>
                    <p class="sp-caption-text">
                      Careful attention to incoming materials and disciplined verification before progressing to subsequent phases.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Right Content: 4 Editorial Pharma Principles Cards -->
              <div class="sp-quality-approach-cards">
                
                <!-- Principle 01 -->
                <article class="sp-principle-card sp-reveal-item">
                  <div class="sp-principle-card-top">
                    <span class="sp-principle-number">01</span>
                    <span class="sp-principle-accent" aria-hidden="true"></span>
                  </div>
                  <h3 class="sp-principle-title">QUALITY FOCUS</h3>
                  <p class="sp-principle-desc">
                    Maintaining a consistent focus on quality across our pharmaceutical approach.
                  </p>
                  <div class="sp-principle-footer" aria-hidden="true">
                    <span class="sp-principle-line"></span>
                    <span class="sp-principle-arrow">→</span>
                  </div>
                </article>

                <!-- Principle 02 -->
                <article class="sp-principle-card sp-reveal-item">
                  <div class="sp-principle-card-top">
                    <span class="sp-principle-number">02</span>
                    <span class="sp-principle-accent" aria-hidden="true"></span>
                  </div>
                  <h3 class="sp-principle-title">CONSISTENCY</h3>
                  <p class="sp-principle-desc">
                    Working with disciplined processes and attention to consistency.
                  </p>
                  <div class="sp-principle-footer" aria-hidden="true">
                    <span class="sp-principle-line"></span>
                    <span class="sp-principle-arrow">→</span>
                  </div>
                </article>

                <!-- Principle 03 -->
                <article class="sp-principle-card sp-reveal-item">
                  <div class="sp-principle-card-top">
                    <span class="sp-principle-number">03</span>
                    <span class="sp-principle-accent" aria-hidden="true"></span>
                  </div>
                  <h3 class="sp-principle-title">RESPONSIBILITY</h3>
                  <p class="sp-principle-desc">
                    Approaching pharmaceutical responsibilities with care, accountability and professionalism.
                  </p>
                  <div class="sp-principle-footer" aria-hidden="true">
                    <span class="sp-principle-line"></span>
                    <span class="sp-principle-arrow">→</span>
                  </div>
                </article>

                <!-- Principle 04 -->
                <article class="sp-principle-card sp-reveal-item">
                  <div class="sp-principle-card-top">
                    <span class="sp-principle-number">04</span>
                    <span class="sp-principle-accent" aria-hidden="true"></span>
                  </div>
                  <h3 class="sp-principle-title">CONTINUOUS IMPROVEMENT</h3>
                  <p class="sp-principle-desc">
                    Continuously reviewing and improving our approach as healthcare needs evolve.
                  </p>
                  <div class="sp-principle-footer" aria-hidden="true">
                    <span class="sp-principle-line"></span>
                    <span class="sp-principle-arrow">→</span>
                  </div>
                </article>

              </div>

            </div>
          </div>
        </section>


        <!-- ================================================================
             SECTION 3: QUALITY PROCESS / FROM MATERIAL TO PRODUCT (SOLID DEEP GREEN #165331)
             ================================================================ -->
        <section class="sp-quality-process-section" id="quality-process" aria-labelledby="qualityProcessHeading">
          <div class="sp-quality-container">
            
            <!-- Centered Editorial Header (Dark Background) -->
            <div class="sp-quality-section-header sp-quality-header-dark sp-reveal-item">
              <div class="sp-quality-eyebrow-wrap">
                <span class="sp-quality-eyebrow-line" aria-hidden="true"></span>
                <span class="sp-quality-eyebrow">OUR QUALITY PROCESS</span>
                <span class="sp-quality-eyebrow-line" aria-hidden="true"></span>
              </div>
              
              <h2 class="sp-quality-process-title" id="qualityProcessHeading">
                FROM MATERIAL<br/>
                TO FINISHED PRODUCT.
              </h2>
              
              <p class="sp-quality-process-desc">
                A structured, systematic flow upholding product requirements, process control, and presentation integrity across each vital phase.
              </p>
            </div>

            <!-- Horizontal Connected Process Timeline -->
            <div class="sp-process-timeline-wrap sp-reveal-item">
              
              <!-- Timeline Track Line (Connected horizontal bar) -->
              <div class="sp-timeline-track" aria-hidden="true">
                <div class="sp-timeline-progress-bar"></div>
              </div>

              <!-- 5 Process Steps Grid -->
              <div class="sp-process-steps-grid">
                
                <!-- Step 01 -->
                <div class="sp-process-step-item" data-step="1">
                  <div class="sp-step-node-wrap">
                    <div class="sp-step-circle">
                      <span class="sp-step-num">01</span>
                    </div>
                  </div>
                  <div class="sp-step-content-card">
                    <span class="sp-step-tag">STAGE 01</span>
                    <h3 class="sp-step-title">MATERIAL SELECTION</h3>
                    <p class="sp-step-desc">
                      Careful attention to incoming materials and product requirements.
                    </p>
                  </div>
                </div>

                <!-- Step 02 -->
                <div class="sp-process-step-item" data-step="2">
                  <div class="sp-step-node-wrap">
                    <div class="sp-step-circle">
                      <span class="sp-step-num">02</span>
                    </div>
                  </div>
                  <div class="sp-step-content-card">
                    <span class="sp-step-tag">STAGE 02</span>
                    <h3 class="sp-step-title">PROCESS CONTROL</h3>
                    <p class="sp-step-desc">
                      Quality-conscious control throughout relevant processing stages.
                    </p>
                  </div>
                </div>

                <!-- Step 03 -->
                <div class="sp-process-step-item" data-step="3">
                  <div class="sp-step-node-wrap">
                    <div class="sp-step-circle">
                      <span class="sp-step-num">03</span>
                    </div>
                  </div>
                  <div class="sp-step-content-card">
                    <span class="sp-step-tag">STAGE 03</span>
                    <h3 class="sp-step-title">TESTING & CHECKS</h3>
                    <p class="sp-step-desc">
                      Appropriate checks and testing based on product and process requirements.
                    </p>
                  </div>
                </div>

                <!-- Step 04 -->
                <div class="sp-process-step-item" data-step="4">
                  <div class="sp-step-node-wrap">
                    <div class="sp-step-circle">
                      <span class="sp-step-num">04</span>
                    </div>
                  </div>
                  <div class="sp-step-content-card">
                    <span class="sp-step-tag">STAGE 04</span>
                    <h3 class="sp-step-title">PACKAGING & INSPECTION</h3>
                    <p class="sp-step-desc">
                      Attention to packaging, presentation and product integrity.
                    </p>
                  </div>
                </div>

                <!-- Step 05 -->
                <div class="sp-process-step-item" data-step="5">
                  <div class="sp-step-node-wrap">
                    <div class="sp-step-circle">
                      <span class="sp-step-num">05</span>
                    </div>
                  </div>
                  <div class="sp-step-content-card">
                    <span class="sp-step-tag">STAGE 05</span>
                    <h3 class="sp-step-title">FINAL VERIFICATION</h3>
                    <p class="sp-step-desc">
                      Final quality-focused review before the product moves forward.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Supporting Quality Assurance Team Banner -->
            <div class="sp-process-team-strip sp-reveal-item">
              <div class="sp-team-strip-grid">
                <div class="sp-team-strip-photo">
                  <img 
                    src="${docTeamImg}" 
                    alt="Indian pharmaceutical quality assurance team reviewing documentation and compliance records" 
                    class="sp-strip-img"
                    loading="lazy"
                    width="420"
                    height="260"
                  />
                </div>
                <div class="sp-team-strip-text">
                  <span class="sp-strip-badge">DOCUMENTATION & REVIEWS</span>
                  <h4 class="sp-strip-title">Disciplined Verification at Every Step</h4>
                  <p class="sp-strip-desc">
                    Every batch journey is supported by standard operating procedures, disciplined documentation checks, and clear cross-functional review before formulations reach healthcare providers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        <!-- ================================================================
             SECTION 4: QUALITY, PRODUCTS & CONTINUOUS IMPROVEMENT (SOLID LIGHT MINT #EBF5EE)
             ================================================================ -->
        <section class="sp-quality-products-section" id="quality-products" aria-labelledby="qualityProductsHeading">
          <div class="sp-quality-container">
            
            <!-- Centered Header -->
            <div class="sp-quality-section-header sp-quality-header-light sp-reveal-item">
              <div class="sp-quality-eyebrow-wrap">
                <span class="sp-quality-eyebrow-line" aria-hidden="true"></span>
                <span class="sp-quality-eyebrow">QUALITY & PRODUCTS</span>
                <span class="sp-quality-eyebrow-line" aria-hidden="true"></span>
              </div>
              
              <h2 class="sp-quality-portfolio-title" id="qualityProductsHeading">
                A QUALITY-FOCUSED<br/>
                APPROACH TO OUR PORTFOLIO.
              </h2>
              
              <p class="sp-quality-portfolio-desc">
                Connecting our structured quality methodology to the real formulations delivering clinical value every day across Indian healthcare settings.
              </p>
            </div>

            <!-- Premium Split Layout: Image Composition vs 3 Strong Content Blocks -->
            <div class="sp-quality-portfolio-split">
              
              <!-- Left: Image Collage of Packaging Inspection & Collaboration -->
              <div class="sp-portfolio-visual-col sp-reveal-item">
                <div class="sp-portfolio-collage">
                  
                  <div class="sp-qcollage-main-frame">
                    <img 
                      src="${packagingImg}" 
                      alt="Indian pharmaceutical quality inspector inspecting finished vials and blister packaging on light table" 
                      class="sp-qcollage-main-img"
                      loading="lazy"
                      width="540"
                      height="405"
                    />
                    <div class="sp-collage-tag-pill">PACKAGING & INTEGRITY INSPECTION</div>
                  </div>

                  <div class="sp-qcollage-inset-frame">
                    <img 
                      src="${teamCollabImg}" 
                      alt="Pharmaceutical professionals conducting quality review and process documentation" 
                      class="sp-qcollage-inset-img"
                      loading="lazy"
                      width="260"
                      height="200"
                    />
                  </div>

                </div>
              </div>

              <!-- Right: 3 Strong Content Blocks + Navigation CTA -->
              <div class="sp-portfolio-content-col">
                
                <!-- Block 01 -->
                <div class="sp-portfolio-block sp-reveal-item">
                  <div class="sp-pblock-header">
                    <span class="sp-pblock-num">01</span>
                    <h3 class="sp-pblock-title">PRODUCT FOCUS</h3>
                  </div>
                  <p class="sp-pblock-text">
                    Our portfolio is built around focused pharmaceutical solutions and evolving healthcare needs.
                  </p>
                </div>

                <!-- Block 02 -->
                <div class="sp-portfolio-block sp-reveal-item">
                  <div class="sp-pblock-header">
                    <span class="sp-pblock-num">02</span>
                    <h3 class="sp-pblock-title">PROCESS DISCIPLINE</h3>
                  </div>
                  <p class="sp-pblock-text">
                    Quality-conscious thinking remains important across the product journey.
                  </p>
                </div>

                <!-- Block 03 -->
                <div class="sp-portfolio-block sp-reveal-item">
                  <div class="sp-pblock-header">
                    <span class="sp-pblock-num">03</span>
                    <h3 class="sp-pblock-title">CONTINUOUS IMPROVEMENT</h3>
                  </div>
                  <p class="sp-pblock-text">
                    We continue to refine our approach with attention to consistency, responsibility and long-term trust.
                  </p>
                </div>

                <!-- CTA Button to Products Page -->
                <div class="sp-portfolio-action-row sp-reveal-item">
                  <a href="/products" class="sp-quality-btn sp-quality-btn-navy" id="portfolioExploreProductsBtn">
                    <span>EXPLORE OUR PRODUCTS</span>
                    <span class="sp-btn-arrow" aria-hidden="true">→</span>
                  </a>
                </div>

              </div>
            </div>

            <!-- Authentic Product Portfolio Showcase Strip (Connected directly to Suyash Products data) -->
            <div class="sp-quality-showcase-area sp-reveal-item">
              <div class="sp-showcase-bar">
                <div class="sp-showcase-bar-text">
                  <span class="sp-showcase-subtitle">GENUINE SUYASH PHARMA PORTFOLIO</span>
                  <h3 class="sp-showcase-title">Representative Formulations From Our Catalogue</h3>
                </div>
                <a href="/products" class="sp-showcase-link">
                  <span>View All 13 Products</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <div class="sp-quality-product-cards-grid">
                ${featuredPortfolio.map(p => `
                  <article class="sp-quality-product-card" data-slug="${p.slug}">
                    <div class="sp-qprod-img-box">
                      <img 
                        src="${p.image}" 
                        alt="${p.name} packaging carton" 
                        class="sp-qprod-img" 
                        loading="lazy"
                        width="240"
                        height="200"
                      />
                      <span class="sp-qprod-segment-tag">${p.therapeuticSegment}</span>
                    </div>

                    <div class="sp-qprod-content">
                      <h4 class="sp-qprod-name">${formatBrandName(p.name)}</h4>
                      <p class="sp-qprod-generic">${p.generic}</p>
                      
                      <div class="sp-qprod-meta">
                        <span class="sp-qprod-form">${p.dosageForm}</span>
                        <span class="sp-qprod-strength">${p.strength}</span>
                      </div>

                      <a href="/products/${p.slug}" class="sp-qprod-action-btn" aria-label="View specifications for ${p.name}">
                        <span>Product Details</span>
                        <span class="sp-btn-arrow" aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                `).join('')}
              </div>
            </div>

          </div>
        </section>

      </main>

      <!-- Reused Final CTA + Corporate Footer + Persistent Floating Contact Utilities -->
      ${renderFooter()}
    </div>
  `;
}

/**
 * Initializes interactive features on the Quality page:
 * - IntersectionObserver scroll entrance animations
 * - Staggered reveal for timeline steps and principles
 * - Internal anchor smooth scrolling with sticky navbar offset
 * - Reused Navbar and Footer interactive handlers
 */
export function initQualityPage(router) {
  // 1. Initialize Navbar and Footer handlers
  initNavbarEvents();
  initFooter();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.sp-quality-page-wrapper .sp-reveal-item');

  // 2. Scroll-triggered entrance animations
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view');
            
            // If it's the timeline wrapper, trigger progressive node reveal
            if (entry.target.classList.contains('sp-process-timeline-wrap')) {
              const steps = entry.target.querySelectorAll('.sp-process-step-item');
              steps.forEach((step, idx) => {
                setTimeout(() => {
                  step.classList.add('step-revealed');
                }, idx * 160);
              });
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-in-view'));
    const steps = document.querySelectorAll('.sp-process-step-item');
    steps.forEach((step) => step.classList.add('step-revealed'));
  }

  // 3. Smooth internal scrolling on buttons with offset for sticky navbar
  const internalLinks = document.querySelectorAll('.sp-quality-page-wrapper a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // If it's a page route like #/ or #/products, let router handle it
      if (href && (href.startsWith('#/') || href.includes('/'))) {
        return;
      }

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
