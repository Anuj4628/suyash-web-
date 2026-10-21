/**
 * Suyash Pharma - Premium International Pharmaceutical Hero
 * Exactly matching the reference composition, balance, typography hierarchy,
 * diagonal split, clinical laboratory environment, and real product showcase.
 * 
 * Autoplay plays continuously (never pauses on cursor hover).
 */

import gsap from 'gsap';
import { heroSlides } from '../../data/heroSlides.js';
import showcaseBackdropImg from '../../assets/images/hero/product-showcase-backdrop.jpg';
import './Hero.css';

function getMetricIcon(iconType) {
  if (iconType === 'pill') {
    return `
      <svg class="sp-metric-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#228B22" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
        <path d="m8.5 8.5 7 7"/>
      </svg>
    `;
  }
  if (iconType === 'shield') {
    return `
      <svg class="sp-metric-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#228B22" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    `;
  }
  if (iconType === 'syringe') {
    return `
      <svg class="sp-metric-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#228B22" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m18 2 4 4"/>
        <path d="m17 7 3-3"/>
        <path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L13.9 3.9"/>
        <path d="m18 6-9.5 9.5"/>
        <path d="m5 19-3 3"/>
      </svg>
    `;
  }
  return '';
}

export function renderHero() {
  const slidesHtml = heroSlides.map((slide, index) => {
    const isActive = index === 0;
    const isPortfolioSlide = Boolean(slide.isShowcase || slide.portfolioSpecs);

    let extraLeftContent = '';
    if (slide.portfolioSpecs) {
      extraLeftContent = `
        <div class="sp-portfolio-metrics-row">
          ${slide.portfolioSpecs.map((spec, sIdx) => `
            <div class="sp-portfolio-metric-col">
              <div class="sp-metric-icon-wrap">
                ${getMetricIcon(spec.icon)}
              </div>
              <div class="sp-metric-text-wrap">
                <div class="sp-metric-header">
                  <span class="sp-metric-num">${spec.num}</span>
                  ${spec.label ? `<span class="sp-metric-label">${spec.label}</span>` : ''}
                </div>
                <div class="sp-metric-detail">${spec.detail}</div>
              </div>
            </div>
            ${sIdx < slide.portfolioSpecs.length - 1 ? '<div class="sp-metric-divider" aria-hidden="true"></div>' : ''}
          `).join('')}
        </div>
      `;
    } else if (slide.keywords) {
      extraLeftContent = `
        <div class="sp-keywords-row">
          ${slide.keywords.map(kw => `
            <span class="sp-keyword-pill">${kw}</span>
          `).join('')}
        </div>
      `;
    }

    return `
      <article 
        class="sp-editorial-slide ${isActive ? 'is-active' : ''} ${isPortfolioSlide ? 'is-portfolio-slide' : ''}" 
        data-slide-index="${index}" 
        id="heroSlide${index + 1}"
        role="tabpanel"
        aria-roledescription="slide"
        aria-label="${index + 1} of ${heroSlides.length}: ${slide.caption}"
        aria-hidden="${!isActive}"
      >
        <!-- RIGHT ZONE: Clinical Product Showcase / Editorial Visual Area -->
        <div class="sp-right-stage">
          ${isPortfolioSlide ? `
            <!-- Clinical Laboratory Countertop Environment with Natural Lighting -->
            <div class="sp-showcase-env">
              <img 
                src="${showcaseBackdropImg}" 
                alt="" 
                class="sp-showcase-backdrop-photo" 
                aria-hidden="true" 
                loading="eager"
                width="1920"
                height="1080"
              />

              <!-- Subtle Suyash Leaf Watermark in Far Background -->
              <div class="sp-watermark-leaf sp-watermark-leaf-right" aria-hidden="true">
                <svg viewBox="0 0 100 100" fill="none">
                  <path d="M50 10C34 26 26 44 28 66c2 18 14 30 22 32 8-2 20-14 22-32 2-22-6-40-22-56z" fill="#228B22" opacity="0.12"/>
                  <path d="M50 16c-12 14-18 29-16 47 2 15 11 25 16 27 5-2 14-12 16-27 2-18-4-33-16-47z" fill="#0B2B5C" opacity="0.08"/>
                </svg>
              </div>

              <!-- Real Suyash Pharma Product Boxes Composition on Countertop -->
              <div class="sp-showcase-products-wrap">
                <img 
                  src="${slide.image}" 
                  alt="${slide.imageAlt}" 
                  class="sp-showcase-products-img" 
                  loading="eager" 
                  width="1024" 
                  height="903" 
                />
              </div>
            </div>
          ` : `
            <!-- Editorial Photography for Other Slides -->
            <div class="sp-photo-env">
              <img 
                src="${slide.image}" 
                alt="${slide.imageAlt}" 
                class="sp-slide-editorial-photo" 
                loading="${index === 0 ? 'eager' : 'lazy'}" 
                width="1200" 
                height="800" 
              />
            </div>
          `}
        </div>

        <!-- LEFT ZONE: Deep Navy Branded Content Area with Slanted Edge -->
        <div class="sp-left-stage">
          <!-- Subtle Low-Contrast Technical Grid -->
          <div class="sp-navy-grid-pattern" aria-hidden="true"></div>

          <!-- Subtle Brand Watermark Leaf on Navy -->
          <div class="sp-watermark-leaf sp-watermark-leaf-left" aria-hidden="true">
            <svg viewBox="0 0 100 100" fill="none">
              <path d="M50 10C34 26 26 44 28 66c2 18 14 30 22 32 8-2 20-14 22-32 2-22-6-40-22-56z" fill="#228B22" opacity="0.08"/>
              <path d="M50 16c-12 14-18 29-16 47 2 15 11 25 16 27 5-2 14-12 16-27 2-18-4-33-16-47z" fill="#FFFFFF" opacity="0.04"/>
            </svg>
          </div>

          <!-- ONE SINGLE CONSISTENT CONTENT CONTAINER (Aligned to the same vertical starting line) -->
          <div class="sp-left-content-inner">
            <!-- 1. Eyebrow -->
            <div class="sp-hero-eyebrow">
              <span class="sp-eyebrow-dash" aria-hidden="true"></span>
              <span>${slide.eyebrow}</span>
            </div>

            <!-- 2. Large Editorial Headline -->
            <h1 class="sp-editorial-headline">
              ${slide.headline.map(item => `
                <span class="sp-headline-mask">
                  <span class="sp-headline-inner ${item.highlight ? 'sp-word-highlight' : ''}">
                    ${item.text}
                  </span>
                </span>
              `).join('')}
            </h1>

            <!-- 3. Supporting Paragraph -->
            <p class="sp-hero-desc">
              ${slide.supportingText}
            </p>

            <!-- 4. CTA Button (Compact Solid Suyash Green) -->
            <div class="sp-hero-actions">
              <a href="${slide.primaryCta.href}" class="sp-btn-hero sp-btn-hero-primary">
                <span>${slide.primaryCta.label}</span>
                <svg class="sp-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>

              ${slide.secondaryCta ? `
                <a href="${slide.secondaryCta.href}" class="sp-btn-hero sp-btn-hero-secondary">
                  <span>${slide.secondaryCta.label}</span>
                  <svg class="sp-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              ` : ''}
            </div>

            <!-- 5. Portfolio Metrics (Aligned with vertical line dividers) -->
            ${extraLeftContent}

            <!-- 6. Slider Navigation (01 02 03 04 ━━━━ ALIGNED IN THE SAME CONTAINER) -->
            <div class="sp-slider-nav-aligned">
              <ul class="sp-nav-steps" role="tablist">
                <li><button type="button" class="sp-step-btn ${index === 0 ? 'is-active' : ''}" data-slide-target="0" aria-label="Go to Slide 01">01</button></li>
                <li><button type="button" class="sp-step-btn ${index === 1 ? 'is-active' : ''}" data-slide-target="1" aria-label="Go to Slide 02">02</button></li>
                <li><button type="button" class="sp-step-btn ${index === 2 ? 'is-active' : ''}" data-slide-target="2" aria-label="Go to Slide 03">03</button></li>
                <li><button type="button" class="sp-step-btn ${index === 3 ? 'is-active' : ''}" data-slide-target="3" aria-label="Go to Slide 04">04</button></li>
              </ul>
              <div class="sp-nav-progress-rail" aria-hidden="true">
                <div class="sp-nav-progress-indicator" id="heroProgressFill${index}"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- MATHEMATICAL SOLID GREEN DIAGONAL DIVIDER LINE -->
        <svg class="sp-hero-diagonal-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="58" y1="0" x2="48" y2="100" stroke="#228B22" stroke-width="2.6" vector-effect="non-scaling-stroke" />
        </svg>
      </article>
    `;
  }).join('');

  return `
    <section 
      class="sp-hero-editorial" 
      id="home" 
      aria-roledescription="carousel" 
      aria-label="Suyash Pharma Corporate Identity"
    >
      <!-- Slides Collection -->
      <div class="sp-hero-track">
        ${slidesHtml}
      </div>

      <!-- Minimal Arrow Controls (Positioned at bottom-right of hero away from products) -->
      <div class="sp-hero-arrows">
        <button type="button" class="sp-arrow-nav-btn" id="heroPrevBtn" aria-label="Previous slide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button type="button" class="sp-arrow-nav-btn" id="heroNextBtn" aria-label="Next slide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>
  `;
}

export function initHeroCarousel() {
  const slides = document.querySelectorAll('.sp-editorial-slide');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');

  if (!slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  const AUTOPLAY_DURATION = 6.0;
  let progressTween = null;
  let isTransitioning = false;
  let activeInTl = null;
  let activeOutTl = null;

  function animateSlideIn(index) {
    const slide = slides[index];
    const eyebrow = slide.querySelector('.sp-hero-eyebrow');
    const headlineInners = slide.querySelectorAll('.sp-headline-inner');
    const desc = slide.querySelector('.sp-hero-desc');
    const actions = slide.querySelector('.sp-hero-actions');
    const extraInfo = slide.querySelector('.sp-portfolio-metrics-row, .sp-keywords-row');
    const navRow = slide.querySelector('.sp-slider-nav-aligned');
    
    // Right side visual elements
    const rightStage = slide.querySelector('.sp-right-stage');
    const backdropPhoto = slide.querySelector('.sp-showcase-backdrop-photo, .sp-slide-editorial-photo');
    const showcaseProducts = slide.querySelector('.sp-showcase-products-img');

    if (activeInTl) {
      activeInTl.kill();
    }

    activeInTl = gsap.timeline({
      onComplete: () => {
        isTransitioning = false;
        startAutoplay();
      }
    });

    // 1. Eyebrow
    if (eyebrow) {
      activeInTl.fromTo(eyebrow, 
        { opacity: 0, x: -16 }, 
        { opacity: 1, x: 0, duration: 0.45, ease: 'power3.out' }, 
        0.05
      );
    }

    // 2. Headline line-by-line reveal
    if (headlineInners.length) {
      activeInTl.fromTo(headlineInners, 
        { yPercent: 110, opacity: 0 }, 
        { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.08, ease: 'power4.out' }, 
        0.1
      );
    }

    // 3. Supporting paragraph
    if (desc) {
      activeInTl.fromTo(desc, 
        { opacity: 0, y: 14 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 
        0.28
      );
    }

    // 4. CTA buttons
    if (actions) {
      activeInTl.fromTo(actions, 
        { opacity: 0, y: 12 }, 
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, 
        0.36
      );
    }

    // 5. Portfolio Metrics / Keywords
    if (extraInfo) {
      activeInTl.fromTo(extraInfo, 
        { opacity: 0, y: 12 }, 
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, 
        0.42
      );
    }

    // 6. Navigation Row
    if (navRow) {
      activeInTl.fromTo(navRow,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' },
        0.45
      );
    }

    // 7. Right side product showcase or editorial photo
    if (backdropPhoto) {
      activeInTl.fromTo(backdropPhoto,
        { scale: 1.04 },
        { scale: 1.0, duration: 1.4, ease: 'power2.out' },
        0.1
      );
    }

    if (showcaseProducts) {
      activeInTl.fromTo(showcaseProducts,
        { opacity: 0, y: 22, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1.0, duration: 0.8, ease: 'power3.out' },
        0.18
      );
    } else if (rightStage) {
      activeInTl.fromTo(rightStage,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' },
        0.15
      );
    }

    return activeInTl;
  }

  function goToSlide(targetIndex) {
    if (isTransitioning) return;
    if (targetIndex === currentIndex && slides[currentIndex].classList.contains('is-active')) {
      return;
    }

    isTransitioning = true;
    stopAutoplay();

    const normalizedIndex = (targetIndex + totalSlides) % totalSlides;
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[normalizedIndex];

    const currentHeadlineInners = currentSlide.querySelectorAll('.sp-headline-inner');
    const currentDesc = currentSlide.querySelector('.sp-hero-desc');
    const currentActions = currentSlide.querySelector('.sp-hero-actions');
    const currentShowcaseProducts = currentSlide.querySelector('.sp-showcase-products-img');
    const currentRight = currentSlide.querySelector('.sp-right-stage');

    if (activeOutTl) {
      activeOutTl.kill();
    }

    activeOutTl = gsap.timeline({
      onComplete: () => {
        currentSlide.classList.remove('is-active');
        currentSlide.setAttribute('aria-hidden', 'true');

        nextSlide.classList.add('is-active');
        nextSlide.setAttribute('aria-hidden', 'false');

        // Update step buttons across all slides to reflect active index
        document.querySelectorAll('.sp-step-btn').forEach((btn) => {
          const target = parseInt(btn.getAttribute('data-slide-target'), 10);
          btn.classList.toggle('is-active', target === normalizedIndex);
        });

        currentIndex = normalizedIndex;
        animateSlideIn(normalizedIndex);
      }
    });

    if (currentShowcaseProducts) {
      activeOutTl.to(currentShowcaseProducts, {
        opacity: 0,
        y: -10,
        duration: 0.22,
        ease: 'power2.in'
      }, 0);
    } else if (currentRight) {
      activeOutTl.to(currentRight, { opacity: 0, duration: 0.28, ease: 'power2.in' }, 0);
    }

    if (currentHeadlineInners.length) {
      activeOutTl.to(currentHeadlineInners, {
        yPercent: -75,
        opacity: 0,
        duration: 0.26,
        stagger: 0.04,
        ease: 'power3.in'
      }, 0);
    }

    if (currentDesc) {
      activeOutTl.to(currentDesc, { opacity: 0, y: -10, duration: 0.2 }, 0);
    }

    if (currentActions) {
      activeOutTl.to(currentActions, { opacity: 0, y: -8, duration: 0.2 }, 0);
    }
  }

  // Exactly ONE Autoplay Timer - Runs continuously, NEVER paused by cursor
  function startAutoplay() {
    stopAutoplay();

    const activeProgress = document.getElementById(`heroProgressFill${currentIndex}`);
    if (activeProgress) {
      gsap.set(activeProgress, { width: '0%' });
      progressTween = gsap.to(activeProgress, {
        width: '100%',
        duration: AUTOPLAY_DURATION,
        ease: 'none',
        onComplete: () => {
          goToSlide(currentIndex + 1);
        }
      });
    }
  }

  function stopAutoplay() {
    if (progressTween) {
      progressTween.kill();
      progressTween = null;
    }
    document.querySelectorAll('.sp-nav-progress-indicator').forEach(p => {
      gsap.set(p, { width: '0%' });
    });
  }

  // Button Listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  }

  // Step Indicators (all buttons across all slides)
  document.querySelectorAll('.sp-step-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-slide-target'), 10);
      goToSlide(target);
    });
  });

  // Touch Swipe Support on mobile
  const heroSection = document.querySelector('.sp-hero-editorial');
  if (heroSection) {
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) {
        goToSlide(currentIndex + 1);
      } else if (touchEndX > touchStartX + 50) {
        goToSlide(currentIndex - 1);
      }
    }, { passive: true });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (document.activeElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      return;
    }
    if (e.key === 'ArrowLeft') {
      goToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      goToSlide(currentIndex + 1);
    }
  });

  // Initial Entrance Animation
  animateSlideIn(0);
}
