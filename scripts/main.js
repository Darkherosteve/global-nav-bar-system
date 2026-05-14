/*
========================================
 MAIN ENTRY FILE MEQETA LATI SYSTEM
 Loads all navbar modules
========================================
*/

import { loadAssets } from './core/loader.js';
import { getConfig } from './core/config.js';
import { renderNavbar } from './core/renderer.js';

import { enableProtection } from './features/protection.js';
import { setupModal } from './features/modal.js';
import { setupResponsiveMode } from './features/responsive.js';

class CompanyNavbar extends HTMLElement {

  connectedCallback() {

    const config = getConfig();

    loadAssets();

    if (config.enableProtection !== false) {
      enableProtection();
    }

    renderNavbar(this, config);

    setupModal(this);

    setupResponsiveMode(this);
  }
}

customElements.define("company-navbar", CompanyNavbar);