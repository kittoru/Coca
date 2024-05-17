const menuBtn = document.querySelector('.burger__btn');





const insight_slider = new Swiper('.insight__slider', {
  // Optional parameters
  loop: false,
  slidesPerView: 2,
  spaceBetween: 32,
  autoHeight: false,

  // Navigation arrows
  navigation: {
    nextEl: '.slider__btn-right',
    prevEl: '.slider__btn-left',
  },

  breakpoints: {
    1400: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    860: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    480: { 
      slidesPerView: 1.13,
      spaceBetween:16,
    }
  }
});

const testimonials_slider = new Swiper('.testimonials__main', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__btn-right',
    prevEl: '.testimonials__btn-left',
  },

});

menuBtn.addEventListener('click', () => {
  const menuNav = document.querySelector('.mobile__menu');
  menuNav.classList.toggle('active');
})