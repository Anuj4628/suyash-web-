/**
 * Suyash Pharma - Master Pharmaceutical Products Data
 * Single definitive source of truth across the website (Marquee, Catalog, Product Cards, Detail Pages).
 * 
 * Verified against authentic packaging artwork in "All Product Boxes" and clinical documentation in "dawa".
 * 
 * Image Mapping Audit:
 * 1. CEFFTOB™ -> ceftazidime.png (Ceftazidime 1g + Tobramycin 120mg, 1.120gm)
 * 2. SPTIK™-1.5GM -> ceftizoxime.png (Ceftizoxime 1.5gm) + dawa5.jpeg
 * 3. TIGRIXA-100 -> tigecycline.png (Tigecycline 100mg)
 * 4. SPNEM™ -> meropenem-injection.png (Meropenem 2.0 gm) + dawa3.jpeg
 * 5. GTVITA-SP -> glutathione.png (Glutathione 1200mg + Vitamin C) + dawa2.jpeg
 * 6. SPARAZONE-3GM -> cefoperazone.png (Cefoperazone 2gm + Sulbactam 1gm) + dawa6.jpeg
 * 7. SPNEM-SB -> meropenem-sulbactam-injection.png (Meropenem 500mg + Sulbactam 250mg, 750mg) + dawa4.jpeg
 * 8. SULBOFORTE-2GM -> sulbactam.png (Sulbactam 2.0gm)
 * 9. SPNEM-TZ -> meropenem.png (Meropenem 1000mg + Tazobactam 125mg, 1.125gm)
 * 10. SPNEM-SB 1.5GM -> meropenem-sulbactam.png (Meropenem 1000mg + Sulbactam 500mg, 1.5gm)
 * 11. YSPAN-40MG -> pantoprazole.png (Pantoprazole 40mg)
 * 12. Sfrome-2gm -> cefpirome-2000mg.png (Cefpirome 2000mg)
 * 13. CPFOXIME-500 -> cefuroxime.png (Cefuroxime Axetil 500mg Tablets) + dawa7.jpeg
 * 
 * NOTE: The yellow multi-brand reference sheet (dawa1.jpeg) is intentionally NOT included
 * in any product detail gallery or thumbnails.
 */

// Packaging Box Assets (All 13 Products from 'All Product Boxes')
import ceftazidimeBoxImg from '../assets/images/products/ceftazidime.png';
import ceftizoximeBoxImg from '../assets/images/products/ceftizoxime.png';
import tigecyclineBoxImg from '../assets/images/products/tigecycline.png';
import meropenem2gmBoxImg from '../assets/images/products/meropenem-injection.png';
import glutathioneBoxImg from '../assets/images/products/glutathione.png';
import cefoperazoneBoxImg from '../assets/images/products/cefoperazone.png';
import meropenemSb750BoxImg from '../assets/images/products/meropenem-sulbactam-injection.png';
import sulbactamBoxImg from '../assets/images/products/sulbactam.png';
import meropenemTzBoxImg from '../assets/images/products/meropenem.png';
import meropenemSb15BoxImg from '../assets/images/products/meropenem-sulbactam.png';
import pantoprazoleBoxImg from '../assets/images/products/pantoprazole.png';
import cefpiromeBoxImg from '../assets/images/products/cefpirome-2000mg.png';
import cefuroximeBoxImg from '../assets/images/products/cefuroxime.png';

// Relevant Product-Specific Clinical Assets (Zero multi-brand yellow sheets)
import dawa2GtvitaImg from '../assets/images/products/dawa/dawa2.jpeg';
import dawa3SpnemImg from '../assets/images/products/dawa/dawa3.jpeg';
import dawa4SpnemSbImg from '../assets/images/products/dawa/dawa4.jpeg';
import dawa5SptikImg from '../assets/images/products/dawa/dawa5.jpeg';
import dawa6SparazoneImg from '../assets/images/products/dawa/dawa6.jpeg';
import dawa7CpfoximeImg from '../assets/images/products/dawa/dawa7.jpeg';

