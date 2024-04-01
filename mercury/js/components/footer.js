window.addEventListener('DOMContentLoaded', event=>{
  const head = document.querySelector('.header').offsetHeight;
  const main = document.querySelector('.main').offsetHeight;
  const windowInnerHeight = window.innerHeight
  const body = head + main - windowInnerHeight;

  var footerMobile = function() {
    const footer=document.body.querySelector('.footer_mobile')
    if(!footer){
      return
    }if(window.scrollY < body){
      footer.classList.remove('d-none')
    }else{
      footer.classList.add('d-none')
    }
  }
  footerMobile()
  document.addEventListener('scroll',footerMobile)
})
