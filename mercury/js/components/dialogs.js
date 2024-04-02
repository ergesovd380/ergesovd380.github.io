// Dialog-prof
const dialogProf = document.querySelector('.dialog-prof');
const showBtnDialogProf = document.querySelector('.lk_blog-btns-prof');
const closeBtnDialogProf = document.querySelector('.dialog-profile_close');
showBtnDialogProf.addEventListener("click", () => {
  dialogProf.showModal();
});
closeBtnDialogProf.addEventListener("click", () => {
  dialogProf.close();
});

// Dialog-change
const dialogChange = document.querySelector('.dialog-changePass');
const showBtnDialogChange = document.querySelector('.lk_blog-btns-change');
const closeBtnDialogChange = document.querySelector('.dialog-change_close');
showBtnDialogChange.addEventListener("click", () => {
  dialogChange.showModal();
});
closeBtnDialogChange.addEventListener("click", () => {
  dialogChange.close();
});