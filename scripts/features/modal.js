/*
========================================
 MODAL FUNCTIONALITY
 Handles more menu popup
========================================
*/

export function setupModal(component) {

  const moreButton =
    component.querySelector('.more-button');

  const modalOverlay =
    component.querySelector('#navbarModalOverlay');

  const modalClose =
    component.querySelector('#navbarModalClose');

  if (!moreButton || !modalOverlay) return;

  moreButton.onclick = (e) => {

    e.preventDefault();

    modalOverlay.classList.add('active');

    document.body.style.overflow = 'hidden';
  };

  modalClose.onclick = () => {

    modalOverlay.classList.remove('active');

    document.body.style.overflow = '';
  };

  modalOverlay.onclick = (e) => {

    if (e.target === modalOverlay) {

      modalOverlay.classList.remove('active');

      document.body.style.overflow = '';
    }
  };
}