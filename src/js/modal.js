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

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),

    closeModalBtn: document.querySelector('[data-menu-close]'),
    closeModalJoin: document.querySelector('[data-menu-close-nav-join]'),
    closeModalCont: document.querySelector('[data-menu-close-contacts]'),
    closeModalPrice: document.querySelector('[data-menu-close-pricing]'),
    closeModalTestim: document.querySelector('[data-menu-close-testimonials]'),
    closeModalTeam: document.querySelector('[data-menu-close-team]'),
    closeModalYoga: document.querySelector('[data-menu-close-yoga]'),
    closeModalNavbarJoin: document.querySelector('[data-menu-join]'),
    closeModalNavbarJoinNow: document.querySelector('[data-menu-join-now]'),

    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalJoin.addEventListener('click', toggleModal);
  refs.closeModalCont.addEventListener('click', toggleModal);
  refs.closeModalPrice.addEventListener('click', toggleModal);
  refs.closeModalTestim.addEventListener('click', toggleModal);
  refs.closeModalTeam.addEventListener('click', toggleModal);
  refs.closeModalYoga.addEventListener('click', toggleModal);
  refs.closeModalNavbarJoin.addEventListener('click', toggleModal);
  refs.closeModalNavbarJoinNow.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-24]'),

    closeModalBtn: document.querySelector('[data-modal-close-24]'),

    modal: document.querySelector('[data-modal-24]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();
