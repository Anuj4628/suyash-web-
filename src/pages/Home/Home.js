/**
 * Suyash Pharma - Home Page Foundation
 * Initial scope: Project foundation, Navbar, and 4-Slide Hero section.
 */

import { renderNavbar, initNavbarEvents } from '../../components/Navbar/Navbar.js';
import { renderHero, initHeroCarousel } from '../../components/Hero/Hero.js';
import './Home.css';

export function renderHomePage() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  appContainer.innerHTML = `
    <div class="sp-home-wrapper">
      <!-- 1. Corporate Navbar -->
      ${renderNavbar()}

      <!-- 2. Hero Section (4 Slides) -->
      <main class="sp-main-content">
        ${renderHero()}
      </main>
    </div>
  `;

  // Initialize interactive features
  initNavbarEvents();
  initHeroCarousel();
}
