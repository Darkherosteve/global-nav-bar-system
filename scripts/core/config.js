/*
========================================
 CONFIGURATION FILE
 Gets all navbar configuration values
========================================
*/

export function getConfig() {

  const config = window.CompanyNavbarConfig || {};

  return {
    links: config.links || [],
    maxVisibleItems: config.maxVisibleItems || 3,
    leftComponents: config.leftComponents || [],
    rightComponents: config.rightComponents || [],
    navbarOpacity: config.navbarOpacity || "0.75",
    blurAmount: config.blurAmount || "18px",

    companyName: config.companyName || "",
    subheading: config.subheading || "",
    logo: config.logo || null,

    theme: config.theme || "dark",
    navbarColor: config.navbarColor || null,

    enableProtection: config.enableProtection !== false
  };
}