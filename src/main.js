/**
 * Suyash Pharma - Main Application Entrypoint
 */

import './styles/global.css';
import { router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  router.init();
});
