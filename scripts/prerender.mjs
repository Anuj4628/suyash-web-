/**
 * Suyash Pharma - Build-Time Static Prerenderer for Production SEO & Google Images Indexing
 * 
 * Generates crawl-ready, standalone static HTML files for all core routes and all 13 verified pharmaceutical products.
 * Guarantees that Googlebot, Bingbot, social scrapers, and slow mobile connections receive 100% complete
 * HTML, unique titles, meta descriptions, canonical URLs, Open Graph, Twitter cards, JSON-LD schemas,
 * and crawlable <img> elements with descriptive ALT text without relying on client-side JS execution.
 */

import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const BASE_URL = 'https://suyashpharma.com';
const BRAND_NAME = 'Suyash Pharma';
const LOGO_URL = `${BASE_URL}/images/logo/suyash-pharma-logo.png`;

// Verified Official Corporate Entity Data
const CORPORATE_ENTITY = {
  name: "Suyash Pharma",
  legalName: "Suyash Pharma",
  url: BASE_URL,
  logo: LOGO_URL,
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

// All 13 Verified Authentic Pharmaceutical Formulations
const PRODUCTS = [
  {
    id: 1,
    name: "CEFFTOB™",
    slug: "cefftob",
    generic: "Ceftazidime 1000mg & Tobramycin 120mg for Injection",
    composition: "Each vial contains: Ceftazidime IP (as Sodium) eq. to anhydrous Ceftazidime 1000 mg, Tobramycin Sulphate IP eq. to Tobramycin 120 mg",
    strength: "1.120 gm (1000 mg + 120 mg)",
    dosageForm: "Dry Powder for Injection (IV or IM use)",
    route: "Intravenous (IV) or Intramuscular (IM)",
    packSize: "Single Dose Vial with Sterile Water for Injection",
    category: "Anti-Infective Combination",
    therapeuticSegment: "ANTI-INFECTIVE COMBO",
    image: `${BASE_URL}/images/products/cefftob-ceftazidime-tobramycin-injection.png`,
    imageAlt: "CEFFTOB™ - Ceftazidime 1000mg & Tobramycin 120mg for Injection packaging by Suyash Pharma",
    shortDescription: "Synergistic cephalosporin and aminoglycoside combination providing targeted antimicrobial coverage for severe bacterial infections.",
    overview: "CEFFTOB™ combines third-generation cephalosporin Ceftazidime with aminoglycoside Tobramycin, delivering synergistic bactericidal coverage against susceptible aerobic gram-negative bacilli including nosocomial Pseudomonas aeruginosa.",
    indications: [
      "Complicated urinary tract infections (cUTI)",
      "Severe nosocomial and lower respiratory tract infections",
      "Complicated intra-abdominal infections",
      "Septicemia and bloodstream infections",
      "Complicated skin and soft tissue infections"
    ]
  },
  {
    id: 2,
    name: "SPTIK™-1.5GM",
    slug: "sptik-1-5gm",
    generic: "Ceftizoxime Injection I.P. 1.5gm",
    composition: "Each vial contains: Ceftizoxime Sodium IP equivalent to Ceftizoxime 1.5 gm (as Sterile powder)",
    strength: "1.5 gm (1500 mg)",
    dosageForm: "Sterile Powder for Injection",
    route: "Intramuscular (IM) / Intravenous (IV) Use Only",
    packSize: "Single Dose Vial with Sterile Water for Injection",
    category: "Third-Generation Cephalosporin",
    therapeuticSegment: "HOSPITAL CARE",
    image: `${BASE_URL}/images/products/sptik-ceftizoxime-1-5gm-injection.png`,
    imageAlt: "SPTIK™-1.5GM - Ceftizoxime Injection I.P. 1.5gm packaging by Suyash Pharma",
    shortDescription: "Broad-spectrum third-generation cephalosporin formulated for intensive hospital treatment of severe systemic bacterial infections.",
    overview: "SPTIK™-1.5GM is an established third-generation cephalosporin antibiotic exhibiting high stability against beta-lactamases and dependable efficacy in hospital-acquired systemic infections.",
    indications: [
      "Respiratory tract infections (pneumonia, bronchitis)",
      "Complicated urinary tract infections",
      "Skin & soft tissue infections",
      "Intra-abdominal infections and peritonitis",
      "Bacterial septicemia"
    ]
  },
  {
    id: 3,
    name: "TIGRIXA-100",
    slug: "tigrixa-100",
    generic: "Tigecycline for Injection USP 100mg (Lyophilized)",
    composition: "Each vial contains: Tigecycline (as Tigecycline Acetate) 100 mg (Lyophilized sterile powder)",
    strength: "100 mg",
    dosageForm: "Lyophilized Powder for IV Infusion Only",
    route: "Intravenous (IV) Infusion Only",
    packSize: "Single Dose Vial (100mg Lyophilized)",
    category: "Glycylcycline Antibiotic / Critical Care",
    therapeuticSegment: "CRITICAL CARE",
    image: `${BASE_URL}/images/products/tigrixa-100-tigecycline-injection.png`,
    imageAlt: "TIGRIXA-100 - Tigecycline for Injection USP 100mg Lyophilized packaging by Suyash Pharma",
    shortDescription: "First-in-class glycylcycline antibiotic structured to overcome major bacterial resistance mechanisms in high-acuity infections.",
    overview: "TIGRIXA-100 is an intravenous glycylcycline antibiotic structured to circumvent classic bacterial resistance mechanisms (efflux pumps and ribosomal protection) in complicated intensive care infections.",
    indications: [
      "Complicated intra-abdominal infections (cIAI)",
      "Complicated skin and skin structure infections (cSSSI)",
      "Hospital-acquired pneumonia caused by susceptible pathogens"
    ]
  },
  {
    id: 4,
    name: "SPNEM™",
    slug: "spnem",
    generic: "Meropenem Injection IP 2.0 gm",
    composition: "Each vial contains: Meropenem IP 2.0 gm (as Sterile powder)",
    strength: "2.0 gm (2000 mg)",
    dosageForm: "Powder for Intravenous Injection or Infusion",
    route: "For I.V. Use Only (Reconstitute before use)",
    packSize: "Single Dose Glass Vial (2 gm)",
    category: "Carbapenem Antibiotic / Critical Care",
    therapeuticSegment: "CARBAPENEM",
    image: `${BASE_URL}/images/products/spnem-meropenem-2gm-injection.png`,
    imageAlt: "SPNEM™ - Meropenem Injection IP 2.0 gm packaging by Suyash Pharma",
    shortDescription: "Ultra-broad-spectrum 2.0gm carbapenem delivering robust bactericidal coverage in severe hospital-acquired polymicrobial infections.",
    overview: "SPNEM™ is an ultra-broad spectrum parenteral carbapenem antibiotic indicated for critical hospital care, offering stability against beta-lactamases and rapid bactericidal penetration.",
    indications: [
      "Severe nosocomial pneumonia and ventilator-associated infections",
      "Complicated intra-abdominal infections",
      "Complicated urinary tract and skin infections",
      "Acute bacterial meningitis",
      "Management of septicemia and febrile neutropenia"
    ]
  },
  {
    id: 5,
    name: "GTVITA-SP",
    slug: "gtvita-sp",
    generic: "Glutathione for Injection 1200 mg/vial With Vitamin C Ampoule",
    composition: "Each vial contains: Reduced Glutathione IP 1200 mg (Lyophilized Powder). Accompanied by 1 ampoule Vitamin C (Ascorbic Acid) 500 mg Injection",
    strength: "1200 mg/vial + 500 mg Vitamin C",
    dosageForm: "Lyophilized Powder with Solvent Ampoule",
    route: "For I.M. / I.V. Use Only",
    packSize: "Single Dose Vial with Vitamin C Ampoule",
    category: "Master Antioxidant & Supportive Therapy",
    therapeuticSegment: "ANTIOXIDANT THERAPY",
    image: `${BASE_URL}/images/products/gtvita-sp-glutathione-vitamin-c-injection.png`,
    imageAlt: "GTVITA-SP - Glutathione for Injection 1200 mg with Vitamin C Ampoule packaging by Suyash Pharma",
    shortDescription: "High-purity reduced glutathione paired with synergistic vitamin C for cellular protection, detoxification and clinical support.",
    overview: "GTVITA-SP combines pharmaceutical-grade reduced glutathione with ascorbic acid to counteract cellular oxidative stress, support hepatic detoxification, and enhance metabolic recovery.",
    indications: [
      "Cellular oxidative stress and free radical damage mitigation",
      "Adjunctive hepatoprotection in toxic or metabolic liver stress",
      "Supportive therapy during intensive metabolic recovery",
      "Dermatological protection and cellular rejuvenation support"
    ]
  },
  {
    id: 6,
    name: "SPARAZONE-3GM",
    slug: "sparazone-3gm",
    generic: "Cefoperazone & Sulbactam for Injection 3 gm",
    composition: "Each vial contains: Cefoperazone Sodium IP equivalent to Cefoperazone 2.0 gm & Sulbactam Sodium IP equivalent to Sulbactam 1.0 gm",
    strength: "3.0 gm (2 gm Cefoperazone + 1 gm Sulbactam)",
    dosageForm: "Powder for Intravenous Injection or Infusion",
    route: "For I.M. / I.V. Use Only",
    packSize: "Single Dose Sterile Vial (3 gm)",
    category: "Third-Gen Cephalosporin + Inhibitor / MDR Focus",
    therapeuticSegment: "MDR INFECTIONS",
    image: `${BASE_URL}/images/products/sparazone-3gm-cefoperazone-sulbactam-injection.png`,
    imageAlt: "SPARAZONE-3GM - Cefoperazone & Sulbactam for Injection 3 gm packaging by Suyash Pharma",
    shortDescription: "Evidence-based 3gm optimal-dose anti-infective combination designed for superior clinical response in critical MDR infections.",
    overview: "SPARAZONE-3GM is an evidence-based formulation following the ICMR 2022 optimal dose approach for multidrug-resistant gram-negative infections, with a nephrofriendly profile requiring no dose adjustment in CKD patients.",
    indications: [
      "Respiratory tract infections in critical care (pneumonia, bronchitis)",
      "Peritonitis, cholecystitis and complicated intra-abdominal infections",
      "Complicated urinary tract infections (cUTI)",
      "Bacterial septicemia and bacteremic episodes",
      "Multidrug-resistant (MDR) pathogen management"
    ]
  },
  {
    id: 7,
    name: "SPNEM-SB",
    slug: "spnem-sb",
    generic: "Meropenem & Sulbactam for Injection 750 mg",
    composition: "Each vial contains: Meropenem IP 500 mg (as Meropenem) & Sulbactam IP 250 mg (as Sulbactam)",
    strength: "750 mg (500 mg Meropenem + 250 mg Sulbactam)",
    dosageForm: "Powder for Injection",
    route: "For IV Use Only — Single Dose Vial",
    packSize: "Single Dose Vial (750 mg)",
    category: "Carbapenem + Beta-Lactamase Inhibitor",
    therapeuticSegment: "CARBAPENEM COMBO",
    image: `${BASE_URL}/images/products/spnem-sb-meropenem-sulbactam-750mg-injection.png`,
    imageAlt: "SPNEM-SB - Meropenem & Sulbactam for Injection 750 mg packaging by Suyash Pharma",
    shortDescription: "Synergistic carbapenem and beta-lactamase inhibitor combination for hospital-acquired and ventilator-associated infections.",
    overview: "SPNEM-SB combines Meropenem with the beta-lactamase inhibitor Sulbactam, restoring bactericidal susceptibility against pathogens producing Class A and Class C enzymes.",
    indications: [
      "Hospital-acquired pneumonia & Ventilator-associated pneumonia (VAP)",
      "Complicated intra-abdominal infections",
      "Complicated urinary tract infections (cUTI)",
      "Acute bacterial meningitis",
      "Septicemia and bacteremic episodes"
    ]
  },
  {
    id: 8,
    name: "SULBOFORTE-2GM",
    slug: "sulboforte-2gm",
    generic: "Sulbactam for Injection 2.0 gm",
    composition: "Each vial contains: Sulbactam for Injection 2.0 gm (Sterile powder)",
    strength: "2.0 gm (2000 mg)",
    dosageForm: "Powder for Injection",
    route: "For IM/IV Use Only",
    packSize: "Single Dose Vial (2.0 gm)",
    category: "Beta-Lactamase Inhibitor / Resistance Breaker",
    therapeuticSegment: "BETA-LACTAMASE INHIBITOR",
    image: `${BASE_URL}/images/products/sulboforte-2gm-sulbactam-injection.png`,
    imageAlt: "SULBOFORTE-2GM - Sulbactam for Injection 2.0 gm packaging by Suyash Pharma",
    shortDescription: "Potent irreversible beta-lactamase inhibitor designed to overcome bacterial enzyme-mediated resistance.",
    overview: "SULBOFORTE-2GM provides targeted high-dose sulbactam therapy which irreversibly binds and inactivates beta-lactamases, demonstrating intrinsic activity against Acinetobacter baumannii.",
    indications: [
      "Multidrug-resistant Acinetobacter baumannii infections",
      "Severe hospital-acquired and ventilator-associated pneumonia",
      "Synergistic resistance-breaking combination therapy",
      "Complicated intra-abdominal and soft tissue infections"
    ]
  },
  {
    id: 9,
    name: "SPNEM-TZ",
    slug: "spnem-tz",
    generic: "Meropenem & Tazobactam for Injection 1.125gm",
    composition: "Each vial contains: Meropenem IP (as trihydrate) 1.000 gm, Tazobactam IP 0.125 gm",
    strength: "1.125 gm (1000 mg Meropenem + 125 mg Tazobactam)",
    dosageForm: "Powder for Injection",
    route: "For IV Use Only",
    packSize: "Single Dose Vial (1.125 gm)",
    category: "Advanced Carbapenem + Inhibitor Combination",
    therapeuticSegment: "ADVANCED CARBAPENEM",
    image: `${BASE_URL}/images/products/spnem-tz-meropenem-tazobactam-injection.png`,
    imageAlt: "SPNEM-TZ - Meropenem & Tazobactam for Injection 1.125gm packaging by Suyash Pharma",
    shortDescription: "Targeted carbapenem and tazobactam synergy structured for resistant ICU bacteremia and complex nosocomial infections.",
    overview: "SPNEM-TZ pairs the proven bactericidal breadth of Meropenem with Tazobactam to inhibit beta-lactamase hydrolysis and maintain antibacterial potency in critical care infections.",
    indications: [
      "Critical care septicemia and bacteremic episodes",
      "Severe nosocomial pneumonia",
      "Complicated intra-abdominal and biliary infections",
      "Complicated urinary and pelvic infections"
    ]
  },
  {
    id: 10,
    name: "SPNEM-SB 1.5GM",
    slug: "spnem-sb-1-5gm",
    generic: "Meropenem & Sulbactam for Injection 1.5 gm",
    composition: "Each vial contains: Meropenem IP 1.0 gm, Sulbactam IP 0.5 gm (as Sterile powder)",
    strength: "1.5 gm (1000 mg Meropenem + 500 mg Sulbactam)",
    dosageForm: "Powder for Injection",
    route: "For IV Use Only — Single Dose Vial",
    packSize: "Single Dose Vial (1.5 gm)",
    category: "High-Dose Carbapenem + Beta-Lactamase Inhibitor",
    therapeuticSegment: "CRITICAL CARE",
    image: `${BASE_URL}/images/products/spnem-sb-1-5gm-meropenem-sulbactam-injection.png`,
    imageAlt: "SPNEM-SB 1.5GM - Meropenem & Sulbactam for Injection 1.5 gm packaging by Suyash Pharma",
    shortDescription: "High-dose carbapenem-inhibitor formulation calibrated for intensive care treatment of resistant microbial profiles.",
    overview: "SPNEM-SB 1.5GM delivers high-potency carbapenem and sulbactam concentrations for high-acuity intensive care units dealing with difficult-to-treat polymicrobial infections.",
    indications: [
      "Severe nosocomial pneumonia and ventilator-associated infections",
      "Complicated intra-abdominal sepsis",
      "Acute bacterial meningitis",
      "Febrile neutropenia in high-risk patients",
      "Catheter-related bloodstream infections"
    ]
  },
  {
    id: 11,
    name: "YSPAN-40MG",
    slug: "yspan-40mg",
    generic: "Pantoprazole for Injection 40mg",
    composition: "Each vial contains: Pantoprazole Sodium (as Lyophilized powder) 40 mg",
    strength: "40 mg",
    dosageForm: "Lyophilized Powder for Injection",
    route: "FOR I.V. USE ONLY",
    packSize: "Single Dose Vial (40 mg)",
    category: "Proton Pump Inhibitor (Gastroenterology)",
    therapeuticSegment: "GASTROENTEROLOGY",
    image: `${BASE_URL}/images/products/yspan-40mg-pantoprazole-injection.png`,
    imageAlt: "YSPAN-40MG - Pantoprazole for Injection 40mg packaging by Suyash Pharma",
    shortDescription: "Parenteral proton pump inhibitor providing rapid gastric acid suppression and mucosal protection in hospitalised patients.",
    overview: "YSPAN-40MG is a parenteral formulation of pantoprazole indicated for acute acid suppression in clinical situations where oral administration is not feasible.",
    indications: [
      "Acute peptic ulcer bleeding and post-endoscopic therapy",
      "Severe gastroesophageal reflux disease (GERD)",
      "Zollinger-Ellison syndrome and hypersecretory states",
      "Stress ulcer prophylaxis in critical care settings"
    ]
  },
  {
    id: 12,
    name: "Sfrome-2gm",
    slug: "sfrome-2gm",
    generic: "Cefpirome Sulphate Injection IP 2000 mg",
    composition: "Each vial contains: Cefpirome Sulphate IP equivalent to Cefpirome 2000 mg",
    strength: "2000 mg (2 gm)",
    dosageForm: "Powder for Injection",
    route: "FOR I.V. USE ONLY",
    packSize: "Single Dose Vial (2000 mg)",
    category: "Fourth-Generation Cephalosporin",
    therapeuticSegment: "CEPHALOSPORIN",
    image: `${BASE_URL}/images/products/sfrome-2gm-cefpirome-injection.png`,
    imageAlt: "Sfrome-2gm - Cefpirome Sulphate Injection IP 2000 mg packaging by Suyash Pharma",
    shortDescription: "Fourth-generation cephalosporin featuring rapid bacterial membrane penetration for acute hospital infections.",
    overview: "Sfrome-2gm contains fourth-generation cephalosporin Cefpirome with zwitterionic molecular structure, allowing rapid outer membrane transit and high affinity for critical penicillin-binding proteins.",
    indications: [
      "Complicated lower respiratory tract infections (pneumonia, pleuropneumonia)",
      "Complicated upper and lower urinary tract infections",
      "Bacteremia, septicemia and severe systemic infections",
      "Infections in neutropenic and immunocompromised patients"
    ]
  },
  {
    id: 13,
    name: "CPFOXIME-500",
    slug: "cpfoxime-500",
    generic: "Cefuroxime Axetil Tablets I.P. 500 mg",
    composition: "Each film-coated tablet contains: Cefuroxime Axetil IP equivalent to Cefuroxime 500 mg",
    strength: "500 mg",
    dosageForm: "Film-Coated Tablets (Oral)",
    route: "Oral Administration",
    packSize: "1 x 10 Tablets (Blister Strip)",
    category: "Oral Second-Generation Cephalosporin",
    therapeuticSegment: "ORAL ANTIBIOTIC",
    image: `${BASE_URL}/images/products/cpfoxime-500-cefuroxime-axetil-tablets.png`,
    imageAlt: "CPFOXIME-500 - Cefuroxime Axetil Tablets I.P. 500 mg packaging by Suyash Pharma",
    shortDescription: "Broad-spectrum oral cephalosporin antibiotic delivering high bioavailability and dependable efficacy in outpatient care.",
    overview: "CPFOXIME-500 is an oral bactericidal cephalosporin prodrug delivering dependable coverage across common respiratory, ENT, and urological bacterial infections.",
    indications: [
      "Respiratory tract infections (bronchitis, pneumonia)",
      "Ear, nose & throat infections (sinusitis, tonsillitis, pharyngitis, otitis media)",
      "Urinary tract infections (UTI)",
      "Skin & soft tissue infections",
      "Early Lyme disease management"
    ]
  }
];

// Helper: Organization Schema
function getOrganizationSchema() {
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
    "address": CORPORATE_ENTITY.address
  };
}

