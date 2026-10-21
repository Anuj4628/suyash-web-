/**
 * Suyash Pharma - Continuous Product Name Marquee Banner
 * 
 * Directly derived from authentic client product artwork:
 * - Solid pharmaceutical yellow background
 * - Exact product-name brand color combinations (Royal Blue, Deep Teal, Crimson, Maroon, Black/Green split)
 * - SPTIK-1.5GM in signature blue badge box with orange border
 * - Continuous right-to-left seamless infinite marquee (zero jump, zero reset)
 * - Never pauses on hover
 * - Smooth scroll entrance reveal
 */

import { products } from '../../data/products.js';
import './ProductMarquee.css';

export function renderProductMarquee() {
  const renderItemSequence = () => {
    return products.map((product) => {
      let contentHtml = '';

      if (product.isSplitColor) {
        contentHtml = `
          <span class="sp-marquee-name sp-name-split">
            <span class="sp-split-prefix" style="color: ${product.prefixColor};">${product.prefixText}</span><span class="sp-split-suffix" style="color: ${product.suffixColor};">${product.suffixText}</span>
          </span>
        `;
      } else if (product.isBadge) {
        contentHtml = `
          <span class="sp-marquee-badge-box" style="background-color: ${product.bgColor}; border-bottom-color: ${product.borderColor};">
            <span class="sp-marquee-name" style="color: ${product.color};">${product.name}</span>
          </span>
        `;
      } else {
        const italicStyle = product.isItalic ? 'font-style: italic;' : '';
        contentHtml = `
          <span class="sp-marquee-name" style="color: ${product.color}; ${italicStyle}">
            ${product.name}
          </span>
        `;
      }

      return `
        <span class="sp-marquee-item">
          ${contentHtml}
          <span class="sp-marquee-dot" aria-hidden="true">•</span>
        </span>
      `;
    }).join('');
  };

  return `
    <aside 
      class="sp-product-marquee-section" 
      id="productMarquee" 
      role="region" 
      aria-label="Suyash Pharma Product Portfolio Marquee"
    >
      <!-- Top Subtle Brand Border Anchor -->
      <div class="sp-marquee-top-edge" aria-hidden="true"></div>

      <div class="sp-marquee-viewport">
        <!-- Infinite Moving Track: 2 Identical Clones Form Seamless Infinite Loop -->
        <div class="sp-marquee-track" aria-hidden="false">
          <!-- Primary Sequence -->
          <div class="sp-marquee-sequence">
            ${renderItemSequence()}
          </div>
          <!-- Exact Duplicate Sequence for 100% Seamless Continuous Loop -->
          <div class="sp-marquee-sequence" aria-hidden="true">
            ${renderItemSequence()}
          </div>
        </div>
      </div>

      <!-- Bottom Subtle Brand Border Anchor -->
      <div class="sp-marquee-bottom-edge" aria-hidden="true"></div>
    </aside>
  `;
}

/**
 * Initializes the scroll reveal observer.
 * Stays hidden at the top of the page (Hero view),
 * and reveals smoothly (opacity: 0 -> 1, translateY: -10px -> 0)
 * as the user begins scrolling down toward the About section.
 */
export function initProductMarquee() {
  const marquee = document.getElementById('productMarquee');
  if (!marquee) return;

  // Immediate reveal for users who prefer reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    marquee.classList.add('is-revealed');
    return;
  }

  let isRevealed = false;

  const handleReveal = () => {
    if (isRevealed) return;
    const rect = marquee.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    
    // Reveal once user starts scrolling down from the top
    if (window.scrollY > 15 && inViewport) {
      isRevealed = true;
      marquee.classList.add('is-revealed');
      window.removeEventListener('scroll', handleReveal);
      if (observer) observer.disconnect();
    }
  };

  window.addEventListener('scroll', handleReveal, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.scrollY > 15) {
          isRevealed = true;
          marquee.classList.add('is-revealed');
          observer.disconnect();
          window.removeEventListener('scroll', handleReveal);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  observer.observe(marquee);
}
