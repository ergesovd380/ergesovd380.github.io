    // Navbar 
window.addEventListener('DOMContentLoaded', event=>{
    var pageFirst = document.querySelector('#pageFirst').offsetHeight
    var navbarMobile=function(){
        const nCollapsible=document.body.querySelector('#mainNavbar')
        if(!nCollapsible){
            return
        }if(window.scrollY < pageFirst){
            nCollapsible.classList.remove('navbar-mobile')
        }else{
            nCollapsible.classList.add('navbar-mobile')
        }
    }
    navbarMobile()
    document.addEventListener('scroll',navbarMobile)
    const myNavbar = document.querySelector('#mainNavbar')
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target: '#mainNavbar',
            offset:74
        })
    }
})

    // OffCanvasy yapyan 0.5 sekuntdan son
function start(){
    setTimeout(closeCanvas, 500)
}
function closeCanvas(){
    document.querySelector('[data-bs-dismiss="offcanvas"]').click()
}

    // Счетчик
const time = 500;
const step = 1; 
function outNum0(num) {
    let e = document.querySelector('#out-0');
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n == num) {
              clearInterval(interval);
         }
    e.innerHTML = '+' + n;
                },
  t);
};
outNum0(200, '#out-0')
function outNum1(num) {
    let f = document.querySelector('#out-1');
    m = 0;
    let u = Math.round(time/(num/step));
    let interval = setInterval(() => {
        m = m + step;
        if(m == num) {
              clearInterval(interval);
         }
    f.innerHTML = '+' + m;
                },
  u);
};
outNum1(300, '#out-1')
function outNum2(num) {
    let g = document.querySelector('#out-2');
    o = 0;
    let v = Math.round(time/(num/step));
    let interval = setInterval(() => {
        o = o + step;
        if(o == num) {
              clearInterval(interval);
         }
    g.innerHTML = '+' + o;
                },
  v);
};
outNum2(15, '#out-2')

// servicesImg
function servicesImgGold1() {
    var imagesServices = document.querySelector('.servicesImg1')
    imagesServices.src = 'img/home/ourServices/trainGold.png'
}
function servicesImgLight1() {
    var imagesServices = document.querySelector('.servicesImg1')
    imagesServices.src = 'img/home/ourServices/trainLight.png'
}
function servicesImgGold2() {
    var imagesServices = document.querySelector('.servicesImg2')
    imagesServices.src = 'img/home/ourServices/planeGold.png'
}
function servicesImgLight2() {
    var imagesServices = document.querySelector('.servicesImg2')
    imagesServices.src = 'img/home/ourServices/planeLight.png'
}
function servicesImgGold3() {
    var imagesServices = document.querySelector('.servicesImg3')
    imagesServices.src = 'img/home/ourServices/shipGold.png'
}
function servicesImgLight3() {
    var imagesServices = document.querySelector('.servicesImg3')
    imagesServices.src = 'img/home/ourServices/shipLight.png'
}
function servicesImgGold4() {
    var imagesServices = document.querySelector('.servicesImg4')
    imagesServices.src = 'img/home/ourServices/truckGold.png'
}
function servicesImgLight4() {
    var imagesServices = document.querySelector('.servicesImg4')
    imagesServices.src = 'img/home/ourServices/truckLight.png'
}
