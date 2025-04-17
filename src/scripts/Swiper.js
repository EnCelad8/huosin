import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

function initSwiper(selector, config = {}) {
  document.addEventListener('DOMContentLoaded', function () {
    new Swiper(selector, {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      },
      on: {
        init: function () {
          updateButtons(this);
        },
        slideChange: function () {
          updateButtons(this);
        },
      },
      ...config,
    });
  });
}

function updateButtons(swiper) {
  const prevBtn = document.querySelector('.swiper-button-prev');
  const nextBtn = document.querySelector('.swiper-button-next');

  if (swiper.isBeginning) {
    prevBtn.classList.add('swiper-button-disabled');
  } else {
    prevBtn.classList.remove('swiper-button-disabled');
  }

  if (swiper.isEnd) {
    nextBtn.classList.add('swiper-button-disabled');
  } else {
    nextBtn.classList.remove('swiper-button-disabled');
  }
}

initSwiper('.my-swiper');
initSwiper('.second-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.second-swiper .swiper-pagination',
    clickable: true,
  },
});
