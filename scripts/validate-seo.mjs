/**
 * Suyash Pharma - Automated Technical SEO, Google Images & Product Discoverability Verification Suite
 */

import fs from 'fs';
import path from 'path';

const DIST = path.resolve('dist');
const BASE_URL = 'https://suyashpharma.com';

const EXPECTED_PRODUCTS = [
  { slug: 'cefftob', name: 'CEFFTOB™', img: 'cefftob-ceftazidime-tobramycin-injection.png' },
  { slug: 'sptik-1-5gm', name: 'SPTIK™-1.5GM', img: 'sptik-ceftizoxime-1-5gm-injection.png' },
  { slug: 'tigrixa-100', name: 'TIGRIXA-100™', img: 'tigrixa-100-tigecycline-injection.png' },
  { slug: 'spnem', name: 'SPNEM™', img: 'spnem-meropenem-2gm-injection.png' },
  { slug: 'gtvita-sp', name: 'GTVITA-SP™', img: 'gtvita-sp-glutathione-vitamin-c-injection.png' },
  { slug: 'sparazone-3gm', name: 'SPARAZONE™-3GM', img: 'sparazone-3gm-cefoperazone-sulbactam-injection.png' },
  { slug: 'spnem-sb', name: 'SPNEM-SB™', img: 'spnem-sb-meropenem-sulbactam-750mg-injection.png' },
  { slug: 'sulboforte-2gm', name: 'SULBOFORTE-2GM™', img: 'sulboforte-2gm-sulbactam-injection.png' },
  { slug: 'spnem-tz', name: 'SPNEM™-TZ', img: 'spnem-tz-meropenem-tazobactam-injection.png' },
  { slug: 'spnem-sb-1-5gm', name: 'SPNEM-SB™ 1.5GM', img: 'spnem-sb-1-5gm-meropenem-sulbactam-injection.png' },
  { slug: 'yspan-40mg', name: 'YSPAN™-40MG', img: 'yspan-40mg-pantoprazole-injection.png' },
  { slug: 'sfrome-2gm', name: 'Sfrome™-2gm', img: 'sfrome-2gm-cefpirome-injection.png' },
  { slug: 'cpfoxime-500', name: 'CPFOXIME™-500', img: 'cpfoxime-500-cefuroxime-axetil-tablets.png' }
];

const EXPECTED_CORE_PAGES = [
  { path: 'index.html', url: `${BASE_URL}/` },
  { path: 'about/index.html', url: `${BASE_URL}/about` },
  { path: 'products/index.html', url: `${BASE_URL}/products` },
  { path: 'quality/index.html', url: `${BASE_URL}/quality` },
  { path: 'therapeutic-segments/index.html', url: `${BASE_URL}/therapeutic-segments` },
  { path: 'contact/index.html', url: `${BASE_URL}/contact` }
];

let totalTests = 0;
let passedTests = 0;
let failures = [];

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failures.push(message);
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('=== SUYASH PHARMA TECHNICAL SEO & ASSET VERIFICATION SUITE ===\n');

// 1. Sitemap Verification
console.log('[1] Checking XML Sitemap & Google Image Sitemap...');
const sitemapPath = path.join(DIST, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'dist/sitemap.xml exists');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  assert(sitemapContent.includes('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'), 'Sitemap has Google Image XML namespace');
  assert(sitemapContent.includes(`${BASE_URL}/`), 'Sitemap contains homepage');
  assert(sitemapContent.includes(`${BASE_URL}/products`), 'Sitemap contains products catalogue');
  
  for (const p of EXPECTED_PRODUCTS) {
    const hasProductUrl = sitemapContent.includes(`${BASE_URL}/products/${p.slug}`);
    assert(hasProductUrl, `Sitemap contains canonical URL for ${p.name}`);
    const hasProductImg = sitemapContent.includes(p.img);
    assert(hasProductImg, `Sitemap contains Google Image entry for ${p.name} (${p.img})`);
  }
}

// 2. Robots.txt Verification
console.log('\n[2] Checking robots.txt...');
const robotsPath = path.join(DIST, 'robots.txt');
assert(fs.existsSync(robotsPath), 'dist/robots.txt exists');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  assert(robots.includes('Sitemap: https://suyashpharma.com/sitemap.xml'), 'robots.txt references sitemap.xml');
  assert(robots.includes('Allow: /images/products/'), 'robots.txt explicitly allows product images');
  assert(robots.includes('Allow: /favicon.png'), 'robots.txt explicitly allows /favicon.png');
  assert(robots.includes('Googlebot-Image'), 'robots.txt explicitly grants access to Googlebot-Image');
}

