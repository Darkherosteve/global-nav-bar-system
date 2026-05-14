/* =========================================================
   scripts/navbar.js - Complete Version with Subheading
   Features: Custom Colors | Centered Modal | Right-Aligned | Protection | Subheading
========================================================= */

class CompanyNavbar extends HTMLElement {

  connectedCallback() {

    // =========================
    // SECURITY & PROTECTION FEATURES
    // =========================
    
    // Disable Right Click
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      return false;
    });
    
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.
    document.addEventListener('keydown', function(e) {
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        return false;
      }
      
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
      }
      
      if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return false;
      }
      
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        return false;
      }
      
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'K' || e.key === 'k')) {
        e.preventDefault();
        return false;
      }
      
      if ((e.ctrlKey || e.metaKey) && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        return false;
      }
      
      if ((e.ctrlKey || e.metaKey) && (e.key === 'P' || e.key === 'p')) {
        e.preventDefault();
        return false;
      }
    });
    
    // Disable Print Screen
    document.addEventListener('keyup', function(e) {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        e.preventDefault();
        return false;
      }
    });
    
    // Disable dragging
    document.addEventListener('dragstart', function(e) {
      e.preventDefault();
      return false;
    });
    
    // Detect DevTools
    let devToolsOpen = false;
    const checkDevTools = function() {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        if (!devToolsOpen) {
          devToolsOpen = true;
          console.clear();
          document.body.style.opacity = '0.99';
        }
      } else {
        devToolsOpen = false;
      }
    };
    
    setInterval(checkDevTools, 1000);
    
    // Override console
    if (typeof window.console !== 'undefined') {
      const noop = function() {};
      const methods = ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace', 'group', 'groupCollapsed', 'groupEnd'];
      for (let i = 0; i < methods.length; i++) {
        if (window.console[methods[i]]) {
          window.console[methods[i]] = noop;
        }
      }
    }

    // =========================
    // FIND SCRIPT LOCATION
    // =========================

    const scripts = document.querySelectorAll('script[src*="navbar.js"]');
    const currentScript = scripts[scripts.length - 1];
    const scriptSrc = currentScript.src;
    const baseURL = scriptSrc.split("/").slice(0, -1).join("/");

    // =========================
    // LOAD FONT AWESOME
    // =========================

    const faPath = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";

    if (!document.querySelector(`link[href="${faPath}"]`)) {
      const faLink = document.createElement("link");
      faLink.rel = "stylesheet";
      faLink.href = faPath;
      document.head.appendChild(faLink);
    }

    // =========================
    // LOAD NAVBAR CSS
    // =========================

    const cssPath = `${baseURL.replace("/scripts", "")}/styles/main.css`;

    if (!document.querySelector(`link[href="${cssPath}"]`)) {
      const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = cssPath;
      document.head.appendChild(cssLink);
    }

    // =========================
    // GET CONFIGURATION
    // =========================

    const config = window.CompanyNavbarConfig || {};

    // Check if protection is enabled (default: true)
    const enableProtection = config.enableProtection !== false;
    
    if (!enableProtection) {
      console.log('Protection disabled by config');
    }

    // =========================
    // THEMES & CUSTOM COLOR SUPPORT
    // =========================

    const themes = {
      blue: "13, 110, 253",
      purple: "168, 85, 247",
      emerald: "16, 185, 129",
      rose: "244, 63, 94",
      orange: "249, 115, 22",
      dark: "15, 23, 42"
    };

    let navbarRGB = themes.dark;
    
    if (config.theme && themes[config.theme]) {
      navbarRGB = themes[config.theme];
    } else if (config.navbarColor) {
      navbarRGB = config.navbarColor;
    } else if (config.theme && !themes[config.theme]) {
      navbarRGB = config.theme;
    }

    // =========================
    // CONFIG VALUES
    // =========================

    const links = config.links || [];
    const maxVisibleItems = config.maxVisibleItems || 3;
    const leftComponents = config.leftComponents || [];
    const rightComponents = config.rightComponents || [];
    const navbarOpacity = config.navbarOpacity || "0.75";
    const blurAmount = config.blurAmount || "18px";
    
    // Subheading support
    const companyName = config.companyName || "";
    const subheading = config.subheading || "";
    const logo = config.logo || null;

    // =========================
    // BRAND SECTION WITH SUBHEADING
    // =========================
    
    let brandHTML = '';
    
    if (companyName || logo) {
      brandHTML = `
        <div class="brand-section">
          ${logo ? `<img src="${logo}" class="brand-logo" alt="Logo">` : ''}
          <div class="brand-info">
            ${companyName ? `<div class="brand-name">${companyName}</div>` : ''}
            ${subheading ? `<div class="brand-subheading">${subheading}</div>` : ''}
          </div>
        </div>
      `;
    }

    // =========================
    // SPLIT LINKS
    // =========================

    const visibleLinks = links.slice(0, maxVisibleItems);
    const hiddenLinks = links.slice(maxVisibleItems);

    // =========================
    // VISIBLE LINKS HTML
    // =========================

    const visibleLinksHTML = visibleLinks
      .map((item) => {
        return `
          <a href="${item.href}">
            ${item.icon ? `<i class="${item.icon}"></i>` : ""}
            <span class="nav-label">${item.label}</span>
          </a>
        `;
      })
      .join("");

    // =========================
    // MODAL LINKS HTML
    // =========================

    const modalLinksHTML = hiddenLinks
      .map((item) => {
        return `
          <a href="${item.href}" class="modal-link">
            ${item.icon ? `<i class="${item.icon}"></i>` : ""}
            <span>${item.label}</span>
          </a>
        `;
      })
      .join("");

    // =========================
    // MORE BUTTON
    // =========================

    const moreButtonHTML = hiddenLinks.length > 0
      ? `
        <button class="more-button" type="button">
          <i class="fas fa-ellipsis-h"></i>
          <span class="nav-label">More</span>
        </button>
      `
      : "";

    // =========================
    // CENTERED MODAL
    // =========================

    const modalHTML = hiddenLinks.length > 0
      ? `
        <div class="navbar-modal-overlay" id="navbarModalOverlay">
          <div class="navbar-modal-container">
            <div class="navbar-modal-header">
              <h3>Menu</h3>
              <button class="navbar-modal-close" id="navbarModalClose">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="navbar-modal-content">
              ${modalLinksHTML}
            </div>
          </div>
        </div>
      `
      : "";

    // =========================
    // FINAL LINKS
    // =========================

    const linksHTML = visibleLinksHTML + moreButtonHTML;

    // =========================
    // LEFT SECTION (Brand + Custom Components)
    // =========================
    
    const leftSectionHTML = brandHTML + leftComponents.join("");

    // =========================
    // RENDER NAVBAR
    // =========================

    this.innerHTML = `
      <nav
        class="company-navbar navbar-loading"
        style="
          --navbar-color: rgba(${navbarRGB}, ${navbarOpacity});
          --navbar-blur: ${blurAmount};
        "
      >
        <!-- LEFT SECTION -->
        <div class="left-section">
          ${leftSectionHTML}
        </div>

        <!-- NAV LINKS (Right Aligned) -->
        <div class="nav-links-wrapper">
          <div class="nav-links">
            ${linksHTML}
          </div>
        </div>

        <!-- RIGHT SECTION -->
        <div class="right-section">
          ${rightComponents.join("")}
        </div>
      </nav>
      ${modalHTML}
    `;

    // =========================
    // PAGE CONTENT DELAY
    // =========================

    if (!document.body.style.visibility) {
      document.body.style.visibility = "hidden";
    }
    
    this.style.visibility = "visible";

    setTimeout(() => {
      const navbar = this.querySelector(".company-navbar");
      if (navbar) {
        navbar.classList.remove("navbar-loading");
        navbar.classList.add("navbar-loaded");
      }

      setTimeout(() => {
        document.body.style.visibility = "visible";
        this.style.visibility = "visible";
      }, 800);
    }, 1000);

    // =========================
    // MODAL FUNCTIONALITY
    // =========================

    setTimeout(() => {
      const moreButton = this.querySelector('.more-button');
      const modalOverlay = this.querySelector('#navbarModalOverlay');
      const modalClose = this.querySelector('#navbarModalClose');
      
      if (moreButton && modalOverlay) {
        moreButton.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          modalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        };
        
        if (modalClose) {
          modalClose.onclick = () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
          };
        }
        
        modalOverlay.onclick = (e) => {
          if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
          }
        };
        
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
          }
        });
      }
    }, 100);

    // =========================
    // RESPONSIVE MODE
    // =========================

    setTimeout(() => {
      const navbar = this.querySelector(".company-navbar");
      const navLinksWrapper = this.querySelector(".nav-links-wrapper");
      const navLinks = this.querySelector(".nav-links");

      const updateResponsiveMode = () => {
        if (!navbar || !navLinks || !navLinksWrapper) return;

        navbar.classList.remove("compact", "mobile");

        requestAnimationFrame(() => {
          const isMobile = window.innerWidth <= 768;
          
          if (isMobile) {
            navbar.classList.add("mobile");
          }

          if (navLinks.scrollWidth > navLinksWrapper.clientWidth) {
            navbar.classList.add("compact");
          }
        });
      };

      updateResponsiveMode();
      
      let resizeTimeout;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateResponsiveMode, 150);
      });

      if (document.fonts) {
        document.fonts.ready.then(updateResponsiveMode);
      }
    }, 100);

  }
}

customElements.define("company-navbar", CompanyNavbar);