// Helper: LocalBusiness Schema
function getLocalBusinessSchema() {
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

// Helper: Product Schema (Accurate properties only, zero fake prices/reviews)
function getProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/products/${product.slug}#product`,
    "name": `${product.name} — ${product.generic}`,
    "image": product.image,
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

// Helper: Breadcrumbs Schema
function getBreadcrumbsSchema(items) {
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

// Helper: Render crawlable header navigation
function renderStaticNavbar(active = 'home') {
  return `
    <header class="sp-header">
      <div class="sp-nav-container">
        <div class="sp-nav-col sp-nav-col-left">
          <a href="/" class="sp-brand" aria-label="Suyash Pharma - Home">
            <img src="${LOGO_URL}" alt="Suyash Pharma - Your Health, Our Priority" class="sp-brand-logo" width="155" height="100" loading="eager" />
          </a>
        </div>
        <nav class="sp-nav-col sp-nav-col-center" aria-label="Main Navigation">
          <ul class="sp-nav-list">
            <li class="sp-nav-item"><a href="/" class="sp-nav-link ${active === 'home' ? 'active' : ''}">Home</a></li>
            <li class="sp-nav-item"><a href="/about" class="sp-nav-link ${active === 'about' ? 'active' : ''}">About</a></li>
            <li class="sp-nav-item"><a href="/products" class="sp-nav-link ${active === 'products' ? 'active' : ''}">Products</a></li>
            <li class="sp-nav-item"><a href="/quality" class="sp-nav-link ${active === 'quality' ? 'active' : ''}">Quality</a></li>
            <li class="sp-nav-item"><a href="/contact" class="sp-nav-link ${active === 'contact' ? 'active' : ''}">Contact</a></li>
          </ul>
        </nav>
        <div class="sp-nav-col sp-nav-col-right">
          <a href="/contact" class="sp-nav-cta">Get Quote</a>
        </div>
      </div>
    </header>
  `;
}

// Helper: Render crawlable footer
function renderStaticFooter() {
  return `
    <footer class="sp-main-footer" role="contentinfo">
      <div class="sp-footer-container">
        <div class="sp-footer-grid">
          <div class="sp-footer-col sp-footer-col-brand">
            <a href="/" class="sp-footer-logo-link" aria-label="Suyash Pharma">
              <img src="${LOGO_URL}" alt="Suyash Pharma - Your Health, Our Priority" class="sp-footer-logo-img" width="240" height="155" loading="lazy" />
            </a>
            <p class="sp-footer-statement">Focused on delivering quality pharmaceutical solutions with reliability, responsibility and a commitment to better healthcare.</p>
          </div>
          <div class="sp-footer-col sp-footer-col-links">
            <h3 class="sp-footer-heading">QUICK LINKS</h3>
            <ul class="sp-footer-nav-list">
              <li><a href="/" class="sp-footer-nav-link">Home</a></li>
              <li><a href="/about" class="sp-footer-nav-link">About Us</a></li>
              <li><a href="/products" class="sp-footer-nav-link">Products Portfolio</a></li>
              <li><a href="/therapeutic-segments" class="sp-footer-nav-link">Therapeutic Segments</a></li>
              <li><a href="/quality" class="sp-footer-nav-link">Quality Assurance</a></li>
              <li><a href="/contact" class="sp-footer-nav-link">Contact</a></li>
            </ul>
          </div>
          <div class="sp-footer-col sp-footer-col-contact">
            <h3 class="sp-footer-heading">OFFICIAL ADDRESS</h3>
            <p>SHOP NO. A/02,03 GROUND FLOOR, MAX AVENUE CHS LTD, OSTWAL NAGARI, NALLASOPARA EAST, Maharashtra 401209, India</p>
            <p>Phone: +91-8928252638 / +91-7798917108 | Email: suyashpharma1@gmail.com</p>
          </div>
        </div>
        <div class="sp-footer-bottom">
          <p>© 2026 Suyash Pharma. All rights reserved. Pharmaceutical formulations marketed responsibly across India.</p>
        </div>
      </div>
    </footer>
  `;
}

// Build Page Configs
const PAGES = [
  {
    path: '/',
    outputPath: 'index.html',
    title: "Suyash Pharma | Pharmaceutical Products & Healthcare Solutions in India",
    description: "Suyash Pharma is a trusted pharmaceutical company in India delivering high-quality injectable formulations, antibiotics, carbapenems, and healthcare solutions with clinical reliability.",
    canonicalUrl: `${BASE_URL}/`,
    ogType: "website",
    ogImage: LOGO_URL,
    schemas: [
      getOrganizationSchema(),
      getLocalBusinessSchema(),
      getBreadcrumbsSchema([{ name: "Home", url: "/" }])
    ],
    renderBody: () => `
      <div class="sp-home-wrapper">
        ${renderStaticNavbar('home')}
        <main class="sp-main-content">
          <section class="sp-hero">
            <div class="sp-hero-container">
              <span class="sp-hero-eyebrow">QUALITY PHARMACEUTICAL SOLUTIONS</span>
              <h1 class="sp-hero-title">Delivering High-Quality Pharmaceutical Formulations Across India</h1>
              <p class="sp-hero-desc">At Suyash Pharma, quality remains at the heart of everything we do. We focus on providing reliable pharmaceutical products with consistency, care and a strong commitment to better healthcare.</p>
              <div class="sp-hero-actions">
                <a href="/products" class="sp-hero-btn sp-hero-btn-primary">EXPLORE PRODUCTS</a>
                <a href="/contact" class="sp-hero-btn sp-hero-btn-outline">CONTACT US</a>
              </div>
            </div>
          </section>

          <section class="sp-products-summary" style="padding: 60px 20px; max-width: 1200px; margin: 0 auto;">
            <h2 style="font-size: 28px; margin-bottom: 24px; color: #082245;">Our Pharmaceutical Formulations Portfolio</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
              ${PRODUCTS.map(p => `
                <article style="border: 1px solid #E5E7EB; border-radius: 12px; padding: 20px; background: #FFFFFF;">
                  <a href="/products/${p.slug}" style="text-decoration: none; color: inherit;">
                    <img src="${p.image}" alt="${p.imageAlt}" width="280" height="220" style="width: 100%; height: 200px; object-fit: contain;" loading="lazy" />
                    <span style="font-size: 11px; font-weight: 700; color: #1B6A3E; text-transform: uppercase;">${p.therapeuticSegment}</span>
                    <h3 style="font-size: 20px; margin: 8px 0 4px; color: #082245;">${p.name}</h3>
                    <p style="font-size: 13px; color: #4B5563; margin-bottom: 12px;">${p.generic}</p>
                    <p style="font-size: 13px; color: #6B7280; line-height: 1.5;">${p.shortDescription}</p>
                  </a>
                </article>
              `).join('')}
            </div>
          </section>
        </main>
        ${renderStaticFooter()}
      </div>
    `
  },
  {
    path: '/about',
    outputPath: 'about/index.html',
    title: "About Suyash Pharma | Pharmaceutical Company in India",
    description: "Learn about Suyash Pharma, an Indian pharmaceutical company dedicated to purpose-driven healthcare, dependable pharmaceutical solutions, and long-term partnerships.",
    canonicalUrl: `${BASE_URL}/about`,
    ogType: "website",
    ogImage: LOGO_URL,
    schemas: [
      getOrganizationSchema(),
      getBreadcrumbsSchema([
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" }
      ])
    ],
    renderBody: () => `
      <div class="sp-about-page-wrapper">
        ${renderStaticNavbar('about')}
        <main class="sp-about-main">
          <section style="padding: 60px 20px; max-width: 1000px; margin: 0 auto;">
            <span style="font-size: 12px; font-weight: 700; color: #1B6A3E; letter-spacing: 0.1em;">ABOUT SUYASH PHARMA</span>
            <h1 style="font-size: 36px; color: #082245; margin: 12px 0 20px;">Dedicated to Reliable Pharmaceutical Care and Accessible Healthcare</h1>
            <p style="font-size: 16px; line-height: 1.7; color: #374151; margin-bottom: 24px;">
              Suyash Pharma is a trusted pharmaceutical company focused on delivering quality pharmaceutical products with consistency, care, and a strong commitment to healthcare advancement. Headquartered in Nallasopara East, Maharashtra, we market hospital-grade injectable formulations, critical care antibiotics, and clinical supportive therapies across India.
            </p>
            <div style="margin-top: 32px;">
              <h2 style="font-size: 24px; color: #082245;">Our Vision</h2>
              <p style="font-size: 15px; line-height: 1.6; color: #4B5563; margin-top: 8px;">To become a trusted and leading pharmaceutical company, committed to improving healthcare through quality, innovation, reliability, and affordable solutions. We aspire to build long-term partnerships with healthcare professionals, hospitals, and distributors while contributing to a healthier society.</p>
            </div>
            <div style="margin-top: 32px;">
              <h2 style="font-size: 24px; color: #082245;">Our Mission</h2>
              <ul style="font-size: 15px; line-height: 1.8; color: #4B5563; margin-top: 8px; padding-left: 20px;">
                <li>Deliver high-quality and reliable pharmaceutical products that meet stringent standards.</li>
                <li>Make essential healthcare solutions accessible and affordable.</li>
                <li>Continuously focus on innovation, quality, and excellence across our products and services.</li>
                <li>Build strong and transparent relationships with doctors, hospitals, distributors, and partners.</li>
              </ul>
            </div>
          </section>
        </main>
        ${renderStaticFooter()}
      </div>
    `
  },
  {
    path: '/products',
    outputPath: 'products/index.html',
    title: "Suyash Pharma Products | Pharmaceutical & Injectable Product Portfolio",
    description: "Explore the Suyash Pharma product portfolio featuring sterile powder for injection, carbapenems, cephalosporins, and gastrointestinal healthcare products in India.",
    canonicalUrl: `${BASE_URL}/products`,
    ogType: "website",
    ogImage: LOGO_URL,
    schemas: [
      getOrganizationSchema(),
      getBreadcrumbsSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" }
      ])
    ],
    renderBody: () => `
      <div class="sp-products-page-wrapper">
        ${renderStaticNavbar('products')}
        <main class="sp-products-main" style="padding: 60px 20px; max-width: 1200px; margin: 0 auto;">
          <span style="font-size: 12px; font-weight: 700; color: #1B6A3E; letter-spacing: 0.1em;">COMPLETE PORTFOLIO</span>
          <h1 style="font-size: 36px; color: #082245; margin: 12px 0 20px;">Pharmaceutical Products &amp; Injectable Formulations</h1>
          <p style="font-size: 16px; color: #4B5563; max-width: 800px; margin-bottom: 40px; line-height: 1.6;">
            Discover all 13 authentic formulations in the Suyash Pharma portfolio. Each product is formulated and packaged to exacting pharmaceutical standards to support healthcare institutions and clinical practitioners across India.
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 32px;">
            ${PRODUCTS.map(p => `
              <article style="border: 1px solid #E5E7EB; border-radius: 14px; padding: 24px; background: #FFFFFF; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                <a href="/products/${p.slug}" style="text-decoration: none; color: inherit; display: block;">
                  <img src="${p.image}" alt="${p.imageAlt}" width="300" height="240" style="width: 100%; height: 220px; object-fit: contain; margin-bottom: 16px;" loading="lazy" />
                  <span style="font-size: 11px; font-weight: 700; color: #1B6A3E; text-transform: uppercase;">${p.therapeuticSegment}</span>
                  <h2 style="font-size: 22px; margin: 8px 0 4px; color: #082245;">${p.name}</h2>
                  <p style="font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px;">${p.generic}</p>
                  <p style="font-size: 13px; color: #6B7280; line-height: 1.5; margin-bottom: 16px;">${p.shortDescription}</p>
                  <span style="display: inline-block; padding: 8px 16px; background: #082245; color: #FFFFFF; font-size: 12px; font-weight: 700; border-radius: 6px;">VIEW DETAILS →</span>
                </a>
              </article>
            `).join('')}
          </div>
        </main>
        ${renderStaticFooter()}
      </div>
    `
  },
  {
    path: '/quality',
    outputPath: 'quality/index.html',
    title: "Pharmaceutical Quality | Suyash Pharma",
    description: "Discover Suyash Pharma's pharmaceutical quality approach, comprehensive quality assurance processes, and rigorous standards ensuring reliable, high-quality pharmaceutical products.",
    canonicalUrl: `${BASE_URL}/quality`,
    ogType: "website",
    ogImage: LOGO_URL,
    schemas: [
      getOrganizationSchema(),
      getBreadcrumbsSchema([
        { name: "Home", url: "/" },
        { name: "Quality", url: "/quality" }
      ])
    ],
    renderBody: () => `
      <div class="sp-quality-page-wrapper">
        ${renderStaticNavbar('quality')}
        <main class="sp-quality-main" style="padding: 60px 20px; max-width: 1000px; margin: 0 auto;">
          <span style="font-size: 12px; font-weight: 700; color: #1B6A3E; letter-spacing: 0.1em;">STANDARDS &amp; ASSURANCE</span>
          <h1 style="font-size: 36px; color: #082245; margin: 12px 0 20px;">Pharmaceutical Quality Built Into Every Step</h1>
          <p style="font-size: 16px; line-height: 1.7; color: #374151; margin-bottom: 30px;">
            At Suyash Pharma, quality remains at the heart of everything we do. From rigorous batch documentation review to sterile packaging integrity and clinical compliance, we ensure that every formulation we supply adheres to strict pharmacopeial specifications.
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px;">
            <div style="padding: 24px; border: 1px solid #E5E7EB; border-radius: 12px;">
              <h2 style="font-size: 20px; color: #082245; margin-bottom: 12px;">Analytical Verification</h2>
              <p style="font-size: 14px; color: #4B5563; line-height: 1.6;">Every product batch is systematically cross-referenced against Certificate of Analysis (CoA) parameters, potency assays, and moisture specifications.</p>
            </div>
            <div style="padding: 24px; border: 1px solid #E5E7EB; border-radius: 12px;">
              <h2 style="font-size: 20px; color: #082245; margin-bottom: 12px;">Sterile Integrity</h2>
              <p style="font-size: 14px; color: #4B5563; line-height: 1.6;">Parenteral and lyophilized vials undergo 100% seal integrity evaluation, particulate testing, and secure packaging validation.</p>
            </div>
            <div style="padding: 24px; border: 1px solid #E5E7EB; border-radius: 12px;">
              <h2 style="font-size: 20px; color: #082245; margin-bottom: 12px;">Regulatory Discipline</h2>
              <p style="font-size: 14px; color: #4B5563; line-height: 1.6;">Adherence to regulatory packaging standards, temperature-controlled storage, and reliable distribution across India.</p>
            </div>
          </div>
        </main>
        ${renderStaticFooter()}
      </div>
    `
  },
  {
    path: '/therapeutic-segments',
    outputPath: 'therapeutic-segments/index.html',
    title: "Therapeutic Segments | Suyash Pharma Pharmaceutical Portfolio",
    description: "Explore Suyash Pharma's core therapeutic segments: broad-spectrum antibiotics, carbapenem combinations, gastrointestinal support, and supportive care therapy in India.",
    canonicalUrl: `${BASE_URL}/therapeutic-segments`,
    ogType: "website",
    ogImage: LOGO_URL,
    schemas: [
      getOrganizationSchema(),
      getBreadcrumbsSchema([
        { name: "Home", url: "/" },
        { name: "Therapeutic Segments", url: "/therapeutic-segments" }
      ])
    ],
    renderBody: () => `
      <div class="sp-therapeutic-page-wrapper">
        ${renderStaticNavbar('therapeutic-segments')}
        <main class="sp-therapeutic-main" style="padding: 60px 20px; max-width: 1000px; margin: 0 auto;">
          <span style="font-size: 12px; font-weight: 700; color: #1B6A3E; letter-spacing: 0.1em;">CLINICAL FOCUS AREAS</span>
          <h1 style="font-size: 36px; color: #082245; margin: 12px 0 20px;">Therapeutic Segments &amp; Healthcare Solutions</h1>
          <p style="font-size: 16px; line-height: 1.7; color: #374151; margin-bottom: 30px;">
            Suyash Pharma focuses on key therapeutic segments critical to modern inpatient care, intensive therapy, and outpatient medical practice.
          </p>
          <section id="anti-infective" style="margin-top: 40px;">
            <h2 style="font-size: 24px; color: #082245; border-bottom: 2px solid #1B6A3E; padding-bottom: 8px;">1. Broad-Spectrum Antibiotics &amp; Combination Therapy</h2>
            <p style="font-size: 15px; color: #4B5563; line-height: 1.6; margin: 12px 0 20px;">Covering third- and fourth-generation cephalosporins, carbapenems, and beta-lactamase inhibitors including Meropenem, Sulbactam, Tazobactam, and Ceftizoxime.</p>
          </section>
          <section id="gastrointestinal" style="margin-top: 40px;">
            <h2 style="font-size: 24px; color: #082245; border-bottom: 2px solid #1B6A3E; padding-bottom: 8px;">2. Gastrointestinal Support</h2>
            <p style="font-size: 15px; color: #4B5563; line-height: 1.6; margin: 12px 0 20px;">Parenteral acid suppression featuring lyophilized Pantoprazole Sodium 40mg for acute hospital management.</p>
          </section>
          <section id="supportive" style="margin-top: 40px;">
            <h2 style="font-size: 24px; color: #082245; border-bottom: 2px solid #1B6A3E; padding-bottom: 8px;">3. Supportive &amp; Adjunctive Therapy</h2>
            <p style="font-size: 15px; color: #4B5563; line-height: 1.6; margin: 12px 0 20px;">Cellular antioxidant protection with Reduced Glutathione 1200mg paired with Vitamin C solvent ampoules.</p>
          </section>
        </main>
        ${renderStaticFooter()}
      </div>
    `
  },
  {
    path: '/contact',
    outputPath: 'contact/index.html',
    title: "Contact Suyash Pharma | Pharmaceutical Company in Nallasopara, Maharashtra",
    description: "Contact Suyash Pharma in Nallasopara East, Maharashtra. Inquire about pharmaceutical products, distribution partnerships, and hospital supply across India.",
    canonicalUrl: `${BASE_URL}/contact`,
    ogType: "website",
    ogImage: LOGO_URL,
    schemas: [
      getOrganizationSchema(),
      getLocalBusinessSchema(),
      getBreadcrumbsSchema([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" }
      ])
    ],
    renderBody: () => `
      <div class="sp-contact-page-wrapper">
        ${renderStaticNavbar('contact')}
        <main class="sp-contact-main" style="padding: 60px 20px; max-width: 1000px; margin: 0 auto;">
          <span style="font-size: 12px; font-weight: 700; color: #1B6A3E; letter-spacing: 0.1em;">GET IN TOUCH</span>
          <h1 style="font-size: 36px; color: #082245; margin: 12px 0 20px;">Contact Suyash Pharma Official Office</h1>
          <p style="font-size: 16px; line-height: 1.7; color: #374151; margin-bottom: 30px;">
            Have a product enquiry, hospital supply requirement, or distribution partnership opportunity? Reach out to our dedicated team.
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 30px;">
            <div style="padding: 24px; border: 1px solid #E5E7EB; border-radius: 12px;">
              <h2 style="font-size: 18px; color: #082245; margin-bottom: 8px;">Corporate Address</h2>
              <p style="font-size: 14px; color: #4B5563; line-height: 1.6;">
                SHOP NO. A/02,03 GROUND FLOOR, MAX AVENUE CHS LTD, OSTWAL NAGARI, NALLASOPARA EAST, Palghar, Maharashtra - 401209, India
              </p>
            </div>
            <div style="padding: 24px; border: 1px solid #E5E7EB; border-radius: 12px;">
              <h2 style="font-size: 18px; color: #082245; margin-bottom: 8px;">Phone Numbers</h2>
              <p style="font-size: 14px; color: #4B5563; line-height: 1.6;">
                Primary: <a href="tel:+918928252638" style="color: #1B6A3E; font-weight: 600;">+91-8928252638</a><br>
                Alternate: <a href="tel:+917798917108" style="color: #1B6A3E; font-weight: 600;">+91-7798917108</a>
              </p>
            </div>
            <div style="padding: 24px; border: 1px solid #E5E7EB; border-radius: 12px;">
              <h2 style="font-size: 18px; color: #082245; margin-bottom: 8px;">Email Inquiries</h2>
              <p style="font-size: 14px; color: #4B5563; line-height: 1.6;">
                <a href="mailto:suyashpharma1@gmail.com" style="color: #1B6A3E; font-weight: 600;">suyashpharma1@gmail.com</a>
              </p>
            </div>
          </div>
        </main>
        ${renderStaticFooter()}
      </div>
    `
  },
  {
    path: '/404',
    outputPath: '404.html',
    title: "Page Not Found (404) | Suyash Pharma",
    description: "The requested pharmaceutical page or product specification could not be found on Suyash Pharma. Explore our products portfolio or contact our team in Nallasopara, Maharashtra.",
    canonicalUrl: `${BASE_URL}/404`,
    noindex: true,
    schemas: [
      getBreadcrumbsSchema([
        { name: "Home", url: "/" },
        { name: "404 Not Found", url: "/404" }
      ])
    ],
    renderBody: () => `
      <div class="sp-notfound-page-wrapper">
        ${renderStaticNavbar('home')}
        <main class="sp-notfound-main" style="padding: 80px 20px; text-align: center; max-width: 600px; margin: 0 auto;">
          <h1 style="font-size: 72px; color: #082245; margin-bottom: 12px;">404</h1>
          <h2 style="font-size: 24px; color: #374151; margin-bottom: 16px;">PAGE NOT FOUND</h2>
          <p style="font-size: 15px; color: #6B7280; line-height: 1.6; margin-bottom: 24px;">The pharmaceutical page, product formulation, or technical specification you are looking for does not exist or has been relocated.</p>
          <a href="/" style="display: inline-block; padding: 12px 24px; background: #1B6A3E; color: #FFFFFF; text-decoration: none; font-weight: 700; border-radius: 999px;">BACK TO HOME</a>
        </main>
        ${renderStaticFooter()}
      </div>
    `
  }
];

