/*
========================================
 RESPONSIVE MODE
 Handles compact + mobile states
========================================
*/

export function setupResponsiveMode(component) {

  const navbar =
    component.querySelector(".company-navbar");

  const navLinksWrapper =
    component.querySelector(".nav-links-wrapper");

  const navLinks =
    component.querySelector(".nav-links");

  const updateResponsiveMode = () => {

    navbar.classList.remove(
      "compact",
      "mobile"
    );

    const isMobile =
      window.innerWidth <= 768;

    if (isMobile) {
      navbar.classList.add("mobile");
    }

    if (
      navLinks.scrollWidth >
      navLinksWrapper.clientWidth
    ) {
      navbar.classList.add("compact");
    }
  };

  updateResponsiveMode();

  window.addEventListener(
    "resize",
    updateResponsiveMode
  );
}