const menuButton = document.querySelector('div.menu');
const menuClose = document.querySelector('li.close');
const menuMobile = document.querySelector('.menu-mobile')
menuButton.addEventListener('click', function(){
menuMobile.classList.toggle('active');
console.log('dziala')
});

menuClose.addEventListener('click', function(){
menuMobile.classList.toggle('active');
console.log('dziala')
});
