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
    // Form 
(function(){
    'use strict'
    var myName = document.querySelector('#name')
    var nameErr = document.querySelector('#errName')
    var myMessage = document.querySelector('#message')
    var MessageErr = document.querySelector('#errMessage')
    var myNumber = document.querySelector('#number')
    var numberErr = document.querySelector('#errNumber')
    var myEmail = document.querySelector('#email')
    var mailErr = document.querySelector('#errMail')
    var myForm = document.querySelector('#formContact')
    var myBtn = document.querySelector('#formBtn')
    var cal = document.querySelector('#calculate')
    const spacePattern = /^\S*$/                                                                    // bosh yerin kody 
    const myEmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/             // email pochtanyn kody             
    
    //Name
    myName.addEventListener('blur', controlName)
    function controlName() {
        if(myName.value.length==0) {
            myName.classList.add('is-invalid')
            myName.classList.remove('is-valid')
            nameErr.innerHTML = 'Пишите ваше имя'
            return false
        }if(myName.value.length<3) {
            myName.classList.add('is-invalid')
            myName.classList.remove('is-valid')
            nameErr.innerHTML = 'Имя должен содержать минимум 3 буквы'
            return false
        }if(!spacePattern.test(myName.value)) {
            myName.classList.add('is-invalid')
            myName.classList.remove('is-valid')
            nameErr.innerHTML = 'Пробел нельзя'
            return false
        } else {
            myName.classList.remove('is-invalid')
            myName.classList.add('is-valid')
            nameErr.innerHTML = ''
            return true
        }
    }

    //Email
    myEmail.addEventListener('blur', controlEmail)
    function controlEmail(){
        if(myEmail.value.length==0) {
            myEmail.classList.add('is-invalid')
            myEmail.classList.remove('is-valid')
            mailErr.innerHTML = 'Ваш Email'
            return false
        } if (!myEmailPattern.test(myEmail.value)){
            myEmail.classList.add('is-invalid')
            myEmail.classList.remove('is-valid')
            mailErr.innerHTML = 'Email неправильный'
            return false 
        } else {
            myEmail.classList.remove('is-invalid')
            myEmail.classList.add('is-valid')
            mailErr.innerHTML = ''
            return true
        }
    }

    //Number 
    myNumber.addEventListener('blur', controlNumber)
    function controlNumber() {
        if(myNumber.value.length==0) {
            myNumber.classList.add('is-invalid')
            myNumber.classList.remove('is-valid')
            numberErr.innerHTML = 'Пишите ваш номер'
            return false
        }if(myNumber.value.length<5) {
            myNumber.classList.add('is-invalid')
            myNumber.classList.remove('is-valid')
            numberErr.innerHTML = 'Номкр должен состоятся минимум из 5 цифров'
            return false
        }if(!spacePattern.test(myNumber.value)) {
            myNumber.classList.add('is-invalid')
            myNumber.classList.remove('is-valid')
            numberErr.innerHTML = 'Пробел нельзя'
            return false
        } else {
            myNumber.classList.remove('is-invalid')
            myNumber.classList.add('is-valid')
            numberErr.innerHTML = ''
            return true
        }
    }

    //Message
    myMessage.addEventListener('keyup', function(){
        cal.textContent = myMessage.value.length
        if(myMessage.value.length >= 10) {
            myBtn.disabled = false
        }else{
            myBtn.disabled = true
        }
    })
    myMessage.addEventListener('blur', controlMessage)
    function controlMessage() {
        if(myMessage.value.length==0) {
            myMessage.classList.add('is-invalid')
            myMessage.classList.remove('is-valid')
            MessageErr.innerHTML = 'Пишите ваше сообщение'
            return false
        }if(myMessage.value.length<3) {
            myMessage.classList.add('is-invalid')
            myMessage.classList.remove('is-valid')
            MessageErr.innerHTML = 'Сообщение должен содержать минимум 3 буквы'
            return false
        } else {
            myMessage.classList.remove('is-invalid')
            myMessage.classList.add('is-valid')
            MessageErr.innerHTML = ''
            return true
        }
    }

    myForm.addEventListener('submit', function (e) {
        if(!myForm.checkValidity() ||
            !controlName() ||
            !controlEmail() ||
            !controlNumber() ||
            !controlMessage()
        ){
            e.preventDefault()
            e.stopPropagation()
        }
        myForm.classList.add('was-validated')
    }, false)
})()