export const products = [
  {
    id: 1,
    productNumber: "01",
    name: "CEFFTOB™",
    brandName: "CEFFTOB™",
    slug: "cefftob",
    generic: "Ceftazidime 1000mg & Tobramycin 120mg for Injection",
    color: "#064F7C",
    composition: "Each vial contains: Ceftazidime IP (as Sodium) eq. to anhydrous Ceftazidime 1000 mg, Tobramycin Sulphate IP eq. to Tobramycin 120 mg",
    strength: "1.120 gm (1000 mg + 120 mg)",
    dosageForm: "Dry Powder for Injection (IV or IM use)",
    route: "Intravenous (IV) or Intramuscular (IM)",
    packSize: "Single Dose Vial with Sterile Water for Injection",
    category: "Anti-Infective Combination",
    therapeuticSegment: "ANTI-INFECTIVE COMBO",
    filterGroup: "anti-infective",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Synergistic cephalosporin and aminoglycoside combination providing targeted antimicrobial coverage for severe bacterial infections.",
    overview: "CEFFTOB™ combines third-generation cephalosporin Ceftazidime with aminoglycoside Tobramycin, delivering synergistic bactericidal coverage against susceptible aerobic gram-negative bacilli including nosocomial Pseudomonas aeruginosa.",
    indications: [
      "Complicated urinary tract infections (cUTI)",
      "Severe nosocomial and lower respiratory tract infections",
      "Complicated intra-abdominal infections",
      "Septicemia and bloodstream infections",
      "Complicated skin and soft tissue infections"
    ],
    administration: "Administered via deep intramuscular (IM) injection or slow intravenous (IV) infusion as directed by the treating physician.",
    image: ceftazidimeBoxImg,
    galleryImages: [ceftazidimeBoxImg],
    isHomepageFeatured: true,
    relatedProductSlugs: ["sparazone-3gm", "sptik-1-5gm", "sfrome-2gm"]
  },
  {
    id: 2,
    productNumber: "02",
    name: "SPTIK™-1.5GM",
    brandName: "SPTIK™-1.5GM",
    slug: "sptik-1-5gm",
    generic: "Ceftizoxime Injection I.P. 1.5gm",
    color: "#FFFFFF",
    bgColor: "#1B82C7",
    borderColor: "#E65100",
    isBadge: true,
    composition: "Each vial contains: Ceftizoxime Sodium IP equivalent to Ceftizoxime 1.5 gm (as Sterile powder)",
    strength: "1.5 gm (1500 mg)",
    dosageForm: "Sterile Powder for Injection",
    route: "Intramuscular (IM) / Intravenous (IV) Use Only",
    packSize: "Single Dose Vial with Sterile Water for Injection",
    category: "Third-Generation Cephalosporin",
    therapeuticSegment: "HOSPITAL CARE",
    filterGroup: "cephalosporins",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Broad-spectrum third-generation cephalosporin formulated for intensive hospital treatment of severe systemic bacterial infections.",
    overview: "SPTIK™-1.5GM is an established third-generation cephalosporin antibiotic exhibiting high stability against beta-lactamases and dependable efficacy in hospital-acquired systemic infections.",
    indications: [
      "Respiratory tract infections (pneumonia, bronchitis)",
      "Complicated urinary tract infections",
      "Skin & soft tissue infections",
      "Intra-abdominal infections and peritonitis",
      "Bacterial septicemia"
    ],
    administration: "For Adults: 1.5 gm administered IM or IV every 12 hours, or as directed by the physician. For IM/IV Use Only.",
    image: ceftizoximeBoxImg,
    galleryImages: [ceftizoximeBoxImg, dawa5SptikImg],
    isHomepageFeatured: true,
    relatedProductSlugs: ["cefftob", "sfrome-2gm", "sparazone-3gm"]
  },
  {
    id: 3,
    productNumber: "03",
    name: "TIGRIXA-100",
    brandName: "TIGRIXA-100",
    slug: "tigrixa-100",
    generic: "Tigecycline for Injection USP 100mg (Lyophilized)",
    color: "#005C42",
    composition: "Each vial contains: Tigecycline (as Tigecycline Acetate) 100 mg (Lyophilized sterile powder)",
    strength: "100 mg",
    dosageForm: "Lyophilized Powder for IV Infusion Only",
    route: "Intravenous (IV) Infusion Only",
    packSize: "Single Dose Vial (100mg Lyophilized)",
    category: "Glycylcycline Antibiotic / Critical Care",
    therapeuticSegment: "CRITICAL CARE",
    filterGroup: "critical-care",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "First-in-class glycylcycline antibiotic engineered to overcome major bacterial resistance mechanisms in high-acuity infections.",
    overview: "TIGRIXA-100 is an intravenous glycylcycline antibiotic structured to circumvent classic bacterial resistance mechanisms (efflux pumps and ribosomal protection) in complicated intensive care infections.",
    indications: [
      "Complicated intra-abdominal infections (cIAI)",
      "Complicated skin and skin structure infections (cSSSI)",
      "Hospital-acquired pneumonia caused by susceptible pathogens"
    ],
    administration: "Administered exclusively via intravenous (IV) infusion over 30 to 60 minutes as directed by the treating critical care specialist.",
    image: tigecyclineBoxImg,
    galleryImages: [tigecyclineBoxImg],
    isHomepageFeatured: true,
    relatedProductSlugs: ["spnem", "spnem-sb-1-5gm", "sulboforte-2gm"]
  },
  {
    id: 4,
    productNumber: "04",
    name: "SPNEM™",
    brandName: "SPNEM™",
    slug: "spnem",
    generic: "Meropenem Injection IP 2.0 gm",
    color: "#960114",
    isItalic: true,
    composition: "Each vial contains: Meropenem IP 2.0 gm (as Sterile powder)",
    strength: "2.0 gm (2000 mg)",
    dosageForm: "Powder for Intravenous Injection or Infusion",
    route: "For I.V. Use Only (Reconstitute before use)",
    packSize: "Single Dose Glass Vial (2 gm)",
    category: "Carbapenem Antibiotic / Critical Care",
    therapeuticSegment: "CARBAPENEM",
    filterGroup: "carbapenems",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Ultra-broad-spectrum 2.0gm carbapenem delivering robust bactericidal coverage in severe hospital-acquired polymicrobial infections.",
    overview: "SPNEM™ is an ultra-broad spectrum parenteral carbapenem antibiotic engineered for critical hospital care, offering stability against beta-lactamases and rapid bactericidal penetration.",
    indications: [
      "Severe nosocomial pneumonia and ventilator-associated infections",
      "Complicated intra-abdominal infections",
      "Complicated urinary tract and skin infections",
      "Acute bacterial meningitis",
      "Management of septicemia and febrile neutropenia"
    ],
    administration: "Administered by slow intravenous bolus injection over 3–5 minutes or as an intravenous infusion over 15–30 minutes under medical supervision.",
    image: meropenem2gmBoxImg,
    galleryImages: [meropenem2gmBoxImg, dawa3SpnemImg],
    isHomepageFeatured: true,
    relatedProductSlugs: ["spnem-sb", "spnem-tz", "spnem-sb-1-5gm"]
  },
  {
    id: 5,
    productNumber: "05",
    name: "GTVITA-SP",
    brandName: "GTVITA-SP",
    slug: "gtvita-sp",
    generic: "Glutathione for Injection 1200 mg/vial With Vitamin C Ampoule",
    color: "#2D611A",
    composition: "Each vial contains: Reduced Glutathione IP 1200 mg (Lyophilized Powder). Accompanied by 1 ampoule Vitamin C (Ascorbic Acid) 500 mg Injection",
    strength: "1200 mg/vial + 500 mg Vitamin C",
    dosageForm: "Lyophilized Powder with Solvent Ampoule",
    route: "For I.M. / I.V. Use Only",
    packSize: "Single Dose Vial with Vitamin C Ampoule",
    category: "Master Antioxidant & Supportive Therapy",
    therapeuticSegment: "ANTIOXIDANT THERAPY",
    filterGroup: "supportive",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "High-purity reduced glutathione paired with synergistic vitamin C for cellular protection, detoxification and clinical support.",
    overview: "GTVITA-SP combines pharmaceutical-grade reduced glutathione with ascorbic acid to counteract cellular oxidative stress, support hepatic detoxification, and enhance metabolic recovery.",
    indications: [
      "Cellular oxidative stress and free radical damage mitigation",
      "Adjunctive hepatoprotection in toxic or metabolic liver stress",
      "Supportive therapy during intensive metabolic recovery",
      "Dermatological protection and cellular rejuvenation support"
    ],
    administration: "1200 mg administered OD or BD via slow intravenous (IV) infusion or deep intramuscular (IM) injection, or as directed by the physician.",
    image: glutathioneBoxImg,
    galleryImages: [glutathioneBoxImg, dawa2GtvitaImg],
    isHomepageFeatured: true,
    relatedProductSlugs: ["yspan-40mg", "spnem", "cefftob"]
  },
  {
    id: 6,
    productNumber: "06",
    name: "SPARAZONE-3GM",
    brandName: "SPARAZONE-3GM",
    slug: "sparazone-3gm",
    generic: "Cefoperazone & Sulbactam for Injection 3 gm",
    color: "#0A6286",
    composition: "Each vial contains: Cefoperazone Sodium IP equivalent to Cefoperazone 2.0 gm & Sulbactam Sodium IP equivalent to Sulbactam 1.0 gm",
    strength: "3.0 gm (2 gm Cefoperazone + 1 gm Sulbactam)",
    dosageForm: "Powder for Intravenous Injection or Infusion",
    route: "For I.M. / I.V. Use Only",
    packSize: "Single Dose Sterile Vial (3 gm)",
    category: "Third-Gen Cephalosporin + Inhibitor / MDR Focus",
    therapeuticSegment: "MDR INFECTIONS",
    filterGroup: "anti-infective",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Evidence-based 3gm optimal-dose anti-infective combination designed for superior clinical response in critical MDR infections.",
    overview: "SPARAZONE-3GM is an evidence-based formulation following the ICMR 2022 optimal dose approach for multidrug-resistant gram-negative infections, with a nephrofriendly profile requiring no dose adjustment in CKD patients.",
    indications: [
      "Respiratory tract infections in critical care (pneumonia, bronchitis)",
      "Peritonitis, cholecystitis and complicated intra-abdominal infections",
      "Complicated urinary tract infections (cUTI)",
      "Bacterial septicemia and bacteremic episodes",
      "Multidrug-resistant (MDR) pathogen management"
    ],
    administration: "3 gm administered BD or TID via slow intravenous infusion, or as directed by the treating physician.",
    image: cefoperazoneBoxImg,
    galleryImages: [cefoperazoneBoxImg, dawa6SparazoneImg],
    isHomepageFeatured: true,
    relatedProductSlugs: ["sulboforte-2gm", "cefftob", "sptik-1-5gm"]
  },
  {
    id: 7,
    productNumber: "07",
    name: "SPNEM-SB",
    brandName: "SPNEM-SB",
    slug: "spnem-sb",
    generic: "Meropenem & Sulbactam for Injection 750 mg",
    color: "#095A36",
    composition: "Each vial contains: Meropenem IP 500 mg (as Meropenem) & Sulbactam IP 250 mg (as Sulbactam)",
    strength: "750 mg (500 mg Meropenem + 250 mg Sulbactam)",
    dosageForm: "Powder for Injection",
    route: "For IV Use Only — Single Dose Vial",
    packSize: "Single Dose Vial (750 mg)",
    category: "Carbapenem + Beta-Lactamase Inhibitor",
    therapeuticSegment: "CARBAPENEM COMBO",
    filterGroup: "carbapenems",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Synergistic carbapenem and beta-lactamase inhibitor combination for hospital-acquired and ventilator-associated infections.",
    overview: "SPNEM-SB combines Meropenem with the beta-lactamase inhibitor Sulbactam, restoring bactericidal susceptibility against pathogens producing Class A and Class C enzymes.",
    indications: [
      "Hospital-acquired pneumonia & Ventilator-associated pneumonia (VAP)",
      "Complicated intra-abdominal infections",
      "Complicated urinary tract infections (cUTI)",
      "Acute bacterial meningitis",
      "Septicemia and bacteremic episodes"
    ],
    administration: "750 mg administered three times daily (TID) via slow intravenous infusion, or as prescribed by the clinician.",
    image: meropenemSb750BoxImg,
    galleryImages: [meropenemSb750BoxImg, dawa4SpnemSbImg],
    isHomepageFeatured: true,
    relatedProductSlugs: ["spnem-sb-1-5gm", "spnem", "spnem-tz"]
  },
  {
    id: 8,
    productNumber: "08",
    name: "SULBOFORTE-2GM",
    brandName: "SULBOFORTE-2GM",
    slug: "sulboforte-2gm",
    generic: "Sulbactam for Injection 2.0 gm",
    color: "#0B627D",
    composition: "Each vial contains: Sulbactam for Injection 2.0 gm (Sterile powder)",
    strength: "2.0 gm (2000 mg)",
    dosageForm: "Powder for Injection",
    route: "For IM/IV Use Only",
    packSize: "Single Dose Vial (2.0 gm)",
    category: "Beta-Lactamase Inhibitor / Resistance Breaker",
    therapeuticSegment: "BETA-LACTAMASE INHIBITOR",
    filterGroup: "anti-infective",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Potent irreversible beta-lactamase inhibitor designed to overcome bacterial enzyme-mediated resistance.",
    overview: "SULBOFORTE-2GM provides targeted high-dose sulbactam therapy which irreversibly binds and inactivates beta-lactamases, demonstrating intrinsic activity against Acinetobacter baumannii.",
    indications: [
      "Multidrug-resistant Acinetobacter baumannii infections",
      "Severe hospital-acquired and ventilator-associated pneumonia",
      "Synergistic resistance-breaking combination therapy",
      "Complicated intra-abdominal and soft tissue infections"
    ],
    administration: "Administered via intravenous infusion or intramuscular injection under guidance of culture and sensitivity profiles.",
    image: sulbactamBoxImg,
    galleryImages: [sulbactamBoxImg],
    isHomepageFeatured: true,
    relatedProductSlugs: ["sparazone-3gm", "spnem-sb", "cefftob"]
  },
  {
    id: 9,
    productNumber: "09",
    name: "SPNEM-TZ",
    brandName: "SPNEM-TZ",
    slug: "spnem-tz",
    generic: "Meropenem & Tazobactam for Injection 1.125gm",
    color: "#780D21",
    isItalic: true,
    composition: "Each vial contains: Meropenem IP (as trihydrate) 1.000 gm, Tazobactam IP 0.125 gm",
    strength: "1.125 gm (1000 mg Meropenem + 125 mg Tazobactam)",
    dosageForm: "Powder for Injection",
    route: "For IV Use Only",
    packSize: "Single Dose Vial (1.125 gm)",
    category: "Advanced Carbapenem + Inhibitor Combination",
    therapeuticSegment: "ADVANCED CARBAPENEM",
    filterGroup: "carbapenems",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Targeted carbapenem and tazobactam synergy engineered for resistant ICU bacteremia and complex nosocomial infections.",
    overview: "SPNEM-TZ pairs the proven bactericidal breadth of Meropenem with Tazobactam to inhibit beta-lactamase hydrolysis and maintain antibacterial potency in critical care infections.",
    indications: [
      "Critical care septicemia and bacteremic episodes",
      "Severe nosocomial pneumonia",
      "Complicated intra-abdominal and biliary infections",
      "Complicated urinary and pelvic infections"
    ],
    administration: "Administered via slow intravenous injection or IV infusion every 8 hours as prescribed by the treating physician.",
    image: meropenemTzBoxImg,
    galleryImages: [meropenemTzBoxImg],
    isHomepageFeatured: false,
    relatedProductSlugs: ["spnem", "spnem-sb", "spnem-sb-1-5gm"]
  },
  {
    id: 10,
    productNumber: "10",
    name: "SPNEM-SB 1.5GM",
    brandName: "SPNEM-SB 1.5GM",
    slug: "spnem-sb-1-5gm",
    generic: "Meropenem & Sulbactam for Injection 1.5 gm",
    color: "#4A0B14",
    composition: "Each vial contains: Meropenem IP 1.0 gm, Sulbactam IP 0.5 gm (as Sterile powder)",
    strength: "1.5 gm (1000 mg Meropenem + 500 mg Sulbactam)",
    dosageForm: "Powder for Injection",
    route: "For IV Use Only — Single Dose Vial",
    packSize: "Single Dose Vial (1.5 gm)",
    category: "High-Dose Carbapenem + Beta-Lactamase Inhibitor",
    therapeuticSegment: "CRITICAL CARE",
    filterGroup: "carbapenems",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "High-dose carbapenem-inhibitor formulation calibrated for intensive care treatment of resistant microbial profiles.",
    overview: "SPNEM-SB 1.5GM delivers high-potency carbapenem and sulbactam concentrations for high-acuity intensive care units dealing with difficult-to-treat polymicrobial infections.",
    indications: [
      "Severe nosocomial pneumonia and ventilator-associated infections",
      "Complicated intra-abdominal sepsis",
      "Acute bacterial meningitis",
      "Febrile neutropenia in high-risk patients",
      "Catheter-related bloodstream infections"
    ],
    administration: "Administered via intravenous infusion over 30 minutes every 8 hours under medical supervision.",
    image: meropenemSb15BoxImg,
    galleryImages: [meropenemSb15BoxImg],
    isHomepageFeatured: false,
    relatedProductSlugs: ["spnem-sb", "spnem", "tigrixa-100"]
  },
  {
    id: 11,
    productNumber: "11",
    name: "YSPAN-40MG",
    brandName: "YSPAN-40MG",
    slug: "yspan-40mg",
    generic: "Pantoprazole for Injection 40mg",
    color: "#1E7022",
    prefixText: "YSPAN",
    prefixColor: "#111827",
    suffixText: "-40MG",
    suffixColor: "#1E7022",
    isSplitColor: true,
    composition: "Each vial contains: Pantoprazole Sodium (as Lyophilized powder) 40 mg",
    strength: "40 mg",
    dosageForm: "Lyophilized Powder for Injection",
    route: "FOR I.V. USE ONLY",
    packSize: "Single Dose Vial (40 mg)",
    category: "Proton Pump Inhibitor (Gastroenterology)",
    therapeuticSegment: "GASTROENTEROLOGY",
    filterGroup: "supportive",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Parenteral proton pump inhibitor providing rapid gastric acid suppression and mucosal protection in hospitalised patients.",
    overview: "YSPAN-40MG is a parenteral formulation of pantoprazole indicated for acute acid suppression in clinical situations where oral administration is not feasible.",
    indications: [
      "Acute peptic ulcer bleeding and post-endoscopic therapy",
      "Severe gastroesophageal reflux disease (GERD)",
      "Zollinger-Ellison syndrome and hypersecretory states",
      "Stress ulcer prophylaxis in critical care settings"
    ],
    administration: "Reconstitute with supplied solvent and administer via slow intravenous injection over 2 to 15 minutes as directed by the physician.",
    image: pantoprazoleBoxImg,
    galleryImages: [pantoprazoleBoxImg],
    isHomepageFeatured: false,
    relatedProductSlugs: ["gtvita-sp", "cpfoxime-500", "cefftob"]
  },
  {
    id: 12,
    productNumber: "12",
    name: "Sfrome-2gm",
    brandName: "Sfrome-2gm",
    slug: "sfrome-2gm",
    generic: "Cefpirome Sulphate Injection IP 2000 mg",
    color: "#8B1020",
    isItalic: true,
    composition: "Each vial contains: Cefpirome Sulphate IP equivalent to Cefpirome 2000 mg",
    strength: "2000 mg (2 gm)",
    dosageForm: "Powder for Injection",
    route: "FOR I.V. USE ONLY",
    packSize: "Single Dose Vial (2000 mg)",
    category: "Fourth-Generation Cephalosporin",
    therapeuticSegment: "CEPHALOSPORIN",
    filterGroup: "cephalosporins",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Fourth-generation cephalosporin featuring rapid bacterial membrane penetration for acute hospital infections.",
    overview: "Sfrome-2gm contains fourth-generation cephalosporin Cefpirome with zwitterionic molecular structure, allowing rapid outer membrane transit and high affinity for critical penicillin-binding proteins.",
    indications: [
      "Complicated lower respiratory tract infections (pneumonia, pleuropneumonia)",
      "Complicated upper and lower urinary tract infections",
      "Bacteremia, septicemia and severe systemic infections",
      "Infections in neutropenic and immunocompromised patients"
    ],
    administration: "Administered by intravenous injection over 3 to 5 minutes or by intravenous infusion over 20 to 30 minutes as prescribed.",
    image: cefpiromeBoxImg,
    galleryImages: [cefpiromeBoxImg],
    isHomepageFeatured: false,
    relatedProductSlugs: ["sptik-1-5gm", "cefftob", "sparazone-3gm"]
  },
  {
    id: 13,
    productNumber: "13",
    name: "CPFOXIME-500",
    brandName: "CPFOXIME-500",
    slug: "cpfoxime-500",
    generic: "Cefuroxime Axetil Tablets I.P. 500 Tablets",
    color: "#084168",
    composition: "Each film-coated tablet contains: Cefuroxime Axetil IP equivalent to Cefuroxime 500 mg",
    strength: "500 mg",
    dosageForm: "Film-Coated Tablets (Oral)",
    route: "Oral Administration",
    packSize: "1 x 10 Tablets (Blister Strip)",
    category: "Oral Second-Generation Cephalosporin",
    therapeuticSegment: "ORAL ANTIBIOTIC",
    filterGroup: "cephalosporins",
    storage: "Store below 25°C. Protect from light & moisture. Keep out of reach of children.",
    shortDescription: "Broad-spectrum oral cephalosporin antibiotic delivering high bioavailability and dependable efficacy in outpatient care.",
    overview: "CPFOXIME-500 is an oral bactericidal cephalosporin prodrug delivering dependable coverage across common respiratory, ENT, and urological bacterial infections.",
    indications: [
      "Respiratory tract infections (bronchitis, pneumonia)",
      "Ear, nose & throat infections (sinusitis, tonsillitis, pharyngitis, otitis media)",
      "Urinary tract infections (UTI)",
      "Skin & soft tissue infections",
      "Early Lyme disease management"
    ],
    administration: "250 mg to 500 mg every 12 hours depending on infection severity, preferably taken after meals, or as directed by the physician.",
    image: cefuroximeBoxImg,
    galleryImages: [cefuroximeBoxImg, dawa7CpfoximeImg],
    isHomepageFeatured: false,
    relatedProductSlugs: ["yspan-40mg", "sptik-1-5gm", "cefftob"]
  }
];

export const productCategories = [
  { id: "all", label: "ALL PRODUCTS" },
  { id: "carbapenems", label: "CARBAPENEMS & COMBOS" },
  { id: "cephalosporins", label: "CEPHALOSPORINS" },
  { id: "anti-infective", label: "ANTI-INFECTIVE & MDR" },
  { id: "supportive", label: "SUPPORTIVE & GI" }
];
