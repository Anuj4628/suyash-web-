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
import slide2Img from '../assets/images/hero/slide-2-quality-lab.jpg';
import slide4Img from '../assets/images/hero/slide-4-partnership.jpg';
import slide1Img from '../assets/images/hero/slide-1-healthcare-trust.jpg';

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
      href: "#products"
    },
    secondaryCta: null,
    keywords: ["15+ Products", "Anti-Infective", "Injectable Formulations", "Hospital Grade"],
    image: suyashShowcaseImg,
    imageConfig: {
      fit: "cover",
      position: "center center",
      positionMobile: "center center"
    },
    imageAlt: "Suyash Pharma focused healthcare formulations portfolio - SPTIK-1.5GM, SPNEM 2.0gm, Sfrome-2gm, GTVITA-SP",
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
    supportingText: "From product development to delivery, our approach is guided by consistency, quality-focused processes and responsible pharmaceutical practices.",
    primaryCta: {
      label: "Discover Our Quality",
      href: "#quality"
    },
    secondaryCta: null,
    keywords: ["QUALITY", "CONSISTENCY", "SAFETY", "RELIABILITY"],
    image: slide2Img,
    imageConfig: {
      fit: "cover",
      position: "center center",
      positionMobile: "center center"
    },
    imageAlt: "Pharmaceutical scientist performing quality-control analysis in advanced testing laboratory",
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
    supportingText: "Committed to building trusted pharmaceutical partnerships through quality-focused products, responsible practices and long-term relationships.",
    primaryCta: {
      label: "Partner With Us",
      href: "#contact"
    },
    secondaryCta: {
      label: "Get a Quote",
      href: "#quote"
    },
    image: slide4Img,
    imageConfig: {
      fit: "cover",
      position: "center center",
      positionMobile: "center center"
    },
    imageAlt: "Pharmaceutical leadership and healthcare partners in clinical research collaboration",
    caption: "TRUSTED HEALTHCARE PARTNERSHIP",
    isShowcase: false
  },
  {
    id: 4,
    slideNumber: "04",
    slideCode: "SP-CLINICAL // 04",
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
    image: slide1Img,
    imageConfig: {
      fit: "cover",
      position: "center center",
      positionMobile: "center center"
    },
    imageAlt: "Authentic healthcare specialist consulting attentively with patient in clean clinical office",
    caption: "HUMAN HEALTH & TRUST",
    isShowcase: false
  }
];

