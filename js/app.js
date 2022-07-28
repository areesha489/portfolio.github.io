let hamberger = document.getElementByClassName('.hamberger');
let times = document.getElementByClassName('times');
let mobileNav = document.getElementByClassName('.mobile-nav');

hamberger.addEventListener('click', function(){
 mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
