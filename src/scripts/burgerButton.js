const rootElement = document.querySelector('[data-js-header');
const overlayElement = rootElement.querySelector('[data-js-header-overlay]');
const burgerButtonElement = rootElement.querySelector(
  '[data-js-header-burger-button]',
);

const onBurgerClickButton = () => {
  burgerButtonElement.classList.toggle('is-active');
  overlayElement.classList.toggle('is-active');
  document.body.classList.toggle('no-scroll');
};

burgerButtonElement.addEventListener('click', onBurgerClickButton);
