// Фильтр цены
const rangeSlider = document.getElementById('rangeSlider');
if(rangeSlider) {
  noUiSlider.create(rangeSlider, {
      start: [80, 600],
      connect: true,
      range: {
          'min': [0],
          'max': [1000]
      }
  });

  const input0 = document.getElementById('catalog_filters-price-input0');
  const input1 = document.getElementById('catalog_filters-price-input1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value)
    });
  });
}
// Фильтр цены mobile
const rangeSliderMobile = document.getElementById('rangeSliderMobile');
if(rangeSliderMobile) {
  noUiSlider.create(rangeSliderMobile, {
      start: [80, 600],
      connect: true,
      range: {
          'min': [0],
          'max': [1000]
      }
  });

  const input0 = document.getElementById('catalog_filters-price-mob0');
  const input1 = document.getElementById('catalog_filters-price-mob1');
  const inputs = [input0, input1];

  rangeSliderMobile.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSliderMobile.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value)
    });
  });
}

// Tabs slider
new Swiper('.tabs-slider', {
  breakpoints: {
    300: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 10,
      spaceBetween: 30,
    }
  }
})
// Tabs body slider
new Swiper('.tabs_body-slider', {
  breakpoints: {
    300: {
      slidesPerView: 3.3,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 20,
    }
  },
  freeMode: true,
})

// Скрыть фильтры
function showMore() {
  const listItems = document.querySelectorAll('.catalog_filters-brands-li');
  const listItemsMob = document.querySelectorAll('.catalog_filters-brands-mob-li');
  for (let i = 0; i < listItems.length; i++) {
    if (i >= 6 && listItems[i].style.display !== 'none') {
      listItems[i].style.display = 'none';
    } else {
      listItems[i].style.display = '';
    }
  }

  for (let m = 0; m < listItemsMob.length; m++) {
    if (m >= 6 && listItemsMob[m].style.display !== 'none') {
      listItemsMob[m].style.display = 'none';
    } else {
      listItemsMob[m].style.display = '';
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  showMore()

  // Проверка на кол-во фото в модальном окне
  const imagesModal = document.querySelectorAll('.dialog-card_images-small div');
  if(imagesModal.length > 5) {
    for(let m=5; m < imagesModal.length; m++) {
      imagesModal[m].remove();
    }
  }
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
