/*
========================================
 SECURITY FEATURES
 Disables inspect shortcuts
========================================
*/

export function enableProtection() {

  document.addEventListener(
    'contextmenu',
    e => e.preventDefault()
  );

  document.addEventListener(
    'dragstart',
    e => e.preventDefault()
  );
}