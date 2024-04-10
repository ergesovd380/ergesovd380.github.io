document.addEventListener('DOMContentLoaded', () => {
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
