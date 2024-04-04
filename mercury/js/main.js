// Banner section
new Swiper('.banner-slider', {
  pagination: {
    el: '.banner_swiper-scrollbar',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + '</div>';
    }
  },
})

// Categories section
new Swiper('.categories-slider', {
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: false,
      loop: false
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 50,
    }
  },
  navigation: {
    nextEl: '.categories_next',
    prevEl: '.categories_prev'
  },
})

// Product swiper
new Swiper('.product-slider', {
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },
  speed: 2000,

  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    waitForTransition: true
  },
});

const bannerDeleteContainer = function() {
  const banner=document.body.querySelector('.home-page-banner-section');
  if(window.innerWidth > 450){
    banner.classList.add('container');
  }else{
    banner.classList.remove('container');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  bannerDeleteContainer()
  // Проверка кол-во фото в модальном окне
  const imagesModal = document.querySelectorAll('.dialog-card_images-small div');
  if(imagesModal.length > 5) {
    for(let m=5; m < imagesModal.length; m++) {
      imagesModal[m].remove();
    };
  };

  // Проверка кол-во карточек на мобильном (section hit)
  const cardHit = document.querySelectorAll('.cards-hit-mobile .card_mobile');
  if(cardHit.length > 3) {
    for(let h=3; h < cardHit.length; h++) {
      cardHit[h].remove();
    }
  }

  // Проверка кол-во карточек на мобильном (section new-prod)
  const cardNewProd = document.querySelectorAll('.cards-newProd-mobile .card_mobile');
  if(cardNewProd.length > 3) {
    for(let np=3; np < cardNewProd.length; np++) {
      cardNewProd[np].remove();
    }
  }

  // Проверка кол-во карточек на мобильном (section spb-products)
  const cardSpb = document.querySelectorAll('.cards-spb-mobile .card_mobile');
  if(cardSpb.length > 3) {
    for(let sp=3; sp < cardSpb.length; sp++) {
      cardSpb[sp].remove();
    }
  }

  // Проверка кол-во карточек на мобильном (section sale)
  const cardSale = document.querySelectorAll('.cards-sale-mobile .card_mobile');
  if(cardSale.length > 3) {
    for(let s=3; s < cardSale.length; s++) {
      cardSale[s].remove();
    }
  }

  // Проверка кол-во карточек на мобильном (section viewed)
  const cardViewed = document.querySelectorAll('.cards-viewed-mobile .card_mobile');
  if(cardViewed.length > 3) {
    for(let c=3; c < cardViewed.length; c++) {
      cardViewed[c].remove();
    }
  }
})
window.addEventListener('resize', () => {
  bannerDeleteContainer();
})

// Dialog-buy
const dialogBuy = document.querySelector('.dialog-for-buy');
const showBtnDialogBuy = document.querySelector('.dialog-card_btn-buy');
const closeBtnDialogBuy = document.querySelector('.dialog-buy_close');
showBtnDialogBuy.addEventListener("click", () => {
  dialogBuy.showModal();
});
closeBtnDialogBuy.addEventListener("click", () => {
  dialogBuy.close();
});
dialogBuy.addEventListener('click', (e) => {
  const dialogBuy = e.currentTarget;
  const isClickOnBackDrop = e.target === dialogBuy;

  if(isClickOnBackDrop) {
    dialogBuy.close();
  }
})


// Dialog-cheep
const dialogCheep = document.querySelector('.dialog-cheeper');
const showBtnDialogCheep = document.querySelector('.modal-cheeper');
const closeBtnDialogCheep = document.querySelector('.dialog-cheep_close');
showBtnDialogCheep.addEventListener("click", () => {
  dialogCheep.showModal();
});
closeBtnDialogCheep.addEventListener("click", () => {
  dialogCheep.close();
});
dialogCheep.addEventListener('click', (e) => {
  const dialogCheep = e.currentTarget;
  const isClickOnBackDrop = e.target === dialogCheep;

  if(isClickOnBackDrop) {
    dialogCheep.close();
  }
})

// Dialog-review
const dialogReview = document.querySelector('.dialog-for-review');
const showBtnDialogReview = document.querySelector('.modal-review');
const closeBtnDialogReview = document.querySelector('.dialog-review_close');
showBtnDialogReview.addEventListener("click", () => {
  dialogReview.showModal();
});
closeBtnDialogReview.addEventListener("click", () => {
  dialogReview.close();
});
dialogReview.addEventListener('click', (e) => {
  const dialogReview = e.currentTarget;
  const isClickOnBackDrop = e.target === dialogReview;

  if(isClickOnBackDrop) {
    dialogReview.close();
  }
})

// Counter product
let count = 1;
let counter = document.querySelector('.count-value');
function countPlus() {
  count++;
  counter.innerHTML = count;
};
function countMinus() {
  if(count < 1) {
    count = 0;
  } else {
    count--;
  }
  counter.innerHTML = count;
};

// Add images
function updateLabel() {
  const files = document.querySelector('.dialog-review_form-import-text');
  if (document.getElementById('import-file').files.length > 0) {
    const allFiles = document.getElementById('import-file').files
    let count = 1
    files.innerHTML = '';
    for(let key=0; key < allFiles.length; key++) {
      console.log(count++)
      files.innerHTML += document.getElementById('import-file').files[key].name + '<br>';
    }
  }
}
