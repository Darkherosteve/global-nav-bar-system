/*
========================================
 ASSET LOADER
 Loads CSS and FontAwesome
========================================
*/

export function loadAssets() {

  const scripts = document.querySelectorAll('script[src*="main.js"]');
  const currentScript = scripts[scripts.length - 1];

  const scriptSrc = currentScript.src;
  const baseURL = scriptSrc.split("/").slice(0, -1).join("/");

  const faPath =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";

  if (!document.querySelector(`link[href="${faPath}"]`)) {
    const faLink = document.createElement("link");

    faLink.rel = "stylesheet";
    faLink.href = faPath;

    document.head.appendChild(faLink);
  }

  const cssPath =
    `${baseURL.replace("/scripts", "")}/styles/main.css`;

  if (!document.querySelector(`link[href="${cssPath}"]`)) {

    const cssLink = document.createElement("link");

    cssLink.rel = "stylesheet";
    cssLink.href = cssPath;

    document.head.appendChild(cssLink);
  }
}