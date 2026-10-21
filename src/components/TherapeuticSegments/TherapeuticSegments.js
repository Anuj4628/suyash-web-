/**
 * Suyash Pharma - Homepage Section 5: "Therapeutic Segments"
 * 
 * Editorial Three-Column Therapeutic Focus Portfolio:
 * - Warm Off-White (#FBFBF9) Base Atmosphere
 * - Exactly THREE Verified Segments:
 *   01: BROAD-SPECTRUM ANTIBIOTICS & COMBINATION THERAPY (Navy Dominant)
 *   02: GASTROINTESTINAL SUPPORT (White + Green Accent)
 *   03: SUPPORTIVE & ADJUNCTIVE THERAPY (Soft Muted Green)
 * - Dynamic product count calculated directly from master products data
 * - Refined cards with 20px radius, subtle borders, and clinical motifs
 * - Smooth scroll entrance and interactive hover physics
 * - Seamless connection to product portfolio
 */

import { products } from '../../data/products.js';
import './TherapeuticSegments.css';

export const therapeuticSegmentsData = [
  {
    id: "anti-infective",
    number: "01",
    label: "ANTI-INFECTIVE FOCUS",
    titleLines: ["BROAD-SPECTRUM", "ANTIBIOTICS &", "COMBINATION THERAPY"],
    description: "A focused portfolio of anti-infective formulations, including antibiotic and combination therapies represented across Suyash Pharma’s current product range.",
    theme: "navy",
    filterKeywords: ["anti-infective", "carbapenem", "antibiotic", "cephalosporin", "infections", "inhibitor", "critical care", "hospital"]
  },
  {
    id: "gastrointestinal",
    number: "02",
    label: "GASTROINTESTINAL CARE",
    titleLines: ["GASTROINTESTINAL", "SUPPORT"],
    description: "A focused area of pharmaceutical support addressing gastrointestinal healthcare needs through formulations represented in the current Suyash Pharma portfolio.",
    theme: "white",
    filterKeywords: ["gastro", "pantoprazole"]
  },
  {
    id: "supportive",
    number: "03",
    label: "SUPPORTIVE CARE",
    titleLines: ["SUPPORTIVE &", "ADJUNCTIVE", "THERAPY"],
    description: "A focused range of supportive formulations designed to complement broader pharmaceutical care across selected healthcare requirements.",
    theme: "mint",
    filterKeywords: ["antioxidant", "nutraceutical", "glutathione"]
  }
];

export function renderTherapeuticSegments() {
  // Dynamically compute product counts per segment from actual master data
  const getProductCountForSegment = (keywords) => {
    return products.filter((p) => {
      const searchStr = `${p.category || ''} ${p.therapeuticSegment || ''} ${p.generic || ''}`.toLowerCase();
      return keywords.some((kw) => searchStr.includes(kw));
    }).length;
  };

  const renderSegmentCards = () => {
    return therapeuticSegmentsData.map((segment, index) => {
      const count = getProductCountForSegment(segment.filterKeywords);
      const countText = count > 1 ? `${count} PRODUCTS` : `${count} PRODUCT`;

      // Geometric background motif per theme (clean CSS SVG lines)
      let motifSvg = '';
      if (segment.theme === 'navy') {
        motifSvg = `
          <svg class="sp-card-motif sp-motif-grid" viewBox="0 0 160 160" fill="none" aria-hidden="true">
            <line x1="20" y1="0" x2="20" y2="160" stroke="rgba(8,34,69,0.06)" stroke-width="1.5" stroke-dasharray="4 4"/>
            <line x1="80" y1="0" x2="80" y2="160" stroke="rgba(8,34,69,0.06)" stroke-width="1.5" stroke-dasharray="4 4"/>
            <line x1="140" y1="0" x2="140" y2="160" stroke="rgba(8,34,69,0.06)" stroke-width="1.5" stroke-dasharray="4 4"/>
            <line x1="0" y1="40" x2="160" y2="40" stroke="rgba(8,34,69,0.06)" stroke-width="1.5" stroke-dasharray="4 4"/>
            <line x1="0" y1="100" x2="160" y2="100" stroke="rgba(8,34,69,0.06)" stroke-width="1.5" stroke-dasharray="4 4"/>
            <circle cx="80" cy="100" r="4" fill="#082245" fill-opacity="0.25"/>
          </svg>
        `;
      } else if (segment.theme === 'white') {
        motifSvg = `
          <svg class="sp-card-motif sp-motif-lines" viewBox="0 0 160 160" fill="none" aria-hidden="true">
            <line x1="160" y1="20" x2="60" y2="160" stroke="rgba(30,130,76,0.12)" stroke-width="2"/>
            <line x1="160" y1="60" x2="100" y2="160" stroke="rgba(30,130,76,0.08)" stroke-width="2"/>
            <circle cx="110" cy="90" r="5" fill="#1E824C" fill-opacity="0.25"/>
          </svg>
        `;
      } else {
        motifSvg = `
          <svg class="sp-card-motif sp-motif-circles" viewBox="0 0 160 160" fill="none" aria-hidden="true">
            <circle cx="120" cy="40" r="32" stroke="rgba(8,34,69,0.08)" stroke-width="1.5"/>
            <circle cx="120" cy="40" r="60" stroke="rgba(30,130,76,0.08)" stroke-width="1.5"/>
            <circle cx="120" cy="40" r="3" fill="#1E824C"/>
          </svg>
        `;
      }

      return `
        <article 
          class="sp-segment-card sp-card-theme-${segment.theme}" 
          data-segment-id="${segment.id}"
          data-index="${index}"
          tabindex="0"
          aria-label="${segment.titleLines.join(' ')} - ${segment.label}"
        >
          <!-- Background Abstract Clinical Motif -->
          ${motifSvg}

          <!-- Card Header Stage -->
          <div class="sp-segment-card-top">
            <div class="sp-segment-num-badge">
              <span class="sp-segment-num">${segment.number}</span>
              <span class="sp-segment-count">${countText}</span>
            </div>
            
            <span class="sp-segment-label">${segment.label}</span>
          </div>

          <!-- Card Body: Editorial Title & Formulation Scope -->
          <div class="sp-segment-card-body">
            <h3 class="sp-segment-title">
              ${segment.titleLines.map(line => `<span class="sp-segment-title-line">${line}</span>`).join('')}
            </h3>

            <p class="sp-segment-desc">
              ${segment.description}
            </p>
          </div>

          <!-- Card Footer: Minimal Explore Action -->
          <div class="sp-segment-card-footer">
            <a 
              href="#our-products" 
              class="sp-segment-action-link"
              data-target-segment="${segment.id}"
              aria-label="Explore products in ${segment.titleLines.join(' ')}"
            >
              <span class="sp-action-text">EXPLORE PRODUCTS</span>
              <svg class="sp-action-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M4.167 10h11.666m-5-5l5 5-5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
      `;
    }).join('');
  };

  return `
    <section 
      class="sp-therapeutic-section" 
      id="therapeutic-segments" 
      aria-labelledby="therapeuticSectionHeading"
    >
      <div class="sp-therapeutic-container">
        <!-- Section Header Area (Perfectly Centered Horizontally) -->
        <header class="sp-therapeutic-header">
          <div class="sp-therapeutic-eyebrow-wrap">
            <span class="sp-therapeutic-eyebrow-line" aria-hidden="true"></span>
            <span class="sp-therapeutic-eyebrow">THERAPEUTIC FOCUS</span>
            <span class="sp-therapeutic-eyebrow-line" aria-hidden="true"></span>
          </div>

          <h2 class="sp-therapeutic-title" id="therapeuticSectionHeading">
            FOCUSED SOLUTIONS.<br/>
            BUILT AROUND HEALTHCARE NEEDS.
          </h2>

          <p class="sp-therapeutic-intro">
            A structured portfolio of quality pharmaceutical formulations aligned with core clinical and healthcare priorities.
          </p>
        </header>

        <!-- 3-Column Therapeutic Grid (Unified Alignment System) -->
        <div class="sp-therapeutic-grid" role="list">
          ${renderSegmentCards()}
        </div>
      </div>
    </section>
  `;
}

