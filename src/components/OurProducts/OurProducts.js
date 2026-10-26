/**
 * Suyash Pharma - Homepage Section 3: "Our Products"
 * 
 * Refined, compact, premium pharmaceutical product cards:
 * - Solid Medium Professional Green Background (#1B6A3E)
 * - Exactly 8 real pharmaceutical products in a balanced 4 x 2 desktop grid
 * - Entire card is an accessible clickable link to its dedicated Product Detail page
 * - Fixed controlled image area (object-fit: contain, never cropped or distorted)
 * - Completely removed green description/dosage tags
 * - Clean structure: IMAGE -> PRODUCT NAME -> SHORT DESCRIPTION -> EXPLORE PRODUCT →
 * - Subtle 3-4px lift and 1.03x scale on hover (zero 3D tilt, zero rotation)
 * - "VIEW ALL PRODUCTS" button linking directly to the main Products catalogue
 */

import { products, formatBrandName } from '../../data/products.js';
import { getProductUrl } from '../../data/seoKeys.js';
import './OurProducts.css';

export function renderOurProducts() {
  // Select exactly the first 8 featured products for the homepage 4x2 grid
  const homepageProducts = products.slice(0, 8);

  const renderProductCards = () => {
    return homepageProducts.map((product, index) => {
      const productUrl = getProductUrl(product.slug, index);
      return `
        <a 
          href="${productUrl}" 
          class="sp-product-card" 
          data-product-index="${index}"
          data-product-id="${product.id}"
          data-slug="${product.slug}"
          aria-label="${product.name} - ${product.generic}"
        >
          <!-- Product Packaging Visual Stage -->
          <div class="sp-card-image-box">
            <img 
              src="${product.image}" 
              alt="${product.name} packaging box - ${product.generic}" 
              class="sp-card-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          <!-- Card Detail Content -->
          <div class="sp-card-body">
            <div class="sp-card-meta-top">
              <!-- Product Brand Name -->
              <h3 class="sp-card-title">
                ${formatBrandName(product.name)}
              </h3>

              <!-- Short Factual Formulation Description -->
              <p class="sp-card-description">
                ${product.generic}
              </p>
            </div>

            <!-- Subtle Action Link -->
            <div class="sp-card-action">
              <span class="sp-action-label">EXPLORE PRODUCT</span>
              <svg 
                class="sp-action-arrow" 
                viewBox="0 0 20 20" 
                fill="none" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path d="M4.167 10h11.666m-5-5l5 5-5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </a>
      `;
    }).join('');
  };

  return `
    <section 
      class="sp-our-products-section" 
      id="our-products" 
      aria-labelledby="productsSectionHeading"
    >
      <div class="sp-products-container">
        <!-- Section Header -->
        <header class="sp-products-header">
          <div class="sp-products-eyebrow-wrapper">
            <span class="sp-products-eyebrow">OUR PHARMACEUTICAL PORTFOLIO</span>
          </div>

          <h2 class="sp-products-title" id="productsSectionHeading">
            OUR PRODUCTS
          </h2>

          <!-- Architectural Minimal Line Accent -->
          <div class="sp-products-header-line" aria-hidden="true">
            <span class="sp-line-dot"></span>
          </div>

          <p class="sp-products-intro">
            Explore our focused portfolio of pharmaceutical products structured around quality, reliability and evolving healthcare needs.
          </p>
        </header>

        <!-- 4 x 2 Desktop Grid (Exactly 8 Products) -->
        <div class="sp-products-grid" role="list">
          ${renderProductCards()}
        </div>

        <!-- Centered View All Products CTA -->
        <div class="sp-products-cta-wrap">
          <a 
            href="/products#all-products" 
            class="sp-btn-view-all" 
            id="viewAllProductsBtn"
            role="button"
            aria-label="View all Suyash Pharma products in the complete catalog"
          >
            <span>VIEW ALL PRODUCTS</span>
            <svg class="sp-btn-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M4.167 10h11.666m-5-5l5 5-5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `;
}

/**
 * Initializes scroll entrance animations for the section and cards.
 * Note: 3D tilt has been completely removed in favor of clean, performant CSS hover.
 */
export function initOurProducts() {
  const section = document.getElementById('our-products');
  if (!section) return;

  const header = section.querySelector('.sp-products-header');
  const cards = section.querySelectorAll('.sp-product-card');
  const cta = section.querySelector('.sp-products-cta-wrap');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll-triggered entrance reveal
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header?.classList.add('is-in-view');
            cards.forEach((card, idx) => {
              setTimeout(() => {
                card.classList.add('is-in-view');
              }, 45 * idx);
            });
            setTimeout(() => {
              cta?.classList.add('is-in-view');
            }, 45 * cards.length + 80);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(section);
  } else {
    header?.classList.add('is-in-view');
    cards.forEach((card) => card.classList.add('is-in-view'));
    cta?.classList.add('is-in-view');
  }
}
