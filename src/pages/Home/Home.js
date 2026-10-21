/**
 * Suyash Pharma - Home Page Foundation
 * Initial scope: Project foundation, Navbar, and 4-Slide Hero section.
 */

import { renderNavbar, initNavbarEvents } from '../../components/Navbar/Navbar.js';
import { renderHero, initHeroCarousel } from '../../components/Hero/Hero.js';
import { renderProductMarquee, initProductMarquee } from '../../components/ProductMarquee/ProductMarquee.js';
import { renderAbout, initAboutSection } from '../../components/About/About.js';
import { renderOurProducts, initOurProducts } from '../../components/OurProducts/OurProducts.js';
import { renderWhyChooseUs, initWhyChooseUs } from '../../components/WhyChooseUs/WhyChooseUs.js';
import { renderTherapeuticSegments, initTherapeuticSegments } from '../../components/TherapeuticSegments/TherapeuticSegments.js';
import { renderFooter, initFooter } from '../../components/Footer/Footer.js';
import './Home.css';

export function renderHomePage() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  appContainer.innerHTML = `
    <div class="sp-home-wrapper">
      <!-- 1. Corporate Navbar -->
      ${renderNavbar('home')}

      <!-- Main Page Flow -->
      <main class="sp-main-content">
        <!-- Section 1: Hero Section (4 Slides) -->
        ${renderHero()}

        <!-- Continuous Product Name Marquee Bridge -->
        ${renderProductMarquee()}

        <!-- Section 2: Introduction / About Suyash Pharma -->
        ${renderAbout()}

        <!-- Section 3: Our Products Portfolio (8 Products, 4x2 Grid) -->
        ${renderOurProducts()}

        <!-- Section 4: Why Choose Us (Split Architecture & Numbered Markers) -->
        ${renderWhyChooseUs()}

        <!-- Section 5: Therapeutic Segments (3-Column Editorial Chapters) -->
        ${renderTherapeuticSegments()}
      </main>

      <!-- Final CTA, Corporate Footer & Persistent Floating Contact Utilities -->
      ${renderFooter()}
    </div>
  `;

  // Initialize interactive features
  initNavbarEvents();
  initHeroCarousel();
  initProductMarquee();
  initAboutSection();
  initOurProducts();
  initWhyChooseUs();
  initTherapeuticSegments();
  initFooter();
}





