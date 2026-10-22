/**
 * Suyash Pharma - Dedicated Corporate Products Page
 * 
 * Flow:
 * 1. Corporate Sticky Navbar ('products' active)
 * 2. Product Hero Section (Solid Dark Green #1B6A3E)
 * 3. Product Intro + Search / Filter Bar (Solid Light Mint #EBF5EE)
 * 4. All 13 Products Catalogue Grid (3 per row, 13th card centered)
 * 5. Pre-Footer Corporate CTA ("Let's Build Better Healthcare Connections")
 * 6. Global Corporate Footer & Floating Contact Utilities
 */

import { renderNavbar, initNavbarEvents } from '../../components/Navbar/Navbar.js';
import { renderFooter, initFooter } from '../../components/Footer/Footer.js';
import { products, productCategories } from '../../data/products.js';
import { getProductUrl } from '../../data/seoKeys.js';
import productHeroImg from '../../assets/images/products/product-hero-qc.jpg';
import './ProductsPage.css';

export function renderProductsPage() {
  const categoriesHtml = productCategories.map((cat, idx) => `
    <button 
      type="button" 
      class="sp-filter-btn ${idx === 0 ? 'active' : ''}" 
      data-filter="${cat.id}"
      id="filter-btn-${cat.id}"
      aria-pressed="${idx === 0 ? 'true' : 'false'}"
    >
      ${cat.label}
    </button>
  `).join('');

  return `
    <div class="sp-products-page-wrapper">
      <!-- 1. Corporate Sticky Navbar -->
      ${renderNavbar('products')}

      <main class="sp-products-main-content">
        <!-- ================================================================
             2. HERO SECTION (SOLID DARK GREEN #1B6A3E)
             ================================================================ -->
        <section class="sp-catalog-hero-section" id="products-hero" aria-labelledby="catalogHeroHeading">
          <div class="sp-catalog-watermark" aria-hidden="true">PRODUCTS</div>

          <div class="sp-catalog-hero-container">
            <div class="sp-catalog-hero-grid">
              
              <!-- Left Hero Content -->
              <div class="sp-catalog-hero-content sp-catalog-reveal is-in-view">
                <div class="sp-catalog-badge-row">
                  <span class="sp-catalog-hero-marker">PORTFOLIO</span>
                  <span class="sp-catalog-hero-eyebrow">OUR PHARMACEUTICAL PORTFOLIO</span>
                </div>

                <h1 class="sp-catalog-hero-title" id="catalogHeroHeading">
                  PHARMACEUTICAL<br/>
                  SOLUTIONS.<br/>
                  FOCUSED ON<br/>
                  HEALTHCARE.
                </h1>

                <p class="sp-catalog-hero-desc">
                  Explore the Suyash Pharma product portfolio and discover focused pharmaceutical formulations designed around quality, reliability and evolving healthcare needs.
                </p>

                <div class="sp-catalog-hero-actions">
                  <a href="#all-products" class="sp-catalog-hero-cta" id="heroExploreProductsBtn">
                    <span>EXPLORE PRODUCTS</span>
                    <svg class="sp-catalog-cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Right Hero Visual -->
              <div class="sp-catalog-hero-media-wrap sp-catalog-reveal is-in-view">
                <div class="sp-catalog-hero-image-card">
                  <img 
                    src="${productHeroImg}" 
                    alt="Suyash Pharma pharmaceutical quality inspection and sterile packaging" 
                    class="sp-catalog-hero-img"
                    loading="eager"
                  />
                  <div class="sp-catalog-hero-image-overlay">
                    <div class="sp-catalog-hero-stat-badge">
                      <span class="sp-stat-num">13</span>
                      <div class="sp-stat-text">
                        <strong>Focused Formulations</strong>
                        <span>Critical Care & Antimicrobial</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ================================================================
             3. PRODUCT INTRO & INSTANT SEARCH / FILTER (MINT #EBF5EE)
             ================================================================ -->
        <section class="sp-catalog-intro-section" id="all-products" aria-labelledby="catalogIntroHeading">
          <div class="sp-catalog-intro-container">
            <header class="sp-catalog-section-header sp-catalog-reveal is-in-view">
              <span class="sp-catalog-sec-eyebrow">OUR PRODUCTS</span>
              <h2 class="sp-catalog-sec-title" id="catalogIntroHeading">ALL PRODUCTS</h2>
              <div class="sp-catalog-header-divider" aria-hidden="true">
                <span class="sp-divider-dot"></span>
              </div>
              <p class="sp-catalog-sec-desc">
                Explore our focused pharmaceutical portfolio across selected formulations and healthcare needs.
              </p>
            </header>

            <!-- Search and Filter Bar -->
            <div class="sp-search-filter-wrapper sp-catalog-reveal is-in-view">
              <!-- Search Bar -->
              <div class="sp-search-bar-box">
                <svg class="sp-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input 
                  type="text" 
                  id="productSearchInput" 
                  class="sp-search-input" 
                  placeholder="Search products..." 
                  aria-label="Search pharmaceutical products by name, composition or category"
                  autocomplete="off"
                />
                <button 
                  type="button" 
                  id="searchClearBtn" 
                  class="sp-search-clear-btn" 
                  aria-label="Clear product search" 
                  style="display: none;"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <!-- Quick Category Filter Chips -->
              <div class="sp-filter-chips-row" role="tablist" aria-label="Filter products by therapeutic segment">
                ${categoriesHtml}
              </div>

              <!-- Result Count Feedback -->
              <div class="sp-result-meta-row">
                <span class="sp-result-count" id="productCountBadge">13 PRODUCTS</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================
             4. ALL 13 PRODUCTS CATALOGUE GRID (3 PER ROW, 13TH CENTERED)
             ================================================================ -->
        <section class="sp-catalog-grid-section" id="products-grid-section" aria-label="Pharmaceutical Products Grid">
          <div class="sp-catalog-grid-container">
            
            <!-- Products Grid Container -->
            <div class="sp-all-products-grid" id="allProductsGrid" role="list">
              ${renderProductCardsHtml(products)}
            </div>

            <!-- No Products Found State -->
            <div class="sp-no-products-found" id="noProductsFoundState" style="display: none;">
              <div class="sp-no-results-icon-wrap" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1B6A3E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
              <h3 class="sp-no-results-title">NO PRODUCTS FOUND</h3>
              <p class="sp-no-results-desc">
                No formulations matched your search criteria. Please check the spelling or try searching by generic composition or therapeutic category.
              </p>
              <button type="button" class="sp-reset-search-btn" id="resetSearchBtn">
                CLEAR SEARCH
              </button>
            </div>

          </div>
        </section>

        <!-- ================================================================
             4B. PHARMACEUTICAL PORTFOLIO FAQ SECTION
             ================================================================ -->
        <section class="sp-catalog-faq-section" id="products-faq" aria-labelledby="catalogFaqHeading">
          <div class="sp-catalog-grid-container">
            <header class="sp-catalog-faq-header">
              <span class="sp-catalog-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
              <h2 class="sp-catalog-faq-title" id="catalogFaqHeading">PHARMACEUTICAL PORTFOLIO FAQ</h2>
              <p class="sp-catalog-faq-desc">
                Key questions and answers regarding Suyash Pharma formulations, dosage forms, distribution, and hospital supply across India.
              </p>
            </header>

            <div class="sp-catalog-faq-grid">
              <article class="sp-catalog-faq-card">
                <h3 class="sp-catalog-faq-q">What pharmaceutical products does Suyash Pharma offer?</h3>
                <p class="sp-catalog-faq-a">
                  Suyash Pharma provides a focused portfolio of hospital-grade injectable formulations, including carbapenems (Meropenem 2.0 gm), synergistic beta-lactamase inhibitor combinations (Meropenem + Sulbactam, Meropenem + Tazobactam, Cefoperazone + Sulbactam 3 gm), advanced cephalosporins (Ceftazidime + Tobramycin, Ceftizoxime, Cefpirome), glycylcyclines (Tigecycline 100mg), parenteral proton pump inhibitors (Pantoprazole 40mg), and supportive therapies (Glutathione 1200mg + Vitamin C).
                </p>
              </article>

              <article class="sp-catalog-faq-card">
                <h3 class="sp-catalog-faq-q">What dosage forms and administration routes are available?</h3>
                <p class="sp-catalog-faq-a">
                  The portfolio primarily features sterile dry powder for injection and lyophilized powder for intravenous (IV) infusion or deep intramuscular (IM) injection packaged in single-dose glass vials, alongside oral film-coated tablets such as Cefuroxime Axetil 500mg.
                </p>
              </article>

              <article class="sp-catalog-faq-card">
                <h3 class="sp-catalog-faq-q">How can institutional buyers or distributors inquire about Suyash Pharma products?</h3>
                <p class="sp-catalog-faq-a">
                  Commercial inquiries, hospital supply orders, and distribution requests can be submitted through our product detail enquiry modal, via direct WhatsApp dispatch to +91 8928252638, or by emailing our corporate office at suyashpharma1@gmail.com.
                </p>
              </article>

              <article class="sp-catalog-faq-card">
                <h3 class="sp-catalog-faq-q">Where is Suyash Pharma located and where does it distribute?</h3>
                <p class="sp-catalog-faq-a">
                  Suyash Pharma is located at Shop No. A/02,03 Ground Floor, Max Avenue CHS Ltd, Ostwal Nagari, Nallasopara East, Maharashtra 401209. We supply pharmaceutical products and hospital formulations across Nallasopara, Vasai-Virar, Palghar, the Mumbai Metropolitan Region, Maharashtra, and across India.
                </p>
              </article>
            </div>
          </div>
        </section>

      </main>

      <!-- 5. Pre-Footer Corporate CTA & Global Footer -->
      ${renderFooter()}
    </div>
  `;
}

