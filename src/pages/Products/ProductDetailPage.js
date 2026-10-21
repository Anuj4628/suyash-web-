/**
 * Suyash Pharma - Dedicated Corporate Product Detail Page
 * 
 * Section Sequence:
 * 1. Corporate Sticky Navbar ('products' active)
 * 2. Breadcrumb Navigation (← BACK TO ALL PRODUCTS / Product Name)
 * 3. Product Detail Hero:
 *    - Left: Large uncropped packaging box (object-fit: contain) + relevant thumbnails ONLY (Zero yellow multi-brand images)
 *    - Right: Category/Num -> Product Name -> Generic Molecule -> Description -> Quick Specs -> Aligned Dual CTAs
 * 4. Verified Product Specifications & Overview Section:
 *    - Editorial 6-Block Grid:
 *      01 Formulation & Composition
 *      02 Key Product Information
 *      03 Usage & Administration
 *      04 Therapeutic Category
 *      05 Packaging & Storage
 *      06 Clinical Indications
 * 5. Redesigned Related Products (Contained 3-Card Grid with zero overlap)
 * 6. Interactive Enquiry Modal (Auto-prefilled product name + WhatsApp / Email dispatch)
 * 7. Pre-Footer Corporate CTA ("Let's Build Better Healthcare Connections")
 * 8. Global Corporate Footer & Floating Contact Utilities
 */

import { renderNavbar, initNavbarEvents } from '../../components/Navbar/Navbar.js';
import { renderFooter, initFooter } from '../../components/Footer/Footer.js';
import { products } from '../../data/products.js';
import './ProductDetailPage.css';

