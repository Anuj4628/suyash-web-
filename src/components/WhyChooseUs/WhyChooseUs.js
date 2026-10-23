/**
 * Suyash Pharma - Homepage Section 4: "Why Choose Us"
 * 
 * Distinctive Split Layout inspired by reference architecture:
 * - Solid Deep Suyash Navy (#082245) Panel on the LEFT (~40% width)
 * - Clean Warm Off-White (#F8FAF8) Panel on the RIGHT (~60% width)
 * - Numbered circular markers (01 - 05) positioned directly on the boundary
 * - Subtle vertical connecting line running behind the numbered markers
 * - 5 verified strategic reasons with consistent rhythm and typography
 * - Smooth scroll entrance animations & responsive mobile layout
 */

import './WhyChooseUs.css';

export const whyChooseReasons = [
  {
    number: "01",
    circleColor: "#082245", // Deep Navy
    title: "QUALITY-FOCUSED APPROACH",
    description: "Our approach places quality, consistency and reliability at the centre of every pharmaceutical process, from product selection to delivery."
  },
  {
    number: "02",
    circleColor: "#1E824C", // Suyash Green
    title: "FOCUSED PRODUCT PORTFOLIO",
    description: "A focused portfolio of pharmaceutical formulations designed around evolving healthcare requirements and practical patient needs."
  },
  {
    number: "03",
    circleColor: "#0A2D54", // Deep Navy Tone
    title: "RESPONSIBLE PHARMACEUTICAL PRACTICES",
    description: "We follow a responsible, quality-conscious approach across our operations, with attention to consistency, safety and professional standards."
  },
  {
    number: "04",
    circleColor: "#1E824C", // Suyash Green
    title: "HEALTHCARE-CENTRIC THINKING",
    description: "Our products and processes are guided by a clear understanding of healthcare needs and the importance of dependable pharmaceutical solutions."
  },
  {
    number: "05",
    circleColor: "#082245", // Deep Navy
    title: "LONG-TERM PARTNERSHIPS",
    description: "We believe in building lasting relationships through transparent communication, dependable service and a shared commitment to healthcare."
  }
];

export function renderWhyChooseUs() {
  const renderReasonRows = () => {
    return whyChooseReasons.map((reason, index) => {
      return `
        <div class="sp-why-row" data-row-index="${index}">
          <!-- Overlapping Numbered Circular Marker -->
          <div 
            class="sp-why-circle" 
            style="background-color: ${reason.circleColor};" 
            aria-hidden="true"
          >
            <span class="sp-circle-num">${reason.number}</span>
          </div>

          <!-- Reason Content -->
          <div class="sp-why-content">
            <div class="sp-why-title-wrap">
              <span class="sp-why-mobile-num" aria-hidden="true">${reason.number}</span>
              <h3 class="sp-why-title">${reason.title}</h3>
            </div>
            <p class="sp-why-desc">${reason.description}</p>
          </div>
        </div>
      `;
    }).join('');
  };

  return `
    <section 
      class="sp-why-section" 
      id="why-choose-us" 
      aria-labelledby="whyChooseUsHeading"
    >
      <div class="sp-why-container">
        <div class="sp-why-card-wrapper">
          <!-- LEFT SIDE: Deep Suyash Navy Panel (~40% width) -->
          <div class="sp-why-left-panel">
            <div class="sp-why-left-content">
              <!-- Small Eyebrow -->
              <div class="sp-why-eyebrow-wrap">
                <span class="sp-why-eyebrow-accent" aria-hidden="true"></span>
                <span class="sp-why-eyebrow">WHY SUYASH PHARMA</span>
              </div>

              <!-- Large Bold Editorial Heading -->
              <h2 class="sp-why-heading" id="whyChooseUsHeading">
                <span class="sp-why-heading-line">WHY</span>
                <span class="sp-why-heading-line">CHOOSE</span>
                <span class="sp-why-heading-line sp-why-heading-accent">US?</span>
              </h2>

              <!-- Subtitle Statement -->
              <p class="sp-why-tagline">
                Focused on quality. Driven by healthcare.
              </p>

              <!-- Subtle Pharmaceutical Accent Divider -->
              <div class="sp-why-accent-divider" aria-hidden="true">
                <span class="sp-why-divider-line"></span>
                <span class="sp-why-divider-dot"></span>
              </div>

              <!-- Subtle Bottom-Left Trust Statement -->
              <div class="sp-why-trust-statement">
                <span>QUALITY</span>
                <span class="sp-trust-bullet" aria-hidden="true">•</span>
                <span>RELIABILITY</span>
                <span class="sp-trust-bullet" aria-hidden="true">•</span>
                <span>RESPONSIBILITY</span>
              </div>
            </div>
          </div>

          <!-- RIGHT SIDE: Clean Light Panel (~60% width) with Overlapping Circles -->
          <div class="sp-why-right-panel">
            <!-- Subtle Vertical Line Connecting Circles -->
            <div class="sp-why-track-line" aria-hidden="true"></div>

            <!-- 5 Sequential Reasons -->
            <div class="sp-why-reasons-list">
              ${renderReasonRows()}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Initializes scroll-triggered reveal animations for Why Choose Us section.
 */
export function initWhyChooseUs() {
  const section = document.getElementById('why-choose-us');
  if (!section) return;

  const leftContent = section.querySelector('.sp-why-left-content');
  const rows = section.querySelectorAll('.sp-why-row');
  const trackLine = section.querySelector('.sp-why-track-line');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            leftContent?.classList.add('is-in-view');
            trackLine?.classList.add('is-in-view');
            
            rows.forEach((row, idx) => {
              setTimeout(() => {
                row.classList.add('is-in-view');
              }, 100 * idx);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
  } else {
    // If reduced motion is requested or observer unavailable, display immediately
    leftContent?.classList.add('is-in-view');
    trackLine?.classList.add('is-in-view');
    rows.forEach((row) => row.classList.add('is-in-view'));
  }
}
