/**
 * Suyash Pharma - Advanced Technical & On-Page SEO Management Engine
 * 
 * Provides:
 * - Dynamic document title management
 * - Dynamic meta description, keywords & robots tags
 * - Dynamic canonical link management (single source of truth)
 * - Open Graph & Twitter / X card metadata
 * - JSON-LD Structured Data:
 *   - Organization schema (Suyash Pharma entity disambiguation)
 *   - LocalBusiness / MedicalBusiness schema (Nallasopara East, Maharashtra)
 *   - Product schema for all 13 authentic formulations (zero fake ratings/prices)
 *   - BreadcrumbList schema on all indexable pages
 *   - FAQPage schema on relevant pages
 */

import { products } from '../data/products.js';
import { formatSeoKey } from '../data/seoKeys.js';

export const BASE_URL = 'https://suyashpharma.com';
export const BRAND_NAME = 'Suyash Pharma';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logo/suyash-pharma-logo.png`;

export const PRODUCT_PUBLIC_IMAGES = {
  "cefftob": `${BASE_URL}/images/products/cefftob-ceftazidime-tobramycin-injection.png`,
  "sptik-1-5gm": `${BASE_URL}/images/products/sptik-ceftizoxime-1-5gm-injection.png`,
  "tigrixa-100": `${BASE_URL}/images/products/tigrixa-100-tigecycline-injection.png`,
  "spnem": `${BASE_URL}/images/products/spnem-meropenem-2gm-injection.png`,
  "gtvita-sp": `${BASE_URL}/images/products/gtvita-sp-glutathione-vitamin-c-injection.png`,
  "sparazone-3gm": `${BASE_URL}/images/products/sparazone-3gm-cefoperazone-sulbactam-injection.png`,
  "spnem-sb": `${BASE_URL}/images/products/spnem-sb-meropenem-sulbactam-750mg-injection.png`,
  "sulboforte-2gm": `${BASE_URL}/images/products/sulboforte-2gm-sulbactam-injection.png`,
  "spnem-tz": `${BASE_URL}/images/products/spnem-tz-meropenem-tazobactam-injection.png`,
  "spnem-sb-1-5gm": `${BASE_URL}/images/products/spnem-sb-1-5gm-meropenem-sulbactam-injection.png`,
  "yspan-40mg": `${BASE_URL}/images/products/yspan-40mg-pantoprazole-injection.png`,
  "sfrome-2gm": `${BASE_URL}/images/products/sfrome-2gm-cefpirome-injection.png`,
  "cpfoxime-500": `${BASE_URL}/images/products/cpfoxime-500-cefuroxime-axetil-tablets.png`
};

// Verified Official Corporate Entity Data
export const CORPORATE_ENTITY = {
  name: "Suyash Pharma",
  legalName: "Suyash Pharma",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/suyash-pharma-logo.png`,
  telephone: "+91-8928252638",
  alternateTelephone: "+91-7798917108",
  email: "suyashpharma1@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SHOP NO. A/02,03 GROUND FLOOR, MAX AVENUE CHS LTD, OSTWAL NAGARI",
    addressLocality: "NALLASOPARA EAST",
    addressRegion: "Maharashtra",
    postalCode: "401209",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.4184",
    longitude: "72.8193"
  },
  areaServed: [
    "India",
    "Maharashtra",
    "Palghar",
    "Vasai-Virar",
    "Mumbai",
    "Nallasopara"
  ]
};

/**
 * Removes any previously injected dynamic JSON-LD schemas
 */
function clearDynamicSchemas() {
  const existingSchemas = document.querySelectorAll('script[data-dynamic-seo="true"]');
  existingSchemas.forEach(el => el.remove());
}

/**
 * Injects a JSON-LD structured data script element into the document head
 */
function injectJsonLd(schemaObj) {
  if (!schemaObj) return;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-dynamic-seo', 'true');
  script.textContent = JSON.stringify(schemaObj);
  document.head.appendChild(script);
}

/**
 * Updates or creates a <meta> tag by name or property
 */
function setMetaTag(attributeName, attributeValue, content) {
  let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attributeName, attributeValue);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content || '');
}

/**
 * Updates or creates the canonical link tag
 */
function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

/**
 * Core method to update all head metadata for any given route
 */
