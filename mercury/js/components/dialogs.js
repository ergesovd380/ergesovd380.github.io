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


// Dialog-project
const fileName = document.querySelector('.dialog-proj_form-file-name');
window.addEventListener('DOMContentLoaded', () => {
  fileName.classList.add('d-none');
});
function updateFileProj() {
  const fileNameText = document.querySelector('.dialog-proj_form-file-name-text');
  if (document.getElementById('import-proj-file').files.length > 0) {
    fileName.classList.remove('d-none');
    fileNameText.innerHTML = document.getElementById('import-proj-file').files[0].name;
  };
};
function deleteFileProj() {
  const fileNameText = document.querySelector('.dialog-proj_form-file-name-text');
  if (document.getElementById('import-proj-file').files.length > 0) {
    console.log('Start')
    fileName.classList.add('d-none');
    fileNameText.innerHTML = '';
    const files = document.getElementById('import-proj-file').files;
    Object.keys(files).forEach(key => delete items[key]);
  };
};


// Dialog analogue
const fileNameAnalog = document.querySelector('.dialog_analog_form-file-name');
window.addEventListener('DOMContentLoaded', () => {
  fileNameAnalog.classList.add('d-none');
});
function updateFileAnalog() {
  const fileNameText = document.querySelector('.dialog_analog_form-file-name-text');
  if (document.getElementById('import-analog-file').files.length > 0) {
    fileNameAnalog.classList.remove('d-none');
    fileNameText.innerHTML = document.getElementById('import-analog-file').files[0].name;
  };
};
function deleteFileAnalog() {
  const fileNameText = document.querySelector('.dialog-analog_form-file-name-text');
  if (document.getElementById('import-analog-file').files.length > 0) {
    console.log('Start')
    fileNameAnalog.classList.add('d-none');
    fileNameText.innerHTML = '';
    const files = document.getElementById('import-analog-file').files;
    Object.keys(files).forEach(key => delete items[key]);
  };
};