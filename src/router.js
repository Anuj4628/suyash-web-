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

class Router {
  constructor() {
    this.currentPage = null;
    this.isTransitioning = false;
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('popstate', () => this.handleRoute());
    window.addEventListener('DOMContentLoaded', () => this.handleRoute());
    this.handleRoute();
  }

  /**
   * Resolves current route from hash or pathname
   */
  resolvePathAndAnchor() {
    const rawHash = window.location.hash || '';
    let path = '/';
    let anchor = null;

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
    } else {
      // Clean pathname fallback (e.g., from server rewrites or direct history state)
      const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
      if (pathname !== '/index.html' && pathname !== '') {
        path = pathname;
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
      let slug = path.replace('/products/', '').trim();
      // Clean up common URL variations
      slug = slug.replace(/%20/g, '-').replace(/\s+/g, '-').replace(/\/+$/, '');
      
      // Alias mapping if needed
      if (slug === 'ceffto-b' || slug === 'cefftob-injection') slug = 'cefftob';
      if (slug === 'sparazone' || slug === 'sparazone3gm') slug = 'sparazone-3gm';
      if (slug === 'sptik' || slug === 'sptik-1.5gm') slug = 'sptik-1-5gm';
      if (slug === 'tigrixa' || slug === 'tigrixa100') slug = 'tigrixa-100';
      if (slug === 'sulboforte') slug = 'sulboforte-2gm';
      if (slug === 'yspan' || slug === 'yspan40mg') slug = 'yspan-40mg';

      const matchedProduct = products.find(p => p.slug === slug);
      if (matchedProduct) {
        this.loadProductDetail(matchedProduct.slug, anchor);
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

  loadProductDetail(slug, anchor) {
    const pageId = 'product-detail-' + slug;
    const isNewPage = this.currentPage !== pageId;
    this.currentPage = pageId;

    if (isNewPage) {
      const appContainer = document.getElementById('app');
      if (appContainer) {
        appContainer.innerHTML = renderProductDetailPage(slug);
        initProductDetailPage(slug, this);
      }
    }

    applySEOForRoute('product-detail', slug);

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