// Add All 13 Individual Product Pages
for (const product of PRODUCTS) {
  PAGES.push({
    path: `/products/${product.slug}`,
    outputPath: `products/${product.slug}/index.html`,
    title: `${product.name} | ${product.generic} | Suyash Pharma`,
    description: `${product.name} (${product.generic}) by Suyash Pharma. ${product.shortDescription} Supplied in ${product.packSize}. Available for healthcare institutions across India.`,
    canonicalUrl: `${BASE_URL}/products/${product.slug}`,
    ogType: "product",
    ogImage: product.image,
    schemas: [
      getOrganizationSchema(),
      getProductSchema(product),
      getBreadcrumbsSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: product.name, url: `/products/${product.slug}` }
      ])
    ],
    renderBody: () => `
      <div class="sp-product-detail-page-wrapper">
        ${renderStaticNavbar('products')}
        <main class="sp-product-detail-main" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
          <!-- Breadcrumb Navigation -->
          <nav aria-label="Breadcrumb" style="font-size: 13px; color: #6B7280; margin-bottom: 24px;">
            <a href="/" style="color: #082245; text-decoration: none;">HOME</a> / 
            <a href="/products" style="color: #082245; text-decoration: none;">ALL PRODUCTS</a> / 
            <a href="/therapeutic-segments" style="color: #1B6A3E; text-decoration: none;">${product.category}</a> / 
            <span style="color: #111827; font-weight: 700;">${product.name}</span>
          </nav>

          <article class="sp-detail-hero-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: start;">
            <!-- Product Packaging Stage (Google Images crawlable <img> element) -->
            <div style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 16px; padding: 32px; text-align: center;">
              <figure style="margin: 0;">
                <img 
                  src="${product.image}" 
                  alt="${product.imageAlt}" 
                  width="480" 
                  height="380" 
                  style="max-width: 100%; height: auto; max-height: 380px; object-fit: contain;" 
                  loading="eager" 
                />
                <figcaption style="margin-top: 12px; font-size: 12px; color: #6B7280;">Authentic packaging of ${product.name} by Suyash Pharma</figcaption>
              </figure>
            </div>

            <!-- Product Information Column -->
            <div>
              <span style="display: inline-block; padding: 4px 12px; background: #E8F5E9; color: #1B6A3E; font-size: 12px; font-weight: 700; border-radius: 999px; margin-bottom: 8px;">${product.therapeuticSegment}</span>
              <h1 style="font-size: 32px; color: #082245; margin: 8px 0 6px;">${product.name}</h1>
              <p style="font-size: 18px; color: #4B5563; font-weight: 600; margin-bottom: 16px;">${product.generic}</p>
              <p style="font-size: 15px; color: #374151; line-height: 1.7; margin-bottom: 24px;">${product.overview}</p>

              <!-- Specifications Table -->
              <div style="border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tbody>
                    <tr style="border-bottom: 1px solid #F3F4F6;">
                      <th style="padding: 10px 16px; text-align: left; background: #F9FAFB; width: 35%; color: #4B5563;">Dosage Form</th>
                      <td style="padding: 10px 16px; color: #111827; font-weight: 600;">${product.dosageForm}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F3F4F6;">
                      <th style="padding: 10px 16px; text-align: left; background: #F9FAFB; color: #4B5563;">Strength</th>
                      <td style="padding: 10px 16px; color: #111827; font-weight: 600;">${product.strength}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F3F4F6;">
                      <th style="padding: 10px 16px; text-align: left; background: #F9FAFB; color: #4B5563;">Route</th>
                      <td style="padding: 10px 16px; color: #111827; font-weight: 600;">${product.route}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F3F4F6;">
                      <th style="padding: 10px 16px; text-align: left; background: #F9FAFB; color: #4B5563;">Packaging</th>
                      <td style="padding: 10px 16px; color: #111827; font-weight: 600;">${product.packSize}</td>
                    </tr>
                    <tr>
                      <th style="padding: 10px 16px; text-align: left; background: #F9FAFB; color: #4B5563;">Composition</th>
                      <td style="padding: 10px 16px; color: #111827;">${product.composition}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Indications -->
              <div style="margin-bottom: 24px;">
                <h2 style="font-size: 18px; color: #082245; margin-bottom: 8px;">Clinical Indications</h2>
                <ul style="padding-left: 20px; font-size: 14px; line-height: 1.8; color: #4B5563;">
                  ${product.indications.map(ind => `<li>${ind}</li>`).join('')}
                </ul>
              </div>

              <!-- Action CTAs -->
              <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <a href="/contact" style="padding: 12px 24px; background: #1B6A3E; color: #FFFFFF; text-decoration: none; font-weight: 700; border-radius: 999px; font-size: 13px;">SUBMIT PRODUCT ENQUIRY</a>
                <a href="/products" style="padding: 12px 24px; background: #082245; color: #FFFFFF; text-decoration: none; font-weight: 700; border-radius: 999px; font-size: 13px;">← BACK TO ALL PRODUCTS</a>
              </div>
            </div>
          </article>
        </main>
        ${renderStaticFooter()}
      </div>
    `
  });
}

