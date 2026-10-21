/**
 * Suyash Pharma - Dedicated Corporate 404 (Not Found) Page
 * 
 * Includes:
 * - Clear Page Not Found messaging
 * - Working crawlable action links:
 *   - Back to Home
 *   - Explore Products
 *   - Contact Suyash Pharma
 * - Reused Navbar & Corporate Footer
 */

import { renderNavbar, initNavbarEvents } from '../../components/Navbar/Navbar.js';
import { renderFooter, initFooter } from '../../components/Footer/Footer.js';
import './NotFoundPage.css';

export function renderNotFoundPage() {
  return `
    <div class="sp-notfound-page-wrapper">
      <!-- 1. Corporate Navbar -->
      ${renderNavbar('home')}

      <main class="sp-notfound-main">
        <div class="sp-notfound-watermark" aria-hidden="true">404</div>

        <div class="sp-notfound-container">
          <div class="sp-notfound-badge">STATUS // 404 NOT FOUND</div>

          <div class="sp-notfound-code">404</div>

          <h1 class="sp-notfound-title">PAGE NOT FOUND</h1>

          <p class="sp-notfound-desc">
            The pharmaceutical page, product formulation, or technical specification you are looking for does not exist or has been relocated. Please explore our verified product portfolio or connect with our support team.
          </p>

          <div class="sp-notfound-actions">
            <a href="#/" class="sp-notfound-btn sp-notfound-btn-primary" id="notFoundHomeBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>BACK TO HOME</span>
            </a>

            <a href="#/products" class="sp-notfound-btn sp-notfound-btn-secondary" id="notFoundProductsBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <span>EXPLORE PRODUCTS</span>
            </a>

            <a href="#/contact" class="sp-notfound-btn sp-notfound-btn-outline" id="notFoundContactBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>CONTACT SUYASH PHARMA</span>
            </a>
          </div>
        </div>
      </main>

      <!-- Reused Corporate Footer -->
      ${renderFooter()}
    </div>
  `;
}

export function initNotFoundPage(routerInstance) {
  initNavbarEvents();
  initFooter();
}
