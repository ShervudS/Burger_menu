var bgmenu = document.querySelector('.burger-menu');
var bgline = document.querySelector('.burger-line')
var menu = document.querySelector('.menu.mob');
var menuitem = document.querySelector(".mob");

bgmenu.addEventListener('click', menus);
function menus() {
  bgline.classList.toggle('activ');
  menu.classList.toggle('show');
};

menuitem.addEventListener('click', closemenu);
function closemenu(){
  menu.classList.remove("show");
};