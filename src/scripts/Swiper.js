import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initSwiper(selector, config = {}) {
  const container = document.querySelector(selector);

  if (!container) return;

  const prevBtn = container.querySelector('.my-prev-btn');
  const nextBtn = container.querySelector('.my-next-btn');

  const swiper = new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    on: {
      init: function () {
        updateButtons(this, prevBtn, nextBtn);
      },
      slideChange: function () {
        updateButtons(this, prevBtn, nextBtn);
      },
    },
    ...config,
  });
}

function updateButtons(swiper, prevBtn, nextBtn) {
  if (!prevBtn || !nextBtn) return;

  prevBtn.classList.toggle('swiper-button-disabled', swiper.isBeginning);
  nextBtn.classList.toggle('swiper-button-disabled', swiper.isEnd);
}

document.addEventListener('DOMContentLoaded', function () {
  initSwiper('.second-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.second-swiper .swiper-pagination',
      clickable: true,
    },
  });

  initSwiper('.my-swiper', {
    slidesPerView: 'auto',
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

  initSwiper('.photo-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,

    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
});