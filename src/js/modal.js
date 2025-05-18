(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-1]'),

    closeModalBtn: document.querySelector('[data-modal-close-1]'),

    modal: document.querySelector('[data-modal-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-8]'),

    closeModalBtn: document.querySelector('[data-modal-close-8]'),

    modal: document.querySelector('[data-modal-8]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-12]'),

    closeModalBtn: document.querySelector('[data-modal-close-12]'),

    modal: document.querySelector('[data-modal-12]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();