// 2b. Favicon Assets Verification
console.log('\n[2b] Checking Favicon Assets in dist/ ...');
const favPngPath = path.join(DIST, 'favicon.png');
assert(fs.existsSync(favPngPath), 'dist/favicon.png exists');
if (fs.existsSync(favPngPath)) {
  const buf = fs.readFileSync(favPngPath);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  assert(width === height && width >= 96, `favicon.png is square and >= 96px (${width}x${height}px)`);
  assert(width % 48 === 0, `favicon.png dimension (${width}px) is an exact multiple of 48px for Google Search`);
}
assert(fs.existsSync(path.join(DIST, 'favicon.ico')), 'dist/favicon.ico exists for legacy/fallback requests');

// 3. Hostinger Configuration Verification
console.log('\n[3] Checking Hostinger .htaccess...');
const htaccessPath = path.join(DIST, '.htaccess');
assert(fs.existsSync(htaccessPath), 'dist/.htaccess exists');
if (fs.existsSync(htaccessPath)) {
  const htaccess = fs.readFileSync(htaccessPath, 'utf8');
  assert(htaccess.includes('RewriteEngine On'), '.htaccess enables RewriteEngine');
  assert(htaccess.includes('RewriteCond %{REQUEST_FILENAME} -f'), '.htaccess protects real files from SPA rewrite');
  assert(htaccess.includes('mod_expires.c'), '.htaccess includes browser caching rules');
  assert(htaccess.includes('mod_deflate.c'), '.htaccess includes GZIP compression rules');
}

// 4. Product Images Verification
console.log('\n[4] Checking Product Image Assets in dist/images/products/...');
const imagesDir = path.join(DIST, 'images', 'products');
assert(fs.existsSync(imagesDir), 'dist/images/products exists');
for (const p of EXPECTED_PRODUCTS) {
  const imgPath = path.join(imagesDir, p.img);
  const exists = fs.existsSync(imgPath);
  const size = exists ? fs.statSync(imgPath).size : 0;
  assert(exists && size > 50000, `Image asset exists and is high quality: ${p.img} (${(size/1024).toFixed(1)} KB)`);
}

// 5. Static Prerendered Core Pages Verification
console.log('\n[5] Checking Static Prerendered Core Pages...');
for (const page of EXPECTED_CORE_PAGES) {
  const filePath = path.join(DIST, page.path);
  assert(fs.existsSync(filePath), `Static file exists: ${page.path}`);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    assert(html.includes(`<link rel="canonical" href="${page.url}" />`), `${page.path} has correct canonical URL (${page.url})`);
    assert(html.includes('<meta name="description" content="'), `${page.path} has meta description`);
    assert(html.includes('<link rel="icon" type="image/png" href="/favicon.png" />'), `${page.path} has correct square /favicon.png link`);
    assert(html.includes('<meta property="og:title"'), `${page.path} has Open Graph title`);
    assert(html.includes('application/ld+json'), `${page.path} has JSON-LD schema`);
    assert(html.includes('<div id="app">'), `${page.path} has prerendered HTML content in #app`);
  }
}

// 6. Static Prerendered Product Detail Pages Verification
console.log('\n[6] Checking All 13 Prerendered Product Detail Pages...');
for (const p of EXPECTED_PRODUCTS) {
  const prodFilePath = path.join(DIST, 'products', p.slug, 'index.html');
  assert(fs.existsSync(prodFilePath), `Product detail page exists: products/${p.slug}/index.html`);
  if (fs.existsSync(prodFilePath)) {
    const html = fs.readFileSync(prodFilePath, 'utf8');
    assert(html.includes(`<title>${p.name}`), `${p.name} page has unique title with product name`);
    assert(html.includes(`<link rel="canonical" href="${BASE_URL}/products/${p.slug}" />`), `${p.name} has exact canonical URL`);
    assert(html.includes(`alt="`), `${p.name} has descriptive ALT text on images`);
    assert(html.includes(p.img), `${p.name} references public image ${p.img}`);
    assert(html.includes('"@type": "Product"'), `${p.name} has Product JSON-LD schema`);
    assert(html.includes('"@type": "BreadcrumbList"'), `${p.name} has BreadcrumbList JSON-LD schema`);
    assert(!html.includes('manufacturer') || html.includes('Suyash Pharma'), `${p.name} content integrity maintained`);
  }
}

// 7. Summary
console.log('\n======================================================');
console.log(`TOTAL CHECKS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${failures.length}`);
if (failures.length === 0) {
  console.log('STATUS: ALL TECHNICAL SEO, IMAGES & PRERENDER CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('FAILURES DETECTED:');
  failures.forEach(f => console.error(' - ' + f));
  process.exit(1);
}
