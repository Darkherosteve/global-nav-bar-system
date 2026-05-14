/*
========================================
 NAVIGATION LINKS
 Creates visible + hidden links
========================================
*/

export function createLinks(config) {

  const {
    links,
    maxVisibleItems
  } = config;

  const visibleLinks =
    links.slice(0, maxVisibleItems);

  const hiddenLinks =
    links.slice(maxVisibleItems);

  const visibleHTML = visibleLinks.map(item => `
    <a href="${item.href}">
      ${item.icon
        ? `<i class="${item.icon}"></i>`
        : ''
      }

      <span class="nav-label">
        ${item.label}
      </span>
    </a>
  `).join("");

  return {
    visibleHTML,
    hiddenLinks
  };
}