/**
 * Suyash Pharma - Redesigned Corporate Navbar Component
 * Features:
 * - Noticeably larger, complete, uncropped original brand logo with tagline
 * - Sophisticated pharmaceutical layered background with brand navy/green organic corner accents
 * - Genuinely centered navigation links (Home, About, Products, Quality, Contact)
 * - Refined green active pill/indicator for 'Home'
 * - Premium Get Quote pill CTA with dual-accent depth and clean right-arrow icon
 * - Fully responsive with seamless mobile drawer navigation
 */

import logoUrl from '../../assets/images/logo/suyash-pharma-logo.png';
import './Navbar.css';

export function renderNavbar(activePage = 'home') {
  const navItems = [
    { label: 'Home', href: '/', active: activePage === 'home' },
    { label: 'About', href: '/about', active: activePage === 'about' },
    { label: 'Products', href: '/products', active: activePage === 'products' },
    { label: 'Quality', href: '/quality', active: activePage === 'quality' },
    { label: 'Contact', href: '/contact', active: activePage === 'contact' },
  ];

  const headerHtml = `
    <header class="sp-header" id="mainHeader">
      <!-- Sophisticated Pharmaceutical Organic Curve Accents (Edges) -->
      <div class="sp-nav-decor-wrapper" aria-hidden="true">
        <!-- Left Organic Curve (Brand Green & Navy) -->
        <svg class="sp-nav-decor sp-decor-left" viewBox="0 0 260 104" preserveAspectRatio="none">
          <path d="M0,0 L110,0 C75,45 35,80 0,104 Z" fill="url(#spNavyGradL)" opacity="0.95" />
          <path d="M0,28 C50,54 75,80 90,104 L0,104 Z" fill="url(#spGreenGradL)" opacity="0.92" />
          <defs>
            <linearGradient id="spNavyGradL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#05142E" />
              <stop offset="100%" stop-color="#0B2B5C" />
            </linearGradient>
            <linearGradient id="spGreenGradL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1B6A14" />
              <stop offset="100%" stop-color="#24881A" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Right Organic Curve (Brand Green & Navy) -->
        <svg class="sp-nav-decor sp-decor-right" viewBox="0 0 240 104" preserveAspectRatio="none">
          <path d="M240,0 L140,0 C175,42 205,78 240,104 Z" fill="url(#spGreenGradR)" opacity="0.90" />
          <path d="M240,32 C195,54 175,80 162,104 L240,104 Z" fill="url(#spNavyGradR)" opacity="0.95" />
          <defs>
            <linearGradient id="spNavyGradR" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#05142E" />
              <stop offset="100%" stop-color="#0B2B5C" />
            </linearGradient>
            <linearGradient id="spGreenGradR" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1B6A14" />
              <stop offset="100%" stop-color="#24881A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Main Navigation Layout Container (3-Column Grid for True Center Alignment) -->
      <div class="sp-nav-container">
        <!-- 1. LEFT: Prominent Brand Logo (Original Asset, Complete with Tagline) -->
        <div class="sp-nav-col sp-nav-col-left">
          <a href="/" class="sp-brand" aria-label="Suyash Pharma - Home">
            <img 
              src="${logoUrl}" 
              alt="Suyash Pharma - Your Health, Our Priority" 
              class="sp-brand-logo"
              width="155"
              height="100"
              loading="eager"
            />
          </a>
        </div>

        <!-- 2. CENTER: Main Navigation Links (Visually and Mathematically Centered) -->
        <nav class="sp-nav-col sp-nav-col-center" aria-label="Main Navigation">
          <ul class="sp-nav-list">
            ${navItems.map(item => `
              <li class="sp-nav-item">
                <a 
                  href="${item.href}" 
                  class="sp-nav-link ${item.active ? 'active' : ''}"
                  data-nav-target="${item.label.toLowerCase()}"
                >
                  <span class="sp-nav-text">${item.label}</span>
                  <span class="sp-link-indicator" aria-hidden="true"></span>
                </a>
              </li>
            `).join('')}
          </ul>
        </nav>

        <!-- 3. RIGHT: Premium Get Quote CTA Button -->
        <div class="sp-nav-col sp-nav-col-right">
          <a href="/contact" class="sp-nav-cta" id="navGetQuoteBtn">
            <span>Get Quote</span>
            <svg class="sp-nav-cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button 
            type="button" 
            class="sp-mobile-toggle" 
            id="mobileMenuToggle" 
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="mobileDrawer"
          >
            <span class="sp-toggle-bar"></span>
            <span class="sp-toggle-bar"></span>
            <span class="sp-toggle-bar"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="sp-mobile-drawer" id="mobileDrawer" aria-hidden="true">
        <ul class="sp-mobile-list">
          ${navItems.map(item => `
            <li>
              <a 
                href="${item.href}" 
                class="sp-mobile-link ${item.active ? 'active' : ''}"
                data-nav-target="${item.label.toLowerCase()}"
              >
                <span>${item.label}</span>
                <span class="sp-mobile-dot" aria-hidden="true"></span>
              </a>
            </li>
          `).join('')}
        </ul>
        <a href="/contact" class="sp-nav-cta sp-mobile-cta" id="mobileGetQuoteBtn">
          <span>Get Quote</span>
          <svg class="sp-nav-cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  `;

  return headerHtml;
}

export function initNavbarEvents() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const header = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.sp-nav-link, .sp-mobile-link');

  if (!toggleBtn || !drawer) return;

  function setMobileMenu(open) {
    toggleBtn.classList.toggle('is-open', open);
    toggleBtn.setAttribute('aria-expanded', String(open));
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    setMobileMenu(!isOpen);
  });

  // Close mobile drawer when clicking any link and update visual active state
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      const target = link.getAttribute('data-nav-target');
      document.querySelectorAll(`[data-nav-target="${target}"]`).forEach(el => el.classList.add('active'));
      
      setMobileMenu(false);
    });
  });

  // Close drawer if user clicks outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('is-open') && 
        !drawer.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      setMobileMenu(false);
    }
  });

  // Handle header elevation on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}
