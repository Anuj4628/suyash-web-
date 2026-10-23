/**
 * Suyash Pharma - Universal SEO-Optimized Client-Side Router
 * 
 * Supports both clean URLs (pathnames) and hash-based URLs:
 * - '/' or '#/' -> Home
 * - '/about' or '#/about' -> About Suyash Pharma
 * - '/products' or '#/products' -> Complete Products Portfolio
 * - '/products/:slug' or '#/products/:slug' -> Verified Product Detail Page
 * - '/quality' or '#/quality' -> Dedicated Quality Assurance Page
 * - '/therapeutic-segments' or '#/therapeutic-segments' -> Dedicated Therapeutic Segments Page
 * - '/contact' or '#/contact' -> Dedicated Corporate Contact Page
 * - Any unrecognized path or nonexistent product slug -> Custom 404 Page (with noindex header)
 * 
 * Dynamically synchronizes document title, meta description, canonical link,
 * Open Graph, Twitter cards, Organization, LocalBusiness, and Product JSON-LD schemas.
 */

import { renderHomePage } from './pages/Home/Home.js';
import { renderAboutPage, initAboutPage } from './pages/About/AboutPage.js';
import { renderContactPage, initContactPage } from './pages/Contact/ContactPage.js';
import { renderProductsPage, initProductsPage } from './pages/Products/ProductsPage.js';
import { renderProductDetailPage, initProductDetailPage } from './pages/Products/ProductDetailPage.js';
import { renderQualityPage, initQualityPage } from './pages/Quality/QualityPage.js';
import { renderTherapeuticSegmentsPage, initTherapeuticSegmentsPage } from './pages/TherapeuticSegments/TherapeuticSegmentsPage.js';
import { renderNotFoundPage, initNotFoundPage } from './pages/NotFound/NotFoundPage.js';
import { products } from './data/products.js';
import { applySEOForRoute } from './utils/seo.js';
import { getSeoKeyForIndex } from './data/seoKeys.js';

class Router {
  constructor() {
    this.currentPage = null;
    this.isTransitioning = false;
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('popstate', () => this.handleRoute());
    
    // Global link delegation for clean HTML5 History API navigation
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      // Skip external links, new tabs, tel:, mailto:
      if (
        link.target === '_blank' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        e.ctrlKey || e.metaKey || e.shiftKey
      ) {
        return;
      }

      // Handle pure page anchor on the active page (e.g. #contact-form)
      if (href.startsWith('#') && !href.startsWith('#/')) {
        const anchorId = href.slice(1);
        const el = document.getElementById(anchorId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }

      // Clean SPA navigation
      e.preventDefault();
      let targetPath = href;
      if (targetPath.startsWith('#/')) {
        targetPath = targetPath.slice(1); // '#/products' -> '/products'
      }
      window.history.pushState(null, '', targetPath);
      this.handleRoute();
    });

