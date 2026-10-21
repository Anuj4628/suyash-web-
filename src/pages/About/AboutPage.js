/**
 * Suyash Pharma - Dedicated "About Suyash Pharma" Page
 * 
 * Flow of Alternating Solid Backgrounds:
 * - SECTION 01: ABOUT HERO (Solid Deep Green #1B6A3E)
 * - SECTION 02: OUR MISSION & VISION (Solid Deep Green #1B6A3E - Inspired by Reference Screenshot 1)
 * - SECTION 03: WHO WE ARE / OUR STORY (Solid Deep Green #1B6A3E)
 * - SECTION 04: OUR CORE VALUES (Solid Light Mint #EBF5EE)
 * - SECTION 05: HOW WE WORK / OUR APPROACH (Solid Light Mint #EBF5EE)
 * - SECTION 06: Reused Final CTA & Corporate Footer (Deep Navy) with Persistent WhatsApp & Phone
 * 
 * Visual Standards:
 * - Authentic Indian pharmaceutical corporate photography
 * - Strict color discipline (Deep green, light mint, deep navy, white)
 * - Strictly zero gradients, no neon green, no glow, no glassmorphism
 * - Perfect vertical typography hierarchy and balanced grid alignment
 */

import { renderNavbar, initNavbarEvents } from '../../components/Navbar/Navbar.js';
import { renderFooter, initFooter } from '../../components/Footer/Footer.js';

import aboutHeroImg from '../../assets/images/about/about-hero-scientist.jpg';
import aboutVisionImg from '../../assets/images/about/about-vision-quality.jpg';
import aboutTeamImg from '../../assets/images/about/about-team-collaboration.jpg';
import aboutPackagingImg from '../../assets/images/about/about-packaging-inspection.jpg';
import aboutColleaguesImg from '../../assets/images/about/about-research-colleagues.jpg';

import './AboutPage.css';

