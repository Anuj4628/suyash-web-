/**
 * Suyash Pharma - Section 2: Introduction / About Suyash Pharma
 * 
 * Inspired by the editorial collage visual language:
 * - 4-photo asymmetric pharmaceutical collage (Team, Quality Lab, Collaboration, Products)
 * - Deep navy & green architectural backing shapes
 * - Central circular pharmaceutical brand seal
 * - Sophisticated solid Medium Pharma Green background
 * - Deep navy typography with restrained solid Suyash green accents
 * - Clean statistics row and corporate trust pillar marker
 * - Zero gradients throughout
 */

import teamImg from '../../assets/images/about/suyash-corporate-leadership.jpg';
import qualityImg from '../../assets/images/about/suyash-quality-testing.jpg';
import collabImg from '../../assets/images/about/suyash-collaboration.jpg';
import productsImg from '../../assets/images/about/suyash-products.jpg';
import './About.css';

export function renderAbout() {
  return `
    <section 
      class="sp-about-section" 
      id="about" 
      aria-label="About Suyash Pharma"
    >
      <div class="sp-about-container">
        <div class="sp-about-grid">
          
          <!-- LEFT COLUMN: Custom 4-Photo Pharmaceutical Collage (48% Width) -->
          <div class="sp-about-visual-col">
            <div class="sp-collage-wrapper">
              
              <!-- Top-Left Offset Solid Deep Navy Accent Tab -->
              <div class="sp-collage-tab-tl" aria-hidden="true"></div>

              <!-- Bottom-Right Offset Solid Deep Navy Curved Anchor -->
              <div class="sp-collage-bar-br" aria-hidden="true"></div>

              <!-- Subtle Botanical/Leaf Accent Motif (Bottom-Left) -->
              <div class="sp-collage-leaf-accent" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.5 7.5 4 13.5 4.5 19.5 10.5 20 16.5 17.5 22 12 16.5 6.5 12 2 12 2Z" fill="#228B22"/>
                  <path d="M12 2C8 9 9 15 4.5 19.5" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
              </div>

              <!-- 4-Image Asymmetric Composition Grid -->
              <div class="sp-collage-grid">
                
                <!-- 1. Corporate Pharma Leadership Team (Top-Left, Rounded Top-Left) -->
                <div class="sp-collage-cell sp-cell-team">
                  <img 
                    src="${teamImg}" 
                    alt="Suyash Pharma leadership team in corporate strategic boardroom review" 
                    class="sp-collage-img" 
                    loading="lazy" 
                    width="1024" 
                    height="851" 
                  />
                </div>

                <!-- 2. Quality Laboratory Scientist (Top-Right, Rounded Top-Right) -->
                <div class="sp-collage-cell sp-cell-quality">
                  <img 
                    src="${qualityImg}" 
                    alt="Indian pharmaceutical analytical chemist conducting precision testing in quality control lab" 
                    class="sp-collage-img" 
                    loading="lazy" 
                    width="1024" 
                    height="851" 
                  />
                </div>

                <!-- 3. Clinical Research Collaboration (Bottom-Left, Rounded Bottom-Left) -->
                <div class="sp-collage-cell sp-cell-collab">
                  <img 
                    src="${collabImg}" 
                    alt="Indian pharmaceutical research scientists reviewing clinical documents and formulation data" 
                    class="sp-collage-img" 
                    loading="lazy" 
                    width="1024" 
                    height="768" 
                  />
                </div>

                <!-- 4. Actual Product Packaging Showcase (Bottom-Right, Rounded Bottom-Right) -->
                <div class="sp-collage-cell sp-cell-products">
                  <img 
                    src="${productsImg}" 
                    alt="Suyash Pharma actual portfolio formulations - SPTIK, SPNEM, Sfrome, GTVITA" 
                    class="sp-collage-img" 
                    loading="lazy" 
                    width="1200" 
                    height="800" 
                  />
                </div>

              </div>

              <!-- Center Circular Pharmaceutical Brand Seal -->
              <div class="sp-collage-center-seal" aria-hidden="true">
                <div class="sp-seal-circle">
                  <svg class="sp-seal-svg" viewBox="0 0 100 100">
                    <path 
                      id="sealCirclePath" 
                      d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" 
                      fill="none" 
                    />
                    <text class="sp-seal-text">
                      <textPath href="#sealCirclePath" startOffset="50%" text-anchor="middle">
                        • SUYASH PHARMA • HEALTHCARE TRUST •
                      </textPath>
                    </text>
                  </svg>
                  <div class="sp-seal-core">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3v18M3 12h18" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
                      <circle cx="12" cy="12" r="3.2" fill="#228B22" stroke="#FFFFFF" stroke-width="1.4"/>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- RIGHT COLUMN: Editorial Narrative & Statistics (52% Width) -->
          <div class="sp-about-content-col">
            
            <!-- 1. Eyebrow -->
            <div class="sp-about-eyebrow">
              <span class="sp-eyebrow-slash" aria-hidden="true">//</span>
              <span>ABOUT SUYASH PHARMA</span>
            </div>

            <!-- 2. Main Headline -->
            <h2 class="sp-about-heading">
              COMMITTED TO<br />
              BETTER HEALTHCARE.<br />
              BUILT ON <span class="sp-about-highlight">QUALITY.</span>
            </h2>

            <!-- 3. Introduction Copy -->
            <div class="sp-about-body">
              <p class="sp-about-p1">
                Suyash Pharma is focused on delivering quality pharmaceutical solutions with a commitment to reliability, responsible practices and the evolving needs of healthcare.
              </p>
              <p class="sp-about-p2">
                Our approach combines a focused product portfolio with quality-driven processes and long-term relationships across the healthcare ecosystem.
              </p>
            </div>

            <!-- 4. Compact Company Statistics Row (Subtle Dividers) -->
            <div class="sp-about-stats-row" role="list" aria-label="Key company highlights">
              <div class="sp-stat-item" role="listitem">
                <span class="sp-stat-num">15+</span>
                <span class="sp-stat-text">PHARMACEUTICAL PRODUCTS</span>
              </div>
              <div class="sp-stat-divider" aria-hidden="true"></div>
              <div class="sp-stat-item" role="listitem">
                <span class="sp-stat-num">QUALITY</span>
                <span class="sp-stat-text">FOCUSED</span>
              </div>
              <div class="sp-stat-divider" aria-hidden="true"></div>
              <div class="sp-stat-item" role="listitem">
                <span class="sp-stat-num">HEALTHCARE</span>
                <span class="sp-stat-text">DRIVEN</span>
              </div>
            </div>

            <!-- 5. Unique Brand Marker: Trust & Pillar Chain -->
            <div class="sp-about-pillars" aria-label="Strategic Brand Principles">
              <span class="sp-pillar-tag">QUALITY</span>
              <span class="sp-pillar-arrow" aria-hidden="true">→</span>
              <span class="sp-pillar-tag">RELIABILITY</span>
              <span class="sp-pillar-arrow" aria-hidden="true">→</span>
              <span class="sp-pillar-tag">HEALTHCARE</span>
            </div>

            <!-- 6. Primary CTA (Solid Suyash Green -> Deep Navy Hover) -->
            <div class="sp-about-actions">
              <a href="#/products" class="sp-btn-about" id="aboutDiscoverBtn">
                <span>DISCOVER SUYASH PHARMA</span>
                <svg class="sp-btn-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}

/**
 * Initializes viewport entrance observer.
 */
export function initAboutSection() {
  const section = document.querySelector('.sp-about-section');
  if (!section) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    section.classList.add('is-visible');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible');
          observer.unobserve(section);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  observer.observe(section);
}
