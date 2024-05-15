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
    837: {
      slidesPerView: 2,  
      spaceBetween: 32,
    },
    568: {
      slidesPerView: 1.35,  
      spaceBetween:16,
    },
    320: { 
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