import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const prevBtn = document.querySelector('.my-prev-btn');
const nextBtn = document.querySelector('.my-next-btn');

export function initSwiper(selector, config = {}) {
  document.addEventListener('DOMContentLoaded', function () {
    new Swiper(selector, {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: `.my-next-btn`,
        prevEl: `.my-prev-btn`,
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

initSwiper('.second-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.second-swiper .swiper-pagination',
    clickable: true,
  },
});

initSwiper('.my-swiper', {
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1160: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
