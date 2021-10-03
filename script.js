const btn = document.querySelector('.nav-burger-label input')
const nav = document.querySelector('.nav')
const menu = document.querySelector('.nav-container')
const menuWrapper = document.querySelector('.nav-wrapper')
const navBtnLabel = document.querySelectorAll('.nav span')
  

btn.addEventListener('click', function(e){ 
 
    if (!menu.classList.contains('nav-container-open')) {
        
        menu.classList.add('nav-container-open') 
        nav.style.left = '0rem' 
        navBtnLabel.forEach(elem => {  
            elem.style.cssText = ' font-family: Roboto; font-style: normal; font-weight: bold; font-size: 16rem; line-height: 24rem; opacity: 1'
        })
        this.parentElement.nextElementSibling.nextElementSibling.style.cssText = ' opacity: 1; backdrop-filter: blur(10px); pointer-events: auto' 
        document.body.style.overflow = 'hidden'

    } else {
        nav.style.left = '' 
        navBtnLabel.forEach(elem => {
            elem.style.cssText = ''
        })
        this.parentElement.nextElementSibling.nextElementSibling.style.cssText = '' 
        menu.classList.remove('nav-container-open')

        document.body.style.overflow = ''
    }

})

menuWrapper.addEventListener('click', function(e){
    
    menu.classList.contains('nav-container-open') ?  btn.click() : null
 
})

 
 