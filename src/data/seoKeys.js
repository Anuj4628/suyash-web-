/**
 * Suyash Pharma - Targeted SEO Product Keys
 * Used for dynamic URL routing, product click distribution, and local SEO ranking.
 */

export const SEO_PRODUCT_KEYS = [
  'pharmaceutical-company-maharashtra',
  'pharma-company-maharashtra',
  'pharmaceutical-products-maharashtra',
  'pharma-products-maharashtra',
  'pharmaceutical-company-mumbai',
  'pharma-company-mumbai',
  'pharmaceutical-products-mumbai',
  'pharma-products-mumbai',
  'pharmaceutical-company-virar',
  'pharma-company-virar',
  'pharmaceutical-products-virar',
  'pharma-products-virar',
  'pharmaceutical-company-nallasopara',
  'pharma-company-nallasopara',
  'pharmaceutical-products-nallasopara',
  'pharma-products-nallasopara',
  'pharmaceutical-company-vasai',
  'pharma-company-vasai',
  'pharmaceutical-company-palghar',
  'pharmaceutical-products-palghar'
];

/**
 * Returns the alternating SEO key for a given item index.
 * @param {number} index - Zero-based index of the product or click
 * @returns {string} - The SEO keyword slug
 */
export function getSeoKeyForIndex(index = 0) {
  const safeIdx = Math.abs(index) % SEO_PRODUCT_KEYS.length;
  return SEO_PRODUCT_KEYS[safeIdx];
}

/**
 * Transforms an SEO key slug into a human-readable title.
 * e.g., 'pharmaceutical-company-maharashtra' -> 'Pharmaceutical Company Maharashtra'
 * @param {string} key 
 * @returns {string}
 */
export function formatSeoKey(key = '') {
  if (!key) return '';
  return key
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Builds the SEO-enhanced product URL.
 * @param {string} slug - Product slug (e.g. 'cefftob')
 * @param {number} index - Index for alternating SEO keys
 * @returns {string} - e.g. '#/products/cefftob/pharmaceutical-company-maharashtra'
 */
export function getProductUrl(slug, index = 0) {
  const seoKey = getSeoKeyForIndex(index);
  return `#/products/${slug}/${seoKey}`;
}
