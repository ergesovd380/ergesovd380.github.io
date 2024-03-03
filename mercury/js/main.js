// Banner section
new Swiper('.banner-slider', {
  scrollbar: {
    el: '.banner_swiper-scrollbar',
    draggable: true,
    hide: true
  },
})

// Categories section
new Swiper('.categories-slider', {
  slidesPerView: 6,
  spaceBetween: 50,
  navigation: {
    nextEl: '.categories_next',
    prevEl: '.categories_prev'
  }
})
