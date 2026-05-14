/*
========================================
 BRAND UI
 Creates logo + company section
========================================
*/

export function createBrandHTML(config) {

  const {
    companyName,
    subheading,
    logo
  } = config;

  if (!companyName && !logo) return '';

  return `
    <div class="brand-section">

      ${logo
        ? `<img src="${logo}" class="brand-logo" alt="Logo">`
        : ''
      }

      <div class="brand-info">

        ${companyName
          ? `<div class="brand-name">${companyName}</div>`
          : ''
        }

        ${subheading
          ? `<div class="brand-subheading">${subheading}</div>`
          : ''
        }

      </div>
    </div>
  `;
}