/**
 * Generates catalogue cards for the 13 products
 */
export function renderProductCardsHtml(productList) {
  return productList.map((product, idx) => {
    // Exact brand styling per authentic packaging
    let titleHtml = product.name;
    if (product.isSplitColor) {
      titleHtml = `<span style="color:${product.prefixColor || '#111827'}">${product.prefixText || product.name}</span><span style="color:${product.suffixColor || '#1E7022'}">${product.suffixText || ''}</span>`;
    } else if (product.isBadge) {
      titleHtml = `<span class="sp-card-badge-title" style="background:${product.bgColor || '#1B82C7'}; color:${product.color || '#FFFFFF'}; border-color:${product.borderColor || '#E65100'}">${product.name}</span>`;
    } else {
      titleHtml = `<span style="color:${product.color || '#082245'}; font-style:${product.isItalic ? 'italic' : 'normal'}">${product.name}</span>`;
    }

    // Centering class for 13th item in 13-item grid
    const isThirteenth = idx === 12 && productList.length === 13;

    const productUrl = getProductUrl(product.slug, idx);

    return `
      <article 
        class="sp-catalogue-card ${isThirteenth ? 'is-centered-last' : ''}" 
        data-product-slug="${product.slug}"
        data-product-url="${productUrl}"
        data-filter-group="${product.filterGroup}"
        tabindex="0"
        aria-label="${product.name} - ${product.generic}"
        style="cursor: pointer;"
      >
        <!-- Top Product Number and Tag -->
        <div class="sp-card-header-row">
          <span class="sp-card-num">${product.productNumber || String(idx + 1).padStart(2, '0')}</span>
          <span class="sp-card-segment-tag">${product.therapeuticSegment}</span>
        </div>

        <!-- Generous Product Image Stage (55-65% visual presence) -->
        <div class="sp-card-media-stage">
          <a href="${productUrl}" class="sp-card-image-link" tabindex="-1" aria-hidden="true">
            <img 
              src="${product.image}" 
              alt="${product.name} packaging box - ${product.generic}" 
              class="sp-card-product-img"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>

        <!-- Product Information Body -->
        <div class="sp-card-content-body">
          <div class="sp-card-title-group">
            <h3 class="sp-card-product-name">
              <a href="${productUrl}" class="sp-card-title-link">
                ${titleHtml}
              </a>
            </h3>
            <p class="sp-card-generic-sub">
              ${product.generic}
            </p>
          </div>

          <p class="sp-card-desc">
            ${product.shortDescription}
          </p>

          <!-- Standardized Bottom CTA -->
          <div class="sp-card-footer">
            <a href="${productUrl}" class="sp-card-view-btn">
              <span>VIEW PRODUCT</span>
              <svg class="sp-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Initializes Products Page Interactive Features:
 * - Instant search (case-insensitive, by name, generic, strength, category)
 * - Category filter chips
 * - Hover 3D micro-tilt (2-3 degrees) and image scaling
 * - Smooth scroll triggers
 */
export function initProductsPage(routerInstance) {
  initNavbarEvents();
  initFooter();

  const searchInput = document.getElementById('productSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const resetBtn = document.getElementById('resetSearchBtn');
  const countBadge = document.getElementById('productCountBadge');
  const gridContainer = document.getElementById('allProductsGrid');
  const noFoundState = document.getElementById('noProductsFoundState');
  const filterBtns = document.querySelectorAll('.sp-filter-btn');

  let currentCategory = 'all';
  let currentSearchQuery = '';

  function filterAndRenderProducts() {
    const q = currentSearchQuery.trim().toLowerCase();

    const filtered = products.filter(item => {
      // Category check
      const matchesCategory = currentCategory === 'all' || item.filterGroup === currentCategory;
      if (!matchesCategory) return false;

      // Search check
      if (!q) return true;

      const nameMatch = item.name.toLowerCase().includes(q);
      const genericMatch = item.generic.toLowerCase().includes(q);
      const compMatch = item.composition.toLowerCase().includes(q);
      const segmentMatch = item.therapeuticSegment.toLowerCase().includes(q);
      const catMatch = item.category.toLowerCase().includes(q);
      const descMatch = item.shortDescription.toLowerCase().includes(q);

      return nameMatch || genericMatch || compMatch || segmentMatch || catMatch || descMatch;
    });

    // Update count badge
    if (countBadge) {
      if (filtered.length === products.length) {
        countBadge.textContent = `${products.length} PRODUCTS`;
      } else {
        countBadge.textContent = `${filtered.length} PRODUCT${filtered.length === 1 ? '' : 'S'} FOUND`;
      }
    }

    // Toggle clear button
    if (clearBtn) {
      clearBtn.style.display = q ? 'flex' : 'none';
    }

    // Render results
    if (filtered.length > 0) {
      if (gridContainer) {
        gridContainer.style.display = 'grid';
        gridContainer.innerHTML = renderProductCardsHtml(filtered);
      }
      if (noFoundState) {
        noFoundState.style.display = 'none';
      }
      bindCardInteractions();
    } else {
      if (gridContainer) {
        gridContainer.style.display = 'none';
      }
      if (noFoundState) {
        noFoundState.style.display = 'block';
      }
    }
  }

  // Instant Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      filterAndRenderProducts();
    });
  }

  // Clear search button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      filterAndRenderProducts();
      searchInput?.focus();
    });
  }

  // Reset button in No Results state
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      currentCategory = 'all';
      filterBtns.forEach(btn => {
        const isAll = btn.getAttribute('data-filter') === 'all';
        btn.classList.toggle('active', isAll);
        btn.setAttribute('aria-pressed', String(isAll));
      });
      filterAndRenderProducts();
    });
  }

  // Category filter tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      filterAndRenderProducts();
    });
  });

  function bindCardInteractions() {
    const cards = document.querySelectorAll('.sp-catalogue-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const targetUrl = card.getAttribute('data-product-url');
        if (targetUrl) {
          window.location.hash = targetUrl;
        }
      });
    });
  }
  bindCardInteractions();

  bindCardInteractions();
}
