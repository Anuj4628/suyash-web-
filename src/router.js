/**
 * Suyash Pharma - Client-Side Hash Router
 * 
 * Supports:
 * - '#/' or empty or '#home' -> Home page
 * - '#/about' -> Dedicated About Suyash Pharma page
 * - '#/products' -> Dedicated Products Portfolio Catalogue page
 * - '#/products/:slug' -> Dedicated Product Detail page (e.g. #/products/spnem)
 * - '#/quality' -> Home page scrolled to Why Choose Us section
 * - '#contact' or '#/contact' -> Dedicated Corporate Contact page
 */

import { renderHomePage } from './pages/Home/Home.js';
import { renderAboutPage, initAboutPage } from './pages/About/AboutPage.js';
import { renderContactPage, initContactPage } from './pages/Contact/ContactPage.js';
import { renderProductsPage, initProductsPage } from './pages/Products/ProductsPage.js';
import { renderProductDetailPage, initProductDetailPage } from './pages/Products/ProductDetailPage.js';

class Router {
  constructor() {
    this.currentPage = null;
    this.isTransitioning = false;
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('DOMContentLoaded', () => this.handleRoute());
    this.handleRoute();
  }

  handleRoute() {
    const rawHash = window.location.hash || '#/';
    let path = '/';
    let anchor = null;

    if (rawHash.startsWith('#/')) {
      const parts = rawHash.slice(2).split('#');
      path = '/' + (parts[0] || '');
      anchor = parts[1] || null;
    } else if (rawHash.startsWith('#')) {
      const target = rawHash.slice(1);
      if (target === 'about') {
        path = '/about';
      } else if (target === 'contact') {
        path = '/contact';
      } else if (target === 'products' || target === 'all-products') {
        path = '/products';
        anchor = target === 'all-products' ? 'all-products' : null;
      } else if (target === 'our-products') {
        path = '/products';
        anchor = 'all-products';
      } else if (target === 'quality' || target === 'why-choose-us') {
        path = '/quality';
        anchor = 'why-choose-us';
      } else if (target === 'home') {
        path = '/';
      } else {
        anchor = target;
      }
    }

    if (path === '/about') {
      this.loadAbout(anchor);
    } else if (path === '/contact') {
      this.loadContact(anchor);
    } else if (path === '/products') {
      this.loadProducts(anchor);
    } else if (path.startsWith('/products/')) {
      const slug = path.replace('/products/', '').trim();
      this.loadProductDetail(slug, anchor);
    } else if (path === '/quality') {
      this.loadHomeSection('why-choose-us');
    } else {
      this.loadHome(anchor);
    }
  }

  loadHome(anchor) {
    const isNewPage = this.currentPage !== 'home';
    this.currentPage = 'home';

    if (isNewPage) {
      renderHomePage();
    }

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

  loadHomeSection(sectionId) {
    const isNewPage = this.currentPage !== 'home';
    this.currentPage = 'home';

    if (isNewPage) {
      renderHomePage();
    }

    setTimeout(() => {
      const el = document.getElementById(sectionId) || document.getElementById('our-products');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, isNewPage ? 140 : 20);
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
}

export const router = new Router();