/**
 * Initializes scroll entrance reveal, smooth exploration anchors,
 * and premium cursor-driven 3D tilt interaction (2–4 degrees).
 */
export function initTherapeuticSegments() {
  const section = document.getElementById('therapeutic-segments');
  if (!section) return;

  const header = section.querySelector('.sp-therapeutic-header');
  const cards = section.querySelectorAll('.sp-segment-card');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll-triggered entrance reveal
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header?.classList.add('is-in-view');

            cards.forEach((card, idx) => {
              setTimeout(() => {
                card.classList.add('is-in-view');
              }, 90 * idx);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.14 }
    );

    observer.observe(section);
  } else {
    header?.classList.add('is-in-view');
    cards.forEach((card) => card.classList.add('is-in-view'));
  }

  // 2. Smooth scrolling to products on click
  const links = section.querySelectorAll('.sp-segment-action-link');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 3. Premium cursor-driven 3D tilt interaction (2–4 degrees) with smooth return
  if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    cards.forEach((card) => {
      let isHovered = false;
      let rafId = null;

      const motif = card.querySelector('.sp-card-motif');
      const body = card.querySelector('.sp-segment-card-body');

      const handleMouseMove = (e) => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX; // -1 to +1
        const percentY = (y - centerY) / centerY; // -1 to +1

        // Precise tilt limit: 2 to 3.5 degrees (subtle, non-gimmicky)
        const maxTilt = 3.2;
        const rotateX = -(percentY * maxTilt);
        const rotateY = percentX * maxTilt;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;

          // Subtle internal parallax depth (2-4px)
          if (motif) {
            motif.style.transform = `translate3d(${(percentX * 4).toFixed(1)}px, ${(percentY * 4).toFixed(1)}px, 12px) scale(1.05)`;
          }
          if (body) {
            body.style.transform = `translate3d(${(percentX * 2).toFixed(1)}px, ${(percentY * 2).toFixed(1)}px, 8px)`;
          }
        });
      };

      const handleMouseEnter = () => {
        isHovered = true;
        card.classList.add('is-hovered');
        card.style.transition = 'transform 120ms ease-out, box-shadow 340ms cubic-bezier(0.16, 1, 0.3, 1), border-color 340ms ease';
        if (motif) motif.style.transition = 'transform 160ms ease-out';
        if (body) body.style.transition = 'transform 160ms ease-out';
      };

      const handleMouseLeave = () => {
        isHovered = false;
        card.classList.remove('is-hovered');
        if (rafId) cancelAnimationFrame(rafId);

        // Smooth and fast return (380-420ms with elegant bezier easing)
        card.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1), border-color 400ms ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';

        if (motif) {
          motif.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
          motif.style.transform = 'translate3d(0, 0, 0) scale(1)';
        }
        if (body) {
          body.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
          body.style.transform = 'translate3d(0, 0, 0)';
        }
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }
}