export function setPageSEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  schemas = []
}) {
  // 1. Page Title
  document.title = title;

  // 2. Standard Meta Tags
  setMetaTag('name', 'description', description);
  if (keywords) {
    setMetaTag('name', 'keywords', keywords);
  }
  setMetaTag('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMetaTag('name', 'author', BRAND_NAME);

  // 3. Canonical URL
  setCanonical(canonicalUrl);

  // 4. Open Graph Meta Tags
  setMetaTag('property', 'og:site_name', BRAND_NAME);
  setMetaTag('property', 'og:type', ogType);
  setMetaTag('property', 'og:title', ogTitle || title);
  setMetaTag('property', 'og:description', ogDescription || description);
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:locale', 'en_IN');

  // 5. Twitter / X Card Meta Tags
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', ogTitle || title);
  setMetaTag('name', 'twitter:description', ogDescription || description);
  setMetaTag('name', 'twitter:image', ogImage);

  // 6. JSON-LD Schemas
  clearDynamicSchemas();
  if (Array.isArray(schemas)) {
    schemas.forEach(s => injectJsonLd(s));
  }
}

/**
 * Schema Generators
 */

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": CORPORATE_ENTITY.name,
    "legalName": CORPORATE_ENTITY.legalName,
    "url": BASE_URL,
    "logo": CORPORATE_ENTITY.logo,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": CORPORATE_ENTITY.telephone,
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": CORPORATE_ENTITY.alternateTelephone,
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    ],
    "address": CORPORATE_ENTITY.address,
    "sameAs": []
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    "name": CORPORATE_ENTITY.name,
    "url": BASE_URL,
    "logo": CORPORATE_ENTITY.logo,
    "telephone": CORPORATE_ENTITY.telephone,
    "email": CORPORATE_ENTITY.email,
    "address": CORPORATE_ENTITY.address,
    "geo": CORPORATE_ENTITY.geo,
    "priceRange": "$$",
    "openingHours": "Mo-Sa 09:00-18:00",
    "areaServed": CORPORATE_ENTITY.areaServed
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${BASE_URL}${item.url}` : undefined
    }))
  };
}

export function getProductSchema(product) {
  if (!product) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/products/${product.slug}#product`,
    "name": `${product.name} — ${product.generic}`,
    "image": PRODUCT_PUBLIC_IMAGES[product.slug] || DEFAULT_OG_IMAGE,
    "description": product.overview || product.shortDescription,
    "sku": `SP-${product.slug.toUpperCase()}`,
    "brand": {
      "@type": "Brand",
      "name": BRAND_NAME
    },
    "category": product.category,
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Generic Molecule",
        "value": product.generic
      },
      {
        "@type": "PropertyValue",
        "name": "Dosage Form",
        "value": product.dosageForm
      },
      {
        "@type": "PropertyValue",
        "name": "Strength",
        "value": product.strength
      },
      {
        "@type": "PropertyValue",
        "name": "Pack Size",
        "value": product.packSize
      },
      {
        "@type": "PropertyValue",
        "name": "Therapeutic Segment",
        "value": product.therapeuticSegment
      }
    ]
  };
}

export function getFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

/**
 * Route-Specific SEO Dispatcher
 */