// Main Execution
async function runPrerender() {
  console.log('--- Starting Suyash Pharma Build-Time Prerender ---');

  const templateHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templateHtmlPath)) {
    console.error('Error: dist/index.html not found! Run "vite build" first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templateHtmlPath, 'utf8');

  // Extract head assets (Vite CSS links and script bundles)
  const headAssetsMatch = baseHtml.match(/<link rel="stylesheet"[^>]+>/g) || [];
  const scriptAssetsMatch = baseHtml.match(/<script type="module"[^>]+><\/script>/g) || [];

  const headAssetsStr = headAssetsMatch.join('\n  ');
  const scriptAssetsStr = scriptAssetsMatch.join('\n  ');

  let generatedCount = 0;

  for (const page of PAGES) {
    const fullOutputPath = path.join(DIST_DIR, page.outputPath);
    const outputDir = path.dirname(fullOutputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Build schemas markup
    const schemasMarkup = (page.schemas || [])
      .map(s => `  <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n  </script>`)
      .join('\n');

    // Assemble final standalone HTML document
    const finalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${page.title}</title>
  <meta name="description" content="${page.description}" />
  <meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}" />
  <meta name="author" content="${BRAND_NAME}" />
  <link rel="canonical" href="${page.canonicalUrl}" />

  <!-- Open Graph -->
  <meta property="og:site_name" content="${BRAND_NAME}" />
  <meta property="og:type" content="${page.ogType || 'website'}" />
  <meta property="og:title" content="${page.title}" />
  <meta property="og:description" content="${page.description}" />
  <meta property="og:url" content="${page.canonicalUrl}" />
  <meta property="og:image" content="${page.ogImage || LOGO_URL}" />
  <meta property="og:locale" content="en_IN" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${page.title}" />
  <meta name="twitter:description" content="${page.description}" />
  <meta name="twitter:image" content="${page.ogImage || LOGO_URL}" />

  <!-- Preload Brand Assets -->
  <link rel="icon" type="image/png" href="/images/logo/suyash-pharma-logo.png" />
  
  <!-- Bundled Vite CSS Stylesheets -->
  ${headAssetsStr}

  <!-- JSON-LD Structured Data Schemas -->
${schemasMarkup}
</head>
<body>
  <!-- Prerendered Static Semantic HTML (Immediate FCP/LCP & Crawler Discovery) -->
  <div id="app">${page.renderBody()}</div>

  <!-- Vite Client-Side Hydration Script -->
  ${scriptAssetsStr}
</body>
</html>
`;

    fs.writeFileSync(fullOutputPath, finalHtml, 'utf8');
    generatedCount++;
    console.log(`[PRERENDER] Generated: ${page.outputPath} (${page.canonicalUrl})`);
  }

  console.log(`\nSuccessfully prerendered ${generatedCount} static pages for Google Search and Google Images.`);
}

runPrerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
