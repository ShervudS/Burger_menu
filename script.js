var bgmenu = document.querySelector('.burger-menu');
var bgline = document.querySelector('.burger-line')
var menu = document.querySelector('.menu.mob')

bgmenu.addEventListener('click', myFunction);

function myFunction() {
//   var nav = document.getElementById("nav");
  bgline.classList.toggle('activ');
  menu.classList.toggle('show');
}