export function renderProductDetailPage(slug) {
  // Find product by slug, fallback to first product if not found
  const product = products.find(p => p.slug === slug) || products[0];

  // Resolve related products (strictly exclude current product)
  let relatedList = (product.relatedProductSlugs || [])
    .map(s => products.find(p => p.slug === s && p.id !== product.id))
    .filter(Boolean);

  // If fewer than 3, backfill from other distinct products
  if (relatedList.length < 3) {
    products.forEach(p => {
      if (p.id !== product.id && !relatedList.some(r => r.id === p.id) && relatedList.length < 3) {
        relatedList.push(p);
      }
    });
  }
  relatedList = relatedList.slice(0, 3);

  // Gallery: Only relevant images belonging to this product (NEVER any yellow multi-product reference sheet)
  const gallery = product.galleryImages && product.galleryImages.length > 0 ? product.galleryImages : [product.image];
  const hasMultipleImages = gallery.length > 1;

  const galleryHtml = hasMultipleImages ? `
    <div class="sp-detail-gallery-strip" role="tablist" aria-label="Product image options">
      ${gallery.map((imgUrl, idx) => `
        <button 
          type="button" 
          class="sp-gallery-thumb ${idx === 0 ? 'active' : ''}" 
          data-target-img="${imgUrl}"
          aria-label="${product.name} view ${idx + 1}"
          aria-selected="${idx === 0 ? 'true' : 'false'}"
        >
          <img src="${imgUrl}" alt="${product.name} thumbnail ${idx + 1}" class="sp-thumb-img" />
        </button>
      `).join('')}
    </div>
  ` : '';

  // Formatted brand title
  let brandTitleHtml = product.name;
  if (product.isSplitColor) {
    brandTitleHtml = `<span style="color:${product.prefixColor || '#111827'}">${product.prefixText || product.name}</span><span style="color:${product.suffixColor || '#1E7022'}">${product.suffixText || ''}</span>`;
  } else if (product.isBadge) {
    brandTitleHtml = `<span class="sp-detail-badge-title" style="background:${product.bgColor || '#1B82C7'}; color:${product.color || '#FFFFFF'}; border-color:${product.borderColor || '#E65100'}">${product.name}</span>`;
  } else {
    brandTitleHtml = `<span style="color:${product.color || '#082245'}; font-style:${product.isItalic ? 'italic' : 'normal'}">${product.name}</span>`;
  }

  // Related products cards (strictly contained)
  const relatedCardsHtml = relatedList.map(rel => `
    <article class="sp-related-card" tabindex="0" aria-label="${rel.name} - ${rel.generic}">
      <div class="sp-related-media-box">
        <a href="#/products/${rel.slug}" class="sp-related-img-link" tabindex="-1" aria-hidden="true">
          <img 
            src="${rel.image}" 
            alt="${rel.name} packaging box" 
            class="sp-related-img" 
            loading="lazy" 
          />
        </a>
      </div>
      <div class="sp-related-body">
        <span class="sp-related-segment">${rel.therapeuticSegment}</span>
        <h4 class="sp-related-title">
          <a href="#/products/${rel.slug}">${rel.name}</a>
        </h4>
        <p class="sp-related-generic">${rel.generic}</p>
        <p class="sp-related-desc">${rel.shortDescription}</p>
        <div class="sp-related-footer">
          <a href="#/products/${rel.slug}" class="sp-related-view-btn">
            <span>VIEW PRODUCT</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  return `
    <div class="sp-product-detail-page-wrapper">
      <!-- 1. Corporate Sticky Navbar -->
      ${renderNavbar('products')}

      <main class="sp-product-detail-main">
        
        <!-- 2. Accessible Crawlable Breadcrumb Navigation -->
        <nav class="sp-detail-breadcrumb-bar" aria-label="Breadcrumb">
          <div class="sp-detail-container">
            <div class="sp-breadcrumb-inner">
              <a href="#/" class="sp-back-to-products-btn" aria-label="Suyash Pharma Homepage">
                <span>HOME</span>
              </a>
              <span class="sp-breadcrumb-sep">/</span>
              <a href="#/products" class="sp-back-to-products-btn" id="backToProductsBtn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M19 12H5"></path>
                  <path d="m12 19-7-7 7-7"></path>
                </svg>
                <span>ALL PRODUCTS</span>
              </a>
              <span class="sp-breadcrumb-sep">/</span>
              <a href="#/therapeutic-segments" class="sp-breadcrumb-category" style="text-decoration: none; color: #1B6A3E;">${product.category}</a>
              <span class="sp-breadcrumb-sep">/</span>
              <span class="sp-breadcrumb-current" aria-current="page">${product.name}</span>
            </div>
          </div>
        </nav>

        <!-- ================================================================
             3. PRODUCT DETAIL HERO (BALANCED 48% / 52% SPLIT)
             ================================================================ -->
        <section class="sp-detail-hero-section" aria-labelledby="detailProductTitle">
          <div class="sp-detail-container">
            <div class="sp-detail-hero-grid">
              
              <!-- LEFT: Product Packaging Stage & Thumbnails (48%) -->
              <div class="sp-detail-media-column">
                <div class="sp-detail-main-stage">
                  <img 
                    src="${gallery[0]}" 
                    alt="Suyash Pharma ${product.name} authentic packaging box - ${product.generic}" 
                    class="sp-detail-main-img" 
                    id="detailMainProductImg"
                    loading="eager"
                  />
                </div>
                ${galleryHtml}
              </div>

              <!-- RIGHT: Product Information & CTAs (52%) -->
              <div class="sp-detail-info-column">
                
                <!-- Category & Product Index -->
                <div class="sp-detail-header-meta">
                  <span class="sp-detail-pill-num">PRODUCT ${product.productNumber || '01'}</span>
                  <span class="sp-detail-pill-segment">${product.therapeuticSegment}</span>
                </div>

                <!-- Product Name -->
                <h1 class="sp-detail-title" id="detailProductTitle">
                  ${brandTitleHtml}
                </h1>

                <!-- Generic / Formulation Subtitle -->
                <p class="sp-detail-generic-heading">
                  ${product.generic}
                </p>

                <!-- Professional Overview -->
                <p class="sp-detail-overview-intro">
                  ${product.overview || product.shortDescription}
                </p>

                <!-- Compact Key Specifications Panel -->
                <div class="sp-detail-quick-specs">
                  <div class="sp-quick-spec-item">
                    <span class="sp-spec-label">DOSAGE FORM</span>
                    <strong class="sp-spec-value">${product.dosageForm}</strong>
                  </div>
                  <div class="sp-quick-spec-item">
                    <span class="sp-spec-label">STRENGTH</span>
                    <strong class="sp-spec-value">${product.strength}</strong>
                  </div>
                  <div class="sp-quick-spec-item">
                    <span class="sp-spec-label">ROUTE</span>
                    <strong class="sp-spec-value">${product.route || 'Intravenous / Clinical'}</strong>
                  </div>
                  <div class="sp-quick-spec-item">
                    <span class="sp-spec-label">PACKAGING</span>
                    <strong class="sp-spec-value">${product.packSize}</strong>
                  </div>
                </div>

                <!-- Perfectly Aligned Dual CTA Buttons -->
                <div class="sp-detail-action-row">
                  <button type="button" class="sp-btn-get-query" id="openProductQueryBtn">
                    <span>GET A QUERY</span>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>

                  <a 
                    href="https://wa.me/918928252638?text=Hello%20Suyash%20Pharma,%20I%20am%20inquiring%20about%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.generic)})" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="sp-btn-whatsapp-direct" 
                    aria-label="Direct WhatsApp inquiry for ${product.name}"
                  >
                    <!-- Official Clean WhatsApp SVG -->
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>WHATSAPP US</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        <!-- ================================================================
             4. VERIFIED PRODUCT SPECIFICATIONS & OVERVIEW SECTION
             ================================================================ -->
        <section class="sp-detail-specs-section" aria-labelledby="specsMainHeading">
          <div class="sp-detail-container">
            <header class="sp-specs-section-header">
              <span class="sp-specs-sec-eyebrow">VERIFIED PRODUCT INFORMATION</span>
              <h2 class="sp-specs-sec-title" id="specsMainHeading">PRODUCT SPECIFICATIONS & OVERVIEW</h2>
              <div class="sp-specs-header-divider" aria-hidden="true">
                <span class="sp-divider-dot"></span>
              </div>
              <p class="sp-specs-sec-desc">
                Verified clinical formulations, indications, and packaging standards for healthcare professionals.
              </p>
            </header>

            <div class="sp-specs-grid-layout">
              
              <!-- 01: FORMULATION & COMPOSITION -->
              <article class="sp-editorial-spec-card">
                <div class="sp-spec-card-num-row">
                  <span class="sp-spec-num">01</span>
                  <span class="sp-spec-category-tag">COMPOSITION</span>
                </div>
                <h3 class="sp-spec-card-title">FORMULATION & COMPOSITION</h3>
                <div class="sp-spec-card-divider" aria-hidden="true"></div>
                <p class="sp-spec-card-text">
                  ${product.composition}
                </p>
                <div class="sp-spec-mini-table">
                  <div class="sp-mini-row">
                    <span class="sp-mini-key">Generic Molecule:</span>
                    <strong class="sp-mini-val">${product.generic}</strong>
                  </div>
                  <div class="sp-mini-row">
                    <span class="sp-mini-key">Active Strength:</span>
                    <strong class="sp-mini-val">${product.strength}</strong>
                  </div>
                </div>
              </article>

              <!-- 02: KEY PRODUCT INFORMATION -->
              <article class="sp-editorial-spec-card">
                <div class="sp-spec-card-num-row">
                  <span class="sp-spec-num">02</span>
                  <span class="sp-spec-category-tag">ATTRIBUTES</span>
                </div>
                <h3 class="sp-spec-card-title">KEY PRODUCT INFORMATION</h3>
                <div class="sp-spec-card-divider" aria-hidden="true"></div>
                <div class="sp-spec-mini-table">
                  <div class="sp-mini-row">
                    <span class="sp-mini-key">Dosage Form:</span>
                    <strong class="sp-mini-val">${product.dosageForm}</strong>
                  </div>
                  <div class="sp-mini-row">
                    <span class="sp-mini-key">Administration Route:</span>
                    <strong class="sp-mini-val">${product.route || 'Intravenous / Clinical'}</strong>
                  </div>
                  <div class="sp-mini-row">
                    <span class="sp-mini-key">Therapeutic Segment:</span>
                    <strong class="sp-mini-val">${product.therapeuticSegment}</strong>
                  </div>
                  <div class="sp-mini-row">
                    <span class="sp-mini-key">Clinical Focus:</span>
                    <strong class="sp-mini-val">${product.category}</strong>
                  </div>
                </div>
              </article>

              <!-- 03: USAGE / ADMINISTRATION -->
              <article class="sp-editorial-spec-card">
                <div class="sp-spec-card-num-row">
                  <span class="sp-spec-num">03</span>
                  <span class="sp-spec-category-tag">CLINICAL PROTOCOL</span>
                </div>
                <h3 class="sp-spec-card-title">USAGE & ADMINISTRATION</h3>
                <div class="sp-spec-card-divider" aria-hidden="true"></div>
                <p class="sp-spec-card-text">
                  ${product.administration || 'Administer strictly under the direct guidance of a registered medical practitioner.'}
                </p>
                <div class="sp-spec-alert-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>Prescription Medicine: Schedule H Drug</span>
                </div>
              </article>

              <!-- 04: THERAPEUTIC CATEGORY & OVERVIEW -->
              <article class="sp-editorial-spec-card">
                <div class="sp-spec-card-num-row">
                  <span class="sp-spec-num">04</span>
                  <span class="sp-spec-category-tag">PHARMACOLOGY</span>
                </div>
                <h3 class="sp-spec-card-title">THERAPEUTIC CATEGORY</h3>
                <div class="sp-spec-card-divider" aria-hidden="true"></div>
                <p class="sp-spec-card-text">
                  ${product.overview}
                </p>
              </article>

              <!-- 05: PACKAGING & STORAGE -->
              <article class="sp-editorial-spec-card">
                <div class="sp-spec-card-num-row">
                  <span class="sp-spec-num">05</span>
                  <span class="sp-spec-category-tag">PACKAGING & STABILITY</span>
                </div>
                <h3 class="sp-spec-card-title">PACKAGING / PRESENTATION</h3>
                <div class="sp-spec-card-divider" aria-hidden="true"></div>
                <div class="sp-spec-mini-table">
                  <div class="sp-mini-row">
                    <span class="sp-mini-key">Packaging Format:</span>
                    <strong class="sp-mini-val">${product.packSize}</strong>
                  </div>
                  <div class="sp-mini-row">
                    <span class="sp-mini-key">Storage Instruction:</span>
                    <strong class="sp-mini-val">${product.storage || 'Store below 25°C. Protect from light & moisture.'}</strong>
                  </div>
                </div>
              </article>

              <!-- 06: CLINICAL INDICATIONS (where verified) -->
              <article class="sp-editorial-spec-card">
                <div class="sp-spec-card-num-row">
                  <span class="sp-spec-num">06</span>
                  <span class="sp-spec-category-tag">CLINICAL SCOPE</span>
                </div>
                <h3 class="sp-spec-card-title">INDICATIONS & CLINICAL USE</h3>
                <div class="sp-spec-card-divider" aria-hidden="true"></div>
                ${product.indications && product.indications.length > 0 ? `
                  <ul class="sp-spec-bullets">
                    ${product.indications.map(ind => `<li><span class="sp-bullet-dot"></span><span>${ind}</span></li>`).join('')}
                  </ul>
                ` : `
                  <p class="sp-spec-card-text">
                    Indicated for susceptible bacterial infections as diagnosed by microbiology evaluation and clinical assessment.
                  </p>
                `}
              </article>

            </div>
          </div>
        </section>

        <!-- ================================================================
             5. REDESIGNED RELATED PRODUCTS (3 CONTAINED CARDS)
             ================================================================ -->
        <section class="sp-related-products-section" aria-labelledby="relatedHeading">
          <div class="sp-detail-container">
            <header class="sp-related-header">
              <span class="sp-related-eyebrow">PORTFOLIO RECOMMENDATIONS</span>
              <h2 class="sp-related-main-title" id="relatedHeading">RELATED PRODUCTS</h2>
              <div class="sp-specs-header-divider" aria-hidden="true">
                <span class="sp-divider-dot"></span>
              </div>
              <p class="sp-related-sub">
                Explore other products from our focused pharmaceutical portfolio.
              </p>
            </header>

            <div class="sp-related-grid">
              ${relatedCardsHtml}
            </div>

            <!-- Internal Portfolio Navigation Actions -->
            <div class="sp-detail-nav-actions-row" style="display: flex; justify-content: center; gap: 16px; margin-top: 40px; flex-wrap: wrap;">
              <a href="#/products" class="sp-detail-nav-btn sp-detail-nav-secondary" style="display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: 999px; background-color: #082245; color: #FFFFFF; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.05em; text-decoration: none; transition: transform 0.2s, background-color 0.2s;">
                <span>EXPLORE FULL PRODUCT PORTFOLIO</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>

              <a href="#/contact" class="sp-detail-nav-btn sp-detail-nav-primary" style="display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: 999px; background-color: #1B6A3E; color: #FFFFFF; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.05em; text-decoration: none; transition: transform 0.2s, background-color 0.2s;">
                <span>CONTACT SUYASH PHARMA</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

      </main>

      <!-- ================================================================
           6. PRODUCT QUERY ENQUIRY MODAL
           ================================================================ -->
      <div class="sp-modal-backdrop" id="productQueryModal" aria-hidden="true" style="display: none;">
        <div class="sp-query-modal-dialog" role="dialog" aria-labelledby="queryModalTitle" aria-modal="true">
          
          <button type="button" class="sp-modal-close-btn" id="closeQueryModalBtn" aria-label="Close query form">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Step 1: Input Form -->
          <div class="sp-modal-form-view" id="modalFormView">
            <div class="sp-modal-header">
              <span class="sp-modal-badge">PRODUCT ENQUIRY</span>
              <h3 class="sp-modal-title" id="queryModalTitle">Send Product Query</h3>
              <p class="sp-modal-subtitle">Submit your requirement for official response and commercial details.</p>
            </div>

            <form class="sp-modal-form" id="productEnquiryForm" novalidate>
              <div class="sp-form-group">
                <label for="queryProductName" class="sp-form-label">PRODUCT</label>
                <input 
                  type="text" 
                  id="queryProductName" 
                  class="sp-form-input sp-input-readonly" 
                  value="${product.name} — ${product.generic}" 
                  readonly 
                />
              </div>

              <div class="sp-form-row">
                <div class="sp-form-group">
                  <label for="queryName" class="sp-form-label">YOUR NAME *</label>
                  <input type="text" id="queryName" class="sp-form-input" placeholder="e.g. Dr. Rajesh Sharma" required />
                </div>
                <div class="sp-form-group">
                  <label for="queryCompany" class="sp-form-label">COMPANY / HOSPITAL</label>
                  <input type="text" id="queryCompany" class="sp-form-input" placeholder="e.g. Apollo Healthcare / Pharmacy" />
                </div>
              </div>

              <div class="sp-form-row">
                <div class="sp-form-group">
                  <label for="queryEmail" class="sp-form-label">EMAIL ADDRESS *</label>
                  <input type="email" id="queryEmail" class="sp-form-input" placeholder="e.g. rajesh@healthcare.com" required />
                </div>
                <div class="sp-form-group">
                  <label for="queryPhone" class="sp-form-label">PHONE NUMBER *</label>
                  <input type="tel" id="queryPhone" class="sp-form-input" placeholder="e.g. +91 98200 12345" required />
                </div>
              </div>

              <div class="sp-form-group">
                <label for="queryMessage" class="sp-form-label">MESSAGE / QUERY *</label>
                <textarea id="queryMessage" class="sp-form-textarea" rows="3" placeholder="Please share availability, pricing, packaging and minimum order quantities..."></textarea>
              </div>

              <button type="submit" class="sp-btn-submit-query" id="submitQueryBtn">
                <span>SEND QUERY</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </form>
          </div>

          <!-- Step 2: Channel Choice & Delivery Confirmation -->
          <div class="sp-modal-choice-view" id="modalChoiceView" style="display: none;">
            <div class="sp-choice-header">
              <div class="sp-choice-icon-wrap" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B6A3E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 class="sp-choice-title">HOW WOULD YOU LIKE TO SEND YOUR QUERY?</h3>
              <p class="sp-choice-desc">Choose your preferred direct communication channel to connect with Suyash Pharma:</p>
            </div>

            <div class="sp-choice-buttons">
              <!-- WhatsApp Choice -->
              <button type="button" class="sp-choice-btn sp-choice-wa" id="dispatchWhatsAppBtn">
                <svg class="sp-choice-btn-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <div class="sp-choice-text">
                  <strong>WHATSAPP</strong>
                  <span>Direct Message to 8928252638</span>
                </div>
              </button>

              <!-- Email Choice -->
              <button type="button" class="sp-choice-btn sp-choice-mail" id="dispatchEmailBtn">
                <svg class="sp-choice-btn-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div class="sp-choice-text">
                  <strong>EMAIL</strong>
                  <span>Send to suyashpharma1@gmail.com</span>
                </div>
              </button>
            </div>

            <!-- Email Notification Feedback Notice -->
            <div class="sp-email-status-notice" id="emailStatusNotice" style="display: none;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B6A3E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span>YOUR EMAIL HAS BEEN PREPARED SUCCESSFULLY. Please complete the send from your email application.</span>
            </div>

            <div class="sp-choice-footer">
              <button type="button" class="sp-btn-back-form" id="backToFormBtn">
                ← Edit Form Details
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- 7. Pre-Footer Corporate CTA & Global Footer -->
      ${renderFooter()}
    </div>
  `;
}

/**
 * Initializes Product Detail Interactive Features:
 * - Image thumbnail switching
 * - Modal opening, validation & prefilled submission
 * - WhatsApp URL dispatch to 8928252638
 * - Email mailto dispatch to suyashpharma1@gmail.com
 */
export function initProductDetailPage(slug, routerInstance) {
  initNavbarEvents();
  initFooter();

  const product = products.find(p => p.slug === slug) || products[0];

  // 1. Image Thumbnail Switcher
  const mainImg = document.getElementById('detailMainProductImg');
  const thumbs = document.querySelectorAll('.sp-gallery-thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      thumb.classList.add('active');
      thumb.setAttribute('aria-selected', 'true');
      const targetSrc = thumb.getAttribute('data-target-img');
      if (mainImg && targetSrc) {
        mainImg.style.opacity = '0.35';
        setTimeout(() => {
          mainImg.src = targetSrc;
          mainImg.style.opacity = '1';
        }, 120);
      }
    });
  });

  // 2. Enquiry Modal Handlers
  const modal = document.getElementById('productQueryModal');
  const openBtn = document.getElementById('openProductQueryBtn');
  const closeBtn = document.getElementById('closeQueryModalBtn');
  const form = document.getElementById('productEnquiryForm');
  const formView = document.getElementById('modalFormView');
  const choiceView = document.getElementById('modalChoiceView');
  const backToFormBtn = document.getElementById('backToFormBtn');
  const emailNotice = document.getElementById('emailStatusNotice');

  const dispatchWaBtn = document.getElementById('dispatchWhatsAppBtn');
  const dispatchMailBtn = document.getElementById('dispatchEmailBtn');

  let savedFormData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  };

  function openModal() {
    if (modal) {
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (formView) formView.style.display = 'block';
      if (choiceView) choiceView.style.display = 'none';
      if (emailNotice) emailNotice.style.display = 'none';
      document.getElementById('queryName')?.focus();
    }
  }

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('queryName')?.value.trim();
      const email = document.getElementById('queryEmail')?.value.trim();
      const phone = document.getElementById('queryPhone')?.value.trim();
      const company = document.getElementById('queryCompany')?.value.trim() || 'N/A';
      const message = document.getElementById('queryMessage')?.value.trim() || 'Please share product specifications, pricing, and commercial availability.';

      if (!name || !email || !phone) {
        alert('Please fill in your Name, Email and Phone number.');
        return;
      }

      savedFormData = { name, company, email, phone, message };

      if (formView) formView.style.display = 'none';
      if (choiceView) choiceView.style.display = 'block';
    });
  }

  if (backToFormBtn) {
    backToFormBtn.addEventListener('click', () => {
      if (formView) formView.style.display = 'block';
      if (choiceView) choiceView.style.display = 'none';
      if (emailNotice) emailNotice.style.display = 'none';
    });
  }

  // WhatsApp Dispatch to 8928252638
  if (dispatchWaBtn) {
    dispatchWaBtn.addEventListener('click', () => {
      const waText = 
`Hello Suyash Pharma,

I am interested in the following product:

Product: ${product.name} — ${product.generic}
Name: ${savedFormData.name}
Company: ${savedFormData.company}
Phone: ${savedFormData.phone}
Email: ${savedFormData.email}

Query:
${savedFormData.message}

Please share more information regarding this product.`;

      const waUrl = `https://wa.me/918928252638?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
    });
  }

  // Email Dispatch to suyashpharma1@gmail.com
  if (dispatchMailBtn) {
    dispatchMailBtn.addEventListener('click', () => {
      const subject = `Product Enquiry – ${product.name}`;
      const body = 
`Hello Suyash Pharma Team,

I would like to inquire about the following pharmaceutical product:

Product: ${product.name} (${product.generic})
Strength: ${product.strength}
Dosage Form: ${product.dosageForm}

Client Details:
Name: ${savedFormData.name}
Company / Organization: ${savedFormData.company}
Phone: ${savedFormData.phone}
Email: ${savedFormData.email}

Requirement Details:
${savedFormData.message}

Looking forward to your prompt response.

Regards,
${savedFormData.name}`;

      const mailtoUrl = `mailto:suyashpharma1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      if (emailNotice) {
        emailNotice.style.display = 'flex';
      }
    });
  }
}
