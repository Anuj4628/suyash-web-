/**
 * Suyash Pharma - Premium International Pharmaceutical Hero
 * Exactly matching the reference composition, balance, typography hierarchy,
 * diagonal split, clinical laboratory environment, and real product showcase.
 * 
 * Autoplay plays continuously (never pauses on cursor hover).
 */

import gsap from 'gsap';
import { heroSlides } from '../../data/heroSlides.js';
import './Hero.css';

export function renderHero() {
  const slidesHtml = heroSlides.map((slide, index) => {
    const isActive = index === 0;
    const isPortfolioSlide = Boolean(slide.isShowcase);

    let extraLeftContent = '';
    if (slide.keywords) {
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
        <!-- RIGHT ZONE: Reusable Full-Bleed Universal Visual Slot -->
        <div class="sp-right-stage" aria-hidden="true">
          <div class="sp-hero-visual-frame">
            <img 
              src="${slide.image}" 
              alt="${slide.imageAlt}" 
              class="sp-hero-visual-img" 
              style="--img-pos: ${slide.imageConfig?.position || 'center center'}; --img-fit: ${slide.imageConfig?.fit || 'cover'}; --img-pos-mob: ${slide.imageConfig?.positionMobile || 'center center'};"
              loading="${index === 0 ? 'eager' : 'lazy'}" 
              width="1920" 
              height="1080" 
            />
          </div>
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

          <!-- ONE SINGLE CONSISTENT CONTENT CONTAINER -->
          <div class="sp-left-content-inner">
            <!-- 1. Eyebrow -->
            <div class="sp-hero-eyebrow">
              <span class="sp-eyebrow-dash" aria-hidden="true"></span>
              <span>${slide.eyebrow}</span>
            </div>

            <!-- 2. Large Editorial Headline (H1 for Primary Hero Slide, H2 for Secondary Slides) -->
            <${index === 0 ? 'h1' : 'h2'} class="sp-editorial-headline">
              ${slide.headline.map(item => `
                <span class="sp-headline-mask">
                  <span class="sp-headline-inner ${item.highlight ? 'sp-word-highlight' : ''}">
                    ${item.text}
                  </span>
                </span>
              `).join('')}
            </${index === 0 ? 'h1' : 'h2'}>

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

            <!-- 5. Portfolio Metrics / Badges -->
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
              <div class="sp-nav-arrows-group">
                <button type="button" class="sp-arrow-nav-btn sp-nav-prev-btn" aria-label="Previous slide">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
                <button type="button" class="sp-arrow-nav-btn sp-nav-next-btn" aria-label="Next slide">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- MATHEMATICAL SOLID GREEN DIAGONAL DIVIDER LINE -->
        <svg class="sp-hero-diagonal-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="48" y1="0" x2="36" y2="100" stroke="#228B22" stroke-width="2.6" vector-effect="non-scaling-stroke" />
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
    </section>
  `;
}

// Preload all slide images to prevent blank frames or layout pop-in
function preloadAllImages() {
  heroSlides.forEach((slide) => {
    if (slide.image) {
      const img = new Image();
      img.src = slide.image;
    }
  });
}

export function initHeroCarousel() {
  const slides = document.querySelectorAll('.sp-editorial-slide');

  if (!slides.length) return;

  // Preload immediately on mount
  preloadAllImages();

  let currentIndex = 0;
  const totalSlides = slides.length;
  const AUTOPLAY_DURATION = 4.2;
  let progressTween = null;
  let isTransitioning = false;
  let activeTransitionTl = null;

  function animateSlideEntrance(index) {
    const slide = slides[index];
    const eyebrow = slide.querySelector('.sp-hero-eyebrow');
    const headlineInners = slide.querySelectorAll('.sp-headline-inner');
    const desc = slide.querySelector('.sp-hero-desc');
    const actions = slide.querySelector('.sp-hero-actions');
    const extraInfo = slide.querySelector('.sp-keywords-row');
    const navRow = slide.querySelector('.sp-slider-nav-aligned');
    const visualImg = slide.querySelector('.sp-hero-visual-img');

    if (activeTransitionTl) {
      activeTransitionTl.kill();
    }

    activeTransitionTl = gsap.timeline({
      onComplete: () => {
        isTransitioning = false;
        startAutoplay();
      }
    });

    // 1. Eyebrow
    if (eyebrow) {
      activeTransitionTl.fromTo(eyebrow, 
        { opacity: 0, x: -16 }, 
        { opacity: 1, x: 0, duration: 0.45, ease: 'power3.out' }, 
        0.05
      );
    }

    // 2. Headline line-by-line reveal
    if (headlineInners.length) {
      activeTransitionTl.fromTo(headlineInners, 
        { yPercent: 110, opacity: 0 }, 
        { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.08, ease: 'power4.out' }, 
        0.1
      );
    }

    // 3. Supporting paragraph
    if (desc) {
      activeTransitionTl.fromTo(desc, 
        { opacity: 0, y: 14 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 
        0.28
      );
    }

    // 4. CTA buttons
    if (actions) {
      activeTransitionTl.fromTo(actions, 
        { opacity: 0, y: 12 }, 
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, 
        0.36
      );
    }

    // 5. Portfolio Badges
    if (extraInfo) {
      activeTransitionTl.fromTo(extraInfo, 
        { opacity: 0, y: 12 }, 
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, 
        0.42
      );
    }

    // 6. Navigation Row
    if (navRow) {
      activeTransitionTl.fromTo(navRow,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' },
        0.45
      );
    }

    // 7. Right side universal visual image
    if (visualImg) {
      activeTransitionTl.fromTo(visualImg,
        { scale: 1.04 },
        { scale: 1.0, duration: 1.3, ease: 'power2.out' },
        0.1
      );
    }

    return activeTransitionTl;
  }

  // Zero-Flash Slide Transition Architecture:
  // Incoming slide mounts at top z-index and reveals over outgoing slide.
  // Outgoing slide remains 100% visible underneath until incoming slide is fully settled.
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

    // Current slide remains fully visible at base z-index underneath
    currentSlide.style.zIndex = '1';

    // Incoming slide mounts at elevated z-index and crossfades in
    nextSlide.classList.add('is-active');
    nextSlide.style.zIndex = '3';
    nextSlide.setAttribute('aria-hidden', 'false');

    const nextVisual = nextSlide.querySelector('.sp-hero-visual-img');
    const nextHeadlineInners = nextSlide.querySelectorAll('.sp-headline-inner');
    const nextEyebrow = nextSlide.querySelector('.sp-hero-eyebrow');
    const nextDesc = nextSlide.querySelector('.sp-hero-desc');
    const nextActions = nextSlide.querySelector('.sp-hero-actions');
    const nextKeywords = nextSlide.querySelector('.sp-keywords-row');

    if (activeTransitionTl) {
      activeTransitionTl.kill();
    }

    activeTransitionTl = gsap.timeline({
      onComplete: () => {
        // Clean up outgoing slide ONLY after incoming slide is 100% visible
        currentSlide.classList.remove('is-active');
        currentSlide.setAttribute('aria-hidden', 'true');
        currentSlide.style.zIndex = '';
        gsap.set(currentSlide, { clearProps: 'opacity,visibility' });

        // Normalize incoming slide to standard active z-index
        nextSlide.style.zIndex = '2';

        // Update step buttons across all slides to reflect active index
        document.querySelectorAll('.sp-step-btn').forEach((btn) => {
          const target = parseInt(btn.getAttribute('data-slide-target'), 10);
          btn.classList.toggle('is-active', target === normalizedIndex);
        });

        currentIndex = normalizedIndex;
        isTransitioning = false;
        startAutoplay();
      }
    });

    // 1. Reveal incoming slide cleanly over outgoing slide (ZERO white flash!)
    activeTransitionTl.fromTo(nextSlide,
      { opacity: 0, visibility: 'visible' },
      { opacity: 1, duration: 0.55, ease: 'power2.inOut' },
      0
    );

    // 2. Visual Image Settle (subtle camera motion)
    if (nextVisual) {
      activeTransitionTl.fromTo(nextVisual,
        { scale: 1.04 },
        { scale: 1.0, duration: 1.3, ease: 'power2.out' },
        0
      );
    }

    // 3. Eyebrow
    if (nextEyebrow) {
      activeTransitionTl.fromTo(nextEyebrow,
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.42, ease: 'power3.out' },
        0.08
      );
    }

    // 4. Headline line-by-line reveal
    if (nextHeadlineInners.length) {
      activeTransitionTl.fromTo(nextHeadlineInners,
        { yPercent: 105, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: 'power4.out' },
        0.12
      );
    }

    // 5. Description
    if (nextDesc) {
      activeTransitionTl.fromTo(nextDesc,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' },
        0.26
      );
    }

    // 6. Actions & Badges
    if (nextActions) {
      activeTransitionTl.fromTo(nextActions,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        0.34
      );
    }

    if (nextKeywords) {
      activeTransitionTl.fromTo(nextKeywords,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        0.38
      );
    }
  }

  // Exactly ONE Autoplay Timer - Runs continuously, NEVER paused by cursor hover
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

  // Button Listeners - Inline navigation arrows across all slides
  document.querySelectorAll('.sp-nav-next-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(currentIndex + 1);
    });
  });

  document.querySelectorAll('.sp-nav-prev-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(currentIndex - 1);
    });
  });

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
  animateSlideEntrance(0);
}
