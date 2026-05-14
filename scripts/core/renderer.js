/*
========================================
 RENDERER
 Builds final navbar HTML
========================================
*/

import { themes } from '../utils/themes.js';

import { createBrandHTML }
from '../ui/brand.js';

import { createLinks }
from '../ui/links.js';

export function renderNavbar(component, config) {

  let navbarRGB = themes.dark;

  if (themes[config.theme]) {
    navbarRGB = themes[config.theme];
  }

  const brandHTML =
    createBrandHTML(config);

  const {
    visibleHTML
  } = createLinks(config);

  component.innerHTML = `
    <nav
      class="company-navbar"
      style="
        --navbar-color:
        rgba(${navbarRGB},
        ${config.navbarOpacity});

        --navbar-blur:
        ${config.blurAmount};
      "
    >

      <div class="left-section">
        ${brandHTML}
      </div>

      <div class="nav-links-wrapper">
        <div class="nav-links">
          ${visibleHTML}
        </div>
      </div>

      <div class="right-section">
        ${config.rightComponents.join("")}
      </div>

    </nav>
  `;
}