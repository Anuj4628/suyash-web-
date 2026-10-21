/**
 * Suyash Pharma - Main Application Entrypoint
 */

import './styles/global.css';
import { renderHomePage } from './pages/Home/Home.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHomePage();
});
