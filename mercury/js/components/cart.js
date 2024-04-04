// Counter product
let count = 1;
let count1 = 1;
let count2 = 1;

let counter = document.querySelector('.count-value');
let counter1 = document.querySelector('.count-value1');
let counter2 = document.querySelector('.count-value2');

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

function countPlus1() {
  count1++;
  counter1.innerHTML = count1;
};
function countMinus1() {
  if(count1 < 1) {
    count1 = 0;
  } else {
    count1--;
  }
  counter1.innerHTML = count1;
};

function countPlus2() {
  count2++;
  counter2.innerHTML = count2;
};
function countMinus2() {
  if(count2 < 1) {
    count2 = 0;
  } else {
    count2--;
  }
  counter2.innerHTML = count2;
};

// Dialog-buy
const dialogBuy = document.querySelector('.dialog-for-buy');
const showBtnDialogBuy = document.querySelector('.card_products-btn-buy');
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

// Dialog share link
const dialogShare = document.querySelector('.dialog-share-link');
const showBtnDialogShare = document.querySelector('.cart_title-btn-share');
const closeBtnDialogShare = document.querySelector('.dialog-share_close');
showBtnDialogShare.addEventListener("click", () => {
  dialogShare.showModal();
});
closeBtnDialogShare.addEventListener("click", () => {
  dialogShare.close();
});
dialogShare.addEventListener('click', (e) => {
  const dialogShare = e.currentTarget;
  const isClickOnBackDrop = e.target === dialogShare;

  if(isClickOnBackDrop) {
    dialogShare.close();
  }
})