export function applySEOForRoute(routeName, param = null, seoKey = null) {
  switch (routeName) {
    case 'home': {
      setPageSEO({
        title: "Suyash Pharma | Pharmaceutical Products & Healthcare Solutions in India",
        description: "Suyash Pharma is a trusted pharmaceutical company in India delivering high-quality injectable formulations, antibiotics, carbapenems, and healthcare solutions with clinical reliability.",
        keywords: "Suyash Pharma, Suyash Pharma India, pharmaceutical company India, pharma company Maharashtra, pharmaceutical products India, pharmaceutical injections, Indian pharmaceutical company, hospital injection medicines, Nallasopara pharma",
        canonicalUrl: `${BASE_URL}/`,
        ogTitle: "Suyash Pharma | Pharmaceutical Products & Healthcare Solutions in India",
        ogDescription: "Discover Suyash Pharma's focused portfolio of quality injectable antibiotics, hospital-grade formulations and healthcare solutions in India.",
        ogType: "website",
        schemas: [
          getOrganizationSchema(),
          getLocalBusinessSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "/" }
          ])
        ]
      });
      break;
    }

    case 'about': {
      setPageSEO({
        title: "About Suyash Pharma | Pharmaceutical Company in India",
        description: "Learn about Suyash Pharma, an Indian pharmaceutical company dedicated to purpose-driven healthcare, dependable pharmaceutical solutions, and long-term partnerships.",
        keywords: "About Suyash Pharma, Suyash Pharma company, Suyash Pharma India, Indian pharmaceutical company, pharmaceutical healthcare company, pharma company Maharashtra, pharmaceutical supplier India",
        canonicalUrl: `${BASE_URL}/about`,
        ogTitle: "About Suyash Pharma | Purpose-Driven Pharmaceutical Solutions",
        ogDescription: "Committed to quality pharmaceutical solutions with reliability, responsibility and a shared commitment to healthcare advancement.",
        ogType: "website",
        schemas: [
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about" }
          ])
        ]
      });
      break;
    }

    case 'products': {
      const productFaqs = [
        {
          q: "What pharmaceutical products does Suyash Pharma offer?",
          a: "Suyash Pharma offers a focused portfolio of pharmaceutical products including sterile injectable antibiotics (such as Meropenem, Ceftazidime + Tobramycin, Ceftizoxime, Tigecycline, Cefoperazone + Sulbactam), gastrointestinal formulations (Pantoprazole 40mg), and supportive therapies (Reduced Glutathione 1200mg)."
        },
        {
          q: "What dosage forms are available in the Suyash Pharma portfolio?",
          a: "The portfolio primarily focuses on sterile powder for injection (IV/IM), lyophilized vials for infusion, and select oral solid dosage formulations like Cefuroxime Axetil tablets."
        },
        {
          q: "How can healthcare institutions or distributors inquire about Suyash Pharma products?",
          a: "Inquiries can be submitted directly through the website enquiry forms, via phone support at +91-8928252638 / +91-7798917108, or by emailing suyashpharma1@gmail.com."
        },
        {
          q: "Where does Suyash Pharma supply pharmaceutical products?",
          a: "Suyash Pharma supplies quality pharmaceutical formulations across Maharashtra, Mumbai, Vasai-Virar, Palghar, and healthcare institutions across India."
        }
      ];

      setPageSEO({
        title: "Suyash Pharma Products | Pharmaceutical & Injectable Product Portfolio",
        description: "Explore the Suyash Pharma product portfolio featuring sterile powder for injection, carbapenems, cephalosporins, and gastrointestinal healthcare products in India.",
        keywords: "Suyash Pharma products, pharmaceutical products, pharmaceutical product portfolio, pharma products India, pharmaceutical injection products, injectable pharmaceutical products, antibiotic injections India, sterile powder for injection",
        canonicalUrl: `${BASE_URL}/products`,
        ogTitle: "Suyash Pharma Products | Injectable & Pharmaceutical Portfolio",
        ogDescription: "Browse verified hospital-grade injectable formulations, carbapenem combinations, cephalosporins, and clinical healthcare products by Suyash Pharma.",
        ogType: "website",
        schemas: [
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Products", url: "/products" }
          ]),
          getFaqSchema(productFaqs)
        ]
      });
      break;
    }

    case 'quality': {
      setPageSEO({
        title: "Pharmaceutical Quality | Suyash Pharma",
        description: "Discover Suyash Pharma's pharmaceutical quality approach, comprehensive quality assurance processes, and rigorous standards ensuring reliable, high-quality pharmaceutical products.",
        keywords: "pharmaceutical quality, pharmaceutical quality approach, quality pharmaceutical products, pharmaceutical quality assurance, pharmaceutical quality processes, quality focused pharmaceutical company, Suyash Pharma quality",
        canonicalUrl: `${BASE_URL}/quality`,
        ogTitle: "Pharmaceutical Quality Assurance | Suyash Pharma",
        ogDescription: "Quality built into every step. Discover Suyash Pharma's multi-stage quality assurance protocol and pharmaceutical standards.",
        ogType: "website",
        schemas: [
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Quality", url: "/quality" }
          ])
        ]
      });
      break;
    }

    case 'therapeutic-segments': {
      const segmentFaqs = [
        {
          q: "What therapeutic segments does Suyash Pharma focus on?",
          a: "Suyash Pharma focuses on three core therapeutic segments: Broad-Spectrum Antibiotics & Combination Therapy (anti-infectives, carbapenems, cephalosporins), Gastrointestinal Support (parenteral proton pump inhibitors), and Supportive & Adjunctive Therapy (antioxidant and cellular protection)."
        },
        {
          q: "What antibiotic combinations are in the Suyash Pharma portfolio?",
          a: "Key antibiotic formulations include Meropenem 2.0 gm (SPNEM™), Meropenem + Sulbactam (SPNEM-SB™), Meropenem + Tazobactam (SPNEM™-TZ), Ceftazidime + Tobramycin (CEFFTOB™), Cefoperazone + Sulbactam 3 gm (SPARAZONE™-3GM), Ceftizoxime 1.5gm (SPTIK™-1.5GM), Tigecycline 100mg (TIGRIXA-100™), and Cefpirome 2gm (Sfrome™-2gm)."
        },
        {
          q: "Does Suyash Pharma provide gastrointestinal injectables?",
          a: "Yes, Suyash Pharma provides YSPAN™-40MG, a parenteral lyophilized formulation of Pantoprazole Sodium 40mg for acute acid suppression."
        }
      ];

      setPageSEO({
        title: "Therapeutic Segments | Suyash Pharma Pharmaceutical Portfolio",
        description: "Explore Suyash Pharma's core therapeutic segments: broad-spectrum antibiotics, carbapenem combinations, gastrointestinal support, and supportive care therapy in India.",
        keywords: "therapeutic pharmaceutical products, anti infective pharmaceutical products, antibiotic pharmaceutical products, gastrointestinal pharmaceutical products, supportive therapy pharmaceutical products, adjunctive therapy pharmaceutical products, critical care pharmaceutical products, pharmaceutical therapeutic segments",
        canonicalUrl: `${BASE_URL}/therapeutic-segments`,
        ogTitle: "Therapeutic Segments | Suyash Pharma Pharmaceutical Portfolio",
        ogDescription: "Dedicated therapeutic focus areas: critical care antibiotics, combination therapy, gastroenterology and clinical supportive care.",
        ogType: "website",
        schemas: [
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Therapeutic Segments", url: "/therapeutic-segments" }
          ]),
          getFaqSchema(segmentFaqs)
        ]
      });
      break;
    }

    case 'contact': {
      setPageSEO({
        title: "Contact Suyash Pharma | Pharmaceutical Company in Nallasopara, Maharashtra",
        description: "Contact Suyash Pharma in Nallasopara East, Maharashtra. Inquire about pharmaceutical products, distribution partnerships, and hospital supply across India.",
        keywords: "Suyash Pharma contact, Suyash Pharma address, Suyash Pharma phone number, Suyash Pharma Nallasopara, Suyash Pharma Nalasopara, Suyash Pharma Maharashtra, pharmaceutical company Nallasopara, pharma company Vasai Virar, pharmaceutical company Palghar",
        canonicalUrl: `${BASE_URL}/contact`,
        ogTitle: "Contact Suyash Pharma | Office & Inquiries in Nallasopara, Maharashtra",
        ogDescription: "Get in touch with Suyash Pharma for product inquiries, hospital supply orders and distribution partnerships in India.",
        ogType: "website",
        schemas: [
          getOrganizationSchema(),
          getLocalBusinessSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" }
          ])
        ]
      });
      break;
    }

    case 'product-detail': {
      const product = products.find(p => p.slug === param);
      if (!product) {
        applySEOForRoute('not-found');
        return;
      }

      const formattedSeo = seoKey ? formatSeoKey(seoKey) : '';
      const productTitle = formattedSeo
        ? `${product.name} (${product.generic}) - ${formattedSeo} | Suyash Pharma`
        : `${product.name} | ${product.generic} | Suyash Pharma`;

      const seoPhrase = formattedSeo ? formattedSeo : 'Pharmaceutical Company Maharashtra';
      const productDesc = `${product.name} (${product.generic}) by Suyash Pharma - leading ${seoPhrase}. ${product.shortDescription || product.overview} Available in ${product.packSize}.`;
      
      const extraKeywords = seoKey ? `${seoKey.replace(/-/g, ' ')}, ${seoKey}, ` : '';
      const productKeywords = `${extraKeywords}${product.name}, ${product.name} injection, ${product.name} pharmaceutical, ${product.name} medicine, ${product.name} India, ${product.generic}, ${product.generic} injection, ${product.generic} pharmaceutical product, ${product.strength} injection, Suyash Pharma, pharmaceutical injections India, pharmaceutical company maharashtra, pharma company mumbai, pharmaceutical products virar`;

      const canonicalPath = `/products/${product.slug}`;

      setPageSEO({
        title: productTitle,
        description: productDesc,
        keywords: productKeywords,
        canonicalUrl: `${BASE_URL}${canonicalPath}`,
        ogTitle: formattedSeo ? `${product.name} — ${product.generic} | ${formattedSeo} | Suyash Pharma` : `${product.name} — ${product.generic} | Suyash Pharma`,
        ogDescription: productDesc,
        ogImage: PRODUCT_PUBLIC_IMAGES[product.slug] || DEFAULT_OG_IMAGE,
        ogType: "product",
        schemas: [
          getOrganizationSchema(),
          getProductSchema(product),
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Products", url: "/products" },
            { name: product.name, url: canonicalPath }
          ])
        ]
      });
      break;
    }

    case 'not-found':
    default: {
      setPageSEO({
        title: "Page Not Found (404) | Suyash Pharma",
        description: "The requested pharmaceutical page or product specification could not be found on Suyash Pharma. Explore our products portfolio or contact our team in Nallasopara, Maharashtra.",
        canonicalUrl: `${BASE_URL}/404`,
        noindex: true,
        schemas: [
          getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "404 Not Found", url: "/404" }
          ])
        ]
      });
      break;
    }
  }
}