    this.handleRoute();
  }

  /**
   * Resolves current route from pathname or legacy hash
   */
  resolvePathAndAnchor() {
    const rawHash = window.location.hash || '';
    const rawPathname = window.location.pathname.replace(/\/+$/, '') || '/';
    let path = '/';
    let anchor = null;

    if (rawPathname !== '/index.html' && rawPathname !== '') {
      path = rawPathname;
    }

    if (rawHash.startsWith('#/')) {
      const parts = rawHash.slice(2).split('#');
      path = '/' + (parts[0] || '').replace(/\/+$/, '');
      anchor = parts[1] || null;
    } else if (rawHash.startsWith('#')) {
      const target = rawHash.slice(1).toLowerCase();
      if (target === 'about') {
        path = '/about';
      } else if (target === 'contact') {
        path = '/contact';
      } else if (target === 'products' || target === 'all-products' || target === 'our-products') {
        path = '/products';
        anchor = target === 'all-products' ? 'all-products' : null;
      } else if (target === 'quality') {
        path = '/quality';
      } else if (target === 'therapeutic-segments') {
        path = '/therapeutic-segments';
      } else if (target === 'why-choose-us') {
        path = '/';
        anchor = 'why-choose-us';
      } else if (target === 'home') {
        path = '/';
      } else {
        anchor = target;
      }
    }

    // Normalize path to lowercase
    path = path.toLowerCase() || '/';

    return { path, anchor };
  }

  handleRoute() {
    const { path, anchor } = this.resolvePathAndAnchor();

    if (path === '/' || path === '/home') {
      this.loadHome(anchor);
    } else if (path === '/about') {
      this.loadAbout(anchor);
    } else if (path === '/contact') {
      this.loadContact(anchor);
    } else if (path === '/products') {
      this.loadProducts(anchor);
    } else if (path.startsWith('/products/')) {
      const rawSub = path.replace('/products/', '').trim();
      const cleanSub = rawSub.replace(/%20/g, '-').replace(/\s+/g, '-').replace(/\/+$/, '');
      const segments = cleanSub.split('?')[0].split('/').filter(Boolean);

      const normalizeSlug = (s) => {
        if (!s) return '';
        let str = s.toLowerCase();
        if (str === 'ceffto-b' || str === 'cefftob-injection') return 'cefftob';
        if (str === 'sparazone' || str === 'sparazone3gm') return 'sparazone-3gm';
        if (str === 'sptik' || str === 'sptik-1.5gm') return 'sptik-1-5gm';
        if (str === 'tigrixa' || str === 'tigrixa100') return 'tigrixa-100';
        if (str === 'sulboforte') return 'sulboforte-2gm';
        if (str === 'yspan' || str === 'yspan40mg') return 'yspan-40mg';
        return str;
      };

      let matchedProduct = null;
      let activeSeoKey = null;

      // 1. Try segment 0 as product slug
      if (segments.length >= 1) {
        const testSlug0 = normalizeSlug(segments[0]);
        matchedProduct = products.find(p => p.slug === testSlug0);
        if (matchedProduct && segments[1]) {
          activeSeoKey = segments[1];
        }
      }

      // 2. Try segment 1 as product slug (if segment 0 was seo key)
      if (!matchedProduct && segments.length >= 2) {
        const testSlug1 = normalizeSlug(segments[1]);
        matchedProduct = products.find(p => p.slug === testSlug1);
        if (matchedProduct) {
          activeSeoKey = segments[0];
        }
      }

      // 3. Try compound slug like 'cefftob-pharmaceutical-company-maharashtra'
      if (!matchedProduct && segments.length >= 1) {
        const fullSeg = segments[0];
        matchedProduct = products.find(p => fullSeg.startsWith(p.slug + '-'));
        if (matchedProduct) {
          activeSeoKey = fullSeg.slice(matchedProduct.slug.length + 1);
        }
      }

      // Check query param for seo key as well
      const rawHashOrSearch = (window.location.hash || '') + (window.location.search || '');
      const seoMatch = rawHashOrSearch.match(/[?&]seo=([^&#]+)/i);
      if (seoMatch && seoMatch[1]) {
        activeSeoKey = decodeURIComponent(seoMatch[1]);
      }

      if (matchedProduct) {
        // If no SEO key in URL, assign the product's designated alternating SEO key
        if (!activeSeoKey) {
          const pIdx = products.findIndex(p => p.slug === matchedProduct.slug);
          activeSeoKey = getSeoKeyForIndex(pIdx >= 0 ? pIdx : 0);
        }
        this.loadProductDetail(matchedProduct.slug, anchor, activeSeoKey);
      } else {
        this.loadNotFound();
      }
    } else if (path === '/quality') {
      this.loadQuality(anchor);
    } else if (path === '/therapeutic-segments') {
      this.loadTherapeuticSegments(anchor);
    } else {
      // 404 for unrecognized routes
      this.loadNotFound();
    }
  }

  loadHome(anchor) {
    const isNewPage = this.currentPage !== 'home';
    this.currentPage = 'home';

    if (isNewPage) {
      renderHomePage();
    }

    applySEOForRoute('home');

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, isNewPage ? 120 : 20);
    } else if (isNewPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  loadAbout(anchor) {
    const isNewPage = this.currentPage !== 'about';
    this.currentPage = 'about';

    if (isNewPage) {
      const appContainer = document.getElementById('app');
      if (appContainer) {
        appContainer.innerHTML = renderAboutPage();
        initAboutPage(this);
      }
    }

    applySEOForRoute('about');

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, isNewPage ? 120 : 20);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  loadContact(anchor) {
    const isNewPage = this.currentPage !== 'contact';
    this.currentPage = 'contact';

    if (isNewPage) {
      const appContainer = document.getElementById('app');
      if (appContainer) {
        appContainer.innerHTML = renderContactPage();
        initContactPage(this);
      }
    }

    applySEOForRoute('contact');

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, isNewPage ? 120 : 20);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  loadProducts(anchor) {
    const isNewPage = this.currentPage !== 'products';
    this.currentPage = 'products';

    if (isNewPage) {
      const appContainer = document.getElementById('app');
      if (appContainer) {
        appContainer.innerHTML = renderProductsPage();
        initProductsPage(this);
      }
    }

    applySEOForRoute('products');

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, isNewPage ? 120 : 20);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  loadProductDetail(slug, anchor, seoKey = null) {
    const pageId = 'product-detail-' + slug + (seoKey ? '-' + seoKey : '');
    const isNewPage = this.currentPage !== pageId;
    this.currentPage = pageId;

    if (isNewPage) {
      const appContainer = document.getElementById('app');
      if (appContainer) {
        appContainer.innerHTML = renderProductDetailPage(slug, seoKey);
        initProductDetailPage(slug, this, seoKey);
      }
    }

    applySEOForRoute('product-detail', slug, seoKey);

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, isNewPage ? 120 : 20);
    }
  }

  loadQuality(anchor) {
    const isNewPage = this.currentPage !== 'quality';
    this.currentPage = 'quality';

    if (isNewPage) {
      const appContainer = document.getElementById('app');
      if (appContainer) {
        appContainer.innerHTML = renderQualityPage();
        initQualityPage(this);
      }
    }

    applySEOForRoute('quality');

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, isNewPage ? 120 : 20);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  loadTherapeuticSegments(anchor) {
    const isNewPage = this.currentPage !== 'therapeutic-segments';
    this.currentPage = 'therapeutic-segments';

    if (isNewPage) {
      const appContainer = document.getElementById('app');
      if (appContainer) {
        appContainer.innerHTML = renderTherapeuticSegmentsPage();
        initTherapeuticSegmentsPage(this);
      }
    }

    applySEOForRoute('therapeutic-segments');

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, isNewPage ? 120 : 20);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  loadNotFound() {
    this.currentPage = 'not-found';
    const appContainer = document.getElementById('app');
    if (appContainer) {
      appContainer.innerHTML = renderNotFoundPage();
      initNotFoundPage(this);
    }
    applySEOForRoute('not-found');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export const router = new Router();