export function renderAboutPage() {
  return `
    <div class="sp-about-page-wrapper">
      <!-- 1. Corporate Sticky Navbar (About Active) -->
      ${renderNavbar('about')}

      <main class="sp-about-main-content">
        <!-- ================================================================
             SECTION 01: ABOUT HERO (SOLID DEEP GREEN #1B6A3E)
             ================================================================ -->
        <section class="sp-about-hero-section" id="about-hero" aria-labelledby="aboutHeroHeading">
          <div class="sp-about-watermark" aria-hidden="true">ABOUT</div>

          <div class="sp-about-hero-container">
            <div class="sp-about-hero-grid">
              
              <!-- Left Content Column -->
              <div class="sp-about-hero-content sp-reveal-item is-in-view">
                <div class="sp-about-badge-row">
                  <span class="sp-about-hero-marker">01 / ABOUT</span>
                  <span class="sp-about-hero-eyebrow">ABOUT SUYASH PHARMA</span>
                </div>

                <h1 class="sp-about-hero-title" id="aboutHeroHeading">
                  DRIVEN BY PURPOSE.<br/>
                  FOCUSED ON<br/>
                  BETTER HEALTHCARE.
                </h1>

                <p class="sp-about-hero-desc">
                  Suyash Pharma is focused on delivering quality pharmaceutical solutions with reliability, responsibility and a commitment to the evolving needs of healthcare.
                </p>

                <div class="sp-about-hero-actions">
                  <a href="#how-we-work" class="sp-about-btn sp-about-btn-white" id="aboutHeroDiscoverBtn">
                    <span>DISCOVER OUR APPROACH</span>
                    <span class="sp-btn-arrow" aria-hidden="true">→</span>
                  </a>
                  <a href="#/products" class="sp-about-btn sp-about-btn-outline" id="aboutHeroProductsBtn">
                    <span>VIEW OUR PRODUCTS</span>
                    <span class="sp-btn-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <!-- Right Visual Column: Realistic Indian Pharma Scientist Photo -->
              <div class="sp-about-hero-visual sp-reveal-item is-in-view">
                <div class="sp-about-hero-image-wrapper">
                  <div class="sp-about-hero-offset-bg" aria-hidden="true"></div>
                  
                  <div class="sp-about-hero-img-box">
                    <img 
                      src="${aboutHeroImg}" 
                      alt="Suyash Pharma pharmaceutical scientist working in a modern quality-control laboratory in India" 
                      class="sp-about-hero-img"
                      loading="eager"
                      width="600"
                      height="480"
                    />
                  </div>

                  <div class="sp-about-hero-badge">
                    <span class="sp-badge-tag">CLINICAL EXCELLENCE</span>
                    <span class="sp-badge-title">Indian Pharmaceutical Quality</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ================================================================
             SECTION 02: OUR MISSION & VISION (SOLID DEEP GREEN #1B6A3E)
             Inspired by Reference Screenshot 1: Large Centered Header + 2 Equal Cards
             ================================================================ -->
        <section class="sp-about-mv-section" id="mission-vision" aria-labelledby="missionVisionHeading">
          <div class="sp-about-mv-container">
            
            <!-- Section Header -->
            <header class="sp-about-section-header sp-about-header-dark sp-reveal-item">
              <div class="sp-about-eyebrow-wrap">
                <span class="sp-about-eyebrow-line" aria-hidden="true"></span>
                <span class="sp-about-eyebrow">OUR PURPOSE</span>
                <span class="sp-about-eyebrow-line" aria-hidden="true"></span>
              </div>
              
              <h2 class="sp-about-mv-title" id="missionVisionHeading">
                OUR MISSION & VISION
              </h2>

              <p class="sp-about-mv-desc">
                Guided by quality, responsibility and a focused approach to healthcare, we are committed to building dependable pharmaceutical solutions and meaningful long-term partnerships.
              </p>
            </header>

            <!-- Two Large Coordinated Premium Cards -->
            <div class="sp-about-mv-cards-grid">
              
              <!-- CARD 01: OUR MISSION -->
              <article class="sp-mv-card sp-reveal-item" aria-labelledby="cardMissionTitle">
                <div class="sp-mv-card-top-bar">
                  <span class="sp-mv-card-num">01</span>
                  <span class="sp-mv-card-tag">OUR MISSION</span>
                </div>

                <h3 class="sp-mv-card-title" id="cardMissionTitle">
                  OUR MISSION
                </h3>

                <p class="sp-mv-card-paragraph">
                  Our mission is to build a focused pharmaceutical portfolio through quality-conscious processes, responsible practices and dependable partnerships that contribute to better healthcare.
                </p>

                <div class="sp-mv-card-divider" aria-hidden="true"></div>

                <div class="sp-mv-points-list">
                  <div class="sp-mv-point-item">
                    <span class="sp-mv-point-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 10 8 14 16 6"></polyline>
                      </svg>
                    </span>
                    <span class="sp-mv-point-text">01 QUALITY-FOCUSED APPROACH</span>
                  </div>

                  <div class="sp-mv-point-item">
                    <span class="sp-mv-point-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 10 8 14 16 6"></polyline>
                      </svg>
                    </span>
                    <span class="sp-mv-point-text">02 RESPONSIBLE PRACTICES</span>
                  </div>

                  <div class="sp-mv-point-item">
                    <span class="sp-mv-point-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 10 8 14 16 6"></polyline>
                      </svg>
                    </span>
                    <span class="sp-mv-point-text">03 DEPENDABLE SOLUTIONS</span>
                  </div>

                  <div class="sp-mv-point-item">
                    <span class="sp-mv-point-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 10 8 14 16 6"></polyline>
                      </svg>
                    </span>
                    <span class="sp-mv-point-text">04 LONG-TERM PARTNERSHIPS</span>
                  </div>
                </div>
              </article>

              <!-- CARD 02: OUR VISION -->
              <article class="sp-mv-card sp-reveal-item" aria-labelledby="cardVisionTitle">
                <div class="sp-mv-card-top-bar">
                  <span class="sp-mv-card-num">02</span>
                  <span class="sp-mv-card-tag">OUR VISION</span>
                </div>

                <h3 class="sp-mv-card-title" id="cardVisionTitle">
                  OUR VISION
                </h3>

                <p class="sp-mv-card-paragraph">
                  Our vision is to grow Suyash Pharma as a trusted pharmaceutical partner by responding responsibly to evolving healthcare needs and building long-term relationships across the healthcare ecosystem.
                </p>

                <div class="sp-mv-card-divider" aria-hidden="true"></div>

                <div class="sp-mv-points-list">
                  <div class="sp-mv-point-item">
                    <span class="sp-mv-point-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 10 8 14 16 6"></polyline>
                      </svg>
                    </span>
                    <span class="sp-mv-point-text">01 TRUSTED HEALTHCARE PARTNER</span>
                  </div>

                  <div class="sp-mv-point-item">
                    <span class="sp-mv-point-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 10 8 14 16 6"></polyline>
                      </svg>
                    </span>
                    <span class="sp-mv-point-text">02 FOCUSED PHARMACEUTICAL GROWTH</span>
                  </div>

                  <div class="sp-mv-point-item">
                    <span class="sp-mv-point-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 10 8 14 16 6"></polyline>
                      </svg>
                    </span>
                    <span class="sp-mv-point-text">03 RESPONSIBLE DEVELOPMENT</span>
                  </div>

                  <div class="sp-mv-point-item">
                    <span class="sp-mv-point-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 10 8 14 16 6"></polyline>
                      </svg>
                    </span>
                    <span class="sp-mv-point-text">04 STRONGER HEALTHCARE RELATIONSHIPS</span>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        <!-- ================================================================
             SECTION 03: WHO WE ARE (SOLID DEEP GREEN #1B6A3E)
             ================================================================ -->
        <section class="sp-about-story-section" id="who-we-are" aria-labelledby="whoWeAreHeading">
          <div class="sp-about-story-container">
            <div class="sp-about-story-grid">

              <!-- Left Column: Editorial 4-Image Collage -->
              <div class="sp-about-collage-wrap sp-reveal-item" aria-label="Suyash Pharma photographic editorial collage">
                <!-- Main Image: Indian Pharma Team Collaboration -->
                <div class="sp-collage-main">
                  <img 
                    src="${aboutTeamImg}" 
                    alt="Indian pharmaceutical leadership team in collaborative discussion" 
                    class="sp-collage-main-img"
                    loading="lazy"
                    width="440"
                    height="320"
                  />
                </div>

                <!-- Secondary Image: Quality Control Inspection -->
                <div class="sp-collage-secondary">
                  <img 
                    src="${aboutVisionImg}" 
                    alt="Indian pharmaceutical scientist inspecting formulation vials" 
                    class="sp-collage-secondary-img"
                    loading="lazy"
                    width="260"
                    height="200"
                  />
                </div>

                <!-- Tertiary Image: Pharmaceutical Packaging Facility -->
                <div class="sp-collage-tertiary">
                  <img 
                    src="${aboutPackagingImg}" 
                    alt="Pharmaceutical packaging and quality-control inspection station" 
                    class="sp-collage-tertiary-img"
                    loading="lazy"
                    width="220"
                    height="180"
                  />
                </div>

                <!-- Quarter Image: Research Discussion -->
                <div class="sp-collage-quarter">
                  <img 
                    src="${aboutColleaguesImg}" 
                    alt="Indian pharmaceutical research scientists reviewing documentation" 
                    class="sp-collage-quarter-img"
                    loading="lazy"
                    width="220"
                    height="170"
                  />
                </div>
              </div>

              <!-- Right Content Column -->
              <div class="sp-about-story-content sp-reveal-item">
                <span class="sp-about-story-eyebrow">WHO WE ARE</span>

                <h2 class="sp-about-story-title" id="whoWeAreHeading">
                  FOCUSED ON QUALITY.<br/>
                  BUILT AROUND<br/>
                  HEALTHCARE NEEDS.
                </h2>

                <p class="sp-about-story-p">
                  Suyash Pharma is focused on building a dependable pharmaceutical portfolio around quality, consistency and the evolving needs of healthcare.
                </p>

                <p class="sp-about-story-p">
                  Our approach brings together a focused product portfolio, quality-conscious processes and long-term relationships with the healthcare ecosystem.
                </p>

                <!-- 3 Consistent Highlight Labels -->
                <div class="sp-about-highlights-row">
                  <span class="sp-highlight-pill">QUALITY FOCUSED</span>
                  <span class="sp-highlight-pill">HEALTHCARE DRIVEN</span>
                  <span class="sp-highlight-pill">RESPONSIBLE APPROACH</span>
                </div>

                <div class="sp-about-story-action">
                  <a href="#how-we-work" class="sp-about-btn sp-about-btn-white" id="whoWeAreApproachBtn">
                    <span>OUR APPROACH</span>
                    <span class="sp-btn-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ================================================================
             SECTION 04: OUR CORE VALUES (SOLID LIGHT GREEN / SOFT MINT #EBF5EE)
             ================================================================ -->
        <section class="sp-about-values-section" id="core-values" aria-labelledby="coreValuesHeading">
          <div class="sp-about-values-container">
            
            <!-- Section Header -->
            <header class="sp-about-section-header sp-about-header-light sp-reveal-item">
              <div class="sp-about-eyebrow-wrap">
                <span class="sp-about-eyebrow-line" aria-hidden="true"></span>
                <span class="sp-about-eyebrow">OUR CORE VALUES</span>
                <span class="sp-about-eyebrow-line" aria-hidden="true"></span>
              </div>

              <h2 class="sp-about-values-title" id="coreValuesHeading">
                WHAT GUIDES<br/>
                THE WAY WE WORK.
              </h2>

              <p class="sp-about-values-intro">
                Our values shape how we approach products, partnerships and every responsibility we take within the healthcare ecosystem.
              </p>
            </header>

            <!-- 5 Core Values Cards (Desktop: Row 1 = 3 cards, Row 2 = 2 centered cards) -->
            <div class="sp-about-values-grid">
              
              <!-- Value 01 -->
              <article class="sp-value-card sp-reveal-item" aria-labelledby="valTitle01">
                <div class="sp-value-card-top">
                  <span class="sp-value-num">01</span>
                  <span class="sp-value-tag">STANDARD</span>
                </div>
                <h3 class="sp-value-title" id="valTitle01">QUALITY</h3>
                <p class="sp-value-desc">
                  Maintaining an uncompromising focus on quality, purity, and clinical standards across all formulations.
                </p>
              </article>

              <!-- Value 02 -->
              <article class="sp-value-card sp-reveal-item" aria-labelledby="valTitle02">
                <div class="sp-value-card-top">
                  <span class="sp-value-num">02</span>
                  <span class="sp-value-tag">ETHICS</span>
                </div>
                <h3 class="sp-value-title" id="valTitle02">INTEGRITY</h3>
                <p class="sp-value-desc">
                  Building trust through responsible, transparent, and ethical corporate practices across every engagement.
                </p>
              </article>

              <!-- Value 03 -->
              <article class="sp-value-card sp-reveal-item" aria-labelledby="valTitle03">
                <div class="sp-value-card-top">
                  <span class="sp-value-num">03</span>
                  <span class="sp-value-tag">TRUST</span>
                </div>
                <h3 class="sp-value-title" id="valTitle03">RELIABILITY</h3>
                <p class="sp-value-desc">
                  Ensuring dependable therapeutic availability, consistent supply execution, and steadfast product stability.
                </p>
              </article>

              <!-- Value 04 -->
              <article class="sp-value-card sp-value-card-row2 sp-reveal-item" aria-labelledby="valTitle04">
                <div class="sp-value-card-top">
                  <span class="sp-value-num">04</span>
                  <span class="sp-value-tag">CARE</span>
                </div>
                <h3 class="sp-value-title" id="valTitle04">RESPONSIBILITY</h3>
                <p class="sp-value-desc">
                  Approaching healthcare with care, discipline, and a deep commitment to patient safety and well-being.
                </p>
              </article>

              <!-- Value 05 -->
              <article class="sp-value-card sp-value-card-row2 sp-reveal-item" aria-labelledby="valTitle05">
                <div class="sp-value-card-top">
                  <span class="sp-value-num">05</span>
                  <span class="sp-value-tag">GROWTH</span>
                </div>
                <h3 class="sp-value-title" id="valTitle05">CONTINUOUS IMPROVEMENT</h3>
                <p class="sp-value-desc">
                  Constantly refining our processes, expanding therapeutic expertise, and adapting to healthcare needs.
                </p>
              </article>

            </div>

          </div>
        </section>

        <!-- ================================================================
             SECTION 05: HOW WE WORK / OUR APPROACH (SOLID LIGHT GREEN #EBF5EE)
             ================================================================ -->
        <section class="sp-about-approach-section" id="how-we-work" aria-labelledby="howWeWorkHeading">
          <div class="sp-about-approach-container">
            
            <header class="sp-about-section-header sp-about-header-light sp-reveal-item">
              <div class="sp-about-eyebrow-wrap">
                <span class="sp-about-eyebrow-line" aria-hidden="true"></span>
                <span class="sp-about-eyebrow">HOW WE WORK</span>
                <span class="sp-about-eyebrow-line" aria-hidden="true"></span>
              </div>

              <h2 class="sp-about-approach-title" id="howWeWorkHeading">
                OUR APPROACH
              </h2>

              <p class="sp-about-approach-desc">
                From understanding healthcare needs to building dependable partnerships, our approach is focused, responsible and quality-conscious.
              </p>
            </header>

            <!-- 4-Step Process Connected Timeline -->
            <div class="sp-approach-timeline-wrap sp-reveal-item">
              <div class="sp-approach-timeline-track" aria-hidden="true"></div>

              <div class="sp-approach-timeline-grid">
                
                <!-- Step 01 -->
                <div class="sp-approach-step-col">
                  <div class="sp-approach-circle-box">
                    <span class="sp-approach-circle">01</span>
                  </div>
                  <h3 class="sp-approach-step-title">UNDERSTAND</h3>
                  <p class="sp-approach-step-desc">
                    Understanding healthcare and portfolio requirements.
                  </p>
                </div>

                <!-- Step 02 -->
                <div class="sp-approach-step-col">
                  <div class="sp-approach-circle-box">
                    <span class="sp-approach-circle">02</span>
                  </div>
                  <h3 class="sp-approach-step-title">FOCUS</h3>
                  <p class="sp-approach-step-desc">
                    Building a focused product and therapeutic portfolio.
                  </p>
                </div>

                <!-- Step 03 -->
                <div class="sp-approach-step-col">
                  <div class="sp-approach-circle-box">
                    <span class="sp-approach-circle">03</span>
                  </div>
                  <h3 class="sp-approach-step-title">DELIVER</h3>
                  <p class="sp-approach-step-desc">
                    Maintaining a quality-conscious and responsible approach.
                  </p>
                </div>

                <!-- Step 04 -->
                <div class="sp-approach-step-col">
                  <div class="sp-approach-circle-box">
                    <span class="sp-approach-circle">04</span>
                  </div>
                  <h3 class="sp-approach-step-title">BUILD TRUST</h3>
                  <p class="sp-approach-step-desc">
                    Creating dependable long-term relationships.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

      <!-- SECTION 06: Reused CTA + Corporate Footer + Floating WhatsApp & Phone Contact System -->
      ${renderFooter()}
    </div>
  `;
}

/**
 * Initializes interactive features for the dedicated About page:
 * - IntersectionObserver entrance reveals
 * - Smooth scroll anchor navigation for buttons and internal links
 * - Reused Navbar and Footer events
 */
export function initAboutPage(router) {
  // 1. Initialize Navbar and Footer handlers
  initNavbarEvents();
  initFooter();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.sp-about-page-wrapper .sp-reveal-item');

  // 2. Scroll-triggered entrance animations
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

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-in-view'));
  }

  // 3. Smooth internal scrolling on buttons with offset for sticky navbar
  const internalLinks = document.querySelectorAll('.sp-about-page-wrapper a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // If it's a page route like #/ or #/products, let router handle it
      if (href && href.startsWith('#/')) {
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
