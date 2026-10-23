/**
 * Suyash Pharma - Hero Carousel Slides Data
 * Real high-resolution editorial pharmaceutical imagery with diagonal art direction.
 * Ordered as requested:
 * 1. Focused Solutions for Healthcare (Studio showcase of SPTIK, SPNEM, Sfrome, GTVITA)
 * 2. Quality Built into Every Step (Quality control lab testing)
 * 3. Your Health Our Priority (Healthcare leadership partnership)
 * 4. Advancing Healthcare with Purpose (Clinical consultation & trust)
 */

import suyashShowcaseImg from '../assets/images/hero/suyash-products-showcase.jpg';
import slideQualityTestingImg from '../assets/images/hero/slide-quality-testing.jpg';
import slideLeadershipPartnershipImg from '../assets/images/hero/slide-leadership-partnership.jpg';
import slide1Img from '../assets/images/hero/slide-1-healthcare-trust.jpg';
import slideAdvancingHealthcareImg from '../assets/images/hero/slide-advancing-healthcare.jpg';

export const heroSlides = [
  {
    id: 1,
    slideNumber: "01",
    slideCode: "SP-PORTFOLIO // 01",
    eyebrow: "OUR PHARMACEUTICAL PORTFOLIO",
    headline: [
      { text: "FOCUSED", highlight: false },
      { text: "SOLUTIONS", highlight: true },
      { text: "FOR HEALTHCARE.", highlight: false }
    ],
    supportingText: "Building a focused portfolio of pharmaceutical formulations designed around evolving healthcare needs.",
    primaryCta: {
      label: "View Product Portfolio",
      href: "#/products"
    },
    secondaryCta: null,
    keywords: ["15+ Products", "Anti-Infective", "Injectable Formulations", "Hospital Grade"],
    image: suyashShowcaseImg,
    imageConfig: {
      fit: "contain",
      position: "center center",
      positionMobile: "center center"
    },
    imageAlt: "Suyash Pharma focused healthcare formulations portfolio - Cefpirome Sulphate (Strome-2gm), Meropenem (SPNEM 2.0gm), Ceftizoxime (SPTIK-1.5GM), Glutathione (GTVITA-SP)",
    caption: "FOCUSED SOLUTIONS FOR HEALTHCARE",
    isShowcase: true
  },
  {
    id: 2,
    slideNumber: "02",
    slideCode: "SP-PRECISION // 02",
    eyebrow: "QUALITY • SAFETY • TRUST",
    headline: [
      { text: "QUALITY", highlight: true },
      { text: "BUILT INTO", highlight: false },
      { text: "EVERY STEP.", highlight: false }
    ],
    supportingText: "At Suyash Pharma, quality remains at the heart of everything we do. We focus on providing reliable pharmaceutical products with consistency, care and a strong commitment to better healthcare.",
    primaryCta: {
      label: "Discover Our Quality",
      href: "#quality"
    },
    secondaryCta: null,
    keywords: ["QUALITY", "CONSISTENCY", "SAFETY", "RELIABILITY"],
    image: slideQualityTestingImg,
    imageConfig: {
      fit: "cover",
      position: "center 22%",
      positionMobile: "center 20%"
    },
    imageAlt: "Pharmaceutical analytical chemist conducting multi-channel precision testing in state-of-the-art quality control laboratory",
    caption: "QUALITY CONTROL & CONSISTENCY",
    isShowcase: false
  },
  {
    id: 3,
    slideNumber: "03",
    slideCode: "SP-ALLIANCE // 03",
    eyebrow: "SUYASH PHARMA",
    headline: [
      { text: "YOUR HEALTH.", highlight: false },
      { text: "OUR", highlight: false, inline: true },
      { text: "PRIORITY.", highlight: true, inline: true }
    ],
    supportingText: "We are committed to making quality healthcare solutions more accessible while earning the trust of every healthcare professional and partner we serve.",
    primaryCta: {
      label: "Partner With Us",
      href: "#contact"
    },
    secondaryCta: {
      label: "Get a Quote",
      href: "#quote"
    },
    keywords: ["Healthcare Leadership", "Strategic Trust", "Patient Priority", "Global Standards"],
    image: slideLeadershipPartnershipImg,
    imageConfig: {
      fit: "cover",
      position: "42% 24%",
      positionMobile: "35% 20%"
    },
    imageAlt: "Suyash Pharma leadership and clinical stakeholders in corporate strategic review boardroom",
    caption: "TRUSTED HEALTHCARE PARTNERSHIP",
    isShowcase: false
  },
  {
    id: 4,
    slideNumber: "04",
    slideCode: "SP-PURPOSE // 04",
    eyebrow: "SUYASH PHARMA",
    headline: [
      { text: "ADVANCING", highlight: false },
      { text: "HEALTHCARE", highlight: true },
      { text: "WITH PURPOSE.", highlight: false }
    ],
    supportingText: "Focused on delivering quality pharmaceutical solutions with reliability, responsibility and a commitment to better healthcare.",
    primaryCta: {
      label: "Explore Our Products",
      href: "#products"
    },
    secondaryCta: {
      label: "Get in Touch",
      href: "#contact"
    },
    keywords: ["Sterile Injectables", "Precision Formulation", "Quality Assured", "Hospital Care"],
    image: slideAdvancingHealthcareImg,
    imageConfig: {
      fit: "cover",
      position: "center center",
      positionMobile: "center center"
    },
    imageAlt: "Sterile pharmaceutical injectable vials and researcher working in precision cleanroom laboratory",
    caption: "ADVANCING HEALTHCARE WITH PURPOSE",
    isShowcase: false
  }
];

