// Tabs slider
new Swiper('.tabs-slider', {
  breakpoints: {
    300: {
      slidesPerView: 3.3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 9,
      spaceBetween: 0,
    }
  }
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

// Проверка на кол-во img на карточке товара
document.addEventListener('DOMContentLoaded', () => {
  // Проверка на кол-во фото на карточке товара
  const images = document.querySelectorAll('.product_card-images-small div');
  if(images.length > 7) {
    for(let i=7; i < images.length; i++) {
      images[i].remove();
    }
  };

  // Проверка на кол-во фото в модальном окне
  const imagesModal = document.querySelectorAll('.dialog-card_images-small div');
  if(imagesModal.length > 5) {
    for(let m=5; m < imagesModal.length; m++) {
      imagesModal[m].remove();
    }
  }

  // Проверка кол-во карточек на мобильном (section collection)
  const cardColection = document.querySelectorAll('.cards-colection-mobile .card_mobile');
  if(cardColection.length > 3) {
    for(let c=3; c < cardColection.length; c++) {
      cardColection[c].remove();
    }
  }

  // Проверка кол-во карточек на мобильном (section same)
  const cardSame = document.querySelectorAll('.cards-same-mobile .card_mobile');
  if(cardSame.length > 3) {
    for(let s=3; s < cardSame.length; s++) {
      cardSame[s].remove();
    }
  }

  // Вызов функции в мобильном
  const withWindow = window.innerWidth;
  if(withWindow < 768) {
    deleteLast();
  };
});

// Проверка на кол-во img на карточке товара на мобильном
window.addEventListener('resize', (e) => {
  const withWindow = window.innerWidth;
  if(withWindow < 768) {
    deleteLast();
  }
})
function deleteLast() {
  const imagesProduct = document.querySelectorAll('.product_card-images-small div');
  for(let i=6; i < imagesProduct.length; i++) {
    imagesProduct[i].remove();
  }
}

// Dialog-buy
const dialogBuy = document.querySelector('.dialog-for-buy');
const modalBuy = document.querySelector('.product_card-btn-buy');
const showBtnDialogBuy = document.querySelector('.modal-buy');
const closeBtnDialogBuy = document.querySelector('.dialog-buy_close');
showBtnDialogBuy.addEventListener("click", () => {
  dialogBuy.showModal();
});
modalBuy.addEventListener("click", () => {
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
const modalCheep = document.querySelector('.product_card-cheep');
const showBtnDialogCheep = document.querySelector('.modal-cheeper');
const closeBtnDialogCheep = document.querySelector('.dialog-cheep_close');
showBtnDialogCheep.addEventListener("click", () => {
  dialogCheep.showModal();
});
modalCheep.addEventListener("click", () => {
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
const modalReview = document.querySelector('.product-card-review');
const dialogReviewFilter = document.querySelector('.dialog-review-product-filter');
const showBtnDialogReview = document.querySelector('.modal-review');
const closeBtnDialogReview = document.querySelector('.dialog-review_close');
showBtnDialogReview.addEventListener("click", () => {
  dialogReview.showModal();
});
modalReview.addEventListener("click", () => {
  dialogReview.showModal();
});
dialogReviewFilter.addEventListener("click", () => {
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

// Counter для модального окна
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
// Counter для карточки продукта
let countProd = 1;
let counterProd = document.querySelector('.count-value-prod');
function countPlusProd() {
  countProd++;
  counterProd.innerHTML = countProd;
};
function countMinusProd() {
  if(countProd < 1) {
    countProd = 0;
  } else {
    countProd--;
  }
  counterProd.innerHTML = countProd;